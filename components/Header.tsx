"use client";

import Link from "next/link";
import { Bell, Settings, User, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export default function Header({
  onToggleSidebar,
  isSidebarOpen,
}: HeaderProps) {
  // const [showNotifications, setShowNotifications] = useState(false);

  // const notifications = [
  //   { id: 1, message: "New appointment scheduled", time: "2 min ago" },
  //   { id: 2, message: "Patient record updated", time: "5 min ago" },
  //   { id: 3, message: "Inventory low alert", time: "10 min ago" },
  //   { id: 4, message: "Payment received", time: "15 min ago" },
  // ];

  return (
    <header className="fixed top-0 left-0 right-0 z-1 bg-white px-4 mt-2 lg:px-8 py-4 flex items-center justify-between">
      {/* Mobile menu button and Logo */}
      <div className="flex items-center col-gap-6 lg:gap-9">
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-200"
          >
            {isSidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="items-center justify-center">
              <img src="/logo.png" alt="" />
            </div>
          </div>
        </div>
        <nav className="hidden xl:flex items-center space-x-6">
          <div className="flex flex-wrap gap-4">
            <Link
              href="/inventory/add"
              className="w-44 text-[#144A6C] text-center font-regular transition-colors whitespace-nowrap bg-[#FAFAFA] px-4 py-2 rounded-lg shadow-sm border border-[#F0F0F0]"
            >
              Add Inventory
            </Link>
            <Link
              href="/patients/add"
              className="w-44 text-center text-[#144A6C] font-regular transition-colors whitespace-nowrap bg-[#FAFAFA] px-4 py-2 rounded-lg shadow-sm border border-[#F0F0F0]"
            >
              Add Patient
            </Link>
            <Link
              href="/doctors/add"
              className="w-44 text-center text-[#144A6C] font-regular transition-colors whitespace-nowrap bg-[#FAFAFA] px-4 py-2 rounded-lg shadow-sm border border-[#F0F0F0]"
            >
              Add Doctor
            </Link>
            <Link
              href="/clinics/add"
              className="w-44 text-center text-[#144A6C] font-regular transition-colors whitespace-nowrap bg-[#FAFAFA] px-4 py-2 rounded-lg shadow-sm border border-[#F0F0F0]"
            >
              Add Clinic
            </Link>
          </div>
        </nav>
      </div>
      {/* Right side actions */}
      <div className="flex items-center space-x-2 lg:space-x-4">
        {/* Settings - Hidden on small screens */}
        <Link
          href="/settings"
          className="w-none lg:w-[44] text-[#144A6C] text-center font-regular transition-colors whitespace-nowrap bg-[#FAFAFA] px-4 py-2 rounded-lg shadow-sm border border-[#F0F0F0] md:flex items-center space-x-2 text-center justify-center"
        >
          <Settings className="w-4 h-4" />
          <span className="hidden lg:block">Settings</span>
        </Link>

        {/* Notification Dropdown */}
        <div className="relative">
          <button
            // onClick={() => setShowNotifications(!showNotifications)}
            className="w-auto lg:w-[44] text-[#144A6C] text-center font-regular transition-colors whitespace-nowrap bg-[#FAFAFA] px-4 py-2 rounded-lg shadow-sm border border-[#F0F0F0] md:flex items-center space-x-2 text-center justify-center"
          >
            <Bell className="w-4 h-4" />
            <span className="hidden lg:block">Notification</span>
            <ChevronDown className="w-3 h-3 hidden lg:block" />
          </button>

          {/* {showNotifications && (
            <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800">Notifications</h3>
              </div>
            
              <div className="p-3 border-t border-gray-200">
                <Link
                  href="/notifications"
                  className="text-sm text-[#144A6C] hover:text-blue-800 text-center"
                >
                  View all notifications
                </Link>
              </div>
            </div>
          )} */}
        </div>

        {/* Avatar */}
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <img src="/admin.png" alt="" />
        </div>
      </div>
    </header>
  );
}
