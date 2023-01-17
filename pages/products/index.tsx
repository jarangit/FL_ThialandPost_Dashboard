import React, { useContext, useEffect, useState } from 'react'
import InputSearch from '../../components/inputs/inputSearch'
import { FaShoppingCart } from 'react-icons/fa'
import SideBar from './components/sideBar'
import StampGrid from './components/stampGrid'
import { mockDataStampList } from '../../constants/stampList'
import CardWhite from '../../components/cards/cardWhite'
import FilterModal from './components/filterModal'
import FilterProductModal from '../../components/modal/filterProductModal'
import { AppContext } from '../../context/appState'
import Cart from '../../components/items/cart'
type Props = {}

const OrderPage = (props: Props) => {
  const [showModalFilter, setShowModalFilter] = useState(false)
  // @ts-ignore
  const { myCheckout } = useContext(AppContext)
  useEffect(() => {
   
  }, [myCheckout])
  
  return (
    <div>
      <div className='border-b-2 border-gray-light pb-3 text-xl flex items-center justify-between flex-wrap gap-3'>
        <div>สั่งจองสั่งซื้อ</div>
        <div className='flex items-center gap-3'>
          <div className='relative'>
            <InputSearch onShowFilter={() => setShowModalFilter(true)} />
            <div className='absolute right-0 hidden lg:block'>
              <FilterModal onClose={() => setShowModalFilter(false)} onShow={showModalFilter} />
            </div>
            <div className='lg:hidden'>
              <FilterProductModal handleClose={() => setShowModalFilter(false)} open={showModalFilter} />
            </div>
          </div>
          <div>
            <Cart counts={myCheckout.counts} />
          </div>
        </div>
      </div>

      {/* content */}
      <CardWhite>
        <div className={`grid grid-cols-4 gap-3 mt-6 pt-3 `}>
          <div className='col-span-4 lg:col-span-1 lg:min-h-screen'>
            <SideBar />
          </div>
          <div className='col-span-4 lg:col-span-3 lg:min-h-screen lg:pl-3'>
            <StampGrid data={mockDataStampList} />
          </div>
        </div>
      </CardWhite>
    </div>
  )
}

export default OrderPage