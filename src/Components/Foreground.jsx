import React, { useRef } from 'react'
import Cards from './Cards'

const Foreground = () => {
  const ref = useRef(null)

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet, consectetur abcd amar",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagtitle: "Download Now", tagColor: "green" }
    },
    {
      desc: "Lorem  dolor sit amet, consectetur adipisicing amar",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagtitle: "Download Now", tagColor: "blue" }
    },
    {
      desc: "vvvss ipsum dolor sit amet, consectetur adipisicing amar",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagtitle: "Download Now", tagColor: "red" }
    }
  ]
  return (
    <>
      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full bg-sky-800/ flex gap-4 p-3'>
        {
          data.map((item, index) => (
            <Cards data={item} refrence ={ref} />
          ))
        }
      </div>
    </>
  )
}

export default Foreground