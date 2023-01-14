import React, { createContext, useState, useEffect } from 'react'

export const AppContext = createContext("")

const appState = ({ children }: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showLoading, setShowLoading] = useState<boolean>(false)
  return (
    // @ts-ignore
    <AppContext.Provider value={{
      showLoading, setShowLoading
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default appState