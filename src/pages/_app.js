import '@/styles/globals.css'
import { PostHogProvider } from 'posthog-js'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <PostHogProvider client={posthog}>
      <>
        <Script id="vercel-speed-insights" src="/_vercel/insights/script.js" />
        <Component {...pageProps} />
      </>
    </PostHogProvider>
  )
}
