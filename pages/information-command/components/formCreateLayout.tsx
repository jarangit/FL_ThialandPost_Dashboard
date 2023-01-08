import React, { useState } from 'react'
import ButtonOutline from '../../../components/buttons/buttonOutline';
import Button from '../../../components/buttons/button';
import FormCreate from './formCreate';

type Props = {
  setGoToCreate: any;
}

const FormCreateLayout = ({ setGoToCreate }: Props) => {
  const [dataForm, setDataForm] = useState({
    typeProduct: "",
    VIP: "",
    note: "",
    status: false
  })
  const onSave = () => {
    console.log(dataForm)
  }
  return (
    <div>
      <div className='w-full flex justify-end gap-3'>
        <Button onClick={onSave} >บันทึก</Button>
        <ButtonOutline onClick={() => setGoToCreate("MANAGE")}>ยกเลิก</ButtonOutline>
      </div>
      <div>
        <FormCreate onSave={onSave} setDataForm={setDataForm} dataForm={dataForm} />
      </div>
    </div>
  )
}

export default FormCreateLayout