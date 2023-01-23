import React, { useState } from 'react'
import BankItem from './bankItem'
import { mockDataBank } from '../../../constants/mockDataBank'
type Props = {}

const BankForm = (props: Props) => {
  const [bankSelected, setBankSelected] = useState(1)
  return (
    <div>
      <div>โอนเงินผ่านบัญชีธนาคาร</div>
      <div className='mt-3'>
        <div className='flex flex-col gap-3'>
          {mockDataBank.map((item, key) => (
            <div key={key}>
              <BankItem
                id={item.id}
                image={item.image}
                name={item.name}
                detail={item.detail}
                type={item.type}
                branch={item.branch}
                number={item.number}
                bankSelected={bankSelected}
                setBankSelected={setBankSelected}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BankForm