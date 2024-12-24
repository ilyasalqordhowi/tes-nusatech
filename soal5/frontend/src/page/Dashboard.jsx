import React, { useState } from "react";
import { FaComments, FaGear } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [currentPage, setCurrentPage] = useState("Chat");

  const chats = [
    {
      id: 1,
      name: "Giffard Kennedy",
      email: "giffardkennedy@gmail.com",
      count: 2,
    },
    { id: 2, name: "Garland Allyn", email: "garlandallyn@gmail.com", count: 2 },
    { id: 3, name: "Avice Rain", email: "avicerain@gmail.com", count: 2 },
    { id: 4, name: "Deeann Ashton", email: "deeannashton@gmail.com", count: 2 },
    {
      id: 5,
      name: "Bethney Lizbeth",
      email: "bethneylizbeth@gmail.com",
      count: 2,
    },
  ];

  const handleLogout = () => {
    alert("You have logged out.");
  };

  const navigate = useNavigate();

  const handleChatClick = (chatId) => {
    navigate(`/chatting/${chatId}`);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {currentPage === "Chat" && (
        <>
          <header className="bg-white shadow-md py-4 px-6">
            <h1 className="text-lg font-bold text-gray-800">Chats</h1>
          </header>

          <div className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="User"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h2 className="text-sm font-bold text-gray-800">Nusatech</h2>
                <p className="text-sm text-gray-500">Nusatech@company.co.id</p>
              </div>
            </div>
            <button className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">
              +
            </button>
          </div>

          <div className="flex justify-around bg-white py-3 shadow-sm">
            <button className="text-green-500 font-semibold">All</button>
            <button className="text-gray-500">Groups</button>
            <button className="text-gray-500">Unread</button>
          </div>

          <div className="p-4">
            {chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => handleChatClick(chat.id)}
                className="flex items-center bg-white p-4 rounded-lg shadow-md mb-4 cursor-pointer hover:bg-green-50"
              >
                <img
                  src="https://via.placeholder.com/50"
                  alt={chat.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-gray-800">
                    {chat.name}
                  </h3>
                  <p className="text-sm text-gray-500">{chat.email}</p>
                </div>
                <div className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                  {chat.count}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {currentPage === "Settings" && (
        <>
          <header className="bg-white shadow-md py-4 px-6">
            <h1 className="text-lg font-bold text-gray-800">Setting</h1>
          </header>

          <div
            onClick={() => alert("Navigating to Profile")}
            className="bg-white flex items-center p-4 shadow-sm rounded-lg mx-4 mt-4 cursor-pointer hover:bg-gray-50"
          >
            <img
              src="https://via.placeholder.com/50"
              alt="User"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="flex-1">
              <h2 className="text-sm font-bold text-gray-800">Nusatech</h2>
              <p className="text-sm text-gray-500">Nusatech@company.co.id</p>
            </div>
            <span className="text-gray-400">›</span>
          </div>

          <div className="mt-4 space-y-4">
            <div
              onClick={() => alert("Navigating to Change Username")}
              className="flex items-center bg-white p-4 shadow-sm rounded-lg mx-4 cursor-pointer hover:bg-gray-50"
            >
              <span className="material-icons text-gray-500 mr-4">person</span>
              <p className="text-sm flex-1 text-gray-800">Change Username</p>
              <span className="text-gray-400">›</span>
            </div>

            <div
              onClick={() => alert("Navigating to Change Password")}
              className="flex items-center bg-white p-4 shadow-sm rounded-lg mx-4 cursor-pointer hover:bg-gray-50"
            >
              <span className="material-icons text-gray-500 mr-4">lock</span>
              <p className="text-sm flex-1 text-gray-800">Change Password</p>
              <span className="text-gray-400">›</span>
            </div>
          </div>

          <div className="mt-8 mx-4">
            <button
              onClick={handleLogout}
              className="w-full text-sm font-semibold text-red-500 bg-white py-2 rounded-lg shadow-md hover:bg-red-50"
            >
              Logout
            </button>
          </div>
        </>
      )}

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around py-3">
        <div
          onClick={() => handleNavigation("Chat")}
          className={`text-sm cursor-pointer flex flex-col items-center ${
            currentPage === "Chat" ? "text-green-500" : "text-gray-500"
          }`}
        >
          <span>
            <FaComments />
          </span>
          <p>Chat</p>
        </div>
        <div
          onClick={() => handleNavigation("Settings")}
          className={`text-sm cursor-pointer flex flex-col items-center ${
            currentPage === "Settings" ? "text-green-500" : "text-gray-500"
          }`}
        >
          <span>
            <FaGear />
          </span>
          <p>Setting</p>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
