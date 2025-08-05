import { init } from '@sentry/nextjs';

export function register() {
  init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    tracesSampleRate: 1.0,
    debug: false,
  });
}
