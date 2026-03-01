#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerPreviewPptxTool } from "./tools/previewPptx.js";

const server = new McpServer({
  name: "mcp-pptx-preview",
  version: "0.1.0",
});

registerPreviewPptxTool(server);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("mcp-pptx-preview server started");
}

main().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
