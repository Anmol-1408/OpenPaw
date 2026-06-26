import { select, isCancel } from "@clack/prompts";
import chalk from "chalk";
import type { ActionTracker } from "./action-tracker.ts";
import type { ActionLog } from "./types.ts";
import { renderTerminalMarkdown } from "../../terminalUI/terminal-md.ts";

interface ReviewGroup {
  label: string;
  actionIds: string[];
  patch: string | null;
}