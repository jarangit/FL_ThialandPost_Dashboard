import React, { useEffect, useState } from 'react'
import { useRowSelect, useTable } from 'react-table'
import { mockDataStatementTable } from '../../../constants/mockDataTableStatement'
import { FaPen } from 'react-icons/fa';
import { ImBin2 } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineMenu } from 'react-icons/ai';
type Props = {
  mode?: string;
  setShowModalDelete?: any
  setGoToCreate?: any
  setShowModalDetail?: any

}

interface DataTable {
  rank: number;
  typeProduct: string;
  counts: number;
  countsPaper: number;
  specialOrder: string;
  status: any;
  manage: any
}
const StatementDetailTable = ({ mode, setShowModalDelete, setGoToCreate, setShowModalDetail }: Props) => {
  const RenderCheckColor = (type: string) => {
    switch (type) {
      case "ADD":
        return <div className='text-blue font-medium'>ขอเพิ่ม</div>
      case "EDIT":
        return <div className='text-yellow font-medium'>ขอแก้ไข</div>
      case "DELETE":
        return <div className='text-red font-medium'>ขอลบ</div>
      case "ONLINE":
        return <div className='text-green font-medium'>ใช้งาน</div>

      default:
        break;
    }
  }
  const RenderItemManage = () => {
    return (
      <div className={`cursor-pointer hover:text-red text-gray  flex justify-center`} >
        <AiOutlineMenu size={25} onClick={() => setShowModalDetail(true)} />
      </div>
    )
  }
  const [data, setData] = useState<Array<any>>([])
  const mapDataTable = async () => {
    const res = mockDataStatementTable.map((item) => {
      return {
        ...item,
        manage: <RenderItemManage />
      };
    })
    if (res) {
      setData(res)
    }
  }
  const columns: any = React.useMemo(
    () => [
      {
        Header: 'วันที่เอกสาร',
        accessor: 'date', // accessor is the "key" in the data
      },
      {
        Header: 'ประเภทรายการ',
        accessor: 'type',
      },
      {
        Header: 'เพิ่มบัญชี',
        accessor: 'addAccount',
      },
      {
        Header: 'ลดบัญชี',
        accessor: 'delAccount',
      },
      {
        Header: 'VAT',
        accessor: 'vat',
      },
      {
        Header: 'เลขที่เอกสาร',
        accessor: 'no',
      },
      {
        Header: 'ยอดเงินคงเหลือ',
        accessor: 'balance',
      },
      {
        Header: 'หมายเหตุ',
        accessor: 'note',
      },
      {
        Header: 'จัดการ',
        accessor: 'manage',
      },
    ],
    []
  )
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // @ts-ignore
    selectedFlatRows,
    // @ts-ignore
    state: { selectedRowIds },
  } = useTable(
    {
      columns,
      data,
    },
    useRowSelect,
  )


  useEffect(() => {
    mapDataTable()
  }, [mockDataStatementTable])


  return (
    <div className='  my-6 overflow-hidden text-sm border-x border-gray-light overflow-x-scroll lg:overflow-auto border-b'>
      <table {...getTableProps()} className="w-full text-center min-w-[700px] lg:min-w-full">
        <thead>
          {headerGroups.map(headerGroup => (
            // eslint-disable-next-line react/jsx-key
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, key) => {
                const { props }: any = column.render('Cell')
                return (
                  <React.Fragment key={key}
                  >
                    <th
                      {...column.getHeaderProps()}
                      className={`
                      p-2 border-y border-gray-light bg-gray-light font-medium 
                      ${props.column.id == "typeProduct" ? "text-center" : ""}
                      `}
                    >
                      {column.render('Header')}
                    </th>
                  </React.Fragment>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, key) => {
            prepareRow(row)
            return (
              // eslint-disable-next-line react/jsx-key
              <tr {...row.getRowProps()} className={`${key % 2 ? "bg-gray-supperLight" : ""} hover:bg-pink transition-all`}>
                {row.cells.map((cell, key) => {
                  const { props }: any = cell.render('Cell')
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <td
                      // onClick={() => onSetID({ row })}
                      {...cell.getCellProps()}
                      className={` p-2 font-thin py-3
                      ${props.column.id == "typeProduct" ? "text-left " : ""}
                      `}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default StatementDetailTable