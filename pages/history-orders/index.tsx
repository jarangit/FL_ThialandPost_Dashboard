import React from 'react'
import HeaderPage from '../../components/layouts/headerPage'
import CardWhite from '../../components/cards/cardWhite'
import HistoryOrderList from './components/historyOrderList'

type Props = {}

const HistoryOrdersPage = (props: Props) => {
  return (
    <>
      <HeaderPage>
        <div>ประวัติการสั่งซื้อ</div>
      </HeaderPage>

      {/* contents */}
      <CardWhite>
        <HistoryOrderList />
      </CardWhite>
    </>
  )
}

export default HistoryOrdersPage