import React from 'react'
import { mockHistoryOrderList } from '../../../constants/historyOrderList'
import HistoryOrderItem from './historyOrderItem'
type Props = {}

const HistoryOrderList = (props: Props) => {
  return (
    <div className='flex flex-col gap-3 divide-y divide-gray-light'>
      {mockHistoryOrderList.map((item, key) => (
        <div key={key}>
          <HistoryOrderItem data={item} />
        </div>
      ))}
    </div>
  )
}

export default HistoryOrderList