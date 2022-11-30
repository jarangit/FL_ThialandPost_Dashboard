import React, { useState } from 'react'
import CardInformation from './compoenents/card'

type Props = {}

const mockDataUserInformations = {

}

const InformationPage = (props: Props) => {
  const [data, setData] = useState({
    id: 123456,
    fname: "ทดสอบ ",
    lname: "ระบบ",
    idCardNumber: "1234567890123",
    type: "VIP",
    birthday: "18/07/2540",
    sex: "หญิง",
    email: "test@gmail.com",
    tel: "091-1234567",
    addressDoc: "xx/xx ม.x ต.xxxxx อ.xxxxx จ. xxxxx 202xx",
    addressProduct: "xx/xx ม.x ต.xxxxx อ.xxxxx จ. xxxxx 202xx"
  })

  const { id, fname, lname, idCardNumber, type, birthday, sex, email, tel, addressDoc, addressProduct } = data
  return (
    <div className=''>
      <CardInformation id={id} fname={fname} lname={lname} idCardNumber={idCardNumber} type={type} birthday={birthday} sex={sex} email={email} tel={email} addressDoc={addressDoc} addressProduct={addressProduct} />
    </div>
  )
}

export default InformationPage