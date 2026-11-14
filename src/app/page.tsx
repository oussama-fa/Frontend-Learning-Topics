
"use client";

import { useState } from "react";
import { Modal } from "../components/Modal";
import {
  sidebarData,
  type Topic,
  type TopicContent,
} from "@/data/sidebarData";

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [selectedContent, setSelectedContent] = useState<TopicContent | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-gray-50 font-mono text-black">
      <h1 className="p-4 text-center text-4xl font-bold underline">
        Frontend
      </h1>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-1/5 min-w-48 flex flex-col gap-2 p-4 bg-white border-r">
          {sidebarData.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedTopic(item);
                setSelectedContent(null);
                setOpen(false);
              }}
              className={`rounded-lg p-3 text-left transition-colors ${
                selectedTopic?.id === item.id
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {item.title}
            </button>
          ))}
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-8">
          {selectedTopic ? (
            <>
              <h2 className="text-2xl font-bold mb-6">
                {selectedTopic.title}
              </h2>

              <div className="flex flex-wrap gap-4">
                {selectedTopic.content.map((topic, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedContent(topic);
                      setOpen(true);
                    }}
                    disabled={!topic.title}
                    className="rounded-lg bg-white border border-gray-200 p-5 shadow-sm hover:shadow-md hover:border-blue-400 transition-all disabled:opacity-50"
                  >
                    {topic.title || "No content available"}
                  </button>
                ))}

              </div>
            </>
          ) : (
            <p className="text-gray-500 text-center mt-20">
              Select a category from the sidebar.
            </p>
          )}

        </main>

      </div>

      {/* Modal */}
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        {selectedContent && (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              {selectedContent.title}
            </h2>
            <p>{selectedContent.content}</p>
          </>
        )}
      </Modal>
    </div>
  );
}
