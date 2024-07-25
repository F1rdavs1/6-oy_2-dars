import React from 'react'

const HeaderItem = ({title}) => {
  return (
    <li>
        <a className='font-normal text-[14px] leading-[22px] text-[#757575]' href="/">{title}</a>
    </li>
  )
}

export default HeaderItem