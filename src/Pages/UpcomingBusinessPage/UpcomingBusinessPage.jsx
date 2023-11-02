import React, { useState, useEffect } from 'react';
import ProductSection from '../../Sections/ProductSection/ProductSection';
import Axios from 'axios';

const UpcomingBusiness = ({ userLocation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apifetch = async () => {
      try {
        const response = await Axios.get(`https://dekhomarket.com/apis/upcoming_business_api.php?latitude=${userLocation?.latitude}&longitude=${userLocation?.longitude}`);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    apifetch();
  }, [userLocation]); 

  console.log(data);

  return (
    <>
      <ProductSection Businesses={data}/>
    </>
  );
}

export default UpcomingBusiness;
