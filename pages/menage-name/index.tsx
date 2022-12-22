/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line react-hooks/exhaustive-deps

import React, { useCallback, useEffect, useState } from 'react'
import InputSearch from '../../components/inputs/inputSearch'
import CardWhite from '../../components/cards/cardWhite'
import Button from '../../components/buttons/button'
import Table from './components/table'
import Input from '../../components/inputs/input'
import FormMenage from './components/formMenage'
import SavedModal from '../../components/modal/savedModal'
import ConfirmDeleteModal from '../../components/modal/confirmDeleteModal'
import { getTitleNameList, addTitleName, deleteTitleName, getTitleName, editTitleName } from '../../services/titleName'

type Props = {}

const menageNamePage = (props: Props) => {
  const [mode, setMode] = useState("DEFAULT")
  const [showModalSaved, setShowModalSaved] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)
  const [dataTable, setDataTable] = useState()
  const [actionID, setActionID] = useState("")
  const [dataTitleNameItem, setDataTitleNameItem] = useState()

  const onChangeMode = (currentMode: string) => {
    if (currentMode) {
      setMode(currentMode)
    }
  }

  const getData = async () => {
    const { data } = await getTitleNameList()
    if (data) {
      setDataTable(data)
    }
  }

  const onAddTitleName = async (data: any) => {
    const res = await addTitleName(data)
    return res
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onDeleteTitleName = async () => {
    if (actionID !== "") {
      const res = await deleteTitleName(actionID)
      if (res) {
        setShowModalDelete(false)
        getData()
      }
    }
  }

  const getTitleNameItem = async () => {
    if (actionID !== "" && mode == "UPDATE") {
      const { data } = await getTitleName(actionID)
      if (data) {
        setDataTitleNameItem(data)
      }
    }
  }
  const onEditTitleName = async (data: any) => {
    if (actionID !== "" && mode == "UPDATE") {
      const res = await editTitleName(actionID, data)
      return res
    }
  }
  useEffect(() => {
    getData()
    if (mode == "UPDATE") {
      getTitleNameItem()
    }
  }, [mode, actionID])
  return (
    <div>
      <div className='flex items-center justify-between w-full border-b-2 border-gray-light pb-3'>
        <div className=' pb-3 text-xl'>
          {mode == "DEFAULT" && "จัดการคำนำหน้าชื่อ"}
          {mode == "CREATE" && "เพิ่มคำนำหน้าชื่อ"}
          {mode == "UPDATE" && "แก้ไขคำนำหน้าชื่อ"}
        </div>
        <div>
          <InputSearch placeholder='Search candidates' />
        </div>
      </div>

      <CardWhite>
        <div className={`min-h-[200px]`}>
          {/* table */}
          {mode == "DEFAULT" && (
            <Table
              onChangeMode={onChangeMode}
              setShowModalDelete={() => setShowModalDelete(true)}
              dataTable={dataTable}
              setActionID={setActionID}
              onDeleteTitleName={onDeleteTitleName}
            />
          )}

          {/* create name */}
          {mode == "CREATE" && (
            <FormMenage onChangeMode={onChangeMode} setShowModalSaved={() => setShowModalSaved(true)} onSubmit={onAddTitleName} />
          )}

          {/* update name */}
          {mode == "UPDATE" && (
            <FormMenage
              onChangeMode={onChangeMode}
              mode={mode}
              setShowModalSaved={() => setShowModalSaved(true)}
              onSubmit={onEditTitleName}
              dataTitleNameItem={dataTitleNameItem}
            />
          )}
        </div>

      </CardWhite>

      {/* modal zone */}
      <SavedModal handleClose={() => setShowModalSaved(false)} open={showModalSaved} onSubmit = {() => onChangeMode("DEFAULT")}/>
      <ConfirmDeleteModal handleClose={() => setShowModalDelete(false)} open={showModalDelete} onSubmit={onDeleteTitleName} />
    </div>
  )
}

export default menageNamePage