"use client"

import React from 'react'

cosnt MenuData = [
  { name: 'Home', link: '/' },
  { name: 'STORE', link: '/store' },
  { name: 'DAILY STREAK', link: '/daily-streak' },
  { name: 'ABOUT', link: '/about-us' },
  { name: 'GUIDES', link: '/guides' },
  { name: 'HELP', link: 'https://zyngasupport.helpshift.com/hc/en/27-zynga-poker/' },
];

const HeaderMenu = () => {
  return (
    <div className=''>
      <ul className='grid lg:flex items-center gap-5 lg:gap-10'>
        {MenuData.map((item, index) => (
        <li className='' key={index}><a href={item.link} className='text-xl font-semibold'>{item.name}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default HeaderMenu
