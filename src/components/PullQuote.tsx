/*PullQuote.tsx*/

import "./PullQuote.css";

interface PullQuoteProps {
  children: string;
  accent?: string;
}

export default function PullQuote({
  children,
  accent = "var(--accent-lime)",
}: PullQuoteProps) {
  return (
    <blockquote className="pull-quote">
      <span
        className="pull-quote-bar"
        style={{ backgroundColor: accent }}
      ></span>
      <p>{children}</p>
    </blockquote>
  );
}
