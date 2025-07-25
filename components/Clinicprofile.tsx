"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { Search } from "lucide-react";
const filteredDoctors = [
  {
    id: "D001",
    fullName: "Dr. Sehrish Khan",
    visitReason: "General",
    lastVisit: "(619) 555-0123",
    nextVisit: "johndoe@example.com",
    treatmentRequired: "123 Elm St, San Diego, CA 92101",
    Appointment: "567",
    Patient: "123",
  },

  {
    id: "D001",
    fullName: "Dr. Sehrish Khan",
    visitReason: "General",
    lastVisit: "(619) 555-0123",
    nextVisit: "johndoe@example.com",
    treatmentRequired: "123 Elm St, San Diego, CA 92101",
    Appointment: "567",
    Patient: "123",
  },

  {
    id: "D001",
    fullName: "Dr. Sehrish Khan",
    visitReason: "General",
    lastVisit: "(619) 555-0123",
    nextVisit: "johndoe@example.com",
    treatmentRequired: "123 Elm St, San Diego, CA 92101",
    Appointment: "567",
    Patient: "123",
  },

  {
    id: "D001",
    fullName: "Dr. Sehrish Khan",
    visitReason: "General",
    lastVisit: "(619) 555-0123",
    nextVisit: "johndoe@example.com",
    treatmentRequired: "123 Elm St, San Diego, CA 92101",
    Appointment: "567",
    Patient: "123",
  },

  {
    id: "D001",
    fullName: "Dr. Sehrish Khan",
    visitReason: "General",
    lastVisit: "(619) 555-0123",
    nextVisit: "johndoe@example.com",
    treatmentRequired: "123 Elm St, San Diego, CA 92101",
    Appointment: "567",
    Patient: "123",
  },

  {
    id: "D001",
    fullName: "Dr. Sehrish Khan",
    visitReason: "General",
    lastVisit: "(619) 555-0123",
    nextVisit: "johndoe@example.com",
    treatmentRequired: "123 Elm St, San Diego, CA 92101",
    Appointment: "567",
    Patient: "123",
  },

  {
    id: "D001",
    fullName: "Dr. Sehrish Khan",
    visitReason: "General",
    lastVisit: "(619) 555-0123",
    nextVisit: "johndoe@example.com",
    treatmentRequired: "123 Elm St, San Diego, CA 92101",
    Appointment: "567",
    Patient: "123",
  },

  {
    id: "D001",
    fullName: "Dr. Sehrish Khan",
    visitReason: "General",
    lastVisit: "(619) 555-0123",
    nextVisit: "johndoe@example.com",
    treatmentRequired: "123 Elm St, San Diego, CA 92101",
    Appointment: "567",
    Patient: "123",
  },

  {
    id: "D001",
    fullName: "Dr. Sehrish Khan",
    visitReason: "General",
    lastVisit: "(619) 555-0123",
    nextVisit: "johndoe@example.com",
    treatmentRequired: "123 Elm St, San Diego, CA 92101",
    Appointment: "567",
    Patient: "123",
  },
];

const filteredDoctores = [
  {
    Treatment: "738",
    visitReason: "Maria Thompson",
    lastVisit: "Female",
    Amount: "(619) 555-0123",
    Birth: "04-02-2010",
    Addresses: "456 Maple Ave, Tijuana, BC 22000",
    Age: "29",
    Registration: "13-02-2025",
  },
  {
    Treatment: "738",
    visitReason: "Maria Thompson",
    lastVisit: "Female",
    Amount: "(619) 555-0123",
    Birth: "04-02-2010",
    Addresses: "456 Maple Ave, Tijuana, BC 22000",
    Age: "29",
    Registration: "13-02-2025",
  },
  {
    Treatment: "738",
    visitReason: "Maria Thompson",
    lastVisit: "Female",
    Amount: "(619) 555-0123",
    Birth: "04-02-2010",
    Addresses: "456 Maple Ave, Tijuana, BC 22000",
    Age: "29",
    Registration: "13-02-2025",
  },
  {
    Treatment: "738",
    visitReason: "Maria Thompson",
    lastVisit: "Female",
    Amount: "(619) 555-0123",
    Birth: "04-02-2010",
    Addresses: "456 Maple Ave, Tijuana, BC 22000",
    Age: "29",
    Registration: "13-02-2025",
  },
  {
    Treatment: "738",
    visitReason: "Maria Thompson",
    lastVisit: "Female",
    Amount: "(619) 555-0123",
    Birth: "04-02-2010",
    Addresses: "456 Maple Ave, Tijuana, BC 22000",
    Age: "29",
    Registration: "13-02-2025",
  },
  {
    Treatment: "738",
    visitReason: "Maria Thompson",
    lastVisit: "Female",
    Amount: "(619) 555-0123",
    Birth: "04-02-2010",
    Addresses: "456 Maple Ave, Tijuana, BC 22000",
    Age: "29",
    Registration: "13-02-2025",
  },
  {
    Treatment: "738",
    visitReason: "Maria Thompson",
    lastVisit: "Female",
    Amount: "(619) 555-0123",
    Birth: "04-02-2010",
    Addresses: "456 Maple Ave, Tijuana, BC 22000",
    Age: "29",
    Registration: "13-02-2025",
  },
  {
    Treatment: "738",
    visitReason: "Maria Thompson",
    lastVisit: "Female",
    Amount: "(619) 555-0123",
    Birth: "04-02-2010",
    Addresses: "456 Maple Ave, Tijuana, BC 22000",
    Age: "29",
    Registration: "13-02-2025",
  },
  {
    Treatment: "738",
    visitReason: "Maria Thompson",
    lastVisit: "Female",
    Amount: "(619) 555-0123",
    Birth: "04-02-2010",
    Addresses: "456 Maple Ave, Tijuana, BC 22000",
    Age: "29",
    Registration: "13-02-2025",
  },
  {
    Treatment: "738",
    visitReason: "Maria Thompson",
    lastVisit: "Female",
    Amount: "(619) 555-0123",
    Birth: "04-02-2010",
    Addresses: "456 Maple Ave, Tijuana, BC 22000",
    Age: "29",
    Registration: "13-02-2025",
  },
  {
    Treatment: "738",
    visitReason: "Maria Thompson",
    lastVisit: "Female",
    Amount: "(619) 555-0123",
    Birth: "04-02-2010",
    Addresses: "456 Maple Ave, Tijuana, BC 22000",
    Age: "29",
    Registration: "13-02-2025",
  },
];

