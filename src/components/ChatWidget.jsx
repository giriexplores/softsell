import React, { useState } from "react";

import {
  XMarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

const cannedResponses = [
  {
    question: "How do I sell my license?",
    regex: /sell my license/i,
    answer:
      'To sell your license: go to the "Get a Quote" button, upload your key, then accept our valuation to get paid.',
  },
  {
    question: "What's the payout timeline?",
    regex: /payout timeline/i,
    answer:
      "Payouts typically arrive within 24 hours of approval—you will get an email notification when it is on its way.",
  },
  {
    question: "What are your support hours?",
    regex: /support hours/i,
    answer:
      "We offer 24/7 support via email and live chat. Feel free to ask anything here!",
  },
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const toggleOpen = () => setIsOpen(!isOpen);
  const closeChat = () => setIsOpen(false);

  const handleSend = (text = input) => {
    if (!text.trim()) return;

    const userMsg = { from: "user", text };
    setMessages((m) => [...m, userMsg]);

    // find a matching canned response
    const match = cannedResponses.find((r) => r.regex.test(text));
    const reply = match
      ? match.answer
      : "Sorry, I don't have an answer to that right now. Please fill out our contact form.";

    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: reply }]);
    }, 500);

    setInput("");
  };

  const handleQuickQuestionClick = (question) => {
    handleSend(question);
  };

  return (
    <>
      {/* Chat bubble toggle */}
      <button
        onClick={toggleOpen}
        className="fixed bottom-14 right-6 bg-blue-600 text-white p-1 rounded-xl shadow-lg hover:bg-blue-700 active:scale-95 transition"
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <XMarkIcon className="w-10 h-10 stroke-2 text-red-600" />
        ) : (
          <ChatBubbleOvalLeftEllipsisIcon className="w-10 h-10 animate-bounce" />
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-28 right-4 w-80 h-96 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <h4>SoftSell Chat</h4>
            <button
              onClick={closeChat}
              className="text-white hover:text-gray-200 focus:outline-none"
              aria-label="Close chat"
            >
              <XMarkIcon className="w-6 h-6 text-red-600 stroke-3" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 [scrollbar-width]:none [&::-webkit-scrollbar]:hidden">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg ${
                  msg.from === "user"
                    ? "bg-blue-100 text-blue-900 ml-auto max-w-[80%]"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 mr-auto max-w-[80%]"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Quick Questions - Horizontally Scrollable */}
          {messages.length <= 2 && (
            <div className="px-3 py-2 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 mb-2">Common questions:</p>
              <div className="flex overflow-x-auto pb-2 space-x-2 [scrollbar-width]:none [&::-webkit-scrollbar]:hidden">
                {cannedResponses.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestionClick(item.question)}
                    className="flex-shrink-0 text-left text-sm p-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors whitespace-nowrap"
                  >
                    {item.question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-l px-3 py-2 focus:outline-none"
                placeholder="Type your question…"
              />
              <button
                onClick={() => handleSend()}
                className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700 transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
