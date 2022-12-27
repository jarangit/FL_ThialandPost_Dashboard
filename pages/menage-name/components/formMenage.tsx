import React, { useEffect, useState } from 'react'
import Button from '../../../components/buttons/button'
import Input from '../../../components/inputs/input'

type Props = {
  onChangeMode: any;
  mode?: string;
  setShowModalSaved: any;
  onSubmit?: any;
  dataTitleNameItem?: any;
  setShowFailModal: any;
}

const FormMenage = ({ onChangeMode, mode, setShowModalSaved, onSubmit, dataTitleNameItem, setShowFailModal }: Props) => {
  const nowDate = new Date()
  const [titleName, setTitleName] = useState("")
  const [inputError, setInputError] = useState({
    status: false,
    message: ""
  })
  const [objTitleName, setObjTitleName] = useState({
    isActive: "Y",
    createdBy: nowDate,
    titleId: "",
    titleName: "",
    titleSap: "",
    forMemberType: "1"
  })
  const [objTitleNameUpdate, setObjTitleNameUpdate] = useState({
    isActive: "",
    updatedBy: nowDate,
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
      if (saved && saved?.response?.data.code == 104) {
        console.log("die")
        setShowFailModal(true)
      } else {
        setShowModalSaved(true)
      }
    } else if (mode == "CREATE") {
      const saved = await onSubmit({ ...objTitleName })
      if (saved && saved?.response?.data.code == 104) {
        console.log(saved.response.data)
        console.log("die")
        setShowFailModal(true)
      } else {
        setShowModalSaved(true)
      }
    }
  }
  useEffect(() => {
    // setBbjTitleName(dataTitleNameItem)
    if (mode == 'UPDATE' && dataTitleNameItem) {
      setObjTitleNameUpdate({
        isActive: dataTitleNameItem.isActive,
        updatedBy: nowDate,
        titleId: dataTitleNameItem.titleId,
        titleName: titleName !== "" ? titleName : dataTitleNameItem.titleName,
        titleSap: dataTitleNameItem.titleSap || "",
        forMemberType: dataTitleNameItem.forMemberType,
      })
    }

    if (titleName) {
      setObjTitleName({
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
          <Input type="text" placeholder='' w="300px" onChange={setTitleName} value={objTitleNameUpdate?.titleName} error={inputError} />
        </form>
      </div>
    </div>
  )
}

export default FormMenage