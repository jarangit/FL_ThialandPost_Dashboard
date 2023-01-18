import React, { useEffect, useState } from 'react'
import StampGridItem from './stampGridItem';
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from '../../../components/items/loading';
import { useLoading } from '../../../hooks/useLoading';

type Props = {
  data: any;
}

const StampGrid = ({ data }: Props) => {
  const { showLoading, setShowLoading }: any = useLoading();
  const [itemLength, setItemLength] = useState({
    length: 20,
    hasMore: true,
    loading: false,
  })

  const onFetchData = () => {
    setItemLength({
      ...itemLength,
      loading: true,
    })
    setShowLoading(true)
    setTimeout(() => {
      if (itemLength.length < 40) {
        setItemLength({
          length: itemLength.length + 8,
          hasMore: true,
          loading: false,
        })
        setShowLoading(false)

      } else {
        setItemLength({
          ...itemLength,
          hasMore: false,
          loading: false,
        })
        setShowLoading(false)

      }

    }, 1000);
  }
  useEffect(() => {
   
  }, [data])
  
  return (
    <>
      {data ? (
        <div>
          <InfiniteScroll
            dataLength={itemLength.length}
            next={onFetchData}
            hasMore={itemLength.hasMore}
            loader={""}
            inverse={false}
            style={{ overflowY: 'hidden' }}
          >
            <div className={`grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4`}>

              {data.slice(0, itemLength.length).map((item: any, key: any) => (
                <div key={key} className={``}>
                  <StampGridItem data={item} />
                </div>
              ))}
            </div>

          </InfiniteScroll>
        </div>
      ) : ""}
    </>
  )
}

export default StampGrid