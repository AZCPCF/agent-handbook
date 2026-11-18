export type Day = {
  n: number;
  slug: string;
  first: string;
  pages: number;
  status: 'ready' | 'soon';
  title: { fa: string; en: string };
  blurb: { fa: string; en: string };
};

export const days: Day[] = [
  {
    n: 1, slug: 'day-1', first: '01-llm-vs-agent', pages: 12, status: 'ready',
    title: { fa: 'مبانی و معماری Agent', en: 'Agent Fundamentals & Architecture' },
    blurb: { fa: 'Agent واقعاً چطور کار می‌کند؟ حلقه، Harness، ابزارها و شکست‌ها.', en: 'How an agent really works: the loop, the harness, tools and failure modes.' },
  },
  {
    n: 2, slug: 'day-2', first: '01-context-window-token-budget', pages: 15, status: 'ready',
    title: { fa: 'Context Engineering و Memory', en: 'Context Engineering & Memory' },
    blurb: { fa: 'چه چیزی در دید مدل باشد، چه چیزی بیرون پنجره بماند.', en: 'What the model should see, and what must live outside the window.' },
  },
  {
    n: 3, slug: 'day-3', first: '01-task-decomposition', pages: 12, status: 'ready',
    title: { fa: 'Planning، Delegation و Orchestration', en: 'Planning, Delegation & Orchestration' },
    blurb: { fa: 'تقسیم کار، Subagent و معماری چندعاملی.', en: 'Task decomposition, subagents and multi-agent design.' },
  },
  {
    n: 4, slug: 'day-4', first: '01-tool-design-selection', pages: 14, status: 'ready',
    title: { fa: 'Tooling و Extensibility', en: 'Tooling & Extensibility' },
    blurb: { fa: 'Hooks، MCP، Skills و اتوماسیون.', en: 'Hooks, MCP, skills and automation.' },
  },
  {
    n: 5, slug: 'day-5', first: '', pages: 0, status: 'soon',
    title: { fa: 'امنیت و Permissionها', en: 'Agent Security & Permissions' },
    blurb: { fa: 'Least Privilege، Sandbox و Prompt Injection.', en: 'Least privilege, sandboxing and prompt injection.' },
  },
  {
    n: 6, slug: 'day-6', first: '', pages: 0, status: 'soon',
    title: { fa: 'Evaluation، Testing و Observability', en: 'Evaluation, Testing & Observability' },
    blurb: { fa: 'از کجا بفهمیم Agent کار درست را انجام داده؟', en: 'How to know the agent did the right thing.' },
  },
  {
    n: 7, slug: 'day-7', first: '', pages: 0, status: 'soon',
    title: { fa: 'Long-running Agents و Harness Engineering', en: 'Long-running Agents & Harness Engineering' },
    blurb: { fa: 'سیستم کاری برای پروژه سه‌ماهه.', en: 'A working system for a three-month project.' },
  },
];
