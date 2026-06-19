// Claude Code — terminal agent handoff target. Downloadable handoff bundle.
import { defineAiTool } from './define.js';

export default defineAiTool({
  id: 'com.focus.ai.claude-code', name: 'Claude Code', appKey: 'claude-code', tint: 'orange',
  letter: 'C', mono: true, version: '1.0.0', installs: '44k', group: 'agent',
  tagline: 'Terminal agent · agentic tasks', description: 'Delegate tasks to the Claude Code CLI agent in a project.',
  command: 'claude', usesProject: true,
});