const Inventory = [
  {
    id: "INV001", // ID No
    material: "Paracetamol", // Material
    pack: "Box of 100", // Pack
    unit: "Tablet", // Unit
    baseStock: 500, // Base Stock
    currentStock: 200, // Current Stock
    vatCost: "20 PKR", // VAT cost
    costWithVat: "220 PKR", // Cost with VAT
    minimumStock: 100, // Minimum Stock
    wantedQty: 300, // Wanted Qty
  },

  {
    id: "INV001", // ID No
    material: "Paracetamol", // Material
    pack: "Box of 100", // Pack
    unit: "Tablet", // Unit
    baseStock: 500, // Base Stock
    currentStock: 200, // Current Stock
    vatCost: "20 PKR", // VAT cost
    costWithVat: "220 PKR", // Cost with VAT
    minimumStock: 100, // Minimum Stock
    wantedQty: 300, // Wanted Qty
  },

  {
    id: "INV001", // ID No
    material: "Paracetamol", // Material
    pack: "Box of 100", // Pack
    unit: "Tablet", // Unit
    baseStock: 500, // Base Stock
    currentStock: 200, // Current Stock
    vatCost: "20 PKR", // VAT cost
    costWithVat: "220 PKR", // Cost with VAT
    minimumStock: 100, // Minimum Stock
    wantedQty: 300, // Wanted Qty
  },

  {
    id: "INV001", // ID No
    material: "Paracetamol", // Material
    pack: "Box of 100", // Pack
    unit: "Tablet", // Unit
    baseStock: 500, // Base Stock
    currentStock: 200, // Current Stock
    vatCost: "20 PKR", // VAT cost
    costWithVat: "220 PKR", // Cost with VAT
    minimumStock: 100, // Minimum Stock
    wantedQty: 300, // Wanted Qty
  },

  {
    id: "INV001", // ID No
    material: "Paracetamol", // Material
    pack: "Box of 100", // Pack
    unit: "Tablet", // Unit
    baseStock: 500, // Base Stock
    currentStock: 200, // Current Stock
    vatCost: "20 PKR", // VAT cost
    costWithVat: "220 PKR", // Cost with VAT
    minimumStock: 100, // Minimum Stock
    wantedQty: 300, // Wanted Qty
  },

  {
    id: "INV001", // ID No
    material: "Paracetamol", // Material
    pack: "Box of 100", // Pack
    unit: "Tablet", // Unit
    baseStock: 500, // Base Stock
    currentStock: 200, // Current Stock
    vatCost: "20 PKR", // VAT cost
    costWithVat: "220 PKR", // Cost with VAT
    minimumStock: 100, // Minimum Stock
    wantedQty: 300, // Wanted Qty
  },

  {
    id: "INV001", // ID No
    material: "Paracetamol", // Material
    pack: "Box of 100", // Pack
    unit: "Tablet", // Unit
    baseStock: 500, // Base Stock
    currentStock: 200, // Current Stock
    vatCost: "20 PKR", // VAT cost
    costWithVat: "220 PKR", // Cost with VAT
    minimumStock: 100, // Minimum Stock
    wantedQty: 300, // Wanted Qty
  },

  {
    id: "INV001", // ID No
    material: "Paracetamol", // Material
    pack: "Box of 100", // Pack
    unit: "Tablet", // Unit
    baseStock: 500, // Base Stock
    currentStock: 200, // Current Stock
    vatCost: "20 PKR", // VAT cost
    costWithVat: "220 PKR", // Cost with VAT
    minimumStock: 100, // Minimum Stock
    wantedQty: 300, // Wanted Qty
  },

  {
    id: "INV001", // ID No
    material: "Paracetamol", // Material
    pack: "Box of 100", // Pack
    unit: "Tablet", // Unit
    baseStock: 500, // Base Stock
    currentStock: 200, // Current Stock
    vatCost: "20 PKR", // VAT cost
    costWithVat: "220 PKR", // Cost with VAT
    minimumStock: 100, // Minimum Stock
    wantedQty: 300, // Wanted Qty
  },

  {
    id: "INV001", // ID No
    material: "Paracetamol", // Material
    pack: "Box of 100", // Pack
    unit: "Tablet", // Unit
    baseStock: 500, // Base Stock
    currentStock: 200, // Current Stock
    vatCost: "20 PKR", // VAT cost
    costWithVat: "220 PKR", // Cost with VAT
    minimumStock: 100, // Minimum Stock
    wantedQty: 300, // Wanted Qty
  },

  {
    id: "INV001", // ID No
    material: "Paracetamol", // Material
    pack: "Box of 100", // Pack
    unit: "Tablet", // Unit
    baseStock: 500, // Base Stock
    currentStock: 200, // Current Stock
    vatCost: "20 PKR", // VAT cost
    costWithVat: "220 PKR", // Cost with VAT
    minimumStock: 100, // Minimum Stock
    wantedQty: 300, // Wanted Qty
  },
];

