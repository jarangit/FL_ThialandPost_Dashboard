import React from 'react'
import Button from '../../../components/buttons/button'
import Input from '../../../components/inputs/input'

type Props = {
  onChangeMode: any;
  mode?: string;
  setShowModalSaved: any;
}

const FormMenage = ({ onChangeMode, mode, setShowModalSaved }: Props) => {
  return (
    <div className={`flex justify-center items-center flex-col`}>
      <div className={`w-full flex justify-end gap-3`}>
        <Button
          onClick={setShowModalSaved}
        >
          บันทึก
        </Button>
        <Button
          onClick={() => onChangeMode("DEFAULT")}
        >
          ยกเลิก
        </Button>
      </div>
      <div className={`flex flex-col gap-2 mt-6`}>
        <div>คำนำหน้าชื่อ</div>
        <Input type="text" placeholder='' w="300px" />
      </div>
    </div>
  )
}

export default FormMenage