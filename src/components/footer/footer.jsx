import React from "react";
import "./footer.scss";
import { FaTwitter, FaFacebookF, FaInstagram,FaPlay } from "react-icons/fa";
import { ImageAppStore, ImageGetGooglePlay, ImageAppGallery } from "../../assets";


function Footer() {
  return (
    <footer>
      <div className="container-fluid mt-5 row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <h6>Popular Categories</h6>
          <ul>
            <li>Cars</li>
            <li>Flats for rent</li>
            <li>Mobile Phone</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <h6>Trending Searches</h6>
          <ul>
            <li>Bikes</li>
            <li>Watches</li>
            <li>Books</li>
            <li>Dogs</li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <h6>About us</h6>
          <ul>
            <li>About Dubizzle Group</li>
            <li>Olx Blog</li>
            <li>Contact us</li>
            <li>Olx for Business</li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <h6>Olx</h6>
          <ul>
            <li>Help</li>
            <li>Site map</li>
            <li>Term of use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h6>Follow us</h6>
          <div className="icons">
            <FaTwitter className="icon"/>
            <FaFacebookF className="icon"/>
            <FaInstagram className="icon"/>
            <FaPlay className="icon"/>
          </div>
          <div className="app-stores mt-4">
                <img src={ImageAppStore} alt="app-store-img" />
                <img src={ImageGetGooglePlay} alt="google-play-img" />
                <img src={ImageAppGallery} alt="app-gallery-img" />
          </div>
        </div>
      </div>
      <div className="container-fluid footer-end">
            <div><span>Free Classifieds in Pakistan</span>  . © 2006-2024 OLX</div>
      </div>
    </footer>
  );
}

export default Footer;
