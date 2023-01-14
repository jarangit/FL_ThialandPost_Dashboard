import React from 'react'
import InputSearch from '../../components/inputs/inputSearch'
import { FaShoppingCart } from 'react-icons/fa'
import SideBar from './components/sideBar'
import StampGrid from './components/stampGrid'
import { mockDataStampList } from '../../constants/stampList'
import CardWhite from '../../components/cards/cardWhite'
import FilterModal from './components/filterModal'
type Props = {}

const OrderPage = (props: Props) => {
  return (
    <div>
      <div className='border-b-2 border-gray-light pb-3 text-xl flex items-center justify-between flex-wrap gap-3'>
        <div>สั่งจองสั่งซื้อ</div>
        <div className='flex items-center gap-3'>
          <div className='relative'>
            <InputSearch />
            {/* <div className='absolute right-0 '>
              <FilterModal />
            </div> */}
          </div>
          <div className='relative border h-8 w-8 flex items-center justify-center border-gray-light bg-gray-supperLight rounded-md cursor-pointer'>
            <FaShoppingCart size={20} />
            <div className='absolute text-xs -top-2 -right-2 bg-red text-white w-5 h-5 flex justify-center items-center scale-75 rounded-full overflow-hidden font-bold'>1</div>
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