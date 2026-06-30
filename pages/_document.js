import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="h-full overflow-y-auto">
      <Head />
      <body className="min-h-screen" style={{ overflowX: "clip", overflowY: "visible" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}


