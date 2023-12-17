import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"



const Cards = ({data, refrence}) => {
  return (
    <>
    <motion.div drag dragConstraints={refrence} whileDrag={{scale:1.2}} className='relative w-60 h-72 bg-zinc-900/90 rounded-[40px] text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-sm mt-4 leading-tight'>{data.desc}</p>
        <div className='footer absolute w-full  bottom-0 left-0 '>
          <div className='flex items-center justify-between px-8 py-3 mb-2'>
            <h5>{data.filesize}</h5>
            <span className='w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center'>
              {data.close ? <IoClose/> : <LuDownload size=".7rem" color='"#fff'/>}
              
            </span>
          </div>
          {
            data.tag.isOpen ? (
              <div className={`tag w-full py-2 flex items-center justify-center bg-green-600`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagtitle}</h3>
          </div>
            ) : null
          }
          
        </div>
    </motion.div>
    </>
  )
}

export default Cards