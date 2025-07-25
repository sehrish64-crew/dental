"use client";

import { useState } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import Swal from "sweetalert2";
import { Search, Plus } from "lucide-react";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
const filteredDoctors = [
  {
    id: "D001",
    fullName: "Dr. Sehrish Khan",
    visitReason: "Routine Checkup",
    lastVisit: "2025-06-15",
    nextVisit: "2025-07-30",
    treatmentRequired: "Blood Test",
  },
  {
    id: "D002",
    fullName: "Dr. Adeel Sheikh",
    visitReason: "Dental Pain",
    lastVisit: "2025-07-01",
    nextVisit: "2025-08-01",
    treatmentRequired: "Root Canal",
  },
  {
    id: "D001",
    fullName: "Dr. Sehrish Khan",
    visitReason: "Routine Checkup",
    lastVisit: "2025-06-15",
    nextVisit: "2025-07-30",
    treatmentRequired: "Blood Test",
  },
  {
    id: "D002",
    fullName: "Dr. Adeel Sheikh",
    visitReason: "Dental Pain",
    lastVisit: "2025-07-01",
    nextVisit: "2025-08-01",
    treatmentRequired: "Root Canal",
  },
  {
    id: "D001",
    fullName: "Dr. Sehrish Khan",
    visitReason: "Routine Checkup",
    lastVisit: "2025-06-15",
    nextVisit: "2025-07-30",
    treatmentRequired: "Blood Test",
  },
  {
    id: "D002",
    fullName: "Dr. Adeel Sheikh",
    visitReason: "Dental Pain",
    lastVisit: "2025-07-01",
    nextVisit: "2025-08-01",
    treatmentRequired: "Root Canal",
  },
  {
    id: "D001",
    fullName: "Dr. Sehrish Khan",
    visitReason: "Routine Checkup",
    lastVisit: "2025-06-15",
    nextVisit: "2025-07-30",
    treatmentRequired: "Blood Test",
  },
  {
    id: "D002",
    fullName: "Dr. Adeel Sheikh",
    visitReason: "Dental Pain",
    lastVisit: "2025-07-01",
    nextVisit: "2025-08-01",
    treatmentRequired: "Root Canal",
  },
  {
    id: "D001",
    fullName: "Dr. Sehrish Khan",
    visitReason: "Routine Checkup",
    lastVisit: "2025-06-15",
    nextVisit: "2025-07-30",
    treatmentRequired: "Blood Test",
  },
  {
    id: "D002",
    fullName: "Dr. Adeel Sheikh",
    visitReason: "Dental Pain",
    lastVisit: "2025-07-01",
    nextVisit: "2025-08-01",
    treatmentRequired: "Root Canal",
  },
  {
    id: "D001",
    fullName: "Dr. Sehrish Khan",
    visitReason: "Routine Checkup",
    lastVisit: "2025-06-15",
    nextVisit: "2025-07-30",
    treatmentRequired: "Blood Test",
  },
  {
    id: "D002",
    fullName: "Dr. Adeel Sheikh",
    visitReason: "Dental Pain",
    lastVisit: "2025-07-01",
    nextVisit: "2025-08-01",
    treatmentRequired: "Root Canal",
  },
];
const patients = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Alexa" },
  { id: 3, name: "Jordan" },
];

const treatments = [
  { id: 1, name: "Physiotherapy" },
  { id: 2, name: "Cardiology" },
  { id: 3, name: "Neurology" },
];

const bookingMonths = [
  { id: 1, name: "January" },
  { id: 2, name: "February" },
  { id: 3, name: "March" },
  { id: 4, name: "April" },
  { id: 5, name: "May" },
  { id: 6, name: "June" },
  { id: 7, name: "July" },
  { id: 8, name: "August" },
  { id: 9, name: "September" },
  { id: 10, name: "October" },
  { id: 11, name: "November" },
  { id: 12, name: "December" },
];
const openSlots = [
  { id: 1, name: "9:00 AM - 9:30 AM" },
  { id: 2, name: "10:00 AM - 10:30 AM" },
  { id: 3, name: "11:00 AM - 11:30 AM" },
  { id: 4, name: "12:00 PM - 12:30 PM" },
  { id: 5, name: "2:00 PM - 2:30 PM" },
];

