import React, { useState } from 'react'
import CardWhite from '../../components/cards/cardWhite'
import StatementDetailTable from './components/statementDetailTable'
import Button from '../../components/buttons/button'
import { useRouter } from 'next/router'
import ModalDetailStatement from './components/modalDetailStatement'
import { Pagination } from '@mui/material'
import { makeStyles } from "@material-ui/core/styles";

type Props = {}
const useStyles = makeStyles(() => ({
  button: {
    "& .css-1guuzyp-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
      color: "#fff"
    }
  }
}));

const StatementDetailPage = (props: Props) => {
  const [dataTable, setDataTable] = useState({
    total: 5,
    page: 0,
    size: 5,
    list: []
  })
  const classes = useStyles();
  const { push } = useRouter()
  const [showModalDetail, setShowModalDetail] = useState(false)
  return (
    <div>
      <div className='border-b-2 border-gray-light pb-3 text-xl'>รายละเอียดข้อมูลทางบัญชี (Statement)</div>
      <CardWhite>
        <StatementDetailTable setShowModalDetail={setShowModalDetail} />
        <div className={`flex gap-3 lg:justify-between  flex-wrap mt-6 w-full justify-center mb-3`}>
          <div>จำนวนทั้งหมด: {5} รายการ</div>
          <div className='text-white'>
            <Pagination
              count={Math.ceil(dataTable.total / dataTable.size)}
              onChange={() => ""}
              shape="rounded"
              color='secondary'
              showFirstButton
              showLastButton
              page={dataTable.page + 1}
              classes={{ ul: classes.button }}
            />
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <Button onClick={() => push('/statements')}>ย้อนกลับ</Button>
        </div>

      </CardWhite>

      {/* Modal zone */}
      <ModalDetailStatement handleClose={() => setShowModalDetail(false)} open={showModalDetail} onSubmit={() => setShowModalDetail(false)} />
    </div>
  )
}

export default StatementDetailPage