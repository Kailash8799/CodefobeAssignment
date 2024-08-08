import {errorHandler} from '../utils/errorHandler';
import api from '../utils/api';
import {User} from '../types/user';
import {ApiRoutes} from '../constants/routes';

export class UserService {
  static getUserProfiles = errorHandler(async (size: number) => {
    const {data} = await api.get(ApiRoutes.user.getUserProfile(size));
    return data.map((user: User) => ({
      id: user.id,
      uid: user.uid,
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      email: user.email,
      avatar: user.avatar,
    })) as User[];
  });
}
