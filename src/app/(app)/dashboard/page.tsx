// "use client";

// import React, { useState } from "react";

// interface DashboardProps {
//   role: "parent" | "provider";
// }

// const Dashboard : React.FC<DashboardProps> = ({ role })=> {
//   const [activeTab, setActiveTab] = useState("home");

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div className="h-screen w-64 bg-gray-800 p-6 text-white">
//         <h2 className="mb-6 text-2xl">
//           {role === "parent" ? "Parent Dashboard" : "Provider Dashboard"}
//         </h2>
//         <ul>
//           <li
//             className="mb-4 cursor-pointer"
//             onClick={() => setActiveTab("home")}
//           >
//             Home
//           </li>
//           <li
//             className="mb-4 cursor-pointer"
//             onClick={() => setActiveTab("profile")}
//           >
//             Profile
//           </li>
//           <li
//             className="mb-4 cursor-pointer"
//             onClick={() => setActiveTab("notifications")}
//           >
//             Notifications
//           </li>
//           <li
//             className="mb-4 cursor-pointer"
//             onClick={() => setActiveTab("messages")}
//           >
//             Messages
//           </li>
//         </ul>
//       </div>

//       {/* Main content */}
//       <div className="flex-1 p-6">
//         {activeTab === "home" && (
//           <div>
//             {role === "parent" ? (
//               <div>
//                 <h3 className="text-xl">Welcome, Parent</h3>
//                 <div className="mt-4">
//                   <h4>Children List</h4>
//                   {/* Display children list */}
//                 </div>
//                 <div className="mt-4">
//                   <h4>Recent Activities</h4>
//                   {/* Display recent child activities */}
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 <h3 className="text-xl">Welcome, Provider</h3>
//                 <div className="mt-4">
//                   <h4>Client List</h4>
//                   {/* Display clients */}
//                 </div>
//                 <div className="mt-4">
//                   <h4>Upcoming Appointments</h4>
//                   {/* Display appointments */}
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {activeTab === "profile" && (
//           <div>
//             <h3>Profile Settings</h3>
//             {/* Profile settings form */}
//           </div>
//         )}

//         {activeTab === "notifications" && (
//           <div>
//             <h3>Notifications</h3>
//             {/* List of notifications */}
//           </div>
//         )}

//         {activeTab === "messages" && (
//           <div>
//             <h3>Messages</h3>
//             {/* Message list */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import Link from "next/link";

import { Button } from "@/components/ui/button";

const Dashboard = () => {
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

export default Dashboard;
