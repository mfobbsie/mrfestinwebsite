/*Tag.tsx*/

import "./Tag.css";

interface TagProps {
  label: string;
  accent?: string;
  active?: boolean;
  onClick?: () => void;
}

export default function Tag({
  label,
  accent = "var(--accent-teal)",
  active,
  onClick,
}: TagProps) {
  return (
    <button
      className={`tag-pill ${active ? "active" : ""}`}
      style={{ borderColor: accent, color: accent }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
