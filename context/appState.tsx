/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext, useState, useEffect } from 'react'

export const AppContext = createContext("")

const appState = ({ children }: any) => {
  const [showLoading, setShowLoading] = useState<boolean>(false)
  const [myCheckout, setMyCheckout] = useState<any>({
    counts: 0,
    totalPrice: 0,
    data: []
  })
  return (
    // @ts-ignore
    <AppContext.Provider value={{
      showLoading, setShowLoading,
      myCheckout, setMyCheckout,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default appState