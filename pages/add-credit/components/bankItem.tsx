import Image from 'next/image'
import React, { useState } from 'react'
import { AiTwotoneCheckCircle } from 'react-icons/ai'
import { BsCircle } from 'react-icons/bs'

type Props = {
  id: number;
  image: string;
  name: string;
  detail: string;
  type: string;
  branch: string;
  number: string;
  setBankSelected: any;
  bankSelected: any
}

const BankItem = ({ id, image, name, detail, type, branch, number, setBankSelected, bankSelected }: Props) => {
  const [active, setActive] = useState(false)
  return (
    <div className='flex justify-between'>
      <div className='flex gap-6 items-center'>
        <div className='text-red cursor-pointer' onClick={() => setBankSelected(id)}>
          {bankSelected == id ? (
            <AiTwotoneCheckCircle size={20} />
          ) : (
            <BsCircle size={20} />
          )}
        </div>
        <div>
          <Image src={image} alt='' width={35} height={35} />
        </div>
        <div className='min-w-[100px]'>{name}</div>
        <div>{number}</div>
        <div>{detail}</div>
      </div>
      <div className='flex gap-6 items-center'>
        <div>{type}</div>
        <div>{branch}</div>
      </div>
    </div>
  )
}

export default BankItem