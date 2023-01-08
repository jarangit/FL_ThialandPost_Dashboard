import React, { useEffect, useState } from 'react'
import { useRowSelect, useTable } from 'react-table'
import { mockDataTableCommand } from '../../../constants/mockDataTableCommand'
import { FaPen } from 'react-icons/fa';
import { ImBin2 } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';
type Props = {
  mode?: string;
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
const Table = ({ mode }: Props) => {
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
    if (mode === "MANAGE") {
      return (
        <div className='flex gap-3  justify-center items-center text-gray'>
        <div className={`cursor-pointer hover:text-red`} >
          <GiHamburgerMenu size={25} />
        </div>
        <div className={`cursor-pointer hover:text-red`} >
          <FaPen size={20} />
        </div>
        <div className={`cursor-pointer hover:text-red`}>
          <ImBin2 size={20}  />
        </div>
      </div>
      )
    } else {
      return null
    }
  }
  const [data, setData] = useState<Array<DataTable>>([])
  const mapDataTable = async () => {
    const res = mockDataTableCommand.map((item) => {
      return {
        ...item,
        status: <>{RenderCheckColor(item.status)}</>,
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
        Header: 'ลำดับ',
        accessor: 'rank', // accessor is the "key" in the data
      },
      {
        Header: 'ประเภทสินค้า ',
        accessor: 'typeProduct',
      },
      {
        Header: 'จำนวนชุด ',
        accessor: 'counts',
      },
      {
        Header: 'จำนวนแผ่น ',
        accessor: 'countsPaper',
      },
      {
        Header: 'คำสั่งพิเศษ  ',
        accessor: 'specialOrder',
      },
      {
        Header: 'สถานะ  ',
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
  }, [mockDataTableCommand])


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
                      ${props.column.id == "manage" && mode !== "MANAGE" && "hidden"}
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
                      ${props.column.id == "manage" && mode !== "MANAGE" && "hidden"}
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

export default Table