const filteredDoctores = [
  {
    Treatment: "Palate Expansion",
    visitReason: "Maria Thompson",
    lastVisit: "04-02-2025",
    Amount: "2000",
    Status: "Complete",
  },
  {
    Treatment: "Braces",
    visitReason: "John Doe",
    lastVisit: "10-03-2025",
    Amount: "1500",
    Status: "Pending",
  },
  {
    Treatment: "Root Canal",
    visitReason: "Emma Shah",
    lastVisit: "20-07-2025",
    Amount: "1800",
    Status: "Ongoing",
  },
  {
    Treatment: "Palate Expansion",
    visitReason: "Maria Thompson",
    lastVisit: "04-02-2025",
    Amount: "2000",
    Status: "Complete",
  },
  {
    Treatment: "Braces",
    visitReason: "John Doe",
    lastVisit: "10-03-2025",
    Amount: "1500",
    Status: "Pending",
  },
  {
    Treatment: "Root Canal",
    visitReason: "Emma Shah",
    lastVisit: "20-07-2025",
    Amount: "1800",
    Status: "Ongoing",
  },
  {
    Treatment: "Palate Expansion",
    visitReason: "Maria Thompson",
    lastVisit: "04-02-2025",
    Amount: "2000",
    Status: "Complete",
  },
  {
    Treatment: "Braces",
    visitReason: "John Doe",
    lastVisit: "10-03-2025",
    Amount: "1500",
    Status: "Pending",
  },
  {
    Treatment: "Root Canal",
    visitReason: "Emma Shah",
    lastVisit: "20-07-2025",
    Amount: "1800",
    Status: "Ongoing",
  },
  {
    Treatment: "Palate Expansion",
    visitReason: "Maria Thompson",
    lastVisit: "04-02-2025",
    Amount: "2000",
    Status: "Complete",
  },
  {
    Treatment: "Braces",
    visitReason: "John Doe",
    lastVisit: "10-03-2025",
    Amount: "1500",
    Status: "Pending",
  },
  {
    Treatment: "Root Canal",
    visitReason: "Emma Shah",
    lastVisit: "20-07-2025",
    Amount: "1800",
    Status: "Ongoing",
  },
  {
    Treatment: "Palate Expansion",
    visitReason: "Maria Thompson",
    lastVisit: "04-02-2025",
    Amount: "2000",
    Status: "Complete",
  },
  {
    Treatment: "Braces",
    visitReason: "John Doe",
    lastVisit: "10-03-2025",
    Amount: "1500",
    Status: "Pending",
  },
  {
    Treatment: "Root Canal",
    visitReason: "Emma Shah",
    lastVisit: "20-07-2025",
    Amount: "1800",
    Status: "Ongoing",
  },
];

export default function DoctorProfileTabs() {
  const [selectPatient, setSelectPatient] = useState(patients[0]);
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = ["Profile", "Patients", "Treatments"];
  const [isOpen, setIsOpen] = useState(false);
  const [ModalAnimation, setModalAnimation] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState(treatments[0]);
  const [selected, setSelected] = useState(bookingMonths[0]);
  const [selectedSlot, setSelectedSlot] = useState(openSlots[0]);

  return (
    <div className="p-4 overflow-y-auto">
      <div className="mt-6">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
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
                  <div className="bg-[#F9FAFB] rounded-xl p-4 grid grid-cols-1 md:grid-cols-5 gap-2">
                    {/* Doctor Info - Larger Box (3/5 on md+) */}
                    {/* <div className="bg-areas flex gap-4 items-start md:col-span-3"> */}
                    <div className="bg-areas flex flex-col md:flex-row gap-4 items-start md:col-span-3">
                      <Image
                        src="/profile.png"
                        alt="doctor"
                        width={200}
                        height={200}
                        className="rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h2 className=" text-[clamp(20px,4vw,20px)] text-[#144A6C] font-semibold white-space-nowrap">
                          Dr. Patel Bharori
                        </h2>
                        <p className="text-base text-[#7E7E7E]">Orthodontic</p>
                        <p className="text-base text-[#7E7E7E]">ID : 2342</p>
                        <div>
                          <button
                            className="w-full bg-[#144A6C] text-white px-4 py-2 rounded-xl mt-3 md:text-sm"
                            onClick={() => {
                              setIsOpen(true);
                              setTimeout(() => setModalAnimation(true), 10);
                            }}
                          >
                            Create Booking
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
                                      ${
                                        ModalAnimation
                                          ? "scale-100 skew-y-0"
                                          : "scale-0 skew-y-6"
                                      }
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
                                                  stroke="url(#paint0_linear_0_5513)"
                                                  strokeOpacity="0.3"
                                                />
                                                <path
                                                  d="M16.6034 16.4438L16.3913 16.8149C15.7055 18.0151 15.4393 19.4096 15.6347 20.7779C15.9848 23.2282 16.8791 25.5689 18.252 27.6283L18.3728 27.8095C18.7992 28.4491 19.7838 28.2694 19.9567 27.5203L20.7818 23.9446C21.0799 22.6527 22.9197 22.6527 23.2178 23.9446L24.043 27.5203C24.2158 28.2694 25.2004 28.4491 25.6268 27.8095L25.7476 27.6283C27.1205 25.5689 28.0148 23.2282 28.3649 20.7779C28.5603 19.4096 28.2941 18.0151 27.6083 16.8149L27.3962 16.4438C26.4064 14.7115 23.9818 14.5225 22.7354 16.0804C22.3583 16.5519 21.6413 16.5519 21.2642 16.0804C20.0178 14.5225 17.5932 14.7115 16.6034 16.4438Z"
                                                  stroke="#144A6C"
                                                  strokeWidth="1.5"
                                                  strokeLinecap="round"
                                                />
                                                <defs>
                                                  <linearGradient
                                                    id="paint0_linear_0_5513"
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
                                                Book Appointment
                                              </h3>
                                              <span className="text-[#A1A5AA] font-regular">
                                                Provide details to book an
                                                appointment
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
                                                  Patient
                                                </label>
                                                <Listbox
                                                  value={selectPatient}
                                                  onChange={setSelectPatient}
                                                >
                                                  <div className="mt-2 relative">
                                                    <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                      <span className="block truncate">
                                                        {selectPatient.name}
                                                      </span>
                                                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                        <ChevronDownIcon
                                                          className="h-5 w-5 text-[#144A6C]"
                                                          aria-hidden="true"
                                                        />
                                                      </span>
                                                    </Listbox.Button>

                                                    <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                      {patients.map(
                                                        (patient) => (
                                                          <Listbox.Option
                                                            key={patient.id}
                                                            value={patient}
                                                            className={({
                                                              active,
                                                            }) =>
                                                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                active
                                                                  ? "bg-[#144A6C] text-white"
                                                                  : "text-gray-900"
                                                              }`
                                                            }
                                                          >
                                                            {({ selected }) => (
                                                              <>
                                                                <span
                                                                  className={`block truncate ${
                                                                    selected
                                                                      ? "font-medium"
                                                                      : "font-normal"
                                                                  }`}
                                                                >
                                                                  {patient.name}
                                                                </span>
                                                                {selected && (
                                                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#144A6C]">
                                                                    <CheckIcon
                                                                      className="h-5 w-5"
                                                                      aria-hidden="true"
                                                                    />
                                                                  </span>
                                                                )}
                                                              </>
                                                            )}
                                                          </Listbox.Option>
                                                        )
                                                      )}
                                                    </Listbox.Options>
                                                  </div>
                                                </Listbox>
                                              </div>
                                            </div>

                                            <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                              <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                <label
                                                  className="text-[#757575]"
                                                  htmlFor="grid-category"
                                                >
                                                  Treatment
                                                </label>
                                                <Listbox
                                                  value={selectedTreatment}
                                                  onChange={
                                                    setSelectedTreatment
                                                  }
                                                >
                                                  <div className="mt-2 relative">
                                                    <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                      <span className="block truncate">
                                                        {selectedTreatment.name}
                                                      </span>
                                                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                        <ChevronDownIcon
                                                          className="h-5 w-5 text-[#144A6C]"
                                                          aria-hidden="true"
                                                        />
                                                      </span>
                                                    </Listbox.Button>

                                                    <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                      {treatments.map(
                                                        (treatment) => (
                                                          <Listbox.Option
                                                            key={treatment.id}
                                                            value={treatment}
                                                            className={({
                                                              active,
                                                            }) =>
                                                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                active
                                                                  ? "bg-[#144A6C] text-white"
                                                                  : "text-gray-900"
                                                              }`
                                                            }
                                                          >
                                                            {({ selected }) => (
                                                              <>
                                                                <span
                                                                  className={`block truncate ${
                                                                    selected
                                                                      ? "font-medium"
                                                                      : "font-normal"
                                                                  }`}
                                                                >
                                                                  {
                                                                    treatment.name
                                                                  }
                                                                </span>
                                                                {selected && (
                                                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                    <CheckIcon
                                                                      className="h-5 w-5"
                                                                      aria-hidden="true"
                                                                    />
                                                                  </span>
                                                                )}
                                                              </>
                                                            )}
                                                          </Listbox.Option>
                                                        )
                                                      )}
                                                    </Listbox.Options>
                                                  </div>
                                                </Listbox>
                                              </div>
                                            </div>

                                            <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                <label
                                                  className="text-[#757575]"
                                                  htmlFor="grid-address"
                                                >
                                                  Booking Month
                                                </label>
                                                <Listbox
                                                  value={selected}
                                                  onChange={setSelected}
                                                >
                                                  <div className="mt-2 relative">
                                                    <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                      <span className="block truncate">
                                                        {selected.name}
                                                      </span>
                                                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                        <ChevronDownIcon
                                                          className="h-5 w-5 text-[#144A6C]"
                                                          aria-hidden="true"
                                                        />
                                                      </span>
                                                    </Listbox.Button>

                                                    <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                      {bookingMonths.map(
                                                        (month) => (
                                                          <Listbox.Option
                                                            key={month.id}
                                                            value={month}
                                                            className={({
                                                              active,
                                                            }) =>
                                                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                active
                                                                  ? "bg-[#144A6C] text-white"
                                                                  : "text-gray-900"
                                                              }`
                                                            }
                                                          >
                                                            {({ selected }) => (
                                                              <>
                                                                <span
                                                                  className={`block truncate ${
                                                                    selected
                                                                      ? "font-medium"
                                                                      : "font-normal"
                                                                  }`}
                                                                >
                                                                  {month.name}
                                                                </span>
                                                                {selected && (
                                                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                    <CheckIcon
                                                                      className="h-5 w-5"
                                                                      aria-hidden="true"
                                                                    />
                                                                  </span>
                                                                )}
                                                              </>
                                                            )}
                                                          </Listbox.Option>
                                                        )
                                                      )}
                                                    </Listbox.Options>
                                                  </div>
                                                </Listbox>
                                              </div>

                                              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                <label
                                                  className="text-[#757575]"
                                                  htmlFor="grid-category"
                                                >
                                                  Open Slots
                                                </label>
                                                <Listbox
                                                  value={selectedSlot}
                                                  onChange={setSelectedSlot}
                                                >
                                                  <div className="mt-2 relative">
                                                    <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                      <span className="block truncate">
                                                        {selectedSlot.name}
                                                      </span>
                                                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                        <ChevronDownIcon
                                                          className="h-5 w-5 text-[#144A6C]"
                                                          aria-hidden="true"
                                                        />
                                                      </span>
                                                    </Listbox.Button>

                                                    <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                      {openSlots.map((slot) => (
                                                        <Listbox.Option
                                                          key={slot.id}
                                                          value={slot}
                                                          className={({
                                                            active,
                                                          }) =>
                                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                              active
                                                                ? "bg-[#144A6C] text-white"
                                                                : "text-gray-900"
                                                            }`
                                                          }
                                                        >
                                                          {({ selected }) => (
                                                            <>
                                                              <span
                                                                className={`block truncate ${
                                                                  selected
                                                                    ? "font-medium"
                                                                    : "font-normal"
                                                                }`}
                                                              >
                                                                {slot.name}
                                                              </span>
                                                              {selected && (
                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                  <CheckIcon
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                  />
                                                                </span>
                                                              )}
                                                            </>
                                                          )}
                                                        </Listbox.Option>
                                                      ))}
                                                    </Listbox.Options>
                                                  </div>
                                                </Listbox>
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
                                           Book Appointment
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

                    {/* Stats Box - Smaller (2/5 on md+) */}
                    <div className="md:col-span-2">
                      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 text-center text-sm text-gray-700">
                        {[
                          { value: 20, label: "Total Patients" },
                          { value: "$2,000", label: "Total Earnings" },
                          { value: 5, label: "Surgeries" },
                          { value: 12, label: "Appointments" },
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
                  </div>

                  <div className="bg-[#F9FAFB] rounded-xl p-6 grid md:grid-cols-2 grid-cols-1 gap-4 text-sm text-gray-600 mt-8">
                    {[
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
                              d="M12.5 25.0879L15 27.5879M14.1667 25.9213L16.6667 23.4213M15 21.7546L18.3333 25.0879M15 21.7546L20.4882 16.2664C21.139 15.6156 22.1943 15.6156 22.8452 16.2664L23.8215 17.2428C24.4724 17.8936 24.4724 18.9489 23.8215 19.5998L18.3333 25.0879M15 21.7546L14.1667 20.9213M18.3333 25.0879L19.1667 25.9213M23.3333 16.7546L26.6667 13.4213"
                              stroke="#144A6C"
                              strokeLinecap="round"
                            />
                          </svg>
                        ),
                        label: "Specialty",
                        value: "Orthodontic",
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
                              d="M13.8781 19.0495L11.8793 17.863C11.5962 17.695 11.5962 17.2891 11.8793 17.121L19.1004 12.8345C19.6543 12.5057 20.3463 12.5057 20.9003 12.8345L28.1213 17.121C28.4044 17.2891 28.4044 17.695 28.1213 17.863L26.1225 19.0495M13.8781 19.0495L19.1003 22.1495C19.6543 22.4784 20.3463 22.4784 20.9002 22.1495L26.1225 19.0495M13.8781 19.0495V23.2615C13.8781 23.8693 14.2005 24.4327 14.7274 24.7454L19.1003 27.3413C19.6543 27.6701 20.3463 27.6701 20.9002 27.3413L25.2733 24.7454C25.8001 24.4327 26.1225 23.8693 26.1225 23.2614V19.0495M20.0003 17.5879H22.5003"
                              stroke="#144A6C"
                              strokeLinecap="round"
                            />
                          </svg>
                        ),
                        label: "Qualification",
                        value: "Doctor of Dental Surgery (DDS)",
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
                              d="M12.4998 14.2545L18.9766 19.292C19.5785 19.7601 20.4212 19.7601 21.0231 19.292L27.4998 14.2545M14.3332 26.7545H25.6665C26.5999 26.7545 27.0666 26.7545 27.4232 26.5729C27.7368 26.4131 27.9917 26.1581 28.1515 25.8445C28.3332 25.488 28.3332 25.0213 28.3332 24.0879V16.0879C28.3332 15.1544 28.3332 14.6877 28.1515 14.3312C27.9917 14.0176 27.7368 13.7626 27.4232 13.6029C27.0666 13.4212 26.5999 13.4212 25.6665 13.4212H14.3332C13.3997 13.4212 12.933 13.4212 12.5765 13.6029C12.2629 13.7626 12.0079 14.0176 11.8482 14.3312C11.6665 14.6877 11.6665 15.1544 11.6665 16.0879V24.0879C11.6665 25.0213 11.6665 25.488 11.8482 25.8445C12.0079 26.1581 12.2629 26.4131 12.5765 26.5729C12.933 26.7545 13.3997 26.7545 14.3332 26.7545Z"
                              stroke="#144A6C"
                            />
                          </svg>
                        ),
                        label: "Email",
                        value: "Something@gmail.com",
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
                              d="M19.9997 29.2545C25.0623 29.2545 29.1663 25.1505 29.1663 20.0879C29.1663 15.0253 25.0623 10.9212 19.9997 10.9212M19.9997 29.2545C14.9371 29.2545 10.833 25.1505 10.833 20.0879C10.833 15.0253 14.9371 10.9212 19.9997 10.9212M19.9997 29.2545C21.8406 29.2545 23.333 25.1505 23.333 20.0879C23.333 15.0253 21.8406 10.9212 19.9997 10.9212M19.9997 29.2545C18.1587 29.2545 16.6663 25.1505 16.6663 20.0879C16.6663 15.0253 18.1587 10.9212 19.9997 10.9212M11.6663 16.7545H28.333M11.6663 22.5879H28.333"
                              stroke="#144A6C"
                              strokeLinecap="round"
                            />
                          </svg>
                        ),
                        label: "Language",
                        value: "English, Spanish",
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
                              d="M21.6665 16.7545H24.9998M21.6665 20.0879H24.9998M21.6665 23.4212H24.9998M14.3332 26.7545H25.6665C26.5999 26.7545 27.0666 26.7545 27.4232 26.5729C27.7368 26.4131 27.9917 26.1581 28.1515 25.8445C28.3332 25.488 28.3332 25.0213 28.3332 24.0879V16.0879C28.3332 15.1544 28.3332 14.6877 28.1515 14.3312C27.9917 14.0176 27.7368 13.7626 27.4232 13.6029C27.0666 13.4212 26.5999 13.4212 25.6665 13.4212H14.3332C13.3997 13.4212 12.933 13.4212 12.5765 13.6029C12.2629 13.7626 12.0079 14.0176 11.8482 14.3312C11.6665 14.6877 11.6665 15.1544 11.6665 16.0879V24.0879C11.6665 25.0213 11.6665 25.488 11.8482 25.8445C12.0079 26.1581 12.2629 26.4131 12.5765 26.5729C12.933 26.7545 13.3997 26.7545 14.3332 26.7545ZM15.4165 20.0879H17.9165C18.1466 20.0879 18.3332 19.9013 18.3332 19.6712V17.1712C18.3332 16.9411 18.1466 16.7545 17.9165 16.7545H15.4165C15.1864 16.7545 14.9998 16.9411 14.9998 17.1712V19.6712C14.9998 19.9013 15.1864 20.0879 15.4165 20.0879Z"
                              stroke="#144A6C"
                              strokeLinecap="round"
                            />
                          </svg>
                        ),
                        label: "License Number",
                        value: "34-34323-se43",
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
                              d="M12.5 18.4212H27.5M16.6667 15.0879V11.7546M23.3333 15.0879V11.7546M17.8333 28.4212H22.1667C24.0335 28.4212 24.9669 28.4212 25.68 28.0579C26.3072 27.7384 26.8171 27.2284 27.1367 26.6012C27.5 25.8882 27.5 24.9548 27.5 23.0879V18.7546C27.5 16.8877 27.5 15.9543 27.1367 15.2413C26.8171 14.6141 26.3072 14.1041 25.68 13.7846C24.9669 13.4212 24.0335 13.4212 22.1667 13.4212H17.8333C15.9665 13.4212 15.0331 13.4212 14.32 13.7846C13.6928 14.1041 13.1829 14.6141 12.8633 15.2413C12.5 15.9543 12.5 16.8877 12.5 18.7546V23.0879C12.5 24.9548 12.5 25.8882 12.8633 26.6012C13.1829 27.2284 13.6928 27.7384 14.32 28.0579C15.0331 28.4212 15.9665 28.4212 17.8333 28.4212Z"
                              stroke="#144A6C"
                              strokeLinecap="round"
                            />
                          </svg>
                        ),
                        label: "License Expiry",
                        value: "23-10-2025",
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

                  <div className="bg-white rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <div>
                      <h3 className="text-[#144A6C] font-semibold mb-2">
                        Availability
                      </h3>
                      <div className="rounded-xl">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={["StaticDatePicker"]}>
                            <DemoItem>
                              <StaticDatePicker
                                defaultValue={dayjs("2022-04-17")}
                              />
                            </DemoItem>
                          </DemoContainer>
                        </LocalizationProvider>
                      </div>
                    </div>
                    <div>
                      <div className="bg-[#F9FAFB] p-5 rounded-xl">
                        <h3 className="text-[#000] font-regular mb-2">
                          Thursday, 10th August
                        </h3>
                        <div className="grid md:grid-cols-3 grid-col-2 gap-2 mt-6">
                          {[
                            "05:30pm",
                            "10:30am",
                            "02:30pm",
                            "03:00pm",
                            "04:30pm",
                            "05:00pm",
                            "05:30pm",
                            "10:30am",
                            "02:30pm",
                            "03:00pm",
                            "04:30pm",
                            "05:00pm",
                            "05:30pm",
                            "10:30am",
                            "02:30pm",
                            "03:00pm",
                            "04:30pm",
                            "05:00pm",
                          ].map((slot, idx) => (
                            <button
                              key={idx}
                              className="bg-gray-100 hover:bg-[#CEE5E4] text-sm bg-[#FFF] text-[#000] py-2 px-2 rounded border border-[#E5E5E5]"
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
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
                          Visit Reason
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Last Visit
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Next Visit
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Treatment Required
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Actions
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
                          Treatment
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Patient Name
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Date Performed
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Status
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
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <span
                                className={`
        inline-flex px-3 py-1 rounded-full text-xs font-medium
        ${
          doctor.Status === "Complete"
            ? "bg-[#F8FFF8] text-[#177606] border border-[#B7EFAB] rounded-sm pl-4 pr-4 pt-2 pb-2"
            : ""
        }
        ${
          doctor.Status === "Pending"
            ? "bg-[#F3F3F4] text-[#6E6D6F] border border-[#9C9C9C] rounded-sm pl-4 pr-4 pt-2 pb-2"
            : ""
        }
        ${
          doctor.Status === "Ongoing"
            ? "bg-[#FFFEF8] text-[#767306] border border-[#EFEEAB] rounded-sm pl-4 pr-4 pt-2 pb-2"
            : ""
        }
      `}
                              >
                                {doctor.Status}
                              </span>
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

          {/* Right Panel */}
          <div className="bg-white rounded-xl p-4">
            <h3 className="text-[#144A6C] text-2xl font-regular mb-4">
              Upcoming Appointments
            </h3>
            <hr className="bg-[#F6F6F6]" />
            <div className="space-y-4 mt-3 max-h-[1070px] overflow-y-auto">
              {/* Today Section */}
              <span className="text-[#56555C] p-3 block">Today</span>
              {[...Array(10)].map((_, i) => (
                <div
                  key={`today-${i}`}
                  className="rounded p-3 hover:bg-[#CEE5E4] mt-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-[#144A6C] font-medium text-md">
                      Root Canal
                    </div>
                    <div className="client-name">
                      <p className="text-[#606061]">Chandler M Bingg</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-[#606061]">
                      10:00am - 11:00am
                    </div>
                    <div className="text-[#606061]">Nov 01, 2024</div>
                  </div>
                </div>
              ))}

              <hr className="bg-[#F6F6F6] my-4" />

              {/* 12 July Section */}
              <span className="text-[#56555C] p-3 block">12 July</span>
              {[...Array(3)].map((_, i) => (
                <div
                  key={`12july-2025${i}`}
                  className="rounded p-3 hover:bg-[#CEE5E4] mt-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-[#144A6C] font-medium text-md">
                      Root Canal
                    </div>
                    <div className="client-name">
                      <p className="text-[#606061]">Joey Tribbiani</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-[#606061]">
                      02:00pm - 03:00pm
                    </div>
                    <div className="text-[#606061]">Jul 12, 2024</div>
                  </div>
                </div>
              ))}

              {/* 12 July Section */}
              <span className="text-[#56555C] p-3 block">12 July</span>
              {[...Array(3)].map((_, i) => (
                <div
                  key={`12july-2025${i}`}
                  className="rounded p-3 hover:bg-[#CEE5E4] mt-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-[#144A6C] font-medium text-md">
                      Root Canal
                    </div>
                    <div className="client-name">
                      <p className="text-[#606061]">Joey Tribbiani</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-[#606061]">
                      02:00pm - 03:00pm
                    </div>
                    <div className="text-[#606061]">Jul 12, 2024</div>
                  </div>
                </div>
              ))}
            </div>
            {/* <hr className="bg-[#F6F6F6]" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
