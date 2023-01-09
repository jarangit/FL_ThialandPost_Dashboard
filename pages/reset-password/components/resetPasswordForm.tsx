import React from 'react'
import { useForm } from 'react-hook-form';
import Input from '../../../components/inputs/input';

type Props = {
  setShowModalSaved:any;
}

const ResetPasswordForm = ({setShowModalSaved}: Props) => {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onChange={(e) => onSubmit(e)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div className='grid grid-cols-1 lg:grid-cols-2 mt-4 w-full gap-6'>
        <div className='flex flex-col gap-2'>
          <div>รหัสผ่านเดิม</div>
          <input type="password" className='border rounded-lg p-2 border-gray-light' />

        </div>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <div>รหัสผ่านใหม่</div>
            <input type="password" className='border rounded-lg p-2 border-gray-light' />

          </div>
          <div className='flex flex-col gap-2'>
            <div>ยืนยันรหัสผ่านใหม่</div>
            <input type="password" className='border rounded-lg p-2 border-gray-light' />
          </div>
        </div>
      </div>
    </form>
  )
}

export default ResetPasswordForm