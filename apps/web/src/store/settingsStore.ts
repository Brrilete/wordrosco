import { create } from 'zustand'

export type DefinitionLang = 'es-ES' | 'en-GB'
export type InputMode = 'keyboard' | 'voice'

interface SettingsState {
  definitionLang: DefinitionLang
  speechEnabled: boolean
  inputMode: InputMode
  setDefinitionLang: (lang: DefinitionLang) => void
  toggleSpeech: () => void
  setInputMode: (mode: InputMode) => void
}

export const useSettingsStore = create<SettingsState>((set, get) => ({
  definitionLang: 'es-ES',
  speechEnabled: true,
  inputMode: 'keyboard',

  setDefinitionLang: (lang) => set({ definitionLang: lang }),

  toggleSpeech: () => {
    if (get().speechEnabled) window.speechSynthesis?.cancel()
    set((s) => ({ speechEnabled: !s.speechEnabled }))
  },

  setInputMode: (mode) => set({ inputMode: mode }),
}))
