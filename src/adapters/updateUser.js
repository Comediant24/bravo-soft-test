import { put } from '.';

export const updateUser = (id, data) => {
  return put(`users/${id}`, data);
};
