import { UserListType, UserRegistrationType } from '../types';
import apiClient from './apiClient';

export const fetchUsers = async (): Promise<UserListType> => {
  const response = await apiClient.get('/users');
  return response.data as UserListType;
};

export const createUser = async (user: UserRegistrationType): Promise<{}> => {
  const response = await apiClient.post('/users', user);
  return response.data as {};
};
