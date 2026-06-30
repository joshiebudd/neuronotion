import Head from "next/head";
import { cn } from "../../lib/cn";

export function RomiPage({
  title = "Romi",
  description = "A calmer way to plan, remember, and move through the day.",
  className,
  children,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className={cn("romi-theme romi-shell", className)}>{children}</div>
    </>
  );
}
