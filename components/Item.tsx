"use client";
import { useState } from "react";

const MAX_CHARS = 200;

export default function Item(props: {
  image: string;
  title: string;
  text: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const needsExpansion = props.text.length > MAX_CHARS;

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    const lastSpace = text.lastIndexOf(" ", maxLength);
    return text.slice(0, lastSpace) + " [...]";
  };

  const displayText = isExpanded
    ? props.text
    : truncateText(props.text, MAX_CHARS);

  return (
    <div className="group relative bg-white rounded-card overflow-hidden border border-line hover:border-accent/40 transition-all duration-300 shadow-card hover:shadow-cta hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(/${props.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent"></div>
        </div>
        <div className="absolute inset-0 flex items-end p-4">
          <h3 className="text-xl font-display font-bold text-white z-10">
            {props.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-muted leading-relaxed mb-4 text-sm md:text-base">
          {displayText}
        </p>
        {needsExpansion && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-accent hover:text-navy font-medium text-sm transition-colors duration-200 flex items-center gap-2 group/btn"
          >
            {isExpanded ? (
              <>
                <span>Voir moins</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </>
            ) : (
              <>
                <span>Voir plus</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover/btn:translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </>
            )}
          </button>
        )}
      </div>

      {/* Hover Effect Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
    </div>
  );
}
