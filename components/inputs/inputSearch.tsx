import React, { useMemo } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Image from 'next/image'
type Props = {
  placeholder?: string;
  onShowFilter?: any;
}

const InputSearch = ({ placeholder, onShowFilter }: Props) => {
  const styled = useMemo(() => ({
    root: `
    bg-white flex gap-2 items-center rounded-md h-8 pl-2 overflow-hidden border border-gray-light
    `,
    boxImage: `
    h-full p-2 flex items-center bg-[#EFF1F2] cursor-pointer
    `
  }), [])
  return (
    <div className={`${styled.root}`}>
      <AiOutlineSearch
        color='#9B9898'
      />
      <input placeholder={placeholder ?? "ค้นหา"} className={`text-gray text-sm`} />
      <div className={`${styled.boxImage}`} onClick={onShowFilter}>
        <Image
          src='/img/icons/control.svg'
          alt=''
          width={20}
          height={20}
        />
      </div>
    </div>
  )
}

export default InputSearch