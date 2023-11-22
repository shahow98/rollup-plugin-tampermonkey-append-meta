const fs = require("fs");
const path = require("path");
const banner = "tampermonkey";

export default function appendMetaPlugin() {
  return {
    name: "tampermonkey-append-meta",
    generateBundle(_, bundle) {
      Object.keys(bundle)
        .filter((entry) => bundle[entry].type === "chunk")
        .map((entry) => {
          const chunk = bundle[entry];
          const entryPath = chunk.facadeModuleId;
          const entryDirPath = path.dirname(entryPath);
          const bannerPath = path.join(entryDirPath, banner);
          try {
            fs.accessSync(bannerPath, fs.constants.R_OK);
            const content = fs.readFileSync(bannerPath, { encoding: "utf-8" });
            chunk.code = `${content}\n${chunk.code}`;
            this.info(`${chunk.fileName} meta has been appended to header.`);
          } catch (e) {}
        });
    }
  };
}
