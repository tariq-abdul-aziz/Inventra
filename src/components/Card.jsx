import React from 'react'
import {
  LayoutGrid,
  FileDown,
  FileUp,
  TrendingDown,
  Database,
} from "lucide-react";

const Card = ({
  icon: Icon = "",
  title = "",
  value = "",
}) => {
  return (
    <div className='border-none bg-white text-black w-50 h-30 rounded-2xl px-2 py-5 flex flex-col justify-center items-center'>
      <div className='flex gap-4 items-center'>
      <span>{Icon}</span>
      <span className='text-lg font-semibold'>{title}</span>
      </div>
      <span className='text-2xl font-bold'>{value}</span>
      </div>
  )
}

export default Card