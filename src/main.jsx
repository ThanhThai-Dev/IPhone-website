import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import * as Sentry from "@sentry/react";
import { BrowserTracing } from '@sentry/tracing';

Sentry.init({
  dsn: "https://04dbce771d705e01e7c50a04571f2116@o4508778765156353.ingest.us.sentry.io/4508778767712256",
  integrations: [
    Sentry.browserTracingIntegration(),
    // Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration(),
  ],
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0, 
});

// Sentry.init({
//   dsn: "https://04dbce771d705e01e7c50a04571f2116@o4508778765156353.ingest.us.sentry.io/4508778767712256",
//   integrations: [
//     new BrowserTracing({
//       tracingOrigins: ["localhost", "https://04dbce771d705e01e7c50a04571f2116@o4508778765156353.ingest.us.sentry.io/4508778767712256"],
//       routingInstrumentation: Sentry.reactRouterV6Instrumentation(React.useEffect),
//     }),
//     Sentry.Replay(),
//   ],
//   tracesSampleRate: 1.0, // Adjust this value as needed
//   replaysSessionSampleRate: 0.1, 
//   replaysOnErrorSampleRate: 1.0, 
// });

// const container = document.getElementById(“app”);
// const root = createRoot(container);
// root.render(<App />);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
