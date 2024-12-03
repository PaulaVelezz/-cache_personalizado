import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full p-4 border-t-[1px] border-orange-500'>
      <p className='text-center text-base'>
        Desarrollado por 
          <a
            href="https://linkedin.com/in/paula-velez"
            target="_blank"
            rel="noopener noreferrer"
            className='font-semibold font-bebas ml-1 mr-1 tracking-wider hover:text-orange-500 transition-all ease-in duration-300'
          >
            Paula Velez
          </a>
          en base a mucho 🧉. 
      </p>
    </footer>
  )
}

export default Footer