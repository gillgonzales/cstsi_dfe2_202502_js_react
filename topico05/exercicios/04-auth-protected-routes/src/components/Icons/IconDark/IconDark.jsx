/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import iconDark from '../../../assets/moon-svgrepo-com.svg'
import './icon_dark.css'


const IconDark = ({width, height}) => {
  return (
    <img
        width={width}
        height={height}
        alt="Icone de lua"
        className='icon-dark'
        src={iconDark}
      />
  )
}

export default IconDark