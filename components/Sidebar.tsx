"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Building,
  UserCheck,
  Calendar,
  Package,
  Stethoscope,
  DollarSign,
  FileText,
  HelpCircle,
  CreditCard,
  LogOut,
} from "lucide-react";
import { useState } from "react";

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState("Doctors");

  const sidebarItems: SidebarItem[] = [
    {
      icon: <LayoutDashboard className="w-5 h-5" />,
      label: "Dashboard",
      href: "/",
    },
    { icon: <Users className="w-5 h-5" />, label: "Doctors", href: "/doctors" },
    
    {
      icon: <CreditCard className="w-5 h-5" />,
      label: "Billing",
      href: "/billing",
    },
    {
      icon: <Building className="w-5 h-5" />,
      label: "Clinics",
      href: "/clinic",
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      label: "Patient",
      href: "/patient",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Calendar",
      href: "/calendar",
    },
    {
      icon: <Package className="w-5 h-5" />,
      label: "Inventory",
      href: "/inventory",
    },
    {
      icon: <Stethoscope className="w-5 h-5" />,
      label: "Procedure",
      href: "/procedure",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      label: "Financials",
      href: "/financials",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      label: "Quotations",
      href: "/quotations",
    },
    // Additional items can be uncommented later
  ];

  const handleItemClick = (label: string) => {
    setActiveItem(label);
    onClose(); // Close sidebar on mobile after clicking
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-50 lg:z-auto md:bg-[#CEE5E433]  bg-white 
        w-64 flex flex-col h-full px-4 py-6 lg:rounded-l-lg
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Welcome message */}
        <div className="mb-10 mt-4">
          <h2 className="text-2xl font-regular text-[#144A6C]">
            Welcome Back !
          </h2>
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <div className="space-y-1">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => handleItemClick(item.label)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors
    ${
      isActive
        ? "bg-[#144A6C] text-white font-regular pl-6 [&>svg]:w-6 [&>svg]:h-6"
        : "text-gray-700 hover:bg-gray-100"
    }
  `}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom section */}
        <div className="mt-8 space-y-1 flex-shrink-0">
          {/* <Link
            href="/support"
            onClick={onClose}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:bg-gray-200 transition-colors"
          >
            <HelpCircle className="w-5 h-5" />
            <span className="font-medium">Support</span>
          </Link> */}

          <Link
            href="/logout"
            onClick={onClose}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:bg-gray-200 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Log out</span>
          </Link>
          <div className="bg-[#CEE5E4] rounded-lg p-4 mt-4 flex-shrink-0">
            <div className="mb-3">
              <h3 className="font-medium text-[#144A6C] mb-1">Used space</h3>
              <p className="text-sm text-[#144A6C]">
                Your team has used 80% of your available space. Need more?
              </p>
            </div>
            <div className="mb-3 w-full">
              <div className="w-full bg-[#88C8CE] rounded-full h-2 overflow-hidden">
                <div
                  className="bg-white h-2 rounded-full transition-all duration-500 ease-in-out"
                  style={{ width: "50%" }}
                ></div>
              </div>
              <div className="text-right text-sm text-[#344054] mt-1">50%</div>
            </div>
            <Link
              href="/upgrade"
              onClick={onClose}
              className="text-[#144A6C] font-medium text-1xl"
            >
              Upgrade plan
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
