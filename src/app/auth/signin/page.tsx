import Link from "next/link";

export default function SignInPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h1 className="text-2xl font-bold mn-2 text-gray-900">Sign In</h1>
                <p className="text-sm text-gray-600 mb-6">Welcome back to the Enterprise Portal.</p>

                {error && (
                    <div className="mb-4 p-3 bg-red-50 text-red-600  text-sm rounded-lg border border-red-200"></div>
                )}

                <form onSubmit={} className="space-y-4">
                    <div>
                        <label className="block text-sm font font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="xanthreign@enterprise.com"/>
                    </div>
                    <div>
                        <label className="block text-sm font font-medium text-gray-700 mb-1">Password/label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="************"/>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-600 text-white py-2 rounded font-medium text-sm hover:bg-blue-700 disabled:opacity-50 transition-colors">

                            { isLoading ? "Signing in..." : "Sign in" }
                        </button>
                </form>

                <p className="tet-sm text-center text-gray-600 mt-6">
                    Don't have an account?{" "}
                    <Link href="/auth/signup" className="text-blue-600 font-medium hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </main>
    )
}