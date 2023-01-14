import React, { useContext, useState } from 'react'
import { AppContext } from '../context/appState'

type Props = {}

export const useLoading = () => {
  // @ts-ignore
  const {showLoading, setShowLoading} = useContext(AppContext)
  return {
    showLoading, setShowLoading
  }
}

