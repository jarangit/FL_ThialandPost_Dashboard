import React from 'react'

type Props = {
  color?: string;
  title: string;
  balance: string;
  availableBalance: string;
}

const CardStatement = ({ color, title, balance, availableBalance }: Props) => {
  return (
    <div className='drop-shadow-md p-3 rounded-xl ' style={{ background: `${color ? color : '#F9A280'}` }}>
      <div className='flex flex-col justify-between min-h-[150px]'>
        <div>{title}</div>
        <div>
          <div className='flex items-center justify-between '>
            <div>ยอดเงินคงเหลือ</div>
            <div className='font-thin'>{balance}</div>
          </div>
          <div className='flex items-center justify-between '>
            <div>ยอดเงินใช้ได้</div>
            <div className='font-thin'>{availableBalance}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardStatement