import React from 'react'
import { useGlobalStates } from './utils/global.context'

const Footer = () => {
  const {state, setState} =useGlobalStates()
  return (
    <footer>
        <p>Powered by</p>
        <img src="../images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
