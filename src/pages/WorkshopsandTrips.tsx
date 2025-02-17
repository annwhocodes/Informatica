import React, { useState } from 'react';

interface Event {
  title: string;
  description: string;
  date: string;
  image: string;
}

interface MonthEvents {
  month: string;
  events: Event[];
  image: string;
}

function WorkshopsAndTrips() {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  const monthlyEvents: MonthEvents[] = [
    {
      month: "April",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      events: [
        {
          title: "FDP ON FULL STACK DEVELOPMENT",
          description: 'The Department of Information Science and Engineering conducted online "Five Day Faculty Development Program on Full Stack" on 22nd April to 27th April 2024. The objective of this program was to introduce participants to the Django framework and its components, to familiarize with frontend technologies such as HTML, CSS and JavaScript in the context of Django and to equip participants with the skills necessary to develop, deploy, and maintain Django-based web applications. The program was coordinated by Dr. M Shilpa, Dr. S Mercy, Prof. Deeksha C & Prof. Priya.',
          date: "22nd April to 27th April 2024",
          image: "https://i.imgur.com/NGi9z0C.png"
        }
      ]
    },
    {
      month: "March",
      image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      events: []
    },
    {
      month: "February",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      events: []
    },
    {
      month: "January",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      events: []
    },
    {
      month: "December",
      image: "https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      events: []
    },
    {
      month: "November",
      image: "https://images.unsplash.com/photo-1511795409834-432f7b1728d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      events: []
    }
  ];

  const handleMonthClick = (month: string) => {
    setSelectedMonth(selectedMonth === month ? null : month);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center">Workshops & Events</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {monthlyEvents.map((monthData) => (
            <div key={monthData.month} className="flex flex-col">
              <button
                onClick={() => handleMonthClick(monthData.month)}
                className={`bg-zinc-900 rounded-lg overflow-hidden hover:bg-zinc-800 transition-all duration-300 ${
                  selectedMonth === monthData.month ? 'ring-2 ring-red-600' : ''
                }`}
              >
                <div className="relative h-48">
                  <img 
                    src={monthData.image}
                    alt={monthData.month}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-bold mb-2">{monthData.month}</h2>
                    <p className="text-gray-300">
                      {monthData.events.length} event{monthData.events.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              </button>

              {/* Events for selected month */}
              {selectedMonth === monthData.month && monthData.events.length > 0 && (
                <div className="mt-4 space-y-4">
                  {monthData.events.map((event, index) => (
                    <div
                      key={index}
                      className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-red-600">{event.title}</h3>
                        <p className="text-sm text-gray-400 mb-4">{event.date}</p>
                        <p className="text-gray-300">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkshopsAndTrips;