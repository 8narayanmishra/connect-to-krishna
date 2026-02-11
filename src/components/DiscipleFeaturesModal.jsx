import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const DiscipleFeaturesModal = ({ isOpen, onClose }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999]">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL WRAPPER */}
      <div className="absolute inset-0 flex items-end sm:items-center justify-center">
        <div
          className="
            relative
            w-full sm:max-w-4xl
            h-[100dvh] sm:h-auto sm:max-h-[90dvh]
            rounded-t-2xl sm:rounded-2xl
            bg-orange-100/80 dark:bg-orange-500/10
            backdrop-blur-xl
            border border-orange-300/40 dark:border-orange-400/30
            shadow-2xl
            text-orange-900 dark:text-orange-100
            flex flex-col
            animate-modalIn sm:animate-scaleIn
          "
        >
          {/* HEADER */}
          <div className="shrink-0 px-6 py-4 flex items-center justify-between border-b border-orange-300/40 dark:border-orange-400/30">
            <h3 className="text-xl font-bold">
              Disciple Care Portal – Features
            </h3>
            <button
              onClick={onClose}
              aria-label="Close"
              className="
                w-9 h-9 flex items-center justify-center
                rounded-full
                bg-orange-200/60 dark:bg-orange-400/20
                hover:bg-orange-300/70 dark:hover:bg-orange-400/30
                text-xl leading-none
                transition
              "
            >
              ×
            </button>
          </div>

          {/* SCROLLABLE CONTENT */}
          <div
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            ref={contentRef}
            className="
              relative
              flex-1 min-h-0
              overflow-y-auto overscroll-contain
              px-6 py-6 space-y-8
            "
          >
            {/* SECTIONS */}
            <section>
              <h4 className="font-semibold text-lg mb-3">
                Administrator Features
              </h4>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>Daily Lecture Management (upload, edit, YouTube links)</li>
                <li>Daily Quote Management</li>
                <li>Disciple Data Management</li>
                <li>Initiation Process Management</li>
                <li>Gurudeva Calendar Management</li>
                <li>Pledge Management</li>
                <li>Councilor & Counselee Assignment</li>
                <li>Vyasa Puja Offerings Management</li>
                <li>Timeline Posts</li>
              </ul>
            </section>

            <section>
              <h4 className="font-semibold text-lg mb-3">User Features</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>User Dashboard</li>
                <li>Ask Gurudeva</li>
                <li>Request for Initiation</li>
                <li>Submit Vyasa Puja Offering</li>
                <li>Book Distribution Score Submission</li>
                <li>Pledge Submission</li>
                <li>My Book Reading Tracker</li>
                <li>Profile Updates</li>
                <li>Timeline Posts</li>
              </ul>
            </section>

            <section>
              <h4 className="font-semibold text-lg mb-3">Councilor Features</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>Counselor Dashboard</li>
                <li>Counselee Management</li>
                <li>Spiritual & Emotional Support (Phase 2)</li>
                <li>Seva Allocation</li>
              </ul>
            </section>

            <section>
              <h4 className="font-semibold text-lg mb-3">
                Gurudeva Login Features
              </h4>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>View & Reply to Correspondence</li>
                <li>Send Personal Messages</li>
                <li>Select Names for Aspiring Disciples</li>
                <li>View Today’s Schedule</li>
                <li>Srila Prabhupada Daily Quote</li>
                <li>Disciple Database Stats</li>
                <li>Study Tracker Stats</li>
                <li>Book Distribution Score Tracking</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default DiscipleFeaturesModal;
