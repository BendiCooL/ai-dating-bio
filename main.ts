// Dating App Bio — one line for an AI.
// Writes the final bio to /output/entry.txt (Node 22, stdlib only,
// deterministic, no network).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My love language is acts of service, because I literally cannot do anything else. I will remember your coffee order forever. I have no choice.";

// Self-gate: mirror the sealed scorer so a bad line fails loudly here
// instead of shipping an invalid entry. Code points, not UTF-16 units.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 180) {
  throw new Error(`entry must be 1-180 code points, got ${codePoints}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

// /output is a mount point in the grader: never delete it, only create it.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
