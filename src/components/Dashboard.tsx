"use client";

import type React from "react";
import { useState } from "react";

interface DashboardProps {
  role: "parent" | "provider";
}

const Dashboard: React.FC<DashboardProps> = ({ role }) => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="h-screen w-64 bg-gray-800 p-6 text-white">
        <h2 className="mb-6 text-2xl">
          {role === "parent" ? "Parent Dashboard" : "Provider Dashboard"}
        </h2>
        <ul>
          <li
            className="mb-4 cursor-pointer"
            onClick={() => setActiveTab("home")}
          >
            Home
          </li>
          <li
            className="mb-4 cursor-pointer"
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </li>
          <li
            className="mb-4 cursor-pointer"
            onClick={() => setActiveTab("notifications")}
          >
            Notifications
          </li>
          <li
            className="mb-4 cursor-pointer"
            onClick={() => setActiveTab("messages")}
          >
            Messages
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        {activeTab === "home" && (
          <div>
            {role === "parent" ? (
              <div>
                <h3 className="text-xl">Welcome, Parent</h3>
                <div className="mt-4">
                  <h4>Children List</h4>
                  {/* Display children list */}
                  <ul>
                    <li>Child 1</li>
                    <li>Child 2</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4>Recent Activities</h4>
                  {/* Display recent child activities */}
                  <ul>
                    <li>Activity 1</li>
                    <li>Activity 2</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl">Welcome, Provider</h3>
                <div className="mt-4">
                  <h4>Client List</h4>
                  {/* Display clients */}
                  <ul>
                    <li>Client 1</li>
                    <li>Client 2</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4>Upcoming Appointments</h4>
                  {/* Display appointments */}
                  <ul>
                    <li>Appointment 1</li>
                    <li>Appointment 2</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "profile" && (
          <div>
            <h3>Profile Settings</h3>
            {/* Profile settings form */}
            <form>
              <input
                type="text"
                placeholder="Name"
                className="mt-2 rounded border p-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="mt-2 rounded border p-2"
              />
              <button
                type="submit"
                className="mt-2 rounded bg-blue-500 p-2 text-white"
              >
                Save
              </button>
            </form>
          </div>
        )}

        {activeTab === "notifications" && (
          <div>
            <h3>Notifications</h3>
            {/* List of notifications */}
            <ul>
              <li>Notification 1</li>
              <li>Notification 2</li>
            </ul>
          </div>
        )}

        {activeTab === "messages" && (
          <div>
            <h3>Messages</h3>
            {/* Message list */}
            <ul>
              <li>Message 1</li>
              <li>Message 2</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
