import React, { useEffect, useState } from 'react'
import CardWhite from '../../components/cards/cardWhite'
import Button from '../../components/buttons/button'
import Table from './components/table'
import ManageLayout from './components/manageLayout'
import OverviewLayout from './components/overviewLayout'
import FormCreateLayout from './components/formCreateLayout'
import SavedModal from '../../components/modal/savedModal'
import ConfirmDeleteModal from '../../components/modal/confirmDeleteModal'
import DetailModal from './components/detailModal'
import { makeStyles } from "@material-ui/core/styles";
import { Pagination } from '@mui/material'

type Props = {}
const useStyles = makeStyles(() => ({
  button: {
    "& .css-1guuzyp-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
      color: "#fff"
    }
  }
}));
const InformationCommandPage = (props: Props) => {
  const [goToCreate, setGoToCreate] = useState("DEFAULT")
  const [showModalSaved, setShowModalSaved] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)
  const [showModalDetail, setShowModalDetail] = useState(false)
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(0)
  const [dataTable, setDataTable] = useState({
    total: 5,
    page: 0,
    size: 5,
    list: []
  })
  const handleChangePage = (e: any, p: any) => {
    setCurrentPage(p - 1);
  };
  useEffect(() => {

  }, [currentPage])
  return (
    <>
      {/* modal zone */}
      <SavedModal
        open={showModalSaved}
        handleClose={setShowModalSaved}
        onSubmit={() => setGoToCreate("DEFAULT")}
      />
      <ConfirmDeleteModal handleClose={() => setShowModalDelete(false)} open={showModalDelete} onSubmit={() => { setShowModalDelete(false) }} />
      <DetailModal handleClose={() => setShowModalDetail(false)} open={showModalDetail} />
      <div className='border-b-2 border-gray-light pb-3 text-xl'>
        {goToCreate === "DEFAULT" && "ข้อมูลคำสั่งประจำ"}
        {goToCreate === "MANAGE" && "แก้ไขข้อมูลคำสั่งประจำ"}
        {goToCreate === "CREATE" && "สร้างข้อมูลคำสั่งประจำ"}
      </div>
      <CardWhite>
        <div>
          {goToCreate == "DEFAULT" && <OverviewLayout setGoToCreate={setGoToCreate} />}
          {goToCreate == "MANAGE" && <ManageLayout setGoToCreate={setGoToCreate} setShowModalDelete={setShowModalDelete} setShowModalDetail={setShowModalDetail} />}
          {goToCreate == "CREATE" && <FormCreateLayout setGoToCreate={setGoToCreate} setShowModalSaved={setShowModalSaved} />}
        </div>
        <div className={`flex gap-3 lg:justify-between ${goToCreate == "CREATE" && "hidden"} flex-wrap mt-6 w-full justify-center`}>
          <div>จำนวนทั้งหมด: {dataTable.total} รายการ</div>
          <div className='text-white'>
            <Pagination
              count={Math.ceil(dataTable.total / dataTable.size)}
              onChange={handleChangePage}
              shape="rounded"
              color='secondary'
              showFirstButton
              showLastButton
              page={dataTable.page + 1}
              classes={{ ul: classes.button }}
            />
          </div>
        </div>
      </CardWhite>
    </>
  )
}

export default InformationCommandPage