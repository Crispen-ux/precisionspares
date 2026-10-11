import type { ReactNode } from "react";
import type { Article } from "@/lib/insights";

export const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function headingsOf(body: Article["body"]) {
  return body.filter((l) => l.startsWith("## ")).map((l) => l.slice(3));
}

function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : part,
  );
}

const cells = (line: string) =>
  line
    .trim()
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((c) => c.trim());

/** Renders the lightweight article format (see insights.ts). */
export function ArticleBody({ body }: { body: Article["body"] }) {
  const out: ReactNode[] = [];
  let i = 0;

  while (i < body.length) {
    const line = body[i];

    if (line.startsWith("## ")) {
      out.push(<h2 key={i} id={slugify(line.slice(3))}>{line.slice(3)}</h2>);
      i++;
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < body.length && body[i].startsWith("- ")) items.push(body[i++].slice(2));
      out.push(
        <ul key={`ul${i}`}>
          {items.map((t) => (
            <li key={t}>{inline(t)}</li>
          ))}
        </ul>,
      );
    } else if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < body.length && /^\d+\.\s/.test(body[i])) items.push(body[i++].replace(/^\d+\.\s/, ""));
      out.push(
        <ol key={`ol${i}`}>
          {items.map((t) => (
            <li key={t}>{inline(t)}</li>
          ))}
        </ol>,
      );
    } else if (line.startsWith("> ")) {
      out.push(<blockquote key={i}>{inline(line.slice(2))}</blockquote>);
      i++;
    } else if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (i < body.length && body[i].startsWith("|")) rows.push(cells(body[i++]));
      const [head, ...rest] = rows;
      out.push(
        <div key={`t${i}`} className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                {head.map((h) => (
                  <th key={h}>{inline(h)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rest.map((r, ri) => (
                <tr key={ri}>
                  {r.map((c, ci) => (
                    <td key={ci}>{inline(c)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
    } else {
      out.push(<p key={i}>{inline(line)}</p>);
      i++;
    }
  }
  return <div className="prose-ps">{out}</div>;
}
