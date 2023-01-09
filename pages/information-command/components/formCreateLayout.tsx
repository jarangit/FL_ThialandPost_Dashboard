import React, { useState } from 'react'
import ButtonOutline from '../../../components/buttons/buttonOutline';
import Button from '../../../components/buttons/button';
import FormCreate from './formCreate';
import SavedModal from '../../../components/modal/savedModal';

type Props = {
  setGoToCreate: any;
  setShowModalSaved: any;
}

const FormCreateLayout = ({ setGoToCreate, setShowModalSaved }: Props) => {
  const [dataForm, setDataForm] = useState({
    typeProduct: "",
    VIP: "",
    note: "",
    status: false
  })
  const onSave = () => {
    console.log(dataForm)
    setShowModalSaved(true)
  }
  return (
    <div className='flex flex-col'>
      <div className='w-full flex justify-end gap-3 order-2 lg:order-1'>
        <Button onClick={onSave} >บันทึก</Button>
        <ButtonOutline onClick={() => setGoToCreate("MANAGE")}>ยกเลิก</ButtonOutline>
      </div>
      <div className='order-1 lg:order-2 mb-6 lg:mb-0'>
        <FormCreate onSave={onSave} setDataForm={setDataForm} dataForm={dataForm} />
      </div>
    </div>
  )
}

export default FormCreateLayout