import React, { useEffect, useState } from "react";
import "./HomeAboutPage.css";
import Axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

const HomeAboutPage = ({ imageURL }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await Axios.get(
          `https://dekhomarket.com/apis/abouts_api.php?type=Admin`,
                );

        if (response.status === 200) {
          setData(response?.data?.data[0]);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchApi();
  }, []);

  console.log(data)

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <CircularProgress style={{ color: "#007BFF", marginTop: "200px" }} />
        </div>
      ) : (
        <>
          <img src={data?.banner} alt="" style={{ width: "100%" }} />
          <div className="aboutuspage">
            <div className="aboutuscontent">
              <div className="aboutuscontentleft1">
                <span>{data?.title1}</span>
                <span>{data?.our_expertise}</span>
              </div>
              <div className="aboutuscontentright">
                <img src={data?.image1} alt="" />
              </div>
            </div>
            <div className="aboutuscontent">
              <div className="aboutuscontentleft2">
                <img src={data?.image2} alt="" />
              </div>
              <div className="aboutuscontentright" id="s2">
                <span>{data?.title2}</span>
                <span>{data?.what_we_do}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HomeAboutPage;
