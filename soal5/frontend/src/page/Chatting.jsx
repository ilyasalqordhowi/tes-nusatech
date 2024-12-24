import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Chatting = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  // Contoh data pesan
  const [messages, setMessages] = useState([
    {
      id: 1,
      userId: "1",
      sender: "Giffard Kennedy",
      text: "Halo, ada yang bisa saya bantu?",
      time: "13:30",
      date: "Sunday, July 15",
      isMe: false,
    },
    {
      id: 2,
      userId: "2",
      sender: "Garland Allyn",
      text: "Terima kasih atas bantuannya!",
      time: "14:00",
      date: "Monday, July 16",
      isMe: false,
    },
    {
      id: 3,
      userId: "1",
      sender: "You",
      text: "Tentu, bagaimana saya bisa membantu?",
      time: "13:45",
      date: "Sunday, July 15",
      isMe: true,
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  // Filter pesan berdasarkan userId
  const filteredMessages = messages.filter((msg) => msg.userId === userId);

  const handleSend = () => {
    if (newMessage.trim() === "") return;
    const newMsg = {
      id: messages.length + 1,
      userId: userId,
      sender: "You",
      text: newMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      date: "Today",
      isMe: true,
    };
    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center">
          <button className="p-2 text-gray-600" onClick={() => navigate("/")}>
            <span className="material-icons">arrow_back</span>
          </button>
          <img
            src={`https://via.placeholder.com/50?text=${userId}`}
            alt="User"
            className="w-10 h-10 rounded-full mx-2"
          />
          <div>
            <h1 className="text-sm font-bold text-gray-800">
              {filteredMessages[0]?.sender || "User"}
            </h1>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {filteredMessages.map((msg, index) => (
          <React.Fragment key={msg.id}>
            {(index === 0 ||
              msg.date !== filteredMessages[index - 1]?.date) && (
              <div className="text-xs text-gray-500 text-center mb-2">
                {msg.date}
              </div>
            )}
            <div
              className={"flex"` ${msg.isMe ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`p-3 rounded-lg text-sm ${
                  msg.isMe
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                style={{ maxWidth: "70%" }}
              >
                <p>{msg.text}</p>
                <span className="text-xs text-gray-300 mt-2 block text-right">
                  {msg.time}
                </span>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Input Pesan */}
      <div className="bg-white shadow-md p-4 flex items-center">
        <button className="p-2 text-gray-600">
          <span className="material-icons">add</span>
        </button>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Text Message"
          className="flex-1 border-none outline-none bg-gray-100 rounded-full px-4 py-2 mx-2"
        />
        <button onClick={handleSend} className="p-2 text-gray-600">
          <span className="material-icons">send</span>
        </button>
      </div>
    </div>
  );
};

export default Chatting;
