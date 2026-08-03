import fs from "fs"
import { dirname } from "path"
import { FilePath, joinSegments } from "../../util/path"
import { glob } from "../../util/glob"
import { QuartzEmitterPlugin } from "../types"

const ROOT_STATIC = "site-static"

export const RootStatic: QuartzEmitterPlugin = () => ({
  name: "RootStatic",
  async *emit({ argv, cfg }) {
    if (!fs.existsSync(ROOT_STATIC)) return

    const fps = await glob("**", ROOT_STATIC, cfg.configuration.ignorePatterns)
    for (const fp of fps) {
      const src = joinSegments(ROOT_STATIC, fp) as FilePath
      const dest = joinSegments(argv.output, fp) as FilePath
      await fs.promises.mkdir(dirname(dest), { recursive: true })
      await fs.promises.copyFile(src, dest)
      yield dest
    }
  },
  async *partialEmit() {},
})
