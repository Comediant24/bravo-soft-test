import { remove } from '.';

export const removeUser = (id) => {
  return remove(`users/${id}`);
};
