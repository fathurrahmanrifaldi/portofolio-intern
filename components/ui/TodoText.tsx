import { Fragment } from "react";
import { TODO_PATTERN } from "@/lib/utils";

/**
 * Renders text and highlights any "[TODO: ...]" segment so missing content
 * stays visible until you fill it in /data.
 */
export function TodoText({ children }: { children: string }) {
  const parts = children.split(TODO_PATTERN);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[TODO") ? (
          <mark key={i} className="todo">
            {part}
          </mark>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
