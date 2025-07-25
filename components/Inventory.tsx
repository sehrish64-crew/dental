"use client";

import { Search, Plus } from "lucide-react";
interface Doctor {
    id: string;
    fullName: string;
    specialty: string;
    phone: string;
    email: string;
    address: string;
    appointments: string;
    patients: string;
    packacge: string;
}
import { useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import flatpickr from "flatpickr";

export default function Patient() {
    const doctors: Doctor[] = [
        {
            id: "738",
            fullName: "Maria Thompson",
            specialty: "Square",
            phone: "600",
            email: "Materials & Instruments",
            address: "600",
            appointments: "Stock Used",
            patients: "$169.43",
            packacge: "$169.43",
        },
          {
            id: "738",
            fullName: "Maria Thompson",
            specialty: "Square",
            phone: "600",
            email: "Materials & Instruments",
            address: "600",
            appointments: "Stock Used",
            patients: "$169.43",
            packacge: "$169.43",
        },
          {
            id: "738",
            fullName: "Maria Thompson",
            specialty: "Square",
            phone: "600",
            email: "Materials & Instruments",
            address: "600",
            appointments: "Stock Used",
            patients: "$169.43",
            packacge: "$169.43",
        },
          {
            id: "738",
            fullName: "Maria Thompson",
            specialty: "Square",
            phone: "600",
            email: "Materials & Instruments",
            address: "600",
            appointments: "Stock Used",
            patients: "$169.43",
            packacge: "$169.43",
        },
          {
            id: "738",
            fullName: "Maria Thompson",
            specialty: "Square",
            phone: "600",
            email: "Materials & Instruments",
            address: "600",
            appointments: "Stock Used",
            patients: "$169.43",
            packacge: "$169.43",
        },
          {
            id: "738",
            fullName: "Maria Thompson",
            specialty: "Square",
            phone: "600",
            email: "Materials & Instruments",
            address: "600",
            appointments: "Stock Used",
            patients: "$169.43",
            packacge: "$169.43",
        },
          {
            id: "738",
            fullName: "Maria Thompson",
            specialty: "Square",
            phone: "600",
            email: "Materials & Instruments",
            address: "600",
            appointments: "Stock Used",
            patients: "$169.43",
            packacge: "$169.43",
        },
          {
            id: "738",
            fullName: "Maria Thompson",
            specialty: "Square",
            phone: "600",
            email: "Materials & Instruments",
            address: "600",
            appointments: "Stock Used",
            patients: "$169.43",
            packacge: "$169.43",
        },  {
            id: "738",
            fullName: "Maria Thompson",
            specialty: "Square",
            phone: "600",
            email: "Materials & Instruments",
            address: "600",
            appointments: "Stock Used",
            patients: "$169.43",
            packacge: "$169.43",
        },
          {
            id: "738",
            fullName: "Maria Thompson",
            specialty: "Square",
            phone: "600",
            email: "Materials & Instruments",
            address: "600",
            appointments: "Stock Used",
            patients: "$169.43",
            packacge: "$169.43",
        },
          {
            id: "738",
            fullName: "Maria Thompson",
            specialty: "Square",
            phone: "600",
            email: "Materials & Instruments",
            address: "600",
            appointments: "Stock Used",
            patients: "$169.43",
            packacge: "$169.43",
        },
          {
            id: "738",
            fullName: "Maria Thompson",
            specialty: "Square",
            phone: "600",
            email: "Materials & Instruments",
            address: "600",
            appointments: "Stock Used",
            patients: "$169.43",
            packacge: "$169.43",
        },

          {
            id: "738",
            fullName: "Maria Thompson",
            specialty: "Square",
            phone: "600",
            email: "Materials & Instruments",
            address: "600",
            appointments: "Stock Used",
            patients: "$169.43",
            packacge: "$169.43",
        },  {
            id: "738",
            fullName: "Maria Thompson",
            specialty: "Square",
            phone: "600",
            email: "Materials & Instruments",
            address: "600",
            appointments: "Stock Used",
            patients: "$169.43",
            packacge: "$169.43",
        },
          {
            id: "738",
            fullName: "Maria Thompson",
            specialty: "Square",
            phone: "600",
            email: "Materials & Instruments",
            address: "600",
            appointments: "Stock Used",
            patients: "$169.43",
            packacge: "$169.43",
        },
          {
            id: "738",
            fullName: "Maria Thompson",
            specialty: "Square",
            phone: "600",
            email: "Materials & Instruments",
            address: "600",
            appointments: "Stock Used",
            patients: "$169.43",
            packacge: "$169.43",
        },
          {
            id: "738",
            fullName: "Maria Thompson",
            specialty: "Square",
            phone: "600",
            email: "Materials & Instruments",
            address: "600",
            appointments: "Stock Used",
            patients: "$169.43",
            packacge: "$169.43",
        },
          {
            id: "738",
            fullName: "Maria Thompson",
            specialty: "Square",
            phone: "600",
            email: "Materials & Instruments",
            address: "600",
            appointments: "Stock Used",
            patients: "$169.43",
            packacge: "$169.43",
        },
          {
            id: "738",
            fullName: "Maria Thompson",
            specialty: "Square",
            phone: "600",
            email: "Materials & Instruments",
            address: "600",
            appointments: "Stock Used",
            patients: "$169.43",
            packacge: "$169.43",
        },  {
            id: "738",
            fullName: "Maria Thompson",
            specialty: "Square",
            phone: "600",
            email: "Materials & Instruments",
            address: "600",
            appointments: "Stock Used",
            patients: "$169.43",
            packacge: "$169.43",
        },


    ];
    const [searchTerm, setSearchTerm] = useState("");
    const filteredDoctors = doctors.filter((doctor) =>
        doctor.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const [isOpen, setIsOpen] = useState(false);
    const [ModalAnimation, setModalAnimation] = useState(false);
    const {
        watch,
        formState: { errors },
    } = useForm();

    flatpickr("#datepicker", {
        dateFormat: "Y-m-d", // or any other format
    });

    return (
        <div className="flex flex-col h-full bg-white lg:rounded-r-lg">
            {/* Header - Same background as sidebar */}
            <div className="set-header pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 flex-shrink-0 lg:rounded-tr-lg">
                <h1 className="text-3xl font-regular text-[#144A6C]">Inventory</h1>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                    <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280]" />
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="text-[#6B7280] pl-10 pr-6 py-2 h-10 rounded-md focus:outline-none focus:ring-2 focus:[#144A6C] w-full sm:w-64 bg-white text-sm"
                        />
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                setIsOpen(true);
                                setTimeout(() => setModalAnimation(true), 10);
                            }}
                            className="bg-[#144A6C] pl-4 pr-6 py-2 text-white flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap"
                        >
                            <Plus className="w-6 h-6 text-white" />
                            <span className="text-base font-regular">Inventory</span>
                        </button>

                        {isOpen && (
                            <div
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="dialog-title"
                                className="relative z-10"
                            >
                                {/* <div className="fixed inset-0 bg-gradient-to-br from-[#144A6C]/60 to-[#144A6C]/20 backdrop-blur-md transition-opacity" /> */}
                                <div className="fixed inset-0 bg-[#000]/60 backdrop-blur-md transition-opacity overflow-y-auto">
                                    <div className="flex items-center justify-center min-h-screen px-4 py-8 text-center">
                                        {/* Background overlay */}
                                        <div
                                            className="fixed inset-0 transition-opacity"
                                            aria-hidden="true"
                                        >
                                            <div className="absolute inset-0"></div>
                                        </div>
                                        {/* Modal panel */}
                                        <div
                                            className={`inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 
                        sm:align-middle w-full max-w-4xl mx-auto 
              ${ModalAnimation ? "scale-100 skew-y-0" : "scale-0 skew-y-6"}
              duration-500 ease-out
            `}
                                        >
                                            <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-8 sm:pb-6">
                                                <div className="sm:flex sm:items-start">
                                                    <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                                                        <div className="flex gap-1 border-b border-[#E5E7EB] dark:border-gray-600 pb-4 w-100">
                                                            <div className="user-icon">
                                                                <svg
                                                                    width={44}
                                                                    height={44}
                                                                    viewBox="0 0 44 44"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <rect
                                                                        width={44}
                                                                        height={44}
                                                                        rx={22}
                                                                        fill="#F5FAFA"
                                                                    />
                                                                    <rect
                                                                        x="0.5"
                                                                        y="0.5"
                                                                        width={43}
                                                                        height={43}
                                                                        rx="21.5"
                                                                        stroke="url(#paint0_linear_0_7879)"
                                                                        strokeOpacity="0.3"
                                                                    />
                                                                    <path
                                                                        d="M14.5 29.5H15.3333M29.5 29.5H28.6667M15.3333 29.5V17.7C15.3333 16.5799 15.3333 16.0198 15.5513 15.592C15.7431 15.2157 16.049 14.9097 16.4254 14.718C16.8532 14.5 17.4132 14.5 18.5333 14.5H22.1333C23.2534 14.5 23.8135 14.5 24.2413 14.718C24.6176 14.9097 24.9236 15.2157 25.1153 15.592C25.3333 16.0198 25.3333 16.5799 25.3333 17.7V18.6667M15.3333 29.5H18.6667M25.3333 29.5V18.6667M25.3333 29.5H28.6667M25.3333 29.5H22M25.3333 18.6667H27.0667C27.6267 18.6667 27.9067 18.6667 28.1207 18.7757C28.3088 18.8715 28.4618 19.0245 28.5577 19.2127C28.6667 19.4266 28.6667 19.7066 28.6667 20.2667V29.5M20.3333 17.8333V21.1667M18.6667 19.5H22M18.6667 29.5V26.1C18.6667 25.5399 18.6667 25.2599 18.7757 25.046C18.8715 24.8578 19.0245 24.7049 19.2127 24.609C19.4266 24.5 19.7066 24.5 20.2667 24.5H20.4C20.9601 24.5 21.2401 24.5 21.454 24.609C21.6422 24.7049 21.7951 24.8578 21.891 25.046C22 25.2599 22 25.5399 22 26.1V29.5M18.6667 29.5H22"
                                                                        stroke="#144A6C"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                    />
                                                                    <defs>
                                                                        <linearGradient
                                                                            id="paint0_linear_0_7879"
                                                                            x1={22}
                                                                            y1={0}
                                                                            x2={22}
                                                                            y2={44}
                                                                            gradientUnits="userSpaceOnUse"
                                                                        >
                                                                            <stop stopColor="white" />
                                                                            <stop
                                                                                offset={1}
                                                                                stopColor="white"
                                                                                stopOpacity={0}
                                                                            />
                                                                        </linearGradient>
                                                                    </defs>
                                                                </svg>
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <h3 className="text-lg font-regular text-[#144A6C] text-start">
                                                                   Inventory
                                                                </h3>
                                                                <span className="text-[#A1A5AA] font-regular">
                                                                    Provide details to add a new Inventory
                                                                </span>
                                                            </div>
                                                            <hr />
                                                        </div>
                                                        <form className="w-full max-w-4xl mx-auto mt-5">
                                                            <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                                    <label
                                                                        className="text-[#757575]"
                                                                        htmlFor="grid-address"
                                                                    >
                                                                       Material Name
                                                                    </label>
                                                                    <input
                                                                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                                                                        id="grid-address"
                                                                        type="text"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                    <label
                                                                        className="text-[#757575]"
                                                                        htmlFor="grid-address"
                                                                    >
                                                                        Package Quantity	
                                                                    </label>
                                                                    <input
                                                                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                                                                        id="grid-address"
                                                                        type="text"
                                                                    />
                                                                </div>

                                                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                    <label
                                                                        className="text-[#757575]"
                                                                        htmlFor="grid-address"
                                                                    >
                                                                        Cost Type
                                                                    </label>
                                                                    <input
                                                                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                                                                        id="grid-address"
                                                                        type="number"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                    <label
                                                                        className="text-[#757575]"
                                                                        htmlFor="grid-address"
                                                                    >
                                                                       Total Stock	
                                                                    </label>
                                                                    <input
                                                                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                                                                        
                                                                        type="text"
                                                                    />
                                                                </div>

                                                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                    <label
                                                                        className="text-[#757575]"
                                                                        htmlFor="grid-address"
                                                                    >
                                                                       Stock Used
                                                                    </label>
                                                                    <input
                                                                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                                                                        id="grid-address"
                                                                        type="number"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="bg-white dark:bg-gray-800 gap-2 py-3 sm:flex sm:flex-row-reverse border-t border-[#E5E7EB]  mt-5">
                                                    <button
                                                        type="button"
                                                        className="bg-[#144A6C] pl-4 pr-4 py-2 text-white flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap justify-center text-center"
                                                        onClick={() => {
                                                            setIsOpen(false);
                                                            setModalAnimation(false);
                                                        }}
                                                    >
                                                       Inventory
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="bg-[#fff] pl-4 pr-4 py-2 text-[#144A6C] flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap justify-center text-center border border-[#EBEBEB]"
                                                        onClick={() => {
                                                            setTimeout(() => {
                                                                setIsOpen(false);
                                                            }, 500);
                                                            setModalAnimation(false);
                                                        }}
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Table - White background, scrollable */}
            <div className="flex-1 overflow-auto  bg-[#CEE5E433]">
                {/* Desktop Table */}
                <div className="">
                    <div className="card h-[calc(100vh-235px)] flex flex-col">
                        <div className="card-body flex-1 flex flex-col overflow-hidden">
                            <div className="w-full overflow-x-auto">
                                <table className="min-w-full">
                                    <thead className="bg-gray-50 sticky top-0">
                                        <tr className="pt-4 pr-8 pb-3 pl-8 rounded-bl-lg">
                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                ID No
                                            </th>
                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                Material Name
                                            </th>
                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                Unit
                                            </th>
                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                Package Quantity
                                            </th>
                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                Cost Type
                                            </th>
                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                Total Stock
                                            </th>
                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                Stock Used
                                            </th>
                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                Total Cost
                                            </th>
                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                Total Package Cost (inc. VAT)
                                            </th>

                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                <svg
                                                    width={24}
                                                    height={25}
                                                    viewBox="0 0 24 25"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M11.6248 11.7128H12.3748M11.6248 12.4628H12.3748M11.6248 4.71283H12.3748M11.6248 5.46283H12.3748M11.6248 18.7128H12.3748M11.6248 19.4628H12.3748M4.62476 11.7128H5.37476M4.62476 12.4628H5.37476M4.62476 4.71283H5.37476M4.62476 5.46283H5.37476M4.62476 18.7128H5.37476M4.62476 19.4628H5.37476M18.6248 11.7128H19.3748M18.6248 12.4628H19.3748M18.6248 4.71283H19.3748M18.6248 5.46283H19.3748M18.6248 18.7128H19.3748M18.6248 19.4628H19.3748M13 12.0879C13 12.6402 12.5523 13.0879 12 13.0879C11.4477 13.0879 11 12.6402 11 12.0879C11 11.5356 11.4477 11.0879 12 11.0879C12.5523 11.0879 13 11.5356 13 12.0879ZM13 5.08789C13 5.64018 12.5523 6.08789 12 6.08789C11.4477 6.08789 11 5.64018 11 5.08789C11 4.53561 11.4477 4.08789 12 4.08789C12.5523 4.08789 13 4.53561 13 5.08789ZM13 19.0879C13 19.6402 12.5523 20.0879 12 20.0879C11.4477 20.0879 11 19.6402 11 19.0879C11 18.5356 11.4477 18.0879 12 18.0879C12.5523 18.0879 13 18.5356 13 19.0879ZM6 12.0879C6 12.6402 5.55229 13.0879 5 13.0879C4.44772 13.0879 4 12.6402 4 12.0879C4 11.5356 4.44772 11.0879 5 11.0879C5.55229 11.0879 6 11.5356 6 12.0879ZM6 5.08789C6 5.64018 5.55229 6.08789 5 6.08789C4.44772 6.08789 4 5.64018 4 5.08789C4 4.53561 4.44772 4.08789 5 4.08789C5.55229 4.08789 6 4.53561 6 5.08789ZM6 19.0879C6 19.6402 5.55229 20.0879 5 20.0879C4.44772 20.0879 4 19.6402 4 19.0879C4 18.5356 4.44772 18.0879 5 18.0879C5.55229 18.0879 6 18.5356 6 19.0879ZM20 12.0879C20 12.6402 19.5523 13.0879 19 13.0879C18.4477 13.0879 18 12.6402 18 12.0879C18 11.5356 18.4477 11.0879 19 11.0879C19.5523 11.0879 20 11.5356 20 12.0879ZM20 5.08789C20 5.64018 19.5523 6.08789 19 6.08789C18.4477 6.08789 18 5.64018 18 5.08789C18 4.53561 18.4477 4.08789 19 4.08789C19.5523 4.08789 20 4.53561 20 5.08789ZM20 19.0879C20 19.6402 19.5523 20.0879 19 20.0879C18.4477 20.0879 18 19.6402 18 19.0879C18 18.5356 18.4477 18.0879 19 18.0879C19.5523 18.0879 20 18.5356 20 19.0879Z"
                                                        stroke="#144A6C"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-[#EAECF0]">
                                        {filteredDoctors.length === 0 ? (
                                            <tr>
                                                <td className="text-center py-8 text-gray-400 text-sm col-span-4">
                                                    <div className="flex flex-col items-center justify-center">
                                                        <svg
                                                            className="w-10 h-10 text-gray-300 mb-2"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                                            <g
                                                                id="SVGRepo_tracerCarrier"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <g id="SVGRepo_iconCarrier">
                                                                {" "}
                                                                <g id="style=stroke">
                                                                    {" "}
                                                                    <g id="error-box">
                                                                        {" "}
                                                                        <path
                                                                            id="vector (Stroke)"
                                                                            fillRule="evenodd"
                                                                            clipRule="evenodd"
                                                                            d="M1.25 8C1.25 4.27208 4.27208 1.25 8 1.25H16C19.7279 1.25 22.75 4.27208 22.75 8V16C22.75 19.7279 19.7279 22.75 16 22.75H8C4.27208 22.75 1.25 19.7279 1.25 16V8ZM8 2.75C5.10051 2.75 2.75 5.10051 2.75 8V16C2.75 18.8995 5.10051 21.25 8 21.25H16C18.8995 21.25 21.25 18.8995 21.25 16V8C21.25 5.10051 18.8995 2.75 16 2.75H8Z"
                                                                            fill="currentColor"
                                                                        />{" "}
                                                                        <path
                                                                            id="vector (Stroke)_2"
                                                                            fillRule="evenodd"
                                                                            clipRule="evenodd"
                                                                            d="M8.46967 8.46967C8.76257 8.17678 9.23744 8.17678 9.53033 8.46967L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7625 15.8232 14.4696 15.5303L8.46967 9.53033C8.17678 9.23743 8.17678 8.76256 8.46967 8.46967Z"
                                                                            fill="currentColor"
                                                                        />{" "}
                                                                        <path
                                                                            id="vector (Stroke)_3"
                                                                            fillRule="evenodd"
                                                                            clipRule="evenodd"
                                                                            d="M15.5303 8.46967C15.8232 8.76257 15.8232 9.23744 15.5303 9.53033L9.53033 15.5303C9.23743 15.8232 8.76256 15.8232 8.46967 15.5303C8.17678 15.2374 8.17678 14.7625 8.46967 14.4696L14.4697 8.46967C14.7626 8.17678 15.2374 8.17678 15.5303 8.46967Z"
                                                                            fill="currentColor"
                                                                        />{" "}
                                                                    </g>{" "}
                                                                </g>{" "}
                                                            </g>
                                                        </svg>

                                                        <p>No data found</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        ) : (
                                            filteredDoctors.map((doctor) => (
                                                <tr key={doctor.id} className="hover:bg-gray-50">
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]"

                                                    >
                                                        {doctor.id}
                                                    </td>
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]"

                                                    >
                                                        {doctor.fullName}
                                                    </td>
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]"

                                                    >
                                                        {doctor.specialty}
                                                    </td>
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]"

                                                    >
                                                        {doctor.phone}
                                                    </td>
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]"

                                                    >
                                                        {doctor.email}
                                                    </td>
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]"

                                                    >
                                                        {doctor.address}
                                                    </td>
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]"

                                                    >
                                                        {doctor.appointments}
                                                    </td>
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]"

                                                    >
                                                        {doctor.patients}
                                                    </td>
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] text-center"

                                                    >
                                                        {doctor.packacge}
                                                    </td>


                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        <div className="flex items-center space-x-2">
                                                            <button
                                                                className="text-blue-600 hover:text-blue-800"
                                                                onClick={() => {
                                                                    setIsOpen(true);
                                                                    setTimeout(() => setModalAnimation(true), 10);
                                                                }}
                                                            >
                                                                <svg
                                                                    width={22}
                                                                    height={23}
                                                                    viewBox="0 0 22 23"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3.21424 16.5816L3.92575 16.8188L3.21424 16.5816ZM4.06269 14.0363L3.35118 13.7991H3.35118L4.06269 14.0363ZM4.93817 12.6197L5.46849 13.1501L5.4685 13.1501L4.93817 12.6197ZM13.3932 4.16469L12.8629 3.63436V3.63436L13.3932 4.16469ZM17.9232 8.69468L18.4535 9.22501L17.9232 8.69468ZM9.46815 17.1497L8.93782 16.6194L8.93782 16.6194L9.46815 17.1497ZM8.05161 18.0252L8.28878 18.7367H8.28878L8.05161 18.0252ZM5.50626 18.8736L5.74343 19.5852H5.74343L5.50626 18.8736ZM9.00378 17.5832L8.5521 16.9844L8.5521 16.9844L9.00378 17.5832ZM8.64697 17.8037L8.31344 17.1319L8.64697 17.8037ZM19.0145 5.42399L18.3425 5.75701L18.3425 5.75701L19.0145 5.42399ZM19.0145 7.43538L18.3425 7.10237H18.3425L19.0145 7.43538ZM14.6525 3.07341L14.9855 3.74542L14.9855 3.74542L14.6525 3.07341ZM16.6639 3.07341L16.3309 3.74542V3.74542L16.6639 3.07341ZM4.2842 13.4409L4.95596 13.7745L4.95596 13.7745L4.2842 13.4409ZM4.50473 13.0841L3.90599 12.6324L3.90599 12.6324L4.50473 13.0841ZM2.79217 18.6094L2.08574 18.8613L2.79217 18.6094ZM3.47849 19.2957L3.22658 20.0022L3.22658 20.0022L3.47849 19.2957ZM12.791 4.7669C12.4981 4.47401 12.0233 4.47401 11.7304 4.7669C11.4375 5.05979 11.4375 5.53467 11.7304 5.82756L12.791 4.7669ZM16.2604 10.3575C16.5533 10.6504 17.0281 10.6504 17.321 10.3575C17.6139 10.0647 17.6139 9.58978 17.321 9.29689L16.2604 10.3575ZM3.21424 16.5816L3.92575 16.8188L4.77421 14.2734L4.06269 14.0363L3.35118 13.7991L2.50273 16.3445L3.21424 16.5816ZM4.93817 12.6197L5.4685 13.1501L13.9235 4.69502L13.3932 4.16469L12.8629 3.63436L4.40784 12.0894L4.93817 12.6197ZM17.9232 8.69468L17.3929 8.16435L8.93782 16.6194L9.46815 17.1497L9.99848 17.6801L18.4535 9.22501L17.9232 8.69468ZM8.05161 18.0252L7.81444 17.3137L5.26908 18.1621L5.50626 18.8736L5.74343 19.5852L8.28878 18.7367L8.05161 18.0252ZM9.46815 17.1497L8.93782 16.6194C8.69806 16.8592 8.62681 16.9281 8.5521 16.9844L9.00378 17.5832L9.45546 18.1819C9.63266 18.0482 9.78703 17.8915 9.99849 17.6801L9.46815 17.1497ZM8.05161 18.0252L8.28878 18.7367C8.57248 18.6421 8.78168 18.5742 8.98049 18.4754L8.64697 17.8037L8.31344 17.1319C8.22961 17.1735 8.13612 17.2065 7.81444 17.3137L8.05161 18.0252ZM9.00378 17.5832L8.5521 16.9844C8.47728 17.0409 8.39738 17.0902 8.31344 17.1319L8.64697 17.8037L8.98049 18.4754C9.14755 18.3925 9.30656 18.2942 9.45546 18.1819L9.00378 17.5832ZM17.9232 4.16469L17.3929 4.69502C18.0532 5.35534 18.2459 5.56203 18.3425 5.75701L19.0145 5.42399L19.6865 5.09098C19.453 4.61984 19.0282 4.20904 18.4535 3.63436L17.9232 4.16469ZM17.9232 8.69468L18.4535 9.22501C19.0282 8.65034 19.453 8.23954 19.6865 7.76839L19.0145 7.43538L18.3425 7.10237C18.2459 7.29734 18.0532 7.50404 17.3929 8.16435L17.9232 8.69468ZM19.0145 5.42399L18.3425 5.75701C18.5525 6.18087 18.5525 6.67851 18.3425 7.10237L19.0145 7.43538L19.6865 7.76839C20.1045 6.92487 20.1045 5.93451 19.6865 5.09098L19.0145 5.42399ZM13.3932 4.16469L13.9235 4.69502C14.5838 4.03471 14.7905 3.84204 14.9855 3.74542L14.6525 3.07341L14.3195 2.40139C13.8484 2.63486 13.4375 3.05969 12.8629 3.63436L13.3932 4.16469ZM17.9232 4.16469L18.4535 3.63436C17.8789 3.05969 17.4681 2.63487 16.9969 2.40139L16.6639 3.07341L16.3309 3.74542C16.5259 3.84204 16.7326 4.03471 17.3929 4.69502L17.9232 4.16469ZM14.6525 3.07341L14.9855 3.74542C15.4094 3.53538 15.907 3.53538 16.3309 3.74542L16.6639 3.07341L16.9969 2.40139C16.1534 1.98339 15.163 1.98339 14.3195 2.40139L14.6525 3.07341ZM4.06269 14.0363L4.77421 14.2734C4.88143 13.9518 4.91434 13.8583 4.95596 13.7745L4.2842 13.4409L3.61245 13.1074C3.51373 13.3062 3.44575 13.5154 3.35118 13.7991L4.06269 14.0363ZM4.93817 12.6197L4.40784 12.0894C4.19638 12.3009 4.03967 12.4552 3.90599 12.6324L4.50473 13.0841L5.10346 13.5358C5.15982 13.4611 5.22873 13.3898 5.46849 13.1501L4.93817 12.6197ZM4.2842 13.4409L4.95596 13.7745C4.99764 13.6905 5.04702 13.6106 5.10346 13.5358L4.50473 13.0841L3.90599 12.6324C3.79366 12.7813 3.69539 12.9403 3.61245 13.1074L4.2842 13.4409ZM3.21424 16.5816L2.50273 16.3445C2.32303 16.8836 2.17108 17.337 2.08557 17.7009C2.00268 18.0537 1.94406 18.464 2.08574 18.8613L2.79217 18.6094L3.49859 18.3575C3.50907 18.3869 3.47707 18.3366 3.5458 18.0441C3.61191 17.7627 3.7366 17.3863 3.92575 16.8188L3.21424 16.5816ZM5.50626 18.8736L5.26909 18.1621C4.70162 18.3513 4.32519 18.476 4.04382 18.5421C3.75133 18.6108 3.70101 18.5788 3.7304 18.5893L3.47849 19.2957L3.22658 20.0022C3.6239 20.1438 4.03418 20.0852 4.38695 20.0023C4.75085 19.9168 5.20433 19.7649 5.74343 19.5852L5.50626 18.8736ZM2.79217 18.6094L2.08574 18.8613C2.27553 19.3935 2.69435 19.8124 3.22658 20.0022L3.47849 19.2957L3.7304 18.5893C3.62226 18.5507 3.53716 18.4656 3.49859 18.3575L2.79217 18.6094ZM12.2607 5.29723L11.7304 5.82756L16.2604 10.3575L16.7907 9.82722L17.321 9.29689L12.791 4.7669L12.2607 5.29723Z"
                                                                        fill="#144A6C"
                                                                    />
                                                                </svg>
                                                            </button>
                                                            <button
                                                                className="text-red-600 hover:text-red-800"
                                                                onClick={() => {
                                                                    Swal.fire({
                                                                        title: "Are you sure?",
                                                                        text: "You won’t be able to revert this!",
                                                                        icon: "warning",
                                                                        showCancelButton: true,
                                                                        confirmButtonColor: "#d33",
                                                                        cancelButtonColor: "#3085d6",
                                                                        confirmButtonText: "Yes, delete it!",
                                                                    }).then((result) => {
                                                                        if (result.isConfirmed) {
                                                                            // 👇 Call your delete function here
                                                                            // handleDelete(doctor.id);

                                                                            Swal.fire(
                                                                                "Deleted!",
                                                                                "Your Data Has Been Deleted.",
                                                                                "success"
                                                                            );
                                                                        }
                                                                    });
                                                                }}
                                                            >
                                                                {/* Your SVG icon remains unchanged */}
                                                                <svg
                                                                    width={22}
                                                                    height={23}
                                                                    viewBox="0 0 22 23"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M17.318 16.6207L18.068 16.6274L17.318 16.6207ZM3.6665 4.83793C3.25229 4.83793 2.9165 5.17372 2.9165 5.58793C2.9165 6.00214 3.25229 6.33793 3.6665 6.33793V4.83793ZM18.3332 6.33793C18.7474 6.33793 19.0832 6.00214 19.0832 5.58793C19.0832 5.17372 18.7474 4.83793 18.3332 4.83793V6.33793ZM9.9165 9.2546C9.9165 8.84038 9.58072 8.5046 9.1665 8.5046C8.75229 8.5046 8.4165 8.84038 8.4165 9.2546H9.9165ZM8.4165 16.5879C8.4165 17.0021 8.75229 17.3379 9.1665 17.3379C9.58072 17.3379 9.9165 17.0021 9.9165 16.5879H8.4165ZM13.5832 9.2546C13.5832 8.84038 13.2474 8.5046 12.8332 8.5046C12.419 8.5046 12.0832 8.84038 12.0832 9.2546H13.5832ZM12.0832 16.5879C12.0832 17.0021 12.419 17.3379 12.8332 17.3379C13.2474 17.3379 13.5832 17.0021 13.5832 16.5879H12.0832ZM17.4165 5.58793L16.6665 5.58123L16.568 16.614L17.318 16.6207L18.068 16.6274L18.1665 5.59463L17.4165 5.58793ZM13.6515 20.2546V19.5046H8.24984V20.2546V21.0046H13.6515V20.2546ZM4.58317 5.58793H3.83317V16.5879H4.58317H5.33317V5.58793H4.58317ZM3.6665 5.58793V6.33793H4.58317V5.58793V4.83793H3.6665V5.58793ZM4.58317 5.58793V6.33793H7.33317V5.58793V4.83793H4.58317V5.58793ZM7.33317 5.58793V6.33793H14.6665V5.58793V4.83793H7.33317V5.58793ZM14.6665 5.58793V6.33793H17.4165V5.58793V4.83793H14.6665V5.58793ZM17.4165 5.58793V6.33793H18.3332V5.58793V4.83793H17.4165V5.58793ZM7.33317 5.18052H8.08317C8.08317 3.8753 9.30352 2.67126 10.9998 2.67126V1.92126V1.17126C8.64607 1.17126 6.58317 2.88567 6.58317 5.18052H7.33317ZM10.9998 1.92126V2.67126C12.6962 2.67126 13.9165 3.8753 13.9165 5.18052H14.6665H15.4165C15.4165 2.88567 13.3536 1.17126 10.9998 1.17126V1.92126ZM7.33317 5.18052H6.58317V5.58793H7.33317H8.08317V5.18052H7.33317ZM14.6665 5.18052H13.9165V5.58793H14.6665H15.4165V5.18052H14.6665ZM8.24984 20.2546V19.5046C6.63901 19.5046 5.33317 18.1988 5.33317 16.5879H4.58317H3.83317C3.83317 19.0272 5.81058 21.0046 8.24984 21.0046V20.2546ZM17.318 16.6207L16.568 16.614C16.5537 18.2146 15.2521 19.5046 13.6515 19.5046V20.2546V21.0046C16.0753 21.0046 18.0463 19.0511 18.068 16.6274L17.318 16.6207ZM9.1665 9.2546H8.4165V16.5879H9.1665H9.9165V9.2546H9.1665ZM12.8332 9.2546H12.0832V16.5879H12.8332H13.5832V9.2546H12.8332Z"
                                                                        fill="#EF2D2D"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
