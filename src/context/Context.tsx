import { createContext } from 'react'

import { ContextProps, ContextType } from '../types/Types'

export const AppContext = createContext<ContextType>(
  null as unknown as ContextType
)

export const ContextProvider = ({ children }: ContextProps) => {
  return (
    <AppContext.Provider value={{ play: true }}>{children}</AppContext.Provider>
  )
}
