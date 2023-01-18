import React, { useState } from 'react'
import HeaderPage from '../../components/layouts/headerPage'
import InputSearch from '../../components/inputs/inputSearch'
import CardWhite from '../../components/cards/cardWhite'
import Button from '../../components/buttons/button'
import ErrorLabel from '../../components/items/errorLabel'
import TableProduct from './components/tableProduct'
import { Pagination } from '@mui/material'
import { makeStyles } from "@material-ui/core/styles";
import SuccessQuotationModal from '../../components/modal/successQuotationModal'

const useStyles = makeStyles(() => ({
  button: {
    "& .css-1guuzyp-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
      color: "#fff"
    }
  }
}));
type Props = {}

const ProductDayOnePage = (props: Props) => {
  const classes = useStyles();
  const [showModalCreateQuotation, setShowModalCreateQuotation] = useState(false)
  const [dataTable, setDataTable] = useState({
    total: 7,
    page: 0,
    size: 10,
    list: []
  })
  return (
    <div>
      <HeaderPage>
        <div className='flex justify-between w-full items-center flex-wrap'>
          <div>
            สินค้าวันแรกจำหน่ายที่ท่านยังไม่ได้รับตามคำสั่งประจำ
          </div>
          <InputSearch />
        </div>
      </HeaderPage>

      <CardWhite>
        <div className='flex flex-col gap-6'>
          <div className='w-full flex justify-end'>
            <Button onClick={() => setShowModalCreateQuotation(true)}>
              <div>สร้างใบเสนอราคา</div>
            </Button>
          </div>

          {/* label */}
          <div>
            <ErrorLabel text="ยอดเงินของคุณไม่เพียงพอสำหรับสั่งซื้อสินค้า กรุณาลดจำนวนสินค้าหรือเติมเงินเข้าระบบ " onShow={true} />
          </div>

          {/* table */}
          <div>
            <TableProduct
              onChangeMode={undefined}
              setShowModalDelete={undefined}
              dataTable={undefined}
              setActionID={undefined}
              onDeleteTitleName={undefined}
              currentPage={undefined}
            />
          </div>
          <div className='flex justify-center gap-3 lg:justify-between flex-wrap'>
            <div>จำนวนทั้งหมด: {dataTable.total} รายการ</div>
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
        </div>
      </CardWhite>

      {/* modal zone */}
      <SuccessQuotationModal handleClose={() => setShowModalCreateQuotation(false)} open={showModalCreateQuotation} />
    </div>
  )
}

export default ProductDayOnePage