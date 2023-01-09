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