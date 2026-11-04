import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, RotateCcw, Copy, Check } from 'lucide-react';
import { executeTerminalCommand, CommandResponse } from '../../data/terminalCommands';

interface TerminalLine {
  id: string;
  command?: string;
  response: CommandResponse;
}

export const InteractiveTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: 'welcome-1',
      response: {
        type: 'text',
        content: [
          '⚡ KESHAV JINDAL ENGINEERING SHELL [Version 2.4.0-release]',
          'Connected to Keshav\'s System Infrastructure Kernel. Type "help" or click quick commands below.',
          ''
        ]
      }
    }
  ]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const [copied, setCopied] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickCommands = ['help', 'about', 'projects', 'skills', 'experience', 'stats', 'contact'];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommandSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = inputVal.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const response = executeTerminalCommand(trimmed);

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        command: trimmed,
        response
      }
    ]);

    setCmdHistory((prev) => [...prev, trimmed]);
    setHistoryIdx(-1);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIdx = historyIdx === -1 ? cmdHistory.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(nextIdx);
      setInputVal(cmdHistory[nextIdx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx === -1) return;
      const nextIdx = historyIdx + 1;
      if (nextIdx >= cmdHistory.length) {
        setHistoryIdx(-1);
        setInputVal('');
      } else {
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    }
  };

  const runQuickCommand = (cmd: string) => {
    const response = executeTerminalCommand(cmd);
    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        command: cmd,
        response
      }
    ]);
  };

  const copyTranscript = () => {
    const text = history
      .map((h) => {
        const cmdPart = h.command ? `$ ${h.command}\n` : '';
        const resPart = Array.isArray(h.response.content)
          ? h.response.content.join('\n')
          : h.response.content;
        return `${cmdPart}${resPart}`;
      })
      .join('\n\n');

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-[#090C12] border border-white/15 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0E121A] border-b border-white/10 select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="ml-2 text-text-muted text-xs font-semibold flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>keshav@antigravity: ~ (zsh)</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={copyTranscript}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-text-muted hover:text-text-primary text-xs transition-colors"
            title="Copy Terminal Output"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
          </button>
          <button
            onClick={() => setHistory([])}
            className="p-1 rounded bg-white/5 hover:bg-white/10 text-text-muted hover:text-text-primary transition-colors"
            title="Reset Terminal"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Output Body */}
      <div 
        className="p-5 h-[340px] sm:h-[380px] overflow-y-auto space-y-4 text-text-secondary select-text scrollbar-thin"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((line) => (
          <div key={line.id} className="space-y-1">
            {line.command && (
              <div className="flex items-center gap-2 text-text-primary font-semibold">
                <span className="text-cyan-400">guest@keshavjindal.dev:~$</span>
                <span>{line.command}</span>
              </div>
            )}
            <div className={`leading-relaxed ${line.response.type === 'error' ? 'text-rose-400' : 'text-text-secondary'}`}>
              {Array.isArray(line.response.content) ? (
                line.response.content.map((c, i) => (
                  <div key={i} className="whitespace-pre-wrap">
                    {c}
                  </div>
                ))
              ) : (
                <div className="whitespace-pre-wrap">{line.response.content}</div>
              )}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input Prompt Row */}
      <form
        onSubmit={handleCommandSubmit}
        className="flex items-center gap-2 px-4 py-3 bg-[#0B0F16] border-t border-white/10"
      >
        <span className="text-cyan-400 shrink-0 font-bold">guest@keshavjindal.dev:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type 'help' or click a command below..."
          className="flex-1 bg-transparent text-text-primary focus:outline-none placeholder:text-text-muted/60"
        />
        <button
          type="submit"
          className="p-1.5 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white transition-colors"
          title="Execute"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>

      {/* Quick Command Pills */}
      <div className="px-4 py-2 bg-[#090C12] border-t border-white/5 flex items-center gap-2 overflow-x-auto text-[11px] text-text-muted">
        <span className="shrink-0 font-semibold text-text-muted">QUICK EXECUTE:</span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => runQuickCommand(cmd)}
            className="px-2.5 py-0.5 rounded bg-surface-elevated hover:bg-blue-600/20 hover:text-blue-400 border border-white/10 transition-colors whitespace-nowrap"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
};
