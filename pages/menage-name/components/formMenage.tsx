import React, { useEffect, useState } from 'react'
import Button from '../../../components/buttons/button'
import Input from '../../../components/inputs/input'

type Props = {
  onChangeMode: any;
  mode?: string;
  setShowModalSaved: any;
  onSubmit?: any;
  dataTitleNameItem?: any;
}

const FormMenage = ({ onChangeMode, mode, setShowModalSaved, onSubmit, dataTitleNameItem }: Props) => {

  const [titleName, setTitleName] = useState("")
  const [inputError, setInputError] = useState({
    status: false,
    message: ""
  })
  const [objTitleName, setBbjTitleName] = useState({
    isActive: "Y",
    createdBy: "",
    titleId: "",
    titleName: "",
    titleSap: "",
    forMemberType: "1"
  })
  const [objTitleNameUpdate, setBbjTitleNameUpdate] = useState({
    isActive: "",
    updatedBy: "",
    titleId: "",
    titleName: "",
    titleSap: "",
    forMemberType: ""
  })


  const handleSubmit = async () => {
    if (titleName == "") {
      setInputError({
        status: true,
        message: "Please enter a title"
      })
      return
    }
    if (mode == "UPDATE") {
      const saved = await onSubmit({ ...objTitleNameUpdate })
      if (saved) {
        setShowModalSaved(true)
      }
    } else {
      const saved = await onSubmit({ ...objTitleName })
      if (saved?.statusText === "Created") {
        setShowModalSaved(true)
      }
    }
  }
  useEffect(() => {
    // setBbjTitleName(dataTitleNameItem)
    if (mode == 'UPDATE' && dataTitleNameItem) {
      setBbjTitleNameUpdate({
        isActive: dataTitleNameItem.isActive,
        updatedBy: dataTitleNameItem.updatedBy || "",
        titleId: dataTitleNameItem.titleId,
        titleName: titleName !== "" ? titleName : dataTitleNameItem.titleName,
        titleSap: dataTitleNameItem.titleSap || "",
        forMemberType: dataTitleNameItem.forMemberType,
      })
    }

    if (titleName) {
      setBbjTitleName({
        ...objTitleName,
        titleName
      })
    }
  }, [dataTitleNameItem, titleName,])

  return (
    <div className={`flex justify-center items-center flex-col`}>
      <div className={`w-full flex justify-end gap-3`}>
        <Button
          onClick={handleSubmit}
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
        <form>
          <Input type="text" placeholder='' w="300px" onChange={setTitleName} value={objTitleNameUpdate?.titleName} error = {inputError}/>
        </form>
      </div>
    </div>
  )
}

export default FormMenage