import { UserType } from '../types';
import apiClient from './apiClient';

export const fetchUserById = async (id: number): Promise<UserType> => {
  const response = await apiClient.get(`/users/${id}`);
  return response.data as UserType;
};

export const removeUserById = async (id: number): Promise<{}> => {
  const response = await apiClient.delete(`/users/${id}`);
  return response.data as {};
};
