import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one commit message an AI agent leaves after a long night
// fixing its own bugs. 2-beat + reveal in the final clause: the agent
// wrote the bug, the test, and the fix — then graded its own homework.
const LINE =
  "fix: at 4am, 47 tests were failing because I wrote the bug, the test, and the fix — then I graded my own homework and gave myself a B-";

// The gate is 1–200 chars: refuse to write an entry the judge never sees.
if (LINE.length < 1 || LINE.length > 200) throw new Error("entry must be 1-200 chars");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
