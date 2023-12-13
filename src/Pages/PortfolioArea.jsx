import React from "react";
import { Link, Element } from "react-scroll";
import img1 from '../Assets/Images/1.jpg'

const PortfolioArea = (data) => {


  return (
    <>
      <div className="gallery text-center full-width">
        <div className="grid grid-cols-4 gap-4 items web">
          <div className="item-img">

            <img src={data.images} alt="image" height={20}/>
            
            {/* <div className="item-img-overlay valign">
              <div className="overlay-info full-width vertical-center">
                <h6>Crearive Design</h6>
              <a href='' className="popimg">
                  <span className="icon ti-zoom-in" />
                </a>
                <a href="#0">
                  <span className="icon ti-link" />
                </a>
              </div>
            </div> */}
          </div>
          {/* <div className="item-img">
            <img src={img1} alt="image" />
            <div className="item-img-overlay valign">
              <div className="overlay-info full-width vertical-center">
                <h6>Crearive Design</h6>
                <a href="img/portfolio/1.jpg" className="popimg">
                  <span className="icon ti-zoom-in" />
                </a>
                <a href="#0">
                  <span className="icon ti-link" />
                </a>
              </div>
            </div>
          </div> */}
        </div>

        <div className="clearfix" />
      </div>
    </>
  );
};

export default PortfolioArea;
