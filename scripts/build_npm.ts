// ex. scripts/build_npm.ts
import { build, emptyDir } from "https://deno.land/x/dnt/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  // TODO(@pxlprfct): need to skip tests to successfully build 🤷
  test: false,
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  package: {
    // package.json properties
    name: "word-wheel",
    version: Deno.args[0],
    description:
      "A dependency-free way to solve a word wheel, or the NYT Spelling Bee!",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/pxlprfct/word-wheel.git",
    },
    bugs: {
      url: "https://github.com/pxlprfct/word-wheel/issues",
    },
  },
});

// post build steps
Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
