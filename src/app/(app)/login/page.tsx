import Link from "next/link";

import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="absolute left-10 top-10">
        <Link href="/" className="text-xl text-gray-900 hover:text-gray-600">
          &larr; Back to Home Page
        </Link>
      </div>
      <h1 className="mb-28 text-center text-5xl font-extrabold text-gray-900">
        Welcome to Care Nest
      </h1>
      <div className="flex w-full max-w-md flex-col space-y-6 rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-semibold">
          Sign in to your account
        </h2>
        <LoginForm />
        <Link href="/register">
          <p className="text-sm font-medium text-gray-900 hover:text-blue-500">
            Need an account? Register
          </p>
        </Link>
      </div>
    </div>
  );
}
