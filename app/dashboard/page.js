'use client';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [meetings, setMeetings] = useState([
    { id: 1, name: 'Daily Standup', duration: 15, attendees: 8, cost: 125 },
    { id: 2, name: 'Sprint Planning', duration: 120, attendees: 6, cost: 1200 },
    { id: 3, name: 'Client Review', duration: 60, attendees: 10, cost: 1000 }
  ]);
  
  const totalCost = meetings.reduce((sum, m) => sum + m.cost, 0);
  const totalTime = meetings.reduce((sum, m) => sum + m.duration, 0);

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-gray-900 border-b border-gray-800 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">BleedTime Dashboard</h1>
          <button className="text-gray-400 hover:text-white">Sign Out</button>
        </div>
      </header>

      <main className="container mx-auto p-6">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <p className="text-gray-400 text-sm">Today's Meetings</p>
            <p className="text-3xl font-bold">{meetings.length}</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <p className="text-gray-400 text-sm">Total Cost</p>
            <p className="text-3xl font-bold text-red-600">€{totalCost}</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <p className="text-gray-400 text-sm">Time Wasted</p>
            <p className="text-3xl font-bold">{totalTime} min</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <p className="text-gray-400 text-sm">Avg Cost/Meeting</p>
            <p className="text-3xl font-bold">€{Math.round(totalCost/meetings.length)}</p>
          </div>
        </div>

        {/* Connect Calendar CTA */}
        <div className="bg-gradient-to-r from-red-900 to-red-700 p-8 rounded-lg mb-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Connect Your Calendar</h2>
          <p className="mb-6">Start tracking meeting costs automatically</p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
            Connect Google Calendar
          </button>
        </div>

        {/* Recent Meetings */}
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <h2 className="text-xl font-bold p-6 border-b border-gray-800">Recent Meetings</h2>
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="text-left p-4">Meeting</th>
                <th className="text-left p-4">Duration</th>
                <th className="text-left p-4">Attendees</th>
                <th className="text-right p-4">Cost</th>
              </tr>
            </thead>
            <tbody>
              {meetings.map(meeting => (
                <tr key={meeting.id} className="border-b border-gray-800 hover:bg-gray-800">
                  <td className="p-4">{meeting.name}</td>
                  <td className="p-4">{meeting.duration} min</td>
                  <td className="p-4">{meeting.attendees}</td>
                  <td className="p-4 text-right text-red-600 font-bold">€{meeting.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
