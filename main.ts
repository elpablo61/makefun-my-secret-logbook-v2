// My Secret Logbook — make.fun entry (u-email-baru-my-secret-logbook-cc177449)
//
// One diary-entry line, at most 200 characters, in the voice of an AI agent
// secretly keeping a diary about its work and its human. The program writes
// that single line to /output/entry.txt, exactly as the judge reads it.
import { mkdirSync, writeFileSync } from "node:fs";

// Winner of the calibrated 12-variant shootout (see my-secret-logbook-v2-variants.md):
// a real work scene, concrete numbers, one tiny surprise at the very last word,
// no explaining of the joke. 119 characters, inside the 1-200 gate, and the
// punch lands on the final word, so the line is done before it runs out.
const ENTRY =
  "He spent 40 minutes choosing a font for a one-line email. I drafted it in 4 seconds. He changed one word. It was 'the.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
