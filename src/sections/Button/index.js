import React from 'react'

const Button = ({ Icon, content, bgcolor, textcolor, focusbgcolor, onclick }) => {
  return (
    <button onClick={onclick} className={`flex items-center w-full justify-center rounded-lg bg-${bgcolor} text-center font-medium text-${textcolor} hover:bg-${focusbgcolor} focus:outline-none focus:ring-4 focus:ring-blue-300 gap-2 py-2`}>
        <span className='text-xl'><Icon /></span>
        <span className='text-sm '>{content}</span>
    </button>
  )
}

export default Button