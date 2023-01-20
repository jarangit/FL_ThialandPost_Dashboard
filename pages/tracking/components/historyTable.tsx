import React, { useEffect, useState } from 'react'
import { useRowSelect, useTable } from 'react-table'
import { mockDataHistoryTracking } from '../../../constants/mockDataHistoryTracking'
import { FaPen } from 'react-icons/fa';
import { ImBin2 } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useRouter } from 'next/router';
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
const HistoryTable = ({ mode, setShowModalDelete, setGoToCreate, setShowModalDetail }: Props) => {
  const { push } = useRouter()
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
  const RenderStatus = (type: any) => {
    switch (type) {
      case "FIRST":
        return <div className='text-blue'>รับเรื่อง</div>
      case "PENDING":
        return <div className='text-red'>อยู่ระหว่างดำเนินงาน</div>
      case "SUCCESS":
        return <div className='text-green'>ดำเนินงานเสร็จแล้ว</div>
      default:
        break;
    }
  }
  const RenderItemManage = ({ id }: any) => {
    return (
      <div className='flex gap-3  justify-center items-center text-gray'>
        <div className={`cursor-pointer hover:text-red`} >
          <GiHamburgerMenu size={25} onClick={() => push(`/tracking/${id}`)} />
        </div>
        {/* <div className={`cursor-pointer hover:text-red`} onClick={() => setGoToCreate("UPDATE")} >
            <FaPen size={20} />
          </div>
          <div className={`cursor-pointer hover:text-red`} onClick={() => setShowModalDelete(true)}>
            <ImBin2 size={20} />
          </div> */}
      </div>
    )
  }
  const [data, setData] = useState<Array<any>>([])
  const mapDataTable = async () => {
    const res = mockDataHistoryTracking.map((item, key) => {
      return {
        ...item,
        rank: key + 1,
        status: <>{RenderStatus(item.status)}</>,
        manage: <RenderItemManage id={item.id} />
      };
    })
    if (res) {
      setData(res)
    }
  }
  const columns: any = React.useMemo(
    () => [
      {
        Header: 'ลำดับ',
        accessor: 'rank', // accessor is the "key" in the data
      },
      {
        Header: 'วันที่บันทึก  ',
        accessor: 'date',
      },
      {
        Header: 'ประเภทเรื่อง  ',
        accessor: 'type',
      },
      {
        Header: 'รายละเอียด  ',
        accessor: 'details',
      },
      {
        Header: 'สถานะ   ',
        accessor: 'status',
      },
      {
        Header: 'จัดการ  ',
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
  }, [mockDataHistoryTracking])


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
                      ${props.column.id == "type" ? "text-left " : ""}
                      ${props.column.id == "details" ? "text-left " : ""}
                      ${props.column.id == "status" ? "text-left " : ""}
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

export default HistoryTable