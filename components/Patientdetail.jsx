"use client";

import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import flatpickr from "flatpickr";

export default function Patientdetail() {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = [
    "Details",
    "Background",
    "Current Illness",
    "Dental Exam",
    "Dx & Tx Plan",
    "Evolution",
    "Quotes",
  ];
  flatpickr("#datepicker", {
    dateFormat: "Y-m-d", // or any other format
  });
  const openSlots = [
    { id: 1, name: "No" },
    { id: 2, name: "Yes - Light" },
    { id: 3, name: "Yes - Heavy" },
  ];
  const treatments = [
    { id: 1, name: "Sporadically" },
    { id: 2, name: "Always" },
    { id: 3, name: "Never" },
  ];
  const lunchTimeSlots = [
    { id: 1, name: "No" },
    { id: 2, name: "Yes - Light" },
    { id: 3, name: "Yes - Heavy" },
  ];
  const mealOptions = [
    { id: 1, name: "No" },
    { id: 2, name: "Yes - Light" },
    { id: 3, name: "Yes - Heavy" },
  ];
  const snackSlotOptions = [
    { id: 1, name: "No" },
    { id: 2, name: "Yes - Light" },
    { id: 3, name: "Yes - Heavy" },
  ];
  const dinnerSlotOptions = [
    { id: 1, name: "No" },
    { id: 2, name: "Yes - Light" },
    { id: 3, name: "Yes - Heavy" },
  ];
  const FrequencytwoOptions = [
    { id: 1, name: "Sporadically" },
    { id: 2, name: "Always" },
    { id: 3, name: "Never" },
  ];
  const FrequencythreeOptions = [
    { id: 1, name: "Sporadically" },
    { id: 2, name: "Always" },
    { id: 3, name: "Never" },
  ];
  const FrequencyfourOptions = [
    { id: 1, name: "Sporadically" },
    { id: 2, name: "Always" },
    { id: 3, name: "Never" },
  ];
  const FrequencyfiveOptions = [
    { id: 1, name: "Sporadically" },
    { id: 2, name: "Always" },
    { id: 3, name: "Never" },
  ];
  const activities = [
    { id: 1, name: "Yes" },
    { id: 2, name: "No" },
  ];

  const smokeOptions = [
    { id: 1, name: "Yes" },
    { id: 2, name: "No" },
  ];
  const alcoholOptions = [
    { id: 1, name: "Yes" },
    { id: 2, name: "No" },
  ];
  const teethOptions = [
    { id: 1, name: "Never" },
    { id: 2, name: "1 times/day" },
    { id: 3, name: "2 times/day" },
    { id: 4, name: "3 times/day" },
  ];
  const flossOptions = [
    { id: 1, name: "No" },
    { id: 2, name: "Yes" },
  ];
  const hygieneOptions = [
    { id: 1, name: "Not Appropriate" },
    { id: 2, name: "Appropriate" },
  ];

  const nailBitingOptions = [
    { id: 1, name: "No" },
    { id: 2, name: "Yes" },
  ];
  const objectBitingOptions = [
    { id: 1, name: "No" },
    { id: 2, name: "Yes" },
  ];

  const observationOptions = [
    { id: 1, name: "Yes" },
    { id: 2, name: "No" },
  ];
  const surgeryOptions = [
    { id: 1, name: "Yes" },
    { id: 2, name: "No" },
  ];
  const options = [
    { id: 1, name: "Yes" },
    { id: 2, name: "No" },
  ];
  const bloodTypeOptions = [
    { id: 1, name: "A+" },
    { id: 2, name: "A-" },
    { id: 3, name: "B+" },
    { id: 4, name: "B-" },
    { id: 5, name: "AB+" },
    { id: 6, name: "AB-" },
    { id: 7, name: "O+" },
    { id: 8, name: "O-" },
    { id: 9, name: "Either" },
  ];
  const pregnancyOptions = [
    { id: 1, name: "Yes" },
    { id: 2, name: "No" },
    { id: 3, name: "Not sure" },
  ];
  const breastfeedingOptions = [
    { id: 1, name: "Yes" },
    { id: 2, name: "No" },
    { id: 3, name: "Not applicable" },
  ];
  const asaOptions = [
    { id: 1, name: "ASA I - Healthy patient" },
    { id: 2, name: "ASA II - Mild systemic disease" },
    { id: 3, name: "ASA III - Severe systemic disease" },
    { id: 4, name: "ASA IV - Severe systemic disease (life-threatening)" },
    { id: 5, name: "ASA V - Moribund patient not expected to survive" },
  ];
  const eyeOptions = [
    { id: 1, name: "Normal Vision" },
    { id: 2, name: "Wears Glasses" },
    { id: 3, name: "Wears Contact Lenses" },
    { id: 4, name: "Color Blindness" },
    { id: 5, name: "Blurred Vision" },
    { id: 6, name: "Recent Eye Surgery" },
  ];
  const earOptions = [
    { id: 1, name: "Normal Hearing" },
    { id: 2, name: "Hearing Loss" },
    { id: 3, name: "Tinnitus (Ringing)" },
    { id: 4, name: "Ear Pain" },
    { id: 5, name: "Ear Discharge" },
    { id: 6, name: "Uses Hearing Aid" },
  ];
  const noseOptions = [
    { id: 1, name: "Normal" },
    { id: 2, name: "Nasal Congestion" },
    { id: 3, name: "Runny Nose" },
    { id: 4, name: "Bleeding" },
    { id: 5, name: "Loss of Smell" },
    { id: 6, name: "Nasal Polyps" },
  ];
  const throatOptions = [
    { id: 1, name: "Normal" },
    { id: 2, name: "Sore Throat" },
    { id: 3, name: "Tonsillitis" },
    { id: 4, name: "Hoarseness" },
    { id: 5, name: "Difficulty Swallowing" },
    { id: 6, name: "Throat Infection" },
  ];

  const [selectedThroat, setSelectedThroat] = useState(null);
  const [selectedNose, setSelectedNose] = useState(null);
  const [selectedEars, setSelectedEars] = useState(null);
  const [selectedEyes, setSelectedEyes] = useState(null);
  const [selectedASA, setSelectedASA] = useState(null);
  const [selectedBreastfeeding, setSelectedBreastfeeding] = useState(null);
  const [selectedPregnancy, setSelectedPregnancy] = useState(null);
  const [selectedBloodType, setSelectedBloodType] = useState(
    bloodTypeOptions[0]
  );
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedSurgery, setSelectedSurgery] = useState(null);
  const [selectedObservation, setSelectedObservation] = useState(null);
  const [selectedObjectBiting, setSelectedObjectBiting] = useState(null);
  const [selectedNailBiting, setSelectedNailBiting] = useState(null);
  const [selectedLunchSlot, setSelectedLunchSlot] = useState(lunchTimeSlots[0]);
  const [selectedSlot, setSelectedSlot] = useState(openSlots[0]);
  const [selectedTreatment, setSelectedTreatment] = useState(treatments[0]);
  const [selectedMeal, setSelectedMeal] = useState(mealOptions[0]);
  const [selectedSnackSlot, setSelectedSnackSlot] = useState(
    snackSlotOptions[0]
  );
  const [selectedDinnerSlot, setSelectedDinnerSlot] = useState(
    dinnerSlotOptions[0]
  );
  const [Frequencytwo, setFrequencytwo] = useState(FrequencytwoOptions[0]);
  const [Frequencythree, setFrequencythree] = useState(
    FrequencythreeOptions[0]
  );
  const [Frequencyfour, setFrequencyfour] = useState(FrequencyfourOptions[0]);
  const [Frequencyfive, setFrequencyfive] = useState(FrequencyfiveOptions[0]);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedSmoke, setSelectedSmoke] = useState(null);
  const [selectedAlcohol, setSelectedAlcohol] = useState(null);
  const [selectedTeeth, setSelectedTeeth] = useState(null);
  const [selectedFloss, setSelectedFloss] = useState(null);
  const [selectedHygiene, setSelectedHygiene] = useState(null);
  return (
    <div className="overflow-y-auto">
      <div className="mt-6">
        <div className="">
          {/* Left Panel */}
          <div className="xl:col-span-2 space-y-0">
            <div className="flex md:space-x-4 space-x-0 md:flex-row flex-row md:ml-4 ml-0 overflow-x-auto">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedTab(idx)}
                  className={`clip-path-custom-shape py-3 px-6 text-sm font-medium border-b-2 mb-0 md:-mb-px focus:outline-none whitespace-nowrap  ${selectedTab === idx
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
                <div className="bg-white rounded-xl shadow p-6">
                  <div className="form-area mt-3 mb-2">
                    <h3 className="text-[#475467] text-1xl">General Info</h3>
                  </div>
                  <hr />
                  <div className="mt-6" style={{ width: "100%" }}>
                    <div
                      className="flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Ful Name:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Email:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Cell Phone:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>

                    <div
                      className="mt-4 flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Emergency contact:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Relationship:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Referred by:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>

                    <div
                      className="mt-4 flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Birthdate:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="datepicker"
                          type="text"
                        />
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Gender:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Marital status:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>

                    <div
                      className="mt-4 flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Spatiality:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          type="text"
                        />
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Level of education:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Dominant hand:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>

                    <div
                      className="mt-4 flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Street:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          type="text"
                        />
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          City:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Zip code:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>

                    <div
                      className="mt-4 flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Address:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {selectedTab === 1 && (
              <div className="bg-white rounded-xl shadow p-6 overflow-y-auto">
                <div className="">
                  <div className="form-area mt-3 mb-2">
                    <h3 className="text-[#475467] text-1xl">Family History</h3>
                  </div>
                  <hr />
                  <div className="mt-6" style={{ width: "100%" }}>
                    <div
                      className="flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Current Status of Mother:
                        </label>
                        <div className="flex items-center space-x-10 mt-4">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="status"
                              value="alive"
                              className="peer hidden"
                              checked
                            />
                            <div className="w-5 h-5 rounded-full border-2 border-[#144A6C] flex items-center justify-center peer-checked:before:content-[''] peer-checked:before:w-2 peer-checked:before:h-2 peer-checked:before:rounded-full peer-checked:before:bg-[#144A6C]"></div>
                            <span className="ml-2 text-[#475467]">Alive</span>
                          </label>

                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="status"
                              value="deceased"
                              className="peer hidden"
                            />
                            <div className="w-5 h-5 rounded-full border-2 border-[#144A6C] flex items-center justify-center peer-checked:before:content-[''] peer-checked:before:w-2 peer-checked:before:h-2 peer-checked:before:rounded-full peer-checked:before:bg-[#144A6C]"></div>
                            <span className="ml-2 text-[#475467]">
                              Deceased
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Please list any known illnesses or medical conditions:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>
                    <div
                      className="flex gap-4 flex-col md:flex-row mt-4"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Current Status of Father:
                        </label>
                        <div className="flex items-center space-x-10 mt-4">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="statuss"
                              value="alive"
                              className="peer hidden"
                              checked
                            />
                            <div className="w-5 h-5 rounded-full border-2 border-[#144A6C] flex items-center justify-center peer-checked:before:content-[''] peer-checked:before:w-2 peer-checked:before:h-2 peer-checked:before:rounded-full peer-checked:before:bg-[#144A6C]"></div>
                            <span className="ml-2 text-[#475467]">Alive</span>
                          </label>

                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="statuss"
                              value="deceased"
                              className="peer hidden"
                            />
                            <div className="w-5 h-5 rounded-full border-2 border-[#144A6C] flex items-center justify-center peer-checked:before:content-[''] peer-checked:before:w-2 peer-checked:before:h-2 peer-checked:before:rounded-full peer-checked:before:bg-[#144A6C]"></div>
                            <span className="ml-2 text-[#475467]">
                              Deceased
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Please list any known illnesses or medical conditions:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>

                    <div
                      className="mt-4 flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Children:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Please list any known illnesses or medical conditions:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-area mt-4 mb-2">
                    <h3 className="text-[#475467] text-1xl">
                      Personal Pathological History
                    </h3>
                  </div>
                  <hr />
                  <div className="mt-6" style={{ width: "100%" }}>
                    <div
                      className="flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Notes
                        </label>
                        <textarea className="row-span-2 w-full p-4 rounded-lg border border-[#E1E6ED] focus:outline-none focus:ring-1 focus:ring-[#E1E6ED] focus:border-[#E1E6ED]] text-sm text-gray-700 resize-none"></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="form-area mt-4 mb-2">
                    <h3 className="text-[#475467] text-1xl">
                      Personal Pathological History
                    </h3>
                  </div>
                  <hr />

                  <div className="mt-3 mb-4">
                    <label htmlFor="">Diet:</label>
                  </div>
                  <div className="mt-6" style={{ width: "100%" }}>
                    <div
                      className="flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Breakfast
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
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                      ? "bg-[#144A6C] text-white"
                                      : "text-gray-900"
                                    }`
                                  }
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        className={`block truncate ${selected
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
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Frequency
                        </label>
                        <Listbox
                          value={selectedTreatment}
                          onChange={setSelectedTreatment}
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
                              {treatments.map((treatment) => (
                                <Listbox.Option
                                  key={treatment.id}
                                  value={treatment}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                      ? "bg-[#144A6C] text-white"
                                      : "text-gray-900"
                                    }`
                                  }
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        className={`block truncate ${selected
                                          ? "font-medium"
                                          : "font-normal"
                                          }`}
                                      >
                                        {treatment.name}
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

                    <div
                      className="flex gap-4 flex-col md:flex-row mt-4"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Lunch
                        </label>
                        <Listbox
                          value={selectedLunchSlot}
                          onChange={setSelectedLunchSlot}
                        >
                          <div className="mt-2 relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                              <span className="block truncate">
                                {selectedLunchSlot.name}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-[#144A6C]"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {lunchTimeSlots.map((slot) => (
                                <Listbox.Option
                                  key={slot.id}
                                  value={slot}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                      ? "bg-[#144A6C] text-white"
                                      : "text-gray-900"
                                    }`
                                  }
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        className={`block truncate ${selected
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
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Frequency
                        </label>
                        <Listbox
                          value={Frequencyfive}
                          onChange={setFrequencyfive}
                        >
                          <div className="mt-2 relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                              <span className="block truncate">
                                {Frequencyfive.name}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-[#144A6C]"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {FrequencyfiveOptions.map((slot) => (
                                <Listbox.Option
                                  key={slot.id}
                                  value={slot}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                      ? "bg-[#144A6C] text-white"
                                      : "text-gray-900"
                                    }`
                                  }
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        className={`block truncate ${selected
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

                    <div
                      className="flex gap-4 flex-col md:flex-row mt-4"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Meal:
                        </label>
                        <Listbox
                          value={selectedMeal}
                          onChange={setSelectedMeal}
                        >
                          <div className="mt-2 relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                              <span className="block truncate">
                                {selectedMeal.name}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-[#144A6C]"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {mealOptions.map((meal) => (
                                <Listbox.Option
                                  key={meal.id}
                                  value={meal}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                      ? "bg-[#144A6C] text-white"
                                      : "text-gray-900"
                                    }`
                                  }
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        className={`block truncate ${selected
                                          ? "font-medium"
                                          : "font-normal"
                                          }`}
                                      >
                                        {meal.name}
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
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Frequency
                        </label>
                        <Listbox
                          value={Frequencytwo}
                          onChange={setFrequencytwo}
                        >
                          <div className="mt-2 relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                              <span className="block truncate">
                                {Frequencytwo.name}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-[#144A6C]"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {FrequencytwoOptions.map((slot) => (
                                <Listbox.Option
                                  key={slot.id}
                                  value={slot}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                      ? "bg-[#144A6C] text-white"
                                      : "text-gray-900"
                                    }`
                                  }
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        className={`block truncate ${selected
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

                    <div
                      className="flex gap-4 flex-col md:flex-row mt-4"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Snack:
                        </label>
                        <Listbox
                          value={selectedSnackSlot}
                          onChange={setSelectedSnackSlot}
                        >
                          <div className="mt-2 relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                              <span className="block truncate">
                                {selectedSnackSlot.name}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-[#144A6C]"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {snackSlotOptions.map((slot) => (
                                <Listbox.Option
                                  key={slot.id}
                                  value={slot}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                      ? "bg-[#144A6C] text-white"
                                      : "text-gray-900"
                                    }`
                                  }
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        className={`block truncate ${selected
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
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Frequency
                        </label>
                        <Listbox
                          value={Frequencythree}
                          onChange={setFrequencythree}
                        >
                          <div className="mt-2 relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                              <span className="block truncate">
                                {Frequencythree.name}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-[#144A6C]"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {FrequencythreeOptions.map((slot) => (
                                <Listbox.Option
                                  key={slot.id}
                                  value={slot}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                      ? "bg-[#144A6C] text-white"
                                      : "text-gray-900"
                                    }`
                                  }
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        className={`block truncate ${selected
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

                    <div
                      className="flex gap-4 flex-col md:flex-row mt-4"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Dinner:
                        </label>
                        <Listbox
                          value={selectedDinnerSlot}
                          onChange={setSelectedDinnerSlot}
                        >
                          <div className="mt-2 relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                              <span className="block truncate">
                                {selectedDinnerSlot.name}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-[#144A6C]"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {dinnerSlotOptions.map((slot) => (
                                <Listbox.Option
                                  key={slot.id}
                                  value={slot}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                      ? "bg-[#144A6C] text-white"
                                      : "text-gray-900"
                                    }`
                                  }
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        className={`block truncate ${selected
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
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Frequency
                        </label>
                        <Listbox
                          value={Frequencyfour}
                          onChange={setFrequencyfour}
                        >
                          <div className="mt-2 relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                              <span className="block truncate">
                                {Frequencyfour.name}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-[#144A6C]"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {FrequencyfourOptions.map((slot) => (
                                <Listbox.Option
                                  key={slot.id}
                                  value={slot}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                      ? "bg-[#144A6C] text-white"
                                      : "text-gray-900"
                                    }`
                                  }
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        className={`block truncate ${selected
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
                  </div>

                  <div className="mt-6" style={{ width: "100%" }}>
                    <div
                      className="flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Observations
                        </label>
                        <textarea className="row-span-2 w-full p-4 rounded-lg border border-[#E1E6ED] focus:outline-none focus:ring-1 focus:ring-[#E1E6ED] focus:border-[#E1E6ED]] text-sm text-gray-700 resize-none"></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 mb-4">
                    <label htmlFor="">Dwelling:</label>
                  </div>
                  <div
                    className="mt-4 flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Housing description:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Rooms
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Services
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                  <div
                    className="mt-4 flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Vaccines:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Personal hygiene:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="mt-3 mb-4">
                    <label htmlFor="">Habits:</label>
                  </div>

                  <div
                    className="mt-4 flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Do you do sports or physical activities?
                      </label>
                      <Listbox
                        value={selectedActivity}
                        onChange={setSelectedActivity}
                      >
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedActivity?.name || "Select Activity"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {activities.map((activity) => (
                              <Listbox.Option
                                key={activity.id}
                                value={activity}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {activity.name}
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
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Do you smoke?
                      </label>
                      <Listbox
                        value={selectedSmoke}
                        onChange={setSelectedSmoke}
                      >
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedSmoke?.name || "Select Smoke Status"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {smokeOptions.map((option) => (
                              <Listbox.Option
                                key={option.id}
                                value={option}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {option.name}
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
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Do you consume alcohol?
                      </label>
                      <Listbox
                        value={selectedAlcohol}
                        onChange={setSelectedAlcohol}
                      >
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedAlcohol?.name ||
                                "Select Alcohol Consumption"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {alcoholOptions.map((option) => (
                              <Listbox.Option
                                key={option.id}
                                value={option}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {option.name}
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

                  <div
                    className="mt-4 flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        How often do you brush your teeth?
                      </label>

                      <Listbox
                        value={selectedTeeth}
                        onChange={setSelectedTeeth}
                      >
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedTeeth?.name || "Select Teeth Brush time"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {teethOptions.map((option) => (
                              <Listbox.Option
                                key={option.id}
                                value={option}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {option.name}
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
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Do you floss?
                      </label>
                      <Listbox
                        value={selectedFloss}
                        onChange={setSelectedFloss}
                      >
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedFloss?.name || "Select Flossing Habit"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {flossOptions.map((option) => (
                              <Listbox.Option
                                key={option.id}
                                value={option}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {option.name}
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
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Oral hygiene techniques
                      </label>
                      <Listbox
                        value={selectedHygiene}
                        onChange={setSelectedHygiene}
                      >
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedHygiene?.name ||
                                "Select Hygiene Technique"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {hygieneOptions.map((technique) => (
                              <Listbox.Option
                                key={technique.id}
                                value={technique}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {technique.name}
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

                  <div
                    className="mt-4 flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Nail biting
                      </label>
                      <Listbox
                        value={selectedNailBiting}
                        onChange={setSelectedNailBiting}
                      >
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedNailBiting?.name ||
                                "Select Nail Biting Habit"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {nailBitingOptions.map((habit) => (
                              <Listbox.Option
                                key={habit.id}
                                value={habit}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {habit.name}
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
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Biting objects
                      </label>
                      <Listbox
                        value={selectedObjectBiting}
                        onChange={setSelectedObjectBiting}
                      >
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedObjectBiting?.name ||
                                "Select Object Biting Habit"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {objectBitingOptions.map((habit) => (
                              <Listbox.Option
                                key={habit.id}
                                value={habit}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {habit.name}
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
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Observations
                      </label>
                      <Listbox
                        value={selectedObservation}
                        onChange={setSelectedObservation}
                      >
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedObservation?.name ||
                                "Select Observation"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {observationOptions.map((item) => (
                              <Listbox.Option
                                key={item.id}
                                value={item}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {item.name}
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
                  <div className="mt-6" style={{ width: "100%" }}>
                    <div
                      className="flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Personal History Notes
                        </label>
                        <textarea className="row-span-2 w-full p-4 rounded-lg border border-[#E1E6ED] focus:outline-none focus:ring-1 focus:ring-[#E1E6ED] focus:border-[#E1E6ED]] text-sm text-gray-700 resize-none"></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="form-area mt-3 mb-2">
                    <h3 className="text-[#475467] text-1xl">
                      Surgical history
                    </h3>
                  </div>
                  <hr />
                  <div className="mt-6" style={{ width: "100%" }}>
                    <div
                      className="flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Previous hospitalizations
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Surgical history
                        </label>
                        <Listbox
                          value={selectedSurgery}
                          onChange={setSelectedSurgery}
                        >
                          <div className="mt-2 relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                              <span className="block truncate">
                                {selectedSurgery?.name ||
                                  "Select Surgical History"}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-[#144A6C]"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {surgeryOptions.map((item) => (
                                <Listbox.Option
                                  key={item.id}
                                  value={item}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                      ? "bg-[#144A6C] text-white"
                                      : "text-gray-900"
                                    }`
                                  }
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        className={`block truncate ${selected
                                          ? "font-medium"
                                          : "font-normal"
                                          }`}
                                      >
                                        {item.name}
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
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Complications
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6" style={{ width: "100%" }}>
                    <div
                      className="flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Have you ever had a blood transfusion?
                        </label>
                        <Listbox
                          value={selectedOption}
                          onChange={setSelectedOption}
                        >
                          <div className="relative mt-2">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                              <span className="block truncate">
                                {selectedOption.name}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-[#144A6C]"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {options.map((option) => (
                                <Listbox.Option
                                  key={option.id}
                                  value={option}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                      ? "bg-[#144A6C] text-white"
                                      : "text-gray-900"
                                    }`
                                  }
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        className={`block truncate ${selected
                                          ? "font-medium"
                                          : "font-normal"
                                          }`}
                                      >
                                        {option.name}
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
                              ))}
                            </Listbox.Options>
                          </div>
                        </Listbox>
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Blood type
                        </label>
                        <Listbox
                          value={selectedBloodType}
                          onChange={setSelectedBloodType}
                        >
                          <div className="mt-2 relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                              <span className="block truncate">
                                {selectedBloodType?.name || "Select Blood Type"}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-[#144A6C]"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {bloodTypeOptions.map((item) => (
                                <Listbox.Option
                                  key={item.id}
                                  value={item}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                      ? "bg-[#144A6C] text-white"
                                      : "text-gray-900"
                                    }`
                                  }
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        className={`block truncate ${selected
                                          ? "font-medium"
                                          : "font-normal"
                                          }`}
                                      >
                                        {item.name}
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
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Have you had any adverse reactions to anesthesia?
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-area mt-3 mb-2">
                    <h3 className="text-[#475467] text-1xl">
                      Gynecological-obstetric history
                    </h3>
                  </div>
                  <hr />

                  <div className="mt-6" style={{ width: "100%" }}>
                    <div
                      className="flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label className="text-[#757575]">
                          Start of menstruation
                        </label>

                        <div className="mt-2 relative w-full">
                          <input
                            id="datepicker"
                            type="text"
                            className="block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                            placeholder="Select date"
                          />

                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.25 7.5H15.75M6 4.5V1.5M12 4.5V1.5M7.05 16.5H10.95C12.6302 16.5 13.4702 16.5 14.112 16.173C14.6765 15.8854 15.1354 15.4265 15.423 14.862C15.75 14.2202 15.75 13.3802 15.75 11.7V7.8C15.75 6.11984 15.75 5.27976 15.423 4.63803C15.1354 4.07354 14.6765 3.6146 14.112 3.32698C13.4702 3 12.6302 3 10.95 3H7.05C5.36984 3 4.52976 3 3.88803 3.32698C3.32354 3.6146 2.8646 4.07354 2.57698 4.63803C2.25 5.27976 2.25 6.11984 2.25 7.8V11.7C2.25 13.3802 2.25 14.2202 2.57698 14.862C2.8646 15.4265 3.32354 15.8854 3.88803 16.173C4.52976 16.5 5.36984 16.5 7.05 16.5Z"
                                stroke="#A1A5AA"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Are you pregnant?
                        </label>
                        <Listbox
                          value={selectedPregnancy}
                          onChange={setSelectedPregnancy}
                        >
                          <div className="mt-2 relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                              <span className="block truncate">
                                {selectedPregnancy?.name ||
                                  "Are you currently pregnant?"}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-[#144A6C]"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {pregnancyOptions.map((item) => (
                                <Listbox.Option
                                  key={item.id}
                                  value={item}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                      ? "bg-[#144A6C] text-white"
                                      : "text-gray-900"
                                    }`
                                  }
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        className={`block truncate ${selected
                                          ? "font-medium"
                                          : "font-normal"
                                          }`}
                                      >
                                        {item.name}
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
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Previous pregnancies
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6" style={{ width: "100%" }}>
                    <div
                      className="flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Are you Breasfeeding?
                        </label>
                        <Listbox
                          value={selectedBreastfeeding}
                          onChange={setSelectedBreastfeeding}
                        >
                          <div className="mt-2 relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                              <span className="block truncate">
                                {selectedBreastfeeding?.name ||
                                  "Are you currently breastfeeding?"}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-[#144A6C]"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {breastfeedingOptions.map((item) => (
                                <Listbox.Option
                                  key={item.id}
                                  value={item}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                      ? "bg-[#144A6C] text-white"
                                      : "text-gray-900"
                                    }`
                                  }
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        className={`block truncate ${selected
                                          ? "font-medium"
                                          : "font-normal"
                                          }`}
                                      >
                                        {item.name}
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
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Observation
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-area mt-3 mb-2">
                    <h3 className="text-[#475467] text-1xl">
                      Perinatal history
                    </h3>
                  </div>
                  <hr />

                  <div className="mt-6" style={{ width: "100%" }}>
                    <div
                      className="flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Size at birth
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="grid-address"
                          type="text"
                        />
                      </div>

                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Birth weight
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6" style={{ width: "100%" }}>
                    <div
                      className="flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Gestation period
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="grid-address"
                          type="text"
                        />
                      </div>

                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Type of delivery
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6" style={{ width: "100%" }}>
                    <div
                      className="flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Notes
                        </label>
                        <textarea className="row-span-2 w-full p-4 rounded-lg border border-[#E1E6ED] focus:outline-none focus:ring-1 focus:ring-[#E1E6ED] focus:border-[#E1E6ED]] text-sm text-gray-700 resize-none"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 2 && (
              <div className="bg-white rounded-xl shadow p-6">
                <div className="form-area mt-3 mb-2">
                  <h3 className="text-[#475467] text-1xl">Current condition</h3>
                </div>
                <hr />
                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Description of the condition for which you are
                        consulting:
                      </label>
                      <textarea className="row-span-2 w-full p-4 rounded-lg border border-[#E1E6ED] focus:outline-none focus:ring-1 focus:ring-[#E1E6ED] focus:border-[#E1E6ED]] text-sm text-gray-700 resize-none"></textarea>
                    </div>
                  </div>
                </div>
                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Location:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Start:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Duration:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>

                  <div
                    className="mt-4 flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Quality:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Severity:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Relieving and/or exacerbating factors:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>

                  <div
                    className="mt-4 flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Associated signs and symptoms:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="datepicker"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Are you under medical care/treatment?
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Reason:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>

                  <div
                    className="mt-4 flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Doctor’s Name:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Location/Institution:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>

                  <div
                    className="mt-4 flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Phone:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Last visit:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 3 && (
              <div className="bg-white rounded-xl shadow p-6">
                <div className="form-area mt-3 mb-2">
                  <h3 className="text-[#475467] text-1xl">Vital Signs</h3>
                </div>
                <hr />
                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Weight:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Height:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Blood Pressure:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>

                  <div
                    className="mt-4 flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Temperature
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Heartrate:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Respiratory rate
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>

                  <div
                    className="mt-4 flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        ASA Classification
                      </label>
                      <Listbox value={selectedASA} onChange={setSelectedASA}>
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedASA?.name || "Select ASA Classification"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {asaOptions.map((item) => (
                              <Listbox.Option
                                key={item.id}
                                value={item}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {item.name}
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
                  <div className="form-area mt-3 mb-2">
                    <h3 className="text-[#475467] text-1xl">Head</h3>
                  </div>
                  <hr />
                  <div
                    className="mt-4 flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Eyes:
                      </label>
                      <Listbox value={selectedEyes} onChange={setSelectedEyes}>
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedEyes?.name || "Select Eye Condition"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {eyeOptions.map((item) => (
                              <Listbox.Option
                                key={item.id}
                                value={item}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {item.name}
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
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Ears:
                      </label>
                      <Listbox value={selectedEars} onChange={setSelectedEars}>
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedEars?.name || "Select Ear Condition"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {earOptions.map((item) => (
                              <Listbox.Option
                                key={item.id}
                                value={item}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {item.name}
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
                  <div
                    className="mt-4 flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Nose:
                      </label>
                      <Listbox value={selectedNose} onChange={setSelectedNose}>
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedNose?.name || "Select Nose Condition"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {noseOptions.map((item) => (
                              <Listbox.Option
                                key={item.id}
                                value={item}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {item.name}
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
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Throat:
                      </label>
                      <Listbox
                        value={selectedThroat}
                        onChange={setSelectedThroat}
                      >
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedThroat?.name ||
                                "Select Throat Condition"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {throatOptions.map((item) => (
                              <Listbox.Option
                                key={item.id}
                                value={item}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {item.name}
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
                </div>

                <div className="form-area mt-3 mb-2">
                  <h3 className="text-[#475467] text-1xl">
                    bg-white rounded-xl shadow p-6iopulmonary
                  </h3>
                </div>
                <hr />
                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Chest Pain:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Hypertension:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Palpitations
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Dyspnea:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Cough:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Wheezing:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Hemoptysis
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Vomica
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-area mt-3 mb-2">
                  <h3 className="text-[#475467] text-1xl">
                    Abdomen & Urogenital
                  </h3>
                </div>
                <hr />
                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Abdominal Pain
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Diarrhea/Constipation
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Nausea/Vomiting
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Difficulty Swallowing
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Kidney Diseases
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Urinary Issues
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-area mt-3 mb-2">
                  <h3 className="text-[#475467] text-1xl">
                    Neuromuscular & Skin
                  </h3>
                </div>
                <hr />
                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Muscle/Joint pain
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Headache
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Paresthesia
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Seizures
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Anxiety/Depression
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Itching
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Skin lesions
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-area mt-3 mb-2">
                  <h3 className="text-[#475467] text-1xl">Endocrine</h3>
                </div>
                <hr />
                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Diabetes
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Hyper/Hypothyroidism
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Contraceptive methods
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Adrenal Issues
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-area mt-3 mb-2">
                  <h3 className="text-[#475467] text-1xl">Hematologic</h3>
                </div>
                <hr />
                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Anemia
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Bleeding
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Petechiae
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Use of Anticoagulants
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Hemophilia
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-area mt-3 mb-2">
                  <h3 className="text-[#475467] text-1xl">Immunologic</h3>
                </div>
                <hr />
                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Allergies
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Anaphylaxis
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Lymph node inflammation
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Other Immunologic Diseases
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB] dark:text-white"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 4 && (
              <div className="bg-white rounded-xl shadow p-6">
                <div className="form-area mt-3 mb-2">
                  <h3 className="text-[#475467] text-1xl">Diagnosis</h3>
                </div>
                <hr />
                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Description
                      </label>
                      <textarea className="row-span-2 w-full p-4 rounded-lg border border-[#E1E6ED] focus:outline-none focus:ring-1 focus:ring-[#E1E6ED] focus:border-[#E1E6ED]] text-sm text-gray-700 resize-none"></textarea>
                    </div>
                  </div>
                </div>

                <div className="form-area mt-3 mb-2">
                  <h3 className="text-[#475467] text-1xl">
                    General treatment plan
                  </h3>
                </div>
                <hr />
                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Description
                      </label>
                      <textarea className="row-span-2 w-full p-4 rounded-lg border border-[#E1E6ED] focus:outline-none focus:ring-1 focus:ring-[#E1E6ED] focus:border-[#E1E6ED]] text-sm text-gray-700 resize-none"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectedTab === 5 && (
              <div className="bg-white rounded-xl shadow p-6">
                <div className="flex md:flex-row flex-col justify-between mb-2 items-center">
                  <div className="form-area mt-3 mb-2">
                    <h3 className="text-[#475467] text-1xl">Evolution Notes </h3>
                  </div>
                  <div className="corner-btn">
                    <div className="flex gap-2">

                      <button className="border border-[#F0F0F0] rounded-lg flex flex-row gap-2 py-2 px-4 text-[#606061B2]">

                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.9536 0.837891H2.04636C1.3304 0.837891 0.75 1.41829 0.75 2.13425C0.75 2.47807 0.886581 2.8078 1.1297 3.05092L5.66421 7.58544C6.03929 7.96051 6.25 8.46922 6.25 8.99965V13.3518C6.25 14.1094 6.67801 14.8019 7.35557 15.1407L11.0264 16.9761C11.3588 17.1423 11.75 16.9006 11.75 16.5289V8.99965C11.75 8.46922 11.9607 7.96051 12.3358 7.58544L16.8703 3.05092C17.1134 2.8078 17.25 2.47807 17.25 2.13425C17.25 1.41829 16.6696 0.837891 15.9536 0.837891Z" stroke="#606061" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" />
                        </svg>

                        Filter
                      </button>
                      <button className="border border-[#F0F0F0] rounded-lg flex flex-row gap-2 py-2 px-4 text-[#144A6C]">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 7.08789V11.0879M11 11.0879V15.0879M11 11.0879H15M11 11.0879H7M21 11.0879C21 16.6107 16.5228 21.0879 11 21.0879C5.47715 21.0879 1 16.6107 1 11.0879C1 5.56504 5.47715 1.08789 11 1.08789C16.5228 1.08789 21 5.56504 21 11.0879Z"
                            stroke="#144A6C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                        Add
                      </button>

                    </div>
                  </div>
                </div>
                <hr />

                <div className="mt-5">
                  <div className="card">
                    <div className="space-y-4 text-sm text-[#4F4F4F]">
                      {/* Header */}
                      <div className="bg-[#88C8CE14] border border-[#88C8CE61] rounded-lg p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-[#6B7280] font-medium">Date:</p>
                          <p>July 23, 2025 (05:17)</p>
                        </div>
                        <div>
                          <p className="text-[#6B7280] font-medium">Specialty:</p>
                          <p>Diagnosis</p>
                        </div>
                        <div>
                          <p className="text-[#6B7280] font-medium">Location:</p>
                          <p>New York</p>
                        </div>
                        <div>
                          <p className="text-[#6B7280] font-medium">Reason for consultation:</p>
                          <p>test</p>
                        </div>
                      </div>

                      {/* Vitals */}
                      <div className="card">
                        <p className="text-[#144A6C] font-semibold mb-2">Somatometry and vital signs:</p>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                          <p>Height: 33cm</p>
                          <p>Temperature: 2°C</p>
                          <p>Blood pressure: 33/33mmHg</p>
                          <p>Pulse: 33bpm</p>
                          <p>Respiratory rate: 2rpm</p>
                        </div>
                      </div>

                      {/* Notes */}
                      <div className="card">
                        <p className="text-[#144A6C] font-semibold mb-2">Note:</p>
                        <p>
                          The patient came to the appointment for a restorative procedure. <br />
                          Under local anesthesia, carious tissue was removed from teeth 2.4, 2.5, 2.6, and 2.7. <br />
                          The cavities were prepared using etching acid and adhesive, and filled with BL flowable resin.
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="bg-[#144A6C0A] border border-[#144A6C3D] rounded-lg p-4 flex flex-col md:flex-row justify-between text-sm">
                        <p>Next Appointment: July 23, 2025 (05:17)</p>
                        <p className="md:text-right">Attended by: John Oliver</p>
                      </div>
                    </div>

                  </div>
                </div>

                    <div className="mt-5">
                  <div className="card">
                    <div className="space-y-4 text-sm text-[#4F4F4F]">
                      {/* Header */}
                      <div className="bg-[#88C8CE14] border border-[#88C8CE61] rounded-lg p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-[#6B7280] font-medium">Date:</p>
                          <p>July 23, 2025 (05:17)</p>
                        </div>
                        <div>
                          <p className="text-[#6B7280] font-medium">Specialty:</p>
                          <p>Diagnosis</p>
                        </div>
                        <div>
                          <p className="text-[#6B7280] font-medium">Location:</p>
                          <p>New York</p>
                        </div>
                        <div>
                          <p className="text-[#6B7280] font-medium">Reason for consultation:</p>
                          <p>test</p>
                        </div>
                      </div>

                      {/* Vitals */}
                      <div className="card">
                        <p className="text-[#144A6C] font-semibold mb-2">Somatometry and vital signs:</p>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                          <p>Height: 33cm</p>
                          <p>Temperature: 2°C</p>
                          <p>Blood pressure: 33/33mmHg</p>
                          <p>Pulse: 33bpm</p>
                          <p>Respiratory rate: 2rpm</p>
                        </div>
                      </div>

                      {/* Notes */}
                      <div className="card">
                        <p className="text-[#144A6C] font-semibold mb-2">Note:</p>
                        <p>
                          The patient came to the appointment for a restorative procedure. <br />
                          Under local anesthesia, carious tissue was removed from teeth 2.4, 2.5, 2.6, and 2.7. <br />
                          The cavities were prepared using etching acid and adhesive, and filled with BL flowable resin.
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="bg-[#144A6C0A] border border-[#144A6C3D] rounded-lg p-4 flex flex-col md:flex-row justify-between text-sm">
                        <p>Next Appointment: July 23, 2025 (05:17)</p>
                        <p className="md:text-right">Attended by: John Oliver</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            )}
            {selectedTab === 6 && (
              <div className="bg-white rounded-xl shadow p-6">
                <h1>Incomplete section</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
