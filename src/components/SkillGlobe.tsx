import React, { useEffect, useRef, useState } from "react";

const SKILLS = [
  "Authentication", "Information Assurance", "Information Security",
  "Linux", "Network Security", "Python", "Risk Assessment",
  "Vulnerability Assessment", "Intrusion Detection", "Network Analyzer",
  "NIST Framework", "Risk Management Framework", "SIEM Tools", "SQL",
  "Threat Analysis", "Cryptography", "Cybersecurity", "Incident Response",
  "Security Strategies", "Social Engineering", "Threat Detection",
  "Vulnerability Management", "Cyber Attacks", "Risk Management",
  "Cyber Threat Intelligence", "Disaster Recovery", "Governance",
  "Penetration Testing", "Security Controls", "CVSS", "Evidence Handling",
  "Network Profiling", "Secure Device Management", "Security Assessments",
  "Cyber Kill Chain", "Diamond Model", "Threat Intelligence",
  "Cisco IOS", "DHCP", "DNS", "Ethernet", "IPv4 Subnetting",
  "Network Protocols", "Virtualization", "Cloud Security",
  "Application Security", "Firewalls", "Physical Security",
  "Access Controls", "Antimalware", "Defense-in-Depth",
  "Host-based IPS", "Network Hardening", "Securing WLANs",
  "Security Policies", "Endpoint Protection", "Windows Security",
  "Wireless Security", "Remote Troubleshooting", "Help Desk",
  "IP Subnetting", "Network Fundamentals", "Security Fundamentals",
  "Switching", "IPv6 Addressing", "Cyber Threat Analysis",
  "Cybersecurity Processes", "IAM", "Incident Analysis",
];

const RADIUS = 230;
const SPEED_IDLE = 0.004;

const SkillGlobe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);

  // Rotation state stored as refs for animation loop perf
  const rotYRef = useRef(0);
  const rotXRef = useRef(0.25); // slight initial tilt

  // Drag / hover state
  const isDraggingRef = useRef(false);
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const hoveredRef = useRef<number | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const N = SKILLS.length;

  // Fibonacci sphere unit vectors — stable across renders
  const positions = React.useMemo(() =>
    SKILLS.map((_, i) => {
      const phi = Math.acos(1 - (2 * i) / (N - 1));
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      return {
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.sin(phi) * Math.sin(theta),
        z: Math.cos(phi),
      };
    }),
  []);

  // ── DRAG HANDLERS ──────────────────────────────────────────────
  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    isDraggingRef.current = true;
    lastMouseRef.current = { x: e.clientX, y: e.clientY };
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMouseRef.current.x;
    const dy = e.clientY - lastMouseRef.current.y;
    rotYRef.current += dx * 0.006;
    rotXRef.current += dy * 0.006;
    // Clamp X tilt to avoid flipping
    rotXRef.current = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, rotXRef.current));
    lastMouseRef.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerUp = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  // ── ANIMATION LOOP ─────────────────────────────────────────────
  useEffect(() => {
    const animate = () => {
      // Auto-rotate only when not dragging and nothing hovered
      if (!isDraggingRef.current && hoveredRef.current === null) {
        rotYRef.current += SPEED_IDLE;
      }

      const cosY = Math.cos(rotYRef.current);
      const sinY = Math.sin(rotYRef.current);
      const cosX = Math.cos(rotXRef.current);
      const sinX = Math.sin(rotXRef.current);

      const container = containerRef.current;
      if (!container) { frameRef.current = requestAnimationFrame(animate); return; }

      const tags = container.querySelectorAll<HTMLElement>(".sg-tag");
      tags.forEach((el, i) => {
        const p = positions[i];

        // Rotate around Y
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.x * sinY + p.z * cosY;
        const y1 = p.y;

        // Rotate around X (tilt)
        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;

        // depth: 0 (back) → 1 (front)
        const depth = (z2 + 1) / 2;

        const tx = x1 * RADIUS;
        const ty = y2 * RADIUS;

        el.style.transform = `translate(-50%, -50%) translate3d(${tx}px, ${ty}px, ${z2 * RADIUS * 0.3}px)`;
        el.style.opacity = hoveredRef.current === i ? "1" : String(Math.max(0.12, depth * 0.75));
        el.style.fontSize = `${Math.max(9, Math.round(9 + depth * 5))}px`;
        el.style.zIndex = String(Math.round(depth * 100));
        el.style.color = hoveredRef.current === i
          ? "#ffffff"
          : `hsl(270, 50%, ${30 + depth * 40}%)`;
        el.style.textShadow = hoveredRef.current === i
          ? "0 0 12px rgba(168,85,247,0.8)"
          : "none";
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <div
      className="relative mx-auto select-none"
      style={{
        width: "520px",
        height: "480px",
        perspective: "900px",
        maxWidth: "100%",
        cursor: isDragging ? "grabbing" : "grab",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* Faint center glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "240px",
          height: "240px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(ellipse, rgba(168,85,247,0.1) 0%, transparent 70%)",
          borderRadius: 0,
        }}
      />

      {/* Hint label */}
      <div
        className="absolute bottom-3 left-1/2 pointer-events-none"
        style={{ transform: "translateX(-50%)" }}
      >
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
          click &amp; drag to spin
        </span>
      </div>

      {/* Tags container */}
      <div
        ref={containerRef}
        className="absolute inset-0"
        style={{ transformStyle: "preserve-3d" }}
      >
        {SKILLS.map((skill, i) => (
          <span
            key={i}
            className="sg-tag absolute font-mono uppercase tracking-wider whitespace-nowrap transition-colors duration-150"
            style={{
              left: "50%",
              top: "50%",
              fontWeight: hoveredIdx === i ? 700 : 500,
              cursor: isDragging ? "grabbing" : "pointer",
              userSelect: "none",
            }}
            onMouseEnter={() => {
              if (!isDraggingRef.current) {
                hoveredRef.current = i;
                setHoveredIdx(i);
              }
            }}
            onMouseLeave={() => {
              hoveredRef.current = null;
              setHoveredIdx(null);
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillGlobe;
