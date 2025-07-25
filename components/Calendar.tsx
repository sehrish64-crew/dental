// 'use client';

// import { useEffect, useState } from 'react';
// import { createPortal } from 'react-dom';
// import FullCalendar, { EventClickArg, DateSelectArg } from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';

// interface CalendarEvent {
//   title: string;
//   start: string;
//   end: string;
//   backgroundColor?: string;
//   textColor?: string;
//   borderColor?: string;
//   allDay?: boolean;
// }

// const addDays = (date: Date, days: number): Date => {
//   const result = new Date(date);
//   result.setDate(result.getDate() + days);
//   return result;
// };

// const formatDate = (date: Date): string => {
//   return date.toLocaleDateString('en-GB', {
//     day: 'numeric',
//     month: 'long',
//     year: 'numeric',
//   });
// };

// export default function CalendarPage() {
//   const [events, setEvents] = useState<CalendarEvent[]>([]);
//   const [selectedEvent, setSelectedEvent] = useState<any>(null);
//   const [selectedDateInfo, setSelectedDateInfo] = useState<DateSelectArg | null>(null);
//   const [modalOpen, setModalOpen] = useState<boolean>(false);
//   const [title, setTitle] = useState<string>('');

//   const today = new Date();

//   useEffect(() => {
//     const baseEvents: CalendarEvent[] = [
//       {
//         title: 'Revision',
//         start: `${addDays(today, 0).toISOString().split('T')[0]}T12:00:00`,
//         end: `${addDays(today, 0).toISOString().split('T')[0]}T13:00:00`,
//         backgroundColor: '#CEE5E4',
//         textColor: '#629297',
//         borderColor: '#629297',
//       },
//     ];
//     setEvents(baseEvents);
//   }, []);

//   const handleDateSelect = (info: DateSelectArg) => {
//     const blockedStart = addDays(today, 17).getTime();
//     const blockedEnd = addDays(today, 20).getTime();
//     const selectedStart = info.start.getTime();
//     const selectedEnd = info.end?.getTime() || selectedStart;

//     if (
//       (selectedStart < blockedEnd && selectedEnd > blockedStart) ||
//       (selectedEnd > blockedStart && selectedStart < blockedEnd)
//     ) {
//       alert('Events cannot be added in the blocked date range.');
//       return;
//     }

//     if (info.allDay) {
//       alert('Please select a specific time slot, not an all-day range.');
//       return;
//     }

//     setSelectedDateInfo(info);
//     setTitle('');
//     setSelectedEvent(null);
//     setModalOpen(true);
//   };

//   const handleEventClick = (info: EventClickArg) => {
//     setSelectedEvent(info.event);
//     setTitle(info.event.title);
//     setModalOpen(true);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!title) return;

//     if (selectedEvent) {
//       selectedEvent.setProp('title', title);
//     } else if (selectedDateInfo) {
//       setEvents((prev) => [
//         ...prev,
//         {
//           title,
//           start: selectedDateInfo.startStr,
//           end: selectedDateInfo.endStr,
//           allDay: false,
//         },
//       ]);
//     }

//     setModalOpen(false);
//     setSelectedEvent(null);
//     setSelectedDateInfo(null);
//     setTitle('');
//   };

//   return (
//     <div className="card">
//       <div className="p-4 sm:p-6 min-h-screen">
//         <div className="bg-white rounded overflow-x-auto min-w-0">
//           <FullCalendar
//             height="auto"
//             plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//             initialView="timeGridDay"
//             selectable={true}
//             selectMirror={true}
//             editable={true}
//             events={events}
//             select={handleDateSelect}
//             eventClick={handleEventClick}
//             headerToolbar={{
//               left: 'prev,next today',
//               center: 'title',
//               right: 'dayGridMonth,timeGridWeek,timeGridDay',
//             }}
//           />
//         </div>

//         {modalOpen &&
//           createPortal(
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//               <div className="bg-white rounded-lg p-6 w-full max-w-md">
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="text-lg font-semibold">
//                     {selectedDateInfo
//                       ? formatDate(selectedDateInfo.start)
//                       : 'Edit Event'}
//                   </h2>
//                   <button
//                     onClick={() => setModalOpen(false)}
//                     className="text-gray-600"
//                   >
//                     &times;
//                   </button>
//                 </div>
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-4">
//                     <label
//                       className="block text-sm font-medium mb-1"
//                       htmlFor="eventTitle"
//                     >
//                       Add event title
//                     </label>
//                     <input
//                       id="eventTitle"
//                       type="text"
//                       value={title}
//                       onChange={(e) => setTitle(e.target.value)}
//                       className="w-full border border-gray-300 rounded px-3 py-2"
//                       required
//                     />
//                   </div>
//                   <div className="flex justify-end gap-2">
//                     <button
//                       type="button"
//                       onClick={() => setModalOpen(false)}
//                       className="px-4 py-2 border rounded text-[#144A6C]"
//                     >
//                       Close
//                     </button>
//                     <button
//                       type="submit"
//                       className="px-4 py-2 bg-[#144A6C] text-white rounded"
//                     >
//                       Save changes
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>,
//             document.body
//           )}
//       </div>
//     </div>
//   );
// }
