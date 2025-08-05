import * as Sentry from '@sentry/nextjs';

export class Logger {
  static info(message: string, context?: Record<string, any>) {
    console.log([INFO]  - , context);
    // En producción, podríamos enviar a un servicio de logging
  }

  static warn(message: string, context?: Record<string, any>) {
    console.warn([WARN]  - , context);
    // En producción, podríamos enviar a un servicio de logging
  }

  static error(message: string, error?: Error, context?: Record<string, any>) {
    console.error([ERROR]  - , error, context);
    
    // Enviar a Sentry
    if (error) {
      Sentry.captureException(error, {
        contexts: {
          custom: context
        }
      });
    } else {
      Sentry.captureMessage(message, {
        level: 'error',
        contexts: {
          custom: context
        }
      });
    }
  }

  static debug(message: string, context?: Record<string, any>) {
    if (process.env.NODE_ENV === 'development') {
      console.debug([DEBUG]  - , context);
    }
  }
}
