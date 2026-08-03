import React, { useState, useRef, useEffect } from "react";
import { portfolioData } from "../data/portfolioData";

interface HistoryItem {
  command?: string;
  output?: React.ReactNode;
  type?: "input" | "output" | "system";
}

const TerminalWidget: React.FC = () => {
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: "system", output: "Type 'help' for commands." },
  ]);
  const [inputVal, setInputVal] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory: HistoryItem[] = [...history, { type: "input", command: cmd }];

    switch (trimmed) {
      case "help":
        newHistory.push({
          type: "output",
          output: "help · whoami · github · linkedin · email · clear",
        });
        break;
      case "whoami":
        newHistory.push({
          type: "output",
          output: `${portfolioData.personal.name} — Cybersecurity Analyst & Developer`,
        });
        break;
      case "github":
        newHistory.push({
          type: "output",
          output: (
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 underline hover:text-purple-300"
            >
              {portfolioData.personal.github}
            </a>
          ),
        });
        break;
      case "linkedin":
        newHistory.push({
          type: "output",
          output: (
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 underline hover:text-purple-300"
            >
              {portfolioData.personal.linkedin}
            </a>
          ),
        });
        break;
      case "email":
        newHistory.push({
          type: "output",
          output: portfolioData.personal.email,
        });
        break;
      case "clear":
        setHistory([{ type: "system", output: "Type 'help' for commands." }]);
        setInputVal("");
        return;
      case "":
        break;
      default:
        newHistory.push({
          type: "output",
          output: `command not found: ${trimmed}. Type 'help' for available commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="bg-[#050309] border border-[#221838] text-gray-200 font-mono text-xs shadow-xl p-0 overflow-hidden flex flex-col h-[340px] cursor-text"
    >
      {/* TERMINAL HEADER */}
      <div className="bg-[#0b0814] px-4 py-2.5 border-b border-[#221838] flex items-center justify-between text-gray-400 text-[11px] font-bold tracking-wider select-none">
        <span>secure_comms.exe</span>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-red-500/80 inline-block" />
          <span className="w-2.5 h-2.5 bg-yellow-500/80 inline-block" />
          <span className="w-2.5 h-2.5 bg-green-500/80 inline-block" />
        </div>
      </div>

      {/* TERMINAL BODY */}
      <div className="p-5 flex-1 overflow-y-auto space-y-3">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            {item.type === "system" && (
              <p className="text-gray-400 select-none">{item.output}</p>
            )}
            {item.type === "input" && (
              <div className="flex items-center gap-2 text-purple-400 font-bold">
                <span>$</span>
                <span className="text-purple-300">{item.command}</span>
              </div>
            )}
            {item.type === "output" && (
              <div className="text-gray-300 pl-2">{item.output}</div>
            )}
          </div>
        ))}

        {/* INPUT PROMPT */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
          <span className="text-purple-400 font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs caret-purple-400"
            autoFocus
            spellCheck={false}
          />
        </form>
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
};

export default TerminalWidget;
