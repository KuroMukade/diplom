import { Logger } from './types';

export class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(message);
  }

  warn(message: string): void {
    console.warn(message);
  }

  error(message: string): void {
    console.error(message);
  }
}
