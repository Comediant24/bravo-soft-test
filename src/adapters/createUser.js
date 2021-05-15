import { post } from '.';

export const createUser = (data) => {
  return post('users', data);
};
