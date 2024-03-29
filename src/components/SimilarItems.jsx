import React, { useState, useEffect } from "react";
import ProductThumbnail from "../components/ProductThumbnail";
import * as routes from "../api/apiRoutes";
import appApi from "../api/appApi";
import { Skeleton } from "antd";

const SimilarItems = ({ id }) => {
  const [items, setItems] = useState();
  const [loading,setLoading] =  useState(true);

  //Get 4 Similar Items
  const get4SimilarItems = async () => {
    setLoading(true)
    try {
      const data = await appApi.get(
        routes.GET_4SIMILAR_ITEMS(id),
        routes.get4SimilarItems(id)
      );
      console.log(data);
      setItems(data.data);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(err.message);
      }
    }
    setLoading(false)
  };

  useEffect(() => {
    get4SimilarItems();
  }, [id]);

  return (
    <div className="mt-[141px] px-[150px]">
      <h2 className=" text-[35px] leading-[44px] font-bold">SIMILAR ITEMS</h2>
      <div className="mt-[47px] flex gap-x-[59px] overflow-x-auto pb-[53px]">
        {!loading
          ? items.map((item, i) => {
              return <ProductThumbnail item={item} key={i} imageCustom='w-[15vw]' custom={'flex-none'}/>;
            })
          : Array(4)
              .fill()
              .map((_, i) => (
                <div key={i} className='w-[15vw]'>
                  <Skeleton.Image
                    style={{ width: "100%", height: "100%" }}
                    active={true}
                    className="aspect-[2/3] w-full"
                  />
                  <Skeleton className="mt-8" />
                </div>
              ))}
      </div>
    </div>
  );
};

export default SimilarItems;
