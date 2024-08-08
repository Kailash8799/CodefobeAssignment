import axios from 'axios';
import {Toaster} from './toast';

export const errorHandler = <T extends any[], R>(
  func: (...args: T) => Promise<R>,
): ((...args: T) => Promise<R | undefined>) => {
  return async (...args: T) => {
    try {
      return await func(...args);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        Toaster.toast(error.response?.data.message ?? '');
      } else {
        Toaster.toast((error as Error).message ?? '');
      }
    }
  };
};
