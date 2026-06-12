import { api } from './client'
import type {
  StartSessionRequest,
  StartSessionResponse,
  QuestionResponse,
  SubmitAnswerRequest,
  SubmitAnswerResponse,
  EndSessionResponse,
} from '@wordrosco/types'

export const gameApi = {
  startSession: async (data: StartSessionRequest): Promise<StartSessionResponse> => {
    const res = await api.post<StartSessionResponse>('/game/sessions', data)
    return res.data
  },

  getQuestion: async (sessionId: string): Promise<QuestionResponse> => {
    const res = await api.get<QuestionResponse>(`/game/sessions/${sessionId}/question`)
    return res.data
  },

  submitAnswer: async (sessionId: string, data: SubmitAnswerRequest): Promise<SubmitAnswerResponse> => {
    const res = await api.post<SubmitAnswerResponse>(`/game/sessions/${sessionId}/answer`, data)
    return res.data
  },

  pass: async (sessionId: string) => {
    const res = await api.patch(`/game/sessions/${sessionId}/pass`)
    return res.data
  },

  endSession: async (sessionId: string): Promise<EndSessionResponse> => {
    const res = await api.post<EndSessionResponse>(`/game/sessions/${sessionId}/end`)
    return res.data
  },
}
