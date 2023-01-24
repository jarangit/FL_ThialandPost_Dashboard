import React from 'react'
import { useDropzone } from 'react-dropzone';
import { RiImageAddLine } from 'react-icons/ri';

type Props = {}

const InputUploadFile = (props: Props) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file:any) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container border-2 border-gray-light py-10 px-3 flex justify-center border-dashed rounded-xl mt-2 text-center">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <div className='text-center text-gray flex justify-center'>
          <RiImageAddLine size = {50}/>
        </div>
        <div className='text-gray'>
          <span className='text-[#5950E6]'>Upload a file</span>
          or drag and drop
        </div>
        <div className='text-gray text-sm text-center'>PNG, JPGm GIF up to 10MB</div>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </section>
  );

}

export default InputUploadFile