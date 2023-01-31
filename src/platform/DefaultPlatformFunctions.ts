import EventEmitter = require('events');
import StripeEmitter = require('../StripeEmitter');

/**
 * Interface encapsulating various utility functions whose
 * implementations depend on the platform / JS runtime.
 */
class DefaultPlatformFunctions {
  /**
   * Gets uname with Node's built-in `exec` function, if available.
   */
  getUname(): Promise<string | null> {
    return Promise.resolve(null);
  }

  /**
   * Generates a v4 UUID. See https://stackoverflow.com/a/2117523
   */
  uuid4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  /**
   * Compares strings in constant time.
   */
  secureCompare(a: string, b: string): boolean {
    // return early here if buffer lengths are not equal
    if (a.length !== b.length) {
      return false;
    }

    const len = a.length;
    let result = 0;

    for (let i = 0; i < len; ++i) {
      result |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }
    return result === 0;
  }

  createEmitter(): StripeEmitter | EventEmitter {
    return new StripeEmitter(new EventTarget());
  }
}

export = DefaultPlatformFunctions;