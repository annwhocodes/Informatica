import { User } from './types';

export const saveUser = (user: User) => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
};

export const validateUser = (usn: string, password: string): boolean => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  return users.some((user: User) => user.usn === usn && user.password === password);
};