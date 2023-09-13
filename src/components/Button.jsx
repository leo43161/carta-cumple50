import React from 'react'

export default function Button({ children }) {
    return (
        <button className='inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs
        font-medium uppercase leading-normal text-white transition duration-150 ease-in-out 
        hover:bg-[#FDCEDF]  // Cambia el color de fondo en hover
        hover:shadow-[0 8px 9px -4px rgba(253, 206, 223, 0.3), 0 4px 18px 0 rgba(253, 206, 223, 0.2)]
        focus:bg-[#FDCEDF]  // Cambia el color de fondo en foco
        focus:shadow-[0 8px 9px -4px rgba(253, 206, 223, 0.3), 0 4px 18px 0 rgba(253, 206, 223, 0.2)]
        focus:outline-none focus:ring-0 
        active:bg-[#FDCEDF]  // Cambia el color de fondo en activo
        active:shadow-[0 8px 9px -4px rgba(253, 206, 223, 0.3), 0 4px 18px 0 rgba(253, 206, 223, 0.2)]
        dark:shadow-[0 4px 9px -4px rgba(253, 206, 223, 0.5)] 
        dark:hover:shadow-[0 8px 9px -4px rgba(253, 206, 223, 0.2), 0 4px 18px 0 rgba(253, 206, 223, 0.1)] 
        dark:focus:shadow-[0 8px 9px -4px rgba(253, 206, 223, 0.2), 0 4px 18px 0 rgba(253, 206, 223, 0.1)] 
        dark:active:shadow-[0 8px 9px -4px rgba(253, 206, 223, 0.2), 0 4px 18px 0 rgba(253, 206, 223, 0.1)]'>
            {children}
        </button>
    )
}
