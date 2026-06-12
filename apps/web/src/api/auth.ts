import { api } from './client'
import type { AuthResponse, LoginRequest, RegisterRequest } from '@wordrosco/types'

export const authApi = {
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const res = await api.post<AuthResponse>('/auth/login', data)
    return res.data
  },

  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    const res = await api.post<AuthResponse>('/auth/register', data)
    return res.data
  },

  me: async () => {
    const res = await api.get('/auth/me')
    return res.data.user
  },
}