const Billing = [
  {
    Treatment: "INV-00295",
    visitReason: "Package 1",
    lastVisit: "04-02-2025",
    Amount: "2000",
    Status: "Paid",
  },
  {
    Treatment: "INV-00295",
    visitReason: "Package 1",
    lastVisit: "04-02-2025",
    Amount: "2000",
    Status: "Unpaid",
  },
  {
    Treatment: "INV-00295",
    visitReason: "Package 1",
    lastVisit: "04-02-2025",
    Amount: "2000",
    Status: "Paid",
  },
  {
    Treatment: "INV-00295",
    visitReason: "Package 1",
    lastVisit: "04-02-2025",
    Amount: "2000",
    Status: "Unpaid",
  },
  {
    Treatment: "INV-00295",
    visitReason: "Package 1",
    lastVisit: "04-02-2025",
    Amount: "2000",
    Status: "Paid",
  },
  {
    Treatment: "INV-00295",
    visitReason: "Package 1",
    lastVisit: "04-02-2025",
    Amount: "2000",
    Status: "Unpaid",
  },
  {
    Treatment: "INV-00295",
    visitReason: "Package 1",
    lastVisit: "04-02-2025",
    Amount: "2000",
    Status: "Paid",
  },
  {
    Treatment: "INV-00295",
    visitReason: "Package 1",
    lastVisit: "04-02-2025",
    Amount: "2000",
    Status: "Unpaid",
  },
  {
    Treatment: "INV-00295",
    visitReason: "Package 1",
    lastVisit: "04-02-2025",
    Amount: "2000",
    Status: "Paid",
  },
  {
    Treatment: "INV-00295",
    visitReason: "Package 1",
    lastVisit: "04-02-2025",
    Amount: "2000",
    Status: "Unpaid",
  },
  {
    Treatment: "INV-00295",
    visitReason: "Package 1",
    lastVisit: "04-02-2025",
    Amount: "2000",
    Status: "Paid",
  },
  {
    Treatment: "INV-00295",
    visitReason: "Package 1",
    lastVisit: "04-02-2025",
    Amount: "2000",
    Status: "Unpaid",
  },
];

