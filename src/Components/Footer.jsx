import React from 'react'
import { useGlobalStates } from './utils/global.context'

const Footer = () => {

  const{activado} = useGlobalStates()
  return (
    <footer className={activado?'dark':""}>
        <p>Powered by</p>
        <img src="../images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
