import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
  data: any;
}

const StampGridItem = ({ data }: Props) => {
  const RenderTags = () => {
    return (
      <>
        <div className='flex gap-1 text-xs flex-wrap absolute -bottom-6 left-0 w-full'>
          {data.limited && <div className='bg-orange-light text-orange px-2 rounded-full'>Limited</div>}
          {data.recommend && <div className='bg-green-light text-green px-2 rounded-full'>Recommend</div>}
        </div>
        {/* <div className='flex justify-between items-center gap-1 text-xs flex-wrap absolute -top-3 -left-1 w-full'>
          {data.new ? <div><Image src={'/img/icons/new.png'} alt="" width={50} height={50} /></div> : <div></div>}
          {data.hot ? <div className='mt-2'><Image src={'/img/icons/hot.png'} alt="" width={30} height={30} /></div> : <div></div>}
        </div> */}
        <div className=' absolute -top-3 -left-1'>
          {data.new ? <div><Image src={'/img/icons/new.png'} alt="" width={50} height={50} /></div> : <div></div>}
        </div>
        <div className=' absolute -top-2 right-1'>
          {data.hot ? <div className='mt-2'><Image src={'/img/icons/hot.png'} alt="" width={30} height={30} /></div> : <div></div>}
        </div>
      </>
    )
  }

  return (
    <Link href={`/stamp/${data.id}`}>
      <div className='flex flex-col gap-3 h-full cursor-pointer drop-shadow-sm border-gray-light  border-b pb-6 lg:border-none lg:pb-0'>
        <div className='relative mb-5 bg-blue-light px-2 py-6'>
          <div className='relative  h-[100px]'>
            <Image src={data.image} alt="" fill style={{ objectFit: "contain", }} />
          </div>
            <RenderTags />
        </div>
        <div className={`text-xs line-clamp-3 hover:text-red transition-all`}>
          {data.name}
        </div>
        <div className='flex justify-between items-center'>
          <div className='text-red'>{data.price} บาท</div>
          <button className='bg-red-light text-white rounded-full p-1 text-sm px-2'>Detail</button>
        </div>
      </div>
    </Link>
  )
}

export default StampGridItem