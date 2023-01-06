import React, { useEffect, useState } from 'react'
import { useRowSelect, useTable } from 'react-table'
import { mockDataTableCommand } from '../../../constants/mockDataTableCommand'
type Props = {}

interface DataTable {
  rank: number;
  typeProduct: string;
  counts: number;
  countsPaper: number;
  specialOrder: string;
  status: any;
}
const Table = (props: Props) => {
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
  const [data, setData] = useState<Array<DataTable>>([])
  const mapDataTable = async () => {
    const res = await mockDataTableCommand.map((item) => {
      return {
        ...item,
        status: <>{RenderCheckColor(item.status)}</>
      }
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
                      className={`p-2 border-y border-gray-light bg-gray-light font-medium ${props.column.id == "name" ? "text-left" : ""}`}
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
                      className={` p-2 font-thin py-3 ${props.column.id == "name" ? "text-left " : ""}`}
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