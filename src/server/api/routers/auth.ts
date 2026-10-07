import { z } from "zod/v4";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import bcrypt from "bcryptjs";

export const authRouter = createTRPCRouter({
    register: publicProcedure
        .input(
            z.object({
                name: z.string().min(1, "Name is required"),
                email: z.string().email("Invalid email address"),
                password: z.string().min(6, "Password must be at least 6 characters."),
            })
        )
        .mutation(async ({ ctx, input }) => {
            // 1. check if the user exists
            const existingUser = await ctx.db.user.findUnique({
                where: {email: input.email}
            })

            if (existingUser) {
                throw new TRPCError({
                    code: "CONFLICT",
                    message: "An acount with this email already exists."
                })
            }

            // 2. hash the password
            const hashedPassword = await bcrypt.hash(input.password, 10)

            // 3. create the user
            const user = await ctx.db.user.create({
                data: {
                    name: input.name,
                    email: input.email,
                    password: hashedPassword,
                }
            })

            return { success: true, userId: user.id }
        })
})