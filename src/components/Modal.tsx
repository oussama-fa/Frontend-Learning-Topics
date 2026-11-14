
"use client";

import { useEffect, useRef, type ReactNode, type MouseEvent } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  const handleBackdropClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={handleBackdropClick}
      className="
        m-auto
        w-[90%] max-w-2xl
        max-h-[85vh]
        rounded-xl
        border border-gray-200
        bg-white
        p-0
        shadow-2xl
        backdrop:bg-black/50
      "
    >
      <div className="flex flex-col max-h-[85vh]">

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-xl font-bold text-gray-800">
            Topic Details
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-2xl"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto text-gray-700 whitespace-pre-line leading-relaxed">
          {children}
        </div>

      </div>
    </dialog>
  );
}
