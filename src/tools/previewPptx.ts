import { readFile } from "node:fs/promises";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { convertPptxToSvg } from "pptx-glimpse";

export function registerPreviewPptxTool(server: McpServer): void {
  server.tool(
    "preview_pptx",
    "Convert a PPTX file to SVG previews. Returns an array of SVG strings, one per slide.",
    {
      filePath: z.string().describe("Absolute path to the PPTX file"),
    },
    async ({ filePath }) => {
      const pptxBuffer = await readFile(filePath);
      const results = await convertPptxToSvg(pptxBuffer);

      return {
        content: results.map((result) => ({
          type: "text" as const,
          text: result.svg,
        })),
      };
    }
  );
}
