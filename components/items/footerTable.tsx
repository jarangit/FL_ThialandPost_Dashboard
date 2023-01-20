import React, { useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Pagination } from '@mui/material'

type Props = {
  total: any;
  size: any;
  page: any;
  setCurrentPage: any;
}
const useStyles = makeStyles(() => ({
  button: {
    "& .css-1guuzyp-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
      color: "#fff"
    }
  }
}));

const FooterTable = ({ total, size, page, setCurrentPage }: Props) => {
  const classes = useStyles();
  const handleChangePage = (e: any, p: any) => {
    setCurrentPage(p - 1);
  };
  return (
    <>
      <div className={`flex gap-3 lg:justify-between flex-wrap mt-6 w-full justify-center`}>
        <div>จำนวนทั้งหมด: {total} รายการ</div>
        <div className='text-white'>
          <Pagination
            count={Math.ceil(total / size)}
            onChange={handleChangePage}
            shape="rounded"
            color='secondary'
            showFirstButton
            showLastButton
            page={page + 1}
            classes={{ ul: classes.button }}
          />
        </div>
      </div>
    </>
  )
}

export default FooterTable