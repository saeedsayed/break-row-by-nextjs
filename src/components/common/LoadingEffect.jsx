import React from 'react'
import logo from '../../../public/assets/images/logo_light.svg'
import Image from 'next/image'

const LoadingEffect = () => {
  return (
    <div style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'#999'
    }}>
        <Image src={logo} alt="logo" />
    </div>
  )
}

export default LoadingEffect