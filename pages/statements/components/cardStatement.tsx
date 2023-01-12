import React from 'react'

type Props = {
  color?: string;
}

const CardStatement = ({ color }: Props) => {
  return (
    <div className='drop-shadow-md p-3 rounded-xl ' style={{ background: `${color ? color : '#F9A280'}` }}>
      <div className='flex flex-col justify-between min-h-[150px]'>
        <div>คำสั่งประจำตราไปรฯ (บาท) </div>
        <div>
          <div className='flex items-center justify-between '>
            <div>ยอดเงินคงเหลือ</div>
            <div>0000</div>
          </div>
          <div className='flex items-center justify-between '>
            <div>ยอดเงินใช้ได้</div>
            <div>0000</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardStatement