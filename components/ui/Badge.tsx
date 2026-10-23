import { isTodo } from "@/lib/utils";
import { TodoText } from "./TodoText";

export function Badge({ children }: { children: string }) {
  if (isTodo(children)) {
    return (
      <span className="inline-flex items-center text-xs">
        <TodoText>{children}</TodoText>
      </span>
    );
  }
  return (
    <span className="border-border bg-surface-2 text-muted inline-flex items-center rounded-lg border px-2.5 py-1 font-mono text-xs">
      {children}
    </span>
  );
}
