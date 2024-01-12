import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Element, Link } from "react-scroll";

import "../css/style.css";
import "../css/bootstrap.min.css";
import Header from "../Partial/Header";
import { ToastContainer, toast } from "react-toastify";
import Collapse from "react-collapse";
import { Carousel } from 'antd';
import crm1 from "./../Assets/Images/crm1.png";
import crm2 from "./../Assets/Images/crm2.png";
import crm3 from "./../Assets/Images/crm3.png";
import crm4 from "./../Assets/Images/crm4.png";
import adii from "./../Assets/Images/adi.png";
import react from "./../Assets/Images/react.png";
import reduxLogo from "./../Assets/Images/redux.png";
import tailwind from "./../Assets/Images/tailwind.png";
import antd from "../Assets/Images/antd.png"

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Home = () => {
  const [isOpen, setIsOpen] = useState({
    open1: true,
    open2: false,
    open3: false,
  });
  // const [isOpen1, setIsOpen1] = useState(true);
  // const [isOpen2, setIsOpen2] = useState(false);
  // const [isOpen3, setIsOpen3] = useState(false);

  const handleToggle1 = () => {
    setIsOpen({ open1: true, open2: false, open3: false });
    // setIsOpen1(true);
    // setIsOpen2(false);
    // setIsOpen3(false);
  };

  const handleToggle2 = () => {
    setIsOpen({ open1: false, open2: true, open3: false });
    // setIsOpen2(true);
    // setIsOpen1(false);
    // setIsOpen3(false);
  };

  const handleToggle3 = () => {
    setIsOpen({ open1: false, open2: false, open3: true });

    // setIsOpen3(true);
    // setIsOpen2(false);

    // setIsOpen1(false);
  };

  const [activeFilter, setActiveFilter] = useState("*");
  const [ActiveItem, setActiveItem] = useState();
  // const navigate = useNavigate()

  const Handle = (item) => {
    setActiveFilter(item.filterValue);
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  // const proficiencies = [
  //   {
  //     image: react,
  //     heading: "React.js",
  //     paragraph: `As a React developer, I specialize in crafting dynamic and responsive user interfaces. Leveraging the power of React's component-based architecture, I create scalable and efficient web applications that deliver exceptional user experiences.`,
  //   },

  //   {
  //     image: reduxLogo,
  //     heading: "Redux",
  //     paragraph: `In my role as a Redux enthusiast, I excel in managing the state of complex React applications with clarity and efficiency. Leveraging Redux's centralized state management, I ensure seamless data flow, enabling scalable and maintainable front-end architectures.`,
  //   },

  //   {
  //     image: tailwind,
  //     heading: "Tailwind",
  //     paragraph: `As a Tailwind CSS aficionado, I specialize in crafting stylish and responsive web designs with unparalleled speed. Leveraging Tailwind's utility-first approach, I streamline the styling process, ensuring clean and maintainable code that brings modern aesthetics to every project.`,
  //   },
  //   {
  //     image: antd,
  //     heading: "Ant Design",
  //     paragraph: `In my role as an Ant Design enthusiast, I harness the power of this comprehensive design system to create polished and user-friendly interfaces. With a vast array of pre-built React components, Ant Design expedites development, allowing me to focus on delivering visually appealing and highly functional web applications.`,
  //   },
  // ]

  return (
    <>
      <ToastContainer />
      <>
        <Element name="/" className="element">
          <Header />
        </Element>

        {/* End Navbar ====
    	======================================= */}
        {/* =====================================
    	==== Start Header */}
        <header
          className="header valign bg-img"
          data-scroll-index={0}
          data-overlay-dark={4}
          data-background="img/bg-min.jpg"
          data-stellar-background-ratio="0.5"
        >
          <div className="container">
            <div className="row">
              <div className="offset-lg-1 col-lg-10 text-center caption mt-50">
                <h6>Welcome</h6>

                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "I Am Syed Adil",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "I Am a Developer",
                    1000,
                    "I Am a Programmer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{
                    fontSize: "4em",
                    display: "inline-block",
                    fontWeight: "bold",
                  }}
                  repeat={Infinity}
                />

                <p className=" font-bold  ">
                  "Crafting seamless user experiences through innovative front-end development to bring digital visions to life."
                </p>
                <div className="social mt-15">
                  <a href="https://www.facebook.com/syedadilahmed.k" className="icon">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://www.linkedin.com/in/syedadil68" className="icon">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="https://www.instagram.com/syed_adil68/" className="icon">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* End Header ====
    	======================================= */}
        {/* =====================================
  ==== Start Hero */}
        <section className="hero section-padding" data-scroll-index={1}>
          <div className="container">
            <div className="row">
              <div className="col-lg-5" data-aos="fade-right" data-aos-duration="2000">
                <div className="hero-img mb-md50">
                  <div className="img">
                    <img src={adii} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <Element name="about" className="element " data-aos="fade-left" data-aos-duration="2000">
                  <div className="content" >
                    <h3 className="">About Me</h3>
                    <span>I am Web Developer</span>
                    <p className="mb-10">
                      "Hello, I'm Syed Adil, and I'm passionate about the digital world. Front-end web development is where I channel my creativity and technical skills to craft captivating online experiences. As a front-end developer, I specialize in bringing websites to life by blending design and technology. Using languages like HTML, CSS, and JavaScript and libraries like React JS".
                    </p>
                    <p>
                      "I meticulously construct the visual and interactive elements that users directly engage with. From the layout and color schemes to the responsive design that adapts seamlessly to all devices, my role is to ensure that every user enjoys a smooth and visually pleasing journey. Collaborating closely with designers, I transform concepts into reality, adding functionalities that enhance usability. With each line of code, I aim to create not just websites, but immersive digital landscapes that leave a lasting impression. Join me in exploring the dynamic realm of front-end web development, where creativity meets innovation."
                    </p>
                    <div className="skills mt-30">
                      <div className="skill-item">
                        <h5>Web Design</h5>
                        <div className="skill-progress">
                          <div className="progres" data-value="90%" />
                        </div>
                      </div>
                      <div className="skill-item">
                        <h5>Development</h5>
                        <div className="skill-progress">
                          <div className="progres" data-value="85%" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Element>
              </div>
            </div>
          </div>
        </section>
        {/* End Hero ====
  ======================================= */}
        {/* =====================================
  ==== Start Services */}
        <section
          className="services section-padding bg-gray"
          data-scroll-index={2}
        >
          <Element name="skills" className="element">

            <div className="container">
              <div className="row">
                <div className="section-head text-center col-lg-12">
                  <h3>Skills</h3>
                  <span>
                    <i />
                    <i />
                    <i />
                  </span>
                </div>
                <div className="col-lg-4 col-md-6" >
                  <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="item mb-30">

                      <img src={react} alt="" style={{ height: '70px', width: '80px', marginBottom: '30px' }} />
                      <h6>React JS</h6>
                      <p>
                        As a React developer, I specialize in crafting dynamic and responsive user interfaces. Leveraging the power of React's component-based architecture, I create scalable and efficient web applications that deliver exceptional user experiences.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6" >
                  <div data-aos="fade-down" data-aos-duration="1000">
                    <div className="item mb-30">

                      <img src={reduxLogo} alt="" style={{ height: '70px', width: '80px', marginBottom: '30px' }} />
                      <h6>Redux</h6>
                      <p>
                        In my role as a Redux enthusiast, I excel in managing the state of complex React applications with clarity and efficiency. Leveraging Redux's centralized state management, I ensure seamless data flow, enabling scalable and maintainable front-end architectures.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6" >
                  <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="item mb-30">

                      <img src={tailwind} alt="" style={{ height: '70px', width: '80px', marginBottom: '30px' }} />
                      <h6>Tailwind</h6>
                      <p>
                        As a Tailwind CSS aficionado, I specialize in crafting stylish and responsive web designs with unparalleled speed. Leveraging Tailwind's utility-first approach, I streamline the styling process, ensuring clean and maintainable code that brings modern aesthetics to every project.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6" >
                  <div data-aos="fade-down" data-aos-duration="1000">
                    <div className="item mb-30">
                      <img src={antd} alt="" style={{ height: '70px', width: '80px', marginBottom: '30px' }} />
                      <h6>Ant Design</h6>
                      <p>
                        In my role as an Ant Design enthusiast, I harness the power of this comprehensive design system to create polished and user-friendly interfaces. With a vast array of pre-built React components, Ant Design expedites development, allowing me to focus on delivering visually appealing and highly functional web applications.
                      </p>
                    </div>
                  </div>
                </div>
                {/* {
                  proficiencies.map((items) => (
                    <>
                      <div className="col-lg-4 col-md-6" >
                        <div className="item mb-30">

                          <img src={items.image} alt="" style={{ height: '70px', width: '80px', marginBottom: '30px' }} />
                          <h6>{items.heading}</h6>
                          <p>
                            {items.paragraph}
                          </p>
                        </div>
                      </div>
                    </>
                  ))
                } */}
              </div>
            </div>
          </Element>
        </section>
        {/* End Services ====
  ======================================= */}
        {/* =====================================
  ==== Start Works */}

        <Element name="portfolio" className="element">
          <section className="works section-padding" data-scroll-index={3}>
            <div className="container">
              <div className="row">
                <div className="section-head text-center col-lg-12">
                  <h3>Portfolio</h3>
                  <span>
                    <i />
                    <i />
                    <i />
                  </span>
                </div>
                {/* filter links */}
                <div className="filtering grid grid-row-2   m-auto ">
                  <div class=" font-extrabold">
                    <span
                      onClick={handleToggle1}
                      className={isOpen?.open1 ? `bg-black text-white` : null}
                    >
                      Web Development
                    </span>
                    {/* <span
                      onClick={handleToggle2}
                      className={isOpen?.open2 ? `bg-black text-white` : null}
                    >
                      UIUX Designing
                    </span>
                    <span
                      onClick={handleToggle3}
                      // className={isOpen3 ? `bg-black text-white` : null}
                    >
                      Graphic Designing
                    </span>
                    <span data-filter=".graphic">Content Writing</span> */}
                  </div>
                </div>
                <Collapse isOpened={isOpen?.open1}>
                  <div className="gallery text-center full-width">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items web">
                      <div className="item-img"
                        style={{
                          boxShadow: "0px 1px 8px 8px rgba(0, 0, 0, 0.1)",
                        }}>
                        <Carousel autoplay
                        >
                          <div>
                            <img src={crm1} alt="" />
                          </div>
                          <div>
                            <img src={crm2} alt="" />
                          </div>
                          <div>
                            <img src={crm3} alt="" />
                          </div>
                          <div>
                            <img src={crm4} alt="" />
                          </div>
                        </Carousel>

                        <div className="item-img-overlay valign">
                          <div className="overlay-info full-width vertical-center">
                            <h6>Crearive Design</h6>
                            <a href="https://my-crm-psi.vercel.app/" target="blank">
                              <span className="icon ti-link" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="clearfix" />
                  </div>

                </Collapse>

                <Collapse isOpened={isOpen?.open2}>
                  <div className="gallery text-center full-width">
                    <div className="grid grid-cols-4 gap-4 items web">
                      <div className="item-img">
                        {/* <img src={img2} alt="image" /> */}

                        <div className="item-img-overlay valign">
                          <div className="overlay-info full-width vertical-center">
                            <h6>Crearive Design</h6>
                            <a href="" className="popimg">
                              <span className="icon ti-zoom-in" />
                            </a>
                            <a href="#0">
                              <span className="icon ti-link" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="clearfix" />
                  </div>
                </Collapse>
              </div>
            </div>
          </section>
        </Element>
        {/* End Works ====
  ======================================= */}

        {/* =====================================
  ==== Start Blog */}

        {/* End Blog ====
  ======================================= */}

        {/* =====================================
  ==== Start Footer */}
        <footer data-overlay-dark={9}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="item">
                  <span className="icon ti-mobile" />
                  <h6>Phone</h6>
                  <p>+92-324-3325386</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="item">
                  <span className="icon ti-map" />
                  <h6>Address</h6>
                  <p>Fc Area - Liquatabad - Karachi</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="item">
                  <span className="icon ti-email" />
                  <h6>Email</h6>
                  <p>syedadil0324@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="copy text-center">
                    <div className="social">
                      <a href="https://www.facebook.com/syedadilahmed.k" className="icon">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="https://www.linkedin.com/in/syedadil68" className="icon">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="https://www.instagram.com/syed_adil68/" className="icon">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <p>© 2023 Syed-Adil. All Rights Reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* End Footer ====
  ======================================= */}
      </>
    </>
  );
};

export default Home;
