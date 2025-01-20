// "use client";
// import { useState } from "react";

// import LoginForm from "@/components/LoginForm";
// import RegisterForm from "@/components/RegisterForm";
// import { Button } from "@/components/ui/button";
// import LoginPage from "./login/page";
// import RegisterPage from "./register/page";

// export default function Home() {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100 px-6 py-12 sm:px-8 lg:px-10">
//       <div className="w-full max-w-lg space-y-8">
//         <h1 className="mt-12 mb-12 text-center text-5xl font-extrabold text-gray-900">
//           Welcome to Care Nest
//         </h1>

//         <div>
//           <h2 className="text-center text-2xl font-semibold text-gray-900">
//             {isLogin ? "Sign in to your account" : "Create a new account"}
//           </h2>
//         </div>

//         {/* Login or Register Form */}
//         <div className="mt-8">{isLogin ? <LoginPage /> : <RegisterPage />}</div>

//         {/* Toggle between Login and Register */}
//         <div className="mt-6 text-center">
//           <Button
//             type="button"
//             variant="link"
//             onClick={() => setIsLogin(!isLogin)}
//             className="text-sm font-medium hover:text-blue-500"
//           >
//             {isLogin
//               ? "Need an account? Register"
//               : "Already have an account? Login"}
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

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