export default function Clinicprofile() {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = ["Details", "Doctors", "Patients", "Inventory", "Billing"];
	

  return (
    <div className="p-4 overflow-y-auto">
      <div className="mt-6">
        <div className="">
          {/* Left Panel */}
          <div className="xl:col-span-2 space-y-0">
            <div className="flex md:space-x-4 space-x-0 md:flex-row flex-row md:ml-4 ml-0 overflow-x-auto">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedTab(idx)}
                  className={`clip-path-custom-shape py-3 px-6 text-sm font-medium border-b-2 mb-0 md:-mb-px focus:outline-none  ${
                    selectedTab === idx
                      ? "border-[#144A6C] text-[#144A6C] bg-[#FFFFFF80]"
                      : "text-gray-500 border-transparent"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            {selectedTab === 0 && (
              <>
                <div className="card">
                  <div className="banner-image">
                    <img src="/banner.png" alt="" style={{ width: "100%" }} />
                  </div>
                  <div className="bg-[#F9FAFB] p-4 mt-3 rounded-lg">
                    <div className="md:col-span-2">
                      <div className="text-center text-sm text-gray-700 flex flex-col gap-4 md:flex-row">
                        {[
                          { value: 20, label: "Total Doctors" },
                          { value: 20, label: "Total Inventory" },
                          { value: 20, label: "Total Patients" },
                          { value: 20, label: "Total Treatments" },
                        ].map((stat, i) => (
                          <div
                            key={i}
                            className="bg-white py-12 w-full rounded-lg flex flex-col justify-center whitespace-nowrap gap-4 flex-col-reverse"
                          >
                            <p className="font-medium md:text-[clamp(20px,4vw,30px)] text-[clamp(30px,4vw,35px)] text-[#144A6C]">
                              {stat.value}
                            </p>
                            <p className="md:text-[clamp(10px,2vw,15px)] text-[clamp(15px,2vw,20px)] text-[#56555C]">
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-[#F9FAFB] rounded-xl p-6 grid md:grid-cols-3 grid-cols-1 gap-4 text-sm text-gray-600 mt-8 md:ml-12 md:mr-12">
                      {[
                        {
                          icon: (
                            <svg
                              width="40"
                              height="41"
                              viewBox="0 0 40 41"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                y="0.0878906"
                                width="40"
                                height="40"
                                rx="8"
                                fill="white"
                              />
                              <path
                                d="M15.2859 20.0879L14.1074 21.2664C12.8057 22.5681 12.8057 24.6787 14.1074 25.9804C15.4092 27.2822 17.5197 27.2822 18.8215 25.9804L20 24.8019M20 15.3738L21.1785 14.1953C22.4802 12.8936 24.5908 12.8936 25.8925 14.1953C27.1943 15.4971 27.1943 17.6076 25.8925 18.9093L24.714 20.0879M17.6431 22.445L22.3572 17.731"
                                stroke="#144A6C"
                                stroke-linecap="round"
                              />
                            </svg>
                          ),
                          label: "Website",
                          value: "Dental.com",
                        },
                        {
                          icon: (
                            <svg
                              width="41"
                              height="41"
                              viewBox="0 0 41 41"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="0.333252"
                                y="0.0878906"
                                width="40"
                                height="40"
                                rx="8"
                                fill="white"
                              />
                              <path
                                d="M12.8333 14.2545L19.3101 19.292C19.912 19.7601 20.7547 19.7601 21.3566 19.292L27.8333 14.2545M14.6667 26.7545H26C26.9334 26.7545 27.4001 26.7545 27.7567 26.5728C28.0703 26.413 28.3252 26.1581 28.485 25.8445C28.6667 25.4879 28.6667 25.0212 28.6667 24.0878V16.0878C28.6667 15.1544 28.6667 14.6877 28.485 14.3312C28.3252 14.0176 28.0703 13.7626 27.7567 13.6028C27.4001 13.4211 26.9334 13.4211 26 13.4211H14.6667C13.7332 13.4211 13.2665 13.4211 12.91 13.6028C12.5964 13.7626 12.3414 14.0176 12.1817 14.3312C12 14.6877 12 15.1544 12 16.0878V24.0878C12 25.0212 12 25.4879 12.1817 25.8445C12.3414 26.1581 12.5964 26.413 12.91 26.5728C13.2665 26.7545 13.7332 26.7545 14.6667 26.7545Z"
                                stroke="#144A6C"
                              />
                            </svg>
                          ),
                          label: "Email Address",
                          value: "Clearsmile@dental.com",
                        },
                        {
                          icon: (
                            <svg
                              width={40}
                              height={41}
                              viewBox="0 0 40 41"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                y="0.0878906"
                                width={40}
                                height={40}
                                rx={8}
                                fill="white"
                              />
                              <path
                                d="M17.4837 18.2172C18.0137 19.3209 18.7361 20.3554 19.651 21.2704C20.5659 22.1853 21.6004 22.9077 22.7042 23.4377C22.7991 23.4832 22.8466 23.506 22.9067 23.5235C23.1202 23.5858 23.3823 23.5411 23.5631 23.4116C23.6139 23.3752 23.6575 23.3317 23.7445 23.2446C24.0107 22.9784 24.1438 22.8453 24.2776 22.7583C24.7824 22.4301 25.4331 22.4301 25.9378 22.7583C26.0717 22.8453 26.2048 22.9784 26.471 23.2446L26.6193 23.393C27.024 23.7977 27.2263 24 27.3362 24.2173C27.5548 24.6494 27.5548 25.1598 27.3362 25.592C27.2263 25.8093 27.024 26.0116 26.6193 26.4162L26.4993 26.5363C26.096 26.9395 25.8944 27.1412 25.6203 27.2952C25.3161 27.466 24.8436 27.5889 24.4947 27.5879C24.1803 27.5869 23.9654 27.5259 23.5356 27.404C21.2259 26.7484 19.0464 25.5115 17.2282 23.6932C15.4099 21.8749 14.173 19.6955 13.5174 17.3858C13.3954 16.956 13.3344 16.7411 13.3335 16.4266C13.3325 16.0777 13.4553 15.6053 13.6262 15.3011C13.7802 15.027 13.9818 14.8253 14.3851 14.4221L14.5051 14.302C14.9098 13.8974 15.1121 13.695 15.3294 13.5851C15.7616 13.3666 16.2719 13.3666 16.7041 13.5851C16.9214 13.695 17.1237 13.8974 17.5284 14.302L17.6767 14.4504C17.9429 14.7166 18.076 14.8497 18.1631 14.9835C18.4912 15.4883 18.4912 16.139 18.1631 16.6437C18.076 16.7776 17.9429 16.9107 17.6767 17.1769C17.5897 17.2639 17.5462 17.3074 17.5097 17.3583C17.3803 17.5391 17.3356 17.8012 17.3978 18.0147C17.4153 18.0748 17.4381 18.1222 17.4837 18.2172Z"
                                stroke="#144A6C"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ),
                          label: "Phone",
                          value: "231-2324-2324",
                        },
                        {
                          icon: (
                            <svg
                              width={40}
                              height={41}
                              viewBox="0 0 40 41"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                y="0.0878906"
                                width={40}
                                height={40}
                                rx={8}
                                fill="white"
                              />
                              <path
                                d="M16 22.623C13.6088 23.3146 12 24.6073 12 26.0879C12 28.297 15.5817 30.0879 20 30.0879C24.4183 30.0879 28 28.297 28 26.0879C28 24.6073 26.3912 23.3146 24 22.623M26 16.4879C26 20.0225 21.5 26.0879 20 26.0879C18.5 26.0879 14 20.0225 14 16.4879C14 12.9533 16.6863 10.0879 20 10.0879C23.3137 10.0879 26 12.9533 26 16.4879ZM22 16.0879C22 17.1925 21.1046 18.0879 20 18.0879C18.8954 18.0879 18 17.1925 18 16.0879C18 14.9833 18.8954 14.0879 20 14.0879C21.1046 14.0879 22 14.9833 22 16.0879Z"
                                stroke="#144A6C"
                              />
                            </svg>
                          ),
                          label: "Address",
                          value: "123 Highland Drive, Anytown USA",
                        },
                        {
                          icon: (
                            <svg
                              width="41"
                              height="41"
                              viewBox="0 0 41 41"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="0.333252"
                                y="0.0878906"
                                width="40"
                                height="40"
                                rx="8"
                                fill="white"
                              />
                              <path
                                d="M22 16.7545H25.3333M22 20.0878H25.3333M22 23.4211H25.3333M14.6667 26.7545H26C26.9334 26.7545 27.4001 26.7545 27.7567 26.5728C28.0703 26.413 28.3252 26.1581 28.485 25.8445C28.6667 25.4879 28.6667 25.0212 28.6667 24.0878V16.0878C28.6667 15.1544 28.6667 14.6877 28.485 14.3312C28.3252 14.0176 28.0703 13.7626 27.7567 13.6028C27.4001 13.4211 26.9334 13.4211 26 13.4211H14.6667C13.7332 13.4211 13.2665 13.4211 12.91 13.6028C12.5964 13.7626 12.3414 14.0176 12.1817 14.3312C12 14.6877 12 15.1544 12 16.0878V24.0878C12 25.0212 12 25.4879 12.1817 25.8445C12.3414 26.1581 12.5964 26.413 12.91 26.5728C13.2665 26.7545 13.7332 26.7545 14.6667 26.7545ZM15.75 20.0878H18.25C18.4801 20.0878 18.6667 19.9013 18.6667 19.6711V17.1711C18.6667 16.941 18.4801 16.7545 18.25 16.7545H15.75C15.5199 16.7545 15.3333 16.941 15.3333 17.1711V19.6711C15.3333 19.9013 15.5199 20.0878 15.75 20.0878Z"
                                stroke="#144A6C"
                                stroke-linecap="round"
                              />
                            </svg>
                          ),
                          label: "License Number",
                          value: "34-34323-se43",
                        },
                        {
                          icon: (
                            <svg
                              width="41"
                              height="41"
                              viewBox="0 0 41 41"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="0.666504"
                                y="0.0878906"
                                width="40"
                                height="40"
                                rx="8"
                                fill="white"
                              />
                              <path
                                d="M13.1665 18.4213H28.1665M17.3332 15.088V11.7546M23.9998 15.088V11.7546M18.4998 28.4213H22.8332C24.7 28.4213 25.6334 28.4213 26.3465 28.058C26.9737 27.7384 27.4836 27.2285 27.8032 26.6013C28.1665 25.8882 28.1665 24.9548 28.1665 23.088V18.7546C28.1665 16.8878 28.1665 15.9544 27.8032 15.2413C27.4836 14.6141 26.9737 14.1042 26.3465 13.7846C25.6334 13.4213 24.7 13.4213 22.8332 13.4213H18.4998C16.633 13.4213 15.6996 13.4213 14.9865 13.7846C14.3593 14.1042 13.8494 14.6141 13.5298 15.2413C13.1665 15.9544 13.1665 16.8878 13.1665 18.7546V23.088C13.1665 24.9548 13.1665 25.8882 13.5298 26.6013C13.8494 27.2285 14.3593 27.7384 14.9865 28.058C15.6996 28.4213 16.633 28.4213 18.4998 28.4213Z"
                                stroke="#144A6C"
                                stroke-linecap="round"
                              />
                            </svg>
                          ),
                          label: "License Expiry Date",
                          value: "E23-10-2025",
                        },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          {item.icon}
                          <div>
                            <p className="text-gray-500">{item.label}</p>
                            <p>{item.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
            {selectedTab === 1 && (
              <div className="bg-white rounded-xl shadow p-6">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280]" />
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    
                    placeholder="Search"
                    className="text-[#6B7280] pl-10 pr-6 py-2 h-10 rounded-md focus:outline-none focus:[#E6E4F0] w-full sm:w-64 bg-white text-sm border border-[#E6E4F0] focus:border-[#E6E4F0]"
                  />
                </div>
                <div className="w-full overflow-x-auto mt-3">
                  <table className="min-w-full">
                    <thead className="bg-gray-50 sticky top-0">
                      <tr className="pt-4 pr-8 pb-3 pl-8 rounded-bl-lg">
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          ID No
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Full Name
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Spatiality
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Phone Number
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Email Address
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Address
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Appointments
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Patients
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.6248 11.7128H12.3748M11.6248 12.4628H12.3748M11.6248 4.71283H12.3748M11.6248 5.46283H12.3748M11.6248 18.7128H12.3748M11.6248 19.4628H12.3748M4.62476 11.7128H5.37476M4.62476 12.4628H5.37476M4.62476 4.71283H5.37476M4.62476 5.46283H5.37476M4.62476 18.7128H5.37476M4.62476 19.4628H5.37476M18.6248 11.7128H19.3748M18.6248 12.4628H19.3748M18.6248 4.71283H19.3748M18.6248 5.46283H19.3748M18.6248 18.7128H19.3748M18.6248 19.4628H19.3748M13 12.0879C13 12.6402 12.5523 13.0879 12 13.0879C11.4477 13.0879 11 12.6402 11 12.0879C11 11.5356 11.4477 11.0879 12 11.0879C12.5523 11.0879 13 11.5356 13 12.0879ZM13 5.08789C13 5.64018 12.5523 6.08789 12 6.08789C11.4477 6.08789 11 5.64018 11 5.08789C11 4.53561 11.4477 4.08789 12 4.08789C12.5523 4.08789 13 4.53561 13 5.08789ZM13 19.0879C13 19.6402 12.5523 20.0879 12 20.0879C11.4477 20.0879 11 19.6402 11 19.0879C11 18.5356 11.4477 18.0879 12 18.0879C12.5523 18.0879 13 18.5356 13 19.0879ZM6 12.0879C6 12.6402 5.55229 13.0879 5 13.0879C4.44772 13.0879 4 12.6402 4 12.0879C4 11.5356 4.44772 11.0879 5 11.0879C5.55229 11.0879 6 11.5356 6 12.0879ZM6 5.08789C6 5.64018 5.55229 6.08789 5 6.08789C4.44772 6.08789 4 5.64018 4 5.08789C4 4.53561 4.44772 4.08789 5 4.08789C5.55229 4.08789 6 4.53561 6 5.08789ZM6 19.0879C6 19.6402 5.55229 20.0879 5 20.0879C4.44772 20.0879 4 19.6402 4 19.0879C4 18.5356 4.44772 18.0879 5 18.0879C5.55229 18.0879 6 18.5356 6 19.0879ZM20 12.0879C20 12.6402 19.5523 13.0879 19 13.0879C18.4477 13.0879 18 12.6402 18 12.0879C18 11.5356 18.4477 11.0879 19 11.0879C19.5523 11.0879 20 11.5356 20 12.0879ZM20 5.08789C20 5.64018 19.5523 6.08789 19 6.08789C18.4477 6.08789 18 5.64018 18 5.08789C18 4.53561 18.4477 4.08789 19 4.08789C19.5523 4.08789 20 4.53561 20 5.08789ZM20 19.0879C20 19.6402 19.5523 20.0879 19 20.0879C18.4477 20.0879 18 19.6402 18 19.0879C18 18.5356 18.4477 18.0879 19 18.0879C19.5523 18.0879 20 18.5356 20 19.0879Z"
                              stroke="#144A6C"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                          </svg>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-[#EAECF0]">
                      {filteredDoctors.length === 0 ? (
                        <tr>
                          <td
                            colSpan={7}
                            className="text-center py-8 text-gray-400 text-sm"
                          >
                            <div className="flex flex-col items-center justify-center">
                              <svg
                                className="w-10 h-10 text-gray-300 mb-2"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M1.25 8C1.25 4.27208 4.27208 1.25 8 1.25H16C19.7279 1.25 22.75 4.27208 22.75 8V16C22.75 19.7279 19.7279 22.75 16 22.75H8C4.27208 22.75 1.25 19.7279 1.25 16V8Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M8.46967 8.46967C8.76257 8.17678 9.23744 8.17678 9.53033 8.46967L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7625 15.8232 14.4696 15.5303L8.46967 9.53033C8.17678 9.23743 8.17678 8.76256 8.46967 8.46967Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M15.5303 8.46967C15.8232 8.76257 15.8232 9.23744 15.5303 9.53033L9.53033 15.5303C9.23743 15.8232 8.76256 15.8232 8.46967 15.5303C8.17678 15.2374 8.17678 14.7625 8.46967 14.4696L14.4697 8.46967C14.7626 8.17678 15.2374 8.17678 15.5303 8.46967Z"
                                  fill="currentColor"
                                />
                              </svg>
                              <p>No data found</p>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        filteredDoctors.map((doctor) => (
                          <tr key={doctor.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {doctor.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {doctor.fullName}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {doctor.visitReason}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {doctor.lastVisit}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {doctor.nextVisit}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {doctor.treatmentRequired}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {doctor.Appointment}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {doctor.Patient}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div className="flex items-center space-x-2">
                                <button className="text-blue-600 hover:text-blue-800">
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
            )}

            {selectedTab === 2 && (
              <div className="bg-white rounded-xl shadow p-6">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280]" />
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="Search"
                    className="text-[#6B7280] pl-10 pr-6 py-2 h-10 rounded-md focus:outline-none focus:[#E6E4F0] w-full sm:w-64 bg-white text-sm border border-[#E6E4F0] focus:border-[#E6E4F0]"
                  />
                </div>
                <div className="w-full overflow-x-auto mt-3">
                  <table className="min-w-full">
                    <thead className="bg-gray-50 sticky top-0">
                      <tr className="pt-4 pr-8 pb-3 pl-8 rounded-bl-lg">
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          ID No
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Full Name
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Sex
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Phone Number
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Birth Date
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Address
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Age
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Registration
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-[#EAECF0]">
                      {filteredDoctores.length === 0 ? (
                        <tr>
                          <td
                            colSpan={7}
                            className="text-center py-8 text-gray-400 text-sm"
                          >
                            <div className="flex flex-col items-center justify-center">
                              <svg
                                className="w-10 h-10 text-gray-300 mb-2"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M1.25 8C1.25 4.27208 4.27208 1.25 8 1.25H16C19.7279 1.25 22.75 4.27208 22.75 8V16C22.75 19.7279 19.7279 22.75 16 22.75H8C4.27208 22.75 1.25 19.7279 1.25 16V8Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M8.46967 8.46967C8.76257 8.17678 9.23744 8.17678 9.53033 8.46967L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7625 15.8232 14.4696 15.5303L8.46967 9.53033C8.17678 9.23743 8.17678 8.76256 8.46967 8.46967Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M15.5303 8.46967C15.8232 8.76257 15.8232 9.23744 15.5303 9.53033L9.53033 15.5303C9.23743 15.8232 8.76256 15.8232 8.46967 15.5303C8.17678 15.2374 8.17678 14.7625 8.46967 14.4696L14.4697 8.46967C14.7626 8.17678 15.2374 8.17678 15.5303 8.46967Z"
                                  fill="currentColor"
                                />
                              </svg>
                              <p>No data found</p>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        filteredDoctores.map((doctor) => (
                          <tr
                            key={doctor.Treatment}
                            className="hover:bg-gray-50"
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {doctor.Treatment}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {doctor.visitReason}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {doctor.lastVisit}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {doctor.Amount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {doctor.Birth}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {doctor.Addresses}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {doctor.Age}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {doctor.Registration}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {selectedTab === 3 && (
              <div className="bg-white rounded-xl shadow p-6">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280]" />
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="Search"
                    className="text-[#6B7280] pl-10 pr-6 py-2 h-10 rounded-md focus:outline-none focus:[#E6E4F0] w-full sm:w-64 bg-white text-sm border border-[#E6E4F0] focus:border-[#E6E4F0]"
                  />
                </div>
                <div className="w-full overflow-x-auto mt-3">
                  <table className="min-w-full">
                    <thead className="bg-gray-50 sticky top-0">
                      <tr className="pt-4 pr-8 pb-3 pl-8 rounded-bl-lg">
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          ID No
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Material
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Pack
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Unit
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Base Stock
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Current Stock
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          VAT cost
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Cost with VAT
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Minimum Stock
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Wanted Qty
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-[#EAECF0]">
                      {filteredDoctors.length === 0 ? (
                        <tr>
                          <td
                            colSpan={7}
                            className="text-center py-8 text-gray-400 text-sm"
                          >
                            <div className="flex flex-col items-center justify-center">
                              <svg
                                className="w-10 h-10 text-gray-300 mb-2"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M1.25 8C1.25 4.27208 4.27208 1.25 8 1.25H16C19.7279 1.25 22.75 4.27208 22.75 8V16C22.75 19.7279 19.7279 22.75 16 22.75H8C4.27208 22.75 1.25 19.7279 1.25 16V8Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M8.46967 8.46967C8.76257 8.17678 9.23744 8.17678 9.53033 8.46967L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7625 15.8232 14.4696 15.5303L8.46967 9.53033C8.17678 9.23743 8.17678 8.76256 8.46967 8.46967Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M15.5303 8.46967C15.8232 8.76257 15.8232 9.23744 15.5303 9.53033L9.53033 15.5303C9.23743 15.8232 8.76256 15.8232 8.46967 15.5303C8.17678 15.2374 8.17678 14.7625 8.46967 14.4696L14.4697 8.46967C14.7626 8.17678 15.2374 8.17678 15.5303 8.46967Z"
                                  fill="currentColor"
                                />
                              </svg>
                              <p>No data found</p>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        Inventory.map((item, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {item.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {item.material}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {item.pack}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {item.unit}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {item.baseStock}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {item.currentStock}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {item.vatCost}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {item.costWithVat}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {item.minimumStock}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {item.wantedQty}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {selectedTab === 4 && (
              <div className="bg-white rounded-xl shadow p-6">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280]" />
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="Search"
                    className="text-[#6B7280] pl-10 pr-6 py-2 h-10 rounded-md focus:outline-none focus:[#E6E4F0] w-full sm:w-64 bg-white text-sm border border-[#E6E4F0] focus:border-[#E6E4F0]"
                  />
                </div>
                <div className="w-full overflow-x-auto mt-3">
                  <table className="min-w-full">
                    <thead className="bg-gray-50 sticky top-0">
                      <tr className="pt-4 pr-8 pb-3 pl-8 rounded-bl-lg">
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Invoice Number
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Package
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Amount
                        </th>

                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.6248 11.7128H12.3748M11.6248 12.4628H12.3748M11.6248 4.71283H12.3748M11.6248 5.46283H12.3748M11.6248 18.7128H12.3748M11.6248 19.4628H12.3748M4.62476 11.7128H5.37476M4.62476 12.4628H5.37476M4.62476 4.71283H5.37476M4.62476 5.46283H5.37476M4.62476 18.7128H5.37476M4.62476 19.4628H5.37476M18.6248 11.7128H19.3748M18.6248 12.4628H19.3748M18.6248 4.71283H19.3748M18.6248 5.46283H19.3748M18.6248 18.7128H19.3748M18.6248 19.4628H19.3748M13 12.0879C13 12.6402 12.5523 13.0879 12 13.0879C11.4477 13.0879 11 12.6402 11 12.0879C11 11.5356 11.4477 11.0879 12 11.0879C12.5523 11.0879 13 11.5356 13 12.0879ZM13 5.08789C13 5.64018 12.5523 6.08789 12 6.08789C11.4477 6.08789 11 5.64018 11 5.08789C11 4.53561 11.4477 4.08789 12 4.08789C12.5523 4.08789 13 4.53561 13 5.08789ZM13 19.0879C13 19.6402 12.5523 20.0879 12 20.0879C11.4477 20.0879 11 19.6402 11 19.0879C11 18.5356 11.4477 18.0879 12 18.0879C12.5523 18.0879 13 18.5356 13 19.0879ZM6 12.0879C6 12.6402 5.55229 13.0879 5 13.0879C4.44772 13.0879 4 12.6402 4 12.0879C4 11.5356 4.44772 11.0879 5 11.0879C5.55229 11.0879 6 11.5356 6 12.0879ZM6 5.08789C6 5.64018 5.55229 6.08789 5 6.08789C4.44772 6.08789 4 5.64018 4 5.08789C4 4.53561 4.44772 4.08789 5 4.08789C5.55229 4.08789 6 4.53561 6 5.08789ZM6 19.0879C6 19.6402 5.55229 20.0879 5 20.0879C4.44772 20.0879 4 19.6402 4 19.0879C4 18.5356 4.44772 18.0879 5 18.0879C5.55229 18.0879 6 18.5356 6 19.0879ZM20 12.0879C20 12.6402 19.5523 13.0879 19 13.0879C18.4477 13.0879 18 12.6402 18 12.0879C18 11.5356 18.4477 11.0879 19 11.0879C19.5523 11.0879 20 11.5356 20 12.0879ZM20 5.08789C20 5.64018 19.5523 6.08789 19 6.08789C18.4477 6.08789 18 5.64018 18 5.08789C18 4.53561 18.4477 4.08789 19 4.08789C19.5523 4.08789 20 4.53561 20 5.08789ZM20 19.0879C20 19.6402 19.5523 20.0879 19 20.0879C18.4477 20.0879 18 19.6402 18 19.0879C18 18.5356 18.4477 18.0879 19 18.0879C19.5523 18.0879 20 18.5356 20 19.0879Z"
                              stroke="#144A6C"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                          </svg>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-[#EAECF0]">
                      {Billing.length === 0 ? (
                        <tr>
                          <td
                            colSpan={7}
                            className="text-center py-8 text-gray-400 text-sm"
                          >
                            <div className="flex flex-col items-center justify-center">
                              <svg
                                className="w-10 h-10 text-gray-300 mb-2"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M1.25 8C1.25 4.27208 4.27208 1.25 8 1.25H16C19.7279 1.25 22.75 4.27208 22.75 8V16C22.75 19.7279 19.7279 22.75 16 22.75H8C4.27208 22.75 1.25 19.7279 1.25 16V8Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M8.46967 8.46967C8.76257 8.17678 9.23744 8.17678 9.53033 8.46967L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7625 15.8232 14.4696 15.5303L8.46967 9.53033C8.17678 9.23743 8.17678 8.76256 8.46967 8.46967Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M15.5303 8.46967C15.8232 8.76257 15.8232 9.23744 15.5303 9.53033L9.53033 15.5303C9.23743 15.8232 8.76256 15.8232 8.46967 15.5303C8.17678 15.2374 8.17678 14.7625 8.46967 14.4696L14.4697 8.46967C14.7626 8.17678 15.2374 8.17678 15.5303 8.46967Z"
                                  fill="currentColor"
                                />
                              </svg>
                              <p>No data found</p>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        Billing.map((doctor) => (
                          <tr
                            key={doctor.Treatment}
                            className="hover:bg-gray-50"
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {doctor.Treatment}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {doctor.visitReason}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {doctor.lastVisit}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                              {doctor.Amount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <span
                                className={`
                                   inline-flex px-3 py-1 rounded-full text-xs font-medium
                                   ${
                                     doctor.Status === "Paid"
                                       ? "bg-[#F8FFF8] text-[#177606] border border-[#B7EFAB] rounded-sm pl-4 pr-4 pt-2 pb-2"
                                       : ""
                                   }
                                   ${
                                     doctor.Status === "Unpaid"
                                       ? "bg-[#FFF8F8] text-[#CE2D2D] border border-[#E43F33] rounded-sm pl-4 pr-4 pt-2 pb-2"
                                       : ""
                                   }
                                 `}
                              >
                                {doctor.Status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div className="flex items-center space-x-2">
                                <button className="text-blue-600 hover:text-blue-800">
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
