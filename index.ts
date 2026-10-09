#!/usr/bin/env bun

import { Command } from "commander";
import { runWakeup } from "./src/terminalUI/wakeup";


const program = new Command();


program
  .name("looper")
  .description("It is a CLI tool with AI agents")
  .version("0.0.1");

program
  .command("run")
  .description("Waking up the CLI agent")
  .action(
    async() => {
      await runWakeup()
  });

await program.parseAsync(process.argv);