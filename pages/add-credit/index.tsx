import React, { useState } from 'react'
import CardWhite from '../../components/cards/cardWhite'
import HeaderPage from '../../components/layouts/headerPage'
import Button from '../../components/buttons/button'
import { BsCircle } from 'react-icons/bs'
import { AiTwotoneCheckCircle } from 'react-icons/ai'
import BankForm from './components/bankForm'
type Props = {}

const AddCreditPage = (props: Props) => {
  const [activeTab, setActiveTab] = useState("CARD")
  return (
    <div>
      <HeaderPage>
        <div>เพิ่มเงินบัญชีสมาชิก</div>
      </HeaderPage>
      <CardWhite>
        <div className='flex w-full justify-end'>
          <Button>
            ถัดไป
          </Button>
        </div>

        <div className='mt-6 flex flex-col gap-6'>
          <div className='grid grid-cols-2'>
            <div>
              <div>รหัสสมาชิก</div>
              <div className=' text-gray font-thin'>123456</div>
            </div>
            <div>
              <div>ชื่อ-นามสกุล</div>
              <div className=' text-gray font-thin'>พิมพ์ศุภางค์  สุขดี</div>
            </div>
          </div>
          <div>
            <div>ช่องทางการชำระเงิน</div>
            <div className='flex items-center gap-3 lg:gap-10 mt-3 flex-wrap'>
              <div className='flex gap-3 items-center'>
                <div className='text-red cursor-pointer' onClick={() => setActiveTab("CARD")}>
                  {activeTab == "CARD" ? (
                    <AiTwotoneCheckCircle size={20} />
                  ) : (
                    <BsCircle size={20} />
                  )}
                </div>
                <div>บัตรเครดิต</div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='text-red cursor-pointer' onClick={() => setActiveTab("BANK")}>
                  {activeTab == "BANK" ? (
                    <AiTwotoneCheckCircle size={20} />
                  ) : (
                    <BsCircle size={20} />
                  )}
                </div>
                <div>การโอนเงินผ่านบัญชีธนาคาร </div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='text-red cursor-pointer' onClick={() => setActiveTab("CAPOS")}>
                  {activeTab == "CAPOS" ? (
                    <AiTwotoneCheckCircle size={20} />
                  ) : (
                    <BsCircle size={20} />
                  )}
                </div>
                <div>CA POS </div>
              </div>
            </div>
          </div>

          {/*tab components  */}
          {activeTab == "CARD" && ""}
          {activeTab == "BANK" && <BankForm />}
          {activeTab == "CAPOS" && (
            <div className='text-red'>ท่านสามารถทำการเพิ่มเงินสมาชิกผ่านทางเคาน์เตอร์ไปรษณีย์ไทยได้ทุกสาขา</div>
          )}
        </div>
      </CardWhite>
    </div>
  )
}

export default AddCreditPage