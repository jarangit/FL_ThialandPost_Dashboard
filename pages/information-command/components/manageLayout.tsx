import React from 'react'
import Button from '../../../components/buttons/button';
import Table from './table';
import ButtonOutline from '../../../components/buttons/buttonOutline';

type Props = {
  setGoToCreate: any;
}

const ManageLayout = ({ setGoToCreate }: Props) => {
  return (
    <div>
      <div className='w-full flex justify-end gap-3'>
        <ButtonOutline onClick={() => setGoToCreate("DEFAULT")}>ย้อนกลับ</ButtonOutline>
        <Button onClick={() => setGoToCreate("CREATE")}>สร้างข้อมูลคำสั่งประจำ</Button>
      </div>
      <div className='p-3 bg-pink mt-6 text-red rounded-sm'>
        <div>โปรดทราบ : หากคุณแก้ไขข้อมูลคำสั่งประจำของคุณ จะไม่สามารถแก้ไขข้อมูลได้ภายใน 90 วัน จนกว่าเจ้าหน้าที่จะอนุมัติการแก้ไขข้อมูล</div>
      </div>
      <div>
        <Table mode={"MANAGE"} />
      </div>
    </div>
  )
}

export default ManageLayout