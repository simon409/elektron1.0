import React from 'react'

const Button = ({ Icon, content, bgcolor, textcolor, focusbgcolor, onclick }) => {
  return (
    <button onClick={onclick} className={`flex items-center w-full justify-center rounded-md bg-${bgcolor} px-5 py-2.5 text-center font-medium text-${textcolor} hover:bg-${focusbgcolor} focus:outline-none focus:ring-4 focus:ring-blue-300 gap-2`}>
        <span className='text-xl -translate-y-5'><Icon /></span>
        <span className='text-sm '>{content}</span>
    </button>
  )
}

export default Button