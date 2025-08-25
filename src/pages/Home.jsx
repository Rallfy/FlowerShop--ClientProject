import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // <= Keep this import
import Review from "../components/Review";
import homePic2 from "../assets/home_pic2.jpg";

import { getStorage, ref, getDownloadURL } from "firebase/storage";

const Home = () => {
  const [homeImage, setHomeImage] = useState(null);

  useEffect(() => {
    const fetchHomeImage = async () => {
      try {
        const storage = getStorage();
        const homeImageRef = ref(storage, "homepage/heroImage.jpg"); // Update path if needed
        const url = await getDownloadURL(homeImageRef);
        setHomeImage(url);
      } catch (error) {
        console.error("Error fetching homepage image:", error);
      }
    };

    fetchHomeImage();
  }, []);

  return (
    <div className="home-page">
      {homeImage && <img src={homeImage} alt="Arrangements 1" className="hero-image" />}
      {/* <img src={homePic1} alt="Arrangements 1" className="hero-image" /> */}

      <div className="middle-text-container">
        <p className="middle-text">
          Florăria Crinul Regal – Eleganță și rafinament floral în Șomcuta Mare,
          România.
          <br />
          Creăm aranjamente unice pentru nunți, evenimente și momente speciale,
          inspirate din frumusețea naturii.&nbsp;
          <br />
          <Link to="/despre-noi" className="learn-more-link">
            Mai multe aici
          </Link>
        </p>
      </div>

      <img src={homePic2} alt="Arrangements 2" className="hero-image1" />

      <div className="review-text-container">
        <p className="middle-text">
          Florăria Crinul Regal tine cont de parerea ta, asa ca lasa o recenzie.
          &nbsp;
          <br />
          <Link
            className="learn-more-link"
            onClick={() =>
              window.open(
                "https://www.google.com/search?q=Flor%C4%83ria%20Crinul%20Regal%20Recenzii&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NjU3M7cwsrQwNjYyMzY0NrS03MDI-IpR3i0nv-hIc1FmooJzUWZeaY5CUGp6IohMTs2rysxcxEpIBQCu5vO2XgAAAA&rldimm=3576782983326313199&tbm=lcl&hl=ro&sa=X&ved=0CB0Q9fQKKABqFwoTCOiFn6msuYsDFQAAAAAdAAAAABAG&biw=1064&bih=1048&dpr=0.9#lkt=LocalPoiReviews&lrd=0x474827000f120157:0x31a3492c37d3aaef,3,,,,"
              )
            }
          >
            Mai multe aici
          </Link>
        </p>
        <Review />
      </div>
    </div>
  );
};

export default Home;
