import { describe, expect, test } from "bun:test";
import type { ShortcutClientWrapper } from "@/client/shortcut";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { ProjectTools } from "./projects";

describe("ProjectTools", () => {
	test("should be able to create instance", () => {
		const mockClient = {
			listProjects: () => Promise.resolve([]),
			getProject: () => Promise.resolve(null),
		} as Partial<ShortcutClientWrapper> as ShortcutClientWrapper;

		const mockServer = {
			tool: () => {},
		} as Partial<McpServer> as McpServer;

		expect(() => ProjectTools.create(mockClient, mockServer)).not.toThrow();
	});
});
