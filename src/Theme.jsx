import React, { createContext, useState } from 'react'
export let theme = createContext()
const Theme = ({ children }) => {
  let [tm, setTm] = useState('light')
  let toogleTheme = () => {
    setTm(value => value ==='light'?'dark':'light')
  }
  return <>
    <theme.Provider value={{tm,toogleTheme}}>
      {children}
    </theme.Provider >
  </>
}

export default Theme