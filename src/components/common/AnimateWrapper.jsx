'use client'
import React from 'react'
import { motion } from 'framer-motion'

const AnimateWrapper = ({children}) => {
  return (
    <motion.div
    initial='hidden'
    animate='visible'
    >
        {children}
    </motion.div>
  )
}

export default AnimateWrapper