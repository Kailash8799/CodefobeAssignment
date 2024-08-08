import {ToastAndroid} from 'react-native';

export class Toaster {
  static toast = (message: string) => {
    ToastAndroid.show(message, 100);
  };
}
