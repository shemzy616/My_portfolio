import React, { useState } from "react";
import { Project } from "../data/portfolioData";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative shrink-0"
      style={{ width: "260px", height: "400px", perspective: "1200px" }}
      onClick={() => setFlipped((f) => !f)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      {/* Card flipper */}
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ────────── FRONT FACE ────────── */}
        <div
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          className="absolute inset-0 bg-[#07050c] border border-[#1e1630] flex flex-col"
        >
          {/* Top dim area */}
          <div className="flex-1 flex items-center justify-center px-6">
            <span className="font-display font-black text-2xl text-gray-500 uppercase tracking-[0.1em] text-center select-none">
              {project.title}
            </span>
          </div>

          {/* Divider */}
          <div className="border-t border-[#1e1630]" />

          {/* Bottom area with number + name + hover text */}
          <div className="px-5 pt-4 pb-5 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-gray-600 select-none">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-display font-extrabold text-base text-white uppercase tracking-wider select-none">
                {project.title}
              </span>
            </div>
            <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest select-none">
              TAP FOR DETAILS · HOVER FOR DETAILS
            </p>
          </div>
        </div>

        {/* ────────── BACK FACE ────────── */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute inset-0 bg-[#0a0613] border border-purple-500/60 flex flex-col p-5 overflow-hidden"
        >
          {/* Status badge */}
          {project.status && (
            <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest mb-2">
              {project.status}
            </span>
          )}

          {/* Project title */}
          <h3 className="font-display font-black text-xl text-white uppercase tracking-wider mb-3">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs font-mono text-gray-300 leading-relaxed flex-1">
            {project.description}
          </p>

          {/* Bottom: tags + repo */}
          <div className="mt-4 space-y-3">
            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[10px] font-mono px-2 py-0.5 border border-[#2a1f45] bg-[#12082a] text-gray-300 uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Repository link */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-purple-400 hover:text-purple-300 uppercase tracking-widest transition-colors"
              >
                REPOSITORY ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
