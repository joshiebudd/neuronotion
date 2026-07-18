import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Romi-styled blog card: a soft, floating surface card that lifts on hover, to
// match the marketing site's card language. The whole card is the link.
const BlogCard = ({ image, date, CardTitle, CardDescription, slug }) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col overflow-hidden rounded-[var(--romi-radius-2xl)] border border-[var(--romi-color-border)] bg-[var(--romi-color-surface)] shadow-[var(--romi-shadow-sm)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[var(--romi-shadow-lg)]"
    >
      <div className="aspect-[16/10] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        {date && (
          <span className="mb-3 text-[13px] font-semibold uppercase tracking-[0.06em] text-[var(--romi-color-primary)]">
            {date}
          </span>
        )}

        <h3 className="text-[1.2rem] font-bold leading-snug tracking-[-0.01em] text-[var(--romi-color-ink)] transition-colors [font-family:var(--romi-font-display)] group-hover:text-[var(--romi-color-primary)]">
          {CardTitle}
        </h3>

        <p className="mt-2.5 text-[15px] leading-relaxed text-[var(--romi-color-ink-muted)]">
          {CardDescription}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--romi-color-primary)] [font-family:var(--romi-font-display)]">
          Read article
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;
