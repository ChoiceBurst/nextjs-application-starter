"use client";

import React, { useState, useEffect } from "react";

const apps = [
  { name: "TV+", bgColor: "bg-white/30", textColor: "text-black" },
  { name: "Netflix", bgColor: "bg-black", textColor: "text-red-600" },
  { name: "Ambient", bgColor: "bg-green-600/70", textColor: "text-white" },
  { name: "Cabin Control", bgColor: "bg-gray-700/70", textColor: "text-white" },
  { name: "Map", bgColor: "bg-blue-600/70", textColor: "text-white" },
];

export default function Home() {
  const [unwindMode, setUnwindMode] = useState(true);
  const [localTime, setLocalTime] = useState(new Date());

  // Update local time every minute
  useEffect(() => {
    const timer = setInterval(() => setLocalTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Placeholder flight data
  const flightETA = "2 h 30 mn";
  const moodMatch = "50 mins of chill vibes";
  const productivityReady = "Ready to boost productivity?";
  const airspeed = "524 mph";
  const altitude = "38,000 ft";
  const meditationTime = "10 min";
  const energyScore = 84;
  const energyUser = "Cornation";

  return (
    <main className="min-h-screen bg-[url('/aerial-bg.jpg')] bg-cover bg-center relative text-white p-6 flex flex-col gap-8">
      {/* Overlay for glassy effect */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm -z-10"></div>

      {/* Top Row */}
      <section className="grid grid-cols-3 gap-6">
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 flex flex-col">
          <h3 className="uppercase text-xs tracking-widest mb-2">
            Your Flight at a Glance
          </h3>
          <p className="text-3xl font-semibold">{`ETA\n${flightETA}`}</p>
        </div>
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 flex flex-col">
          <h3 className="uppercase text-xs tracking-widest mb-2">Mood Matches</h3>
          <p className="text-3xl font-semibold">{moodMatch}</p>
        </div>
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 flex flex-col justify-between">
          <h3 className="uppercase text-xs tracking-widest mb-2">Unwind Mode</h3>
          <button
            onClick={() => setUnwindMode(!unwindMode)}
            className="mt-auto bg-white/30 hover:bg-white/50 rounded-lg py-2 text-center font-semibold"
          >
            {unwindMode ? "Switch to Productivity Mode" : "Switch to Unwind Mode"}
          </button>
          <p className="mt-2 text-sm italic">
            {unwindMode ? "Relax and chill" : productivityReady}
          </p>
        </div>
      </section>

      {/* Middle Row - Apps */}
      <section className="grid grid-cols-5 gap-6">
        {apps.map((app) => (
          <div
            key={app.name}
            className={`flex flex-col items-center justify-center rounded-xl p-4 ${app.bgColor} cursor-pointer hover:scale-105 transform transition`}
          >
            <div
              className={`w-16 h-16 rounded-lg flex items-center justify-center ${app.textColor} font-bold text-xl select-none`}
            >
              {app.name[0]}
            </div>
            <span className="mt-2 text-sm">{app.name}</span>
          </div>
        ))}
      </section>

      {/* Bottom Row - Widgets */}
      <section className="bg-white/20 backdrop-blur-md rounded-xl p-4 flex justify-between items-center text-sm">
        <div className="flex flex-col items-center">
          <span className="uppercase tracking-widest text-xs">Local Time</span>
          <span className="font-semibold">
            {localTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="uppercase tracking-widest text-xs">Airspeed</span>
          <span className="font-semibold">{airspeed}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="uppercase tracking-widest text-xs">Altitude</span>
          <span className="font-semibold">{altitude}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="uppercase tracking-widest text-xs">Meditation</span>
          <span className="font-semibold">{meditationTime}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="uppercase tracking-widest text-xs">Energy</span>
          <span className="font-semibold">
            {energyScore} - {energyUser}
          </span>
        </div>
      </section>
    </main>
  );
}
