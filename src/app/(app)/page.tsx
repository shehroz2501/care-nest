import Link from "next/link";

import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-6 text-4xl font-bold">Welcome to Care Nest</h1>
        <p className="mb-8 text-xl">Please choose an option to get started.</p>
        <div className="flex flex-col space-y-10">
          <Link href="/login">
            <Button className="w-full">Login</Button>
          </Link>
          <Link href="/register">
            <Button className="w-full">Register</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
