"use client";

import { useEffect, useState } from "react";

interface StackItem {
  name: string;
  category: string;
  color: string;
}

const STACKS: StackItem[] = [
  { name: "n8n", category: "Automation", color: "#00D8FE" },    
  { name: "REST API", category: "API", color: "#00D8FE" },
  { name: "Linux", category: "OS", color: "#00D8FE" },
  { name: "Python", category: "Programming", color: "#336791" },
  { name: "PostgreSQL", category: "Database", color: "#336791" },
  { name: "Javascript", category: "Programming", color: "#336791" },
  { name: "JSON", category: "API", color: "#00D8FE" },
];

const ITEM_HEIGHT_PX = 28;

export function RotatingStack() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Clone first item to the end for seamless infinite looping
  const displayStacks = [...STACKS, STACKS[0]];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setIndex((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    // When reaching the cloned item at the end, seamlessly snap back to index 0
    if (index === STACKS.length) {
      const resetTimer = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 500); // Wait for transition duration (500ms) to complete

      return () => clearTimeout(resetTimer);
    }
  }, [index]);

  return (
    <div
      className="border-border bg-surface/90 absolute -bottom-5 left-5 min-w-[215px] rounded-2xl border px-4 py-2.5 shadow-lg backdrop-blur select-none transition-all duration-200 hover:shadow-xl hover:scale-[1.02]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      title="Hover to pause rotation"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 text-muted font-mono text-xs">
          <span className="font-semibold tracking-wide uppercase text-[11px]">Stack</span>
        </div>
        <div className="flex items-center gap-1" aria-hidden>
          {STACKS.map((_, i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                (index % STACKS.length) === i
                  ? "w-3 bg-accent"
                  : "w-1 bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative mt-1 h-7 overflow-hidden">
        <div
          className="flex flex-col"
          style={{
            transform: `translateY(-${index * ITEM_HEIGHT_PX}px)`,
            transition: isTransitioning
              ? "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)"
              : "none",
          }}
        >
          {displayStacks.map((item, i) => (
            <div
              key={i}
              className="h-7 flex items-center justify-between gap-3 shrink-0"
              style={{ height: `${ITEM_HEIGHT_PX}px` }}
            >
              <div className="flex items-center gap-2 min-w-0">
                <span
                  className="size-2 rounded-full shrink-0 shadow-sm"
                  style={{ backgroundColor: item.color }}
                  aria-hidden
                />
                <span className="text-fg text-sm font-semibold tracking-tight truncate">
                  {item.name}
                </span>
              </div>
              <span className="text-[10px] font-mono text-muted bg-surface-2 border-border/70 rounded px-1.5 py-0.5 border shrink-0">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
