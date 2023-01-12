import React from 'react'
import Button from '../../../components/buttons/button';
import Table from './table';
import ButtonOutline from '../../../components/buttons/buttonOutline';

type Props = {
  setGoToCreate: any;
  setShowModalDelete: any;
  setShowModalDetail: any;
}

const ManageLayout = ({ setGoToCreate,setShowModalDelete,setShowModalDetail }: Props) => {
  return (
    <div className='flex flex-col'>
      <div className='w-full flex justify-end gap-3 order-3 lg:order-1 flex-wrap'>
        <ButtonOutline onClick={() => setGoToCreate("DEFAULT")}>ย้อนกลับ</ButtonOutline>
        <Button onClick={() => setGoToCreate("CREATE")}>สร้างข้อมูลคำสั่งประจำ</Button>
      </div>
      <div className='p-3 bg-pink mt-6 text-red rounded-sm order-2 text-sm'>
        <div><span className='font-bold'>โปรดทราบ</span> : หากคุณแก้ไขข้อมูลคำสั่งประจำของคุณ จะไม่สามารถแก้ไขข้อมูลได้ภายใน 90 วัน จนกว่าเจ้าหน้าที่จะอนุมัติการแก้ไขข้อมูล</div>
      </div>
      <div className='order-2 lg:order-3'>
        <Table mode={"MANAGE"} setShowModalDelete={setShowModalDelete} setGoToCreate= {setGoToCreate} setShowModalDetail ={setShowModalDetail}/>
      </div>
    </div>
  )
}

export default ManageLayout