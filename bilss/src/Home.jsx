import "./Home.css"; // Import the CSS file for styling
import React, { useState } from "react";
import "./Faq.css";
import ImageSlider from "./ImageSlider";

const Home = () => {
  const items = [
    {
      title: "What types of events do you organize ?",
      content: "This is content for Heading 1",
    },
    {
      title: "Can you handle destination events ?",
      content: "This is content for Heading 2",
    },
    {
      title: "How do you ensure the quality of your services?",
      content: "This is content for Heading 3",
    },
    {
      title:
        " How can I get started with planning my event with Blissful Occasions?",
      content: "This is content for Heading 4",
    },
    {
      title: "What is your pricing structure ?",
      content: "This is content for Heading 5",
    },
  ];

  // State to toggle content visibility
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle content visibility
  const toggleContent = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the content if clicked again
    } else {
      setActiveIndex(index); // Open the content
    }
  };

  return (
    <div className="home-Full">
      {/* Hero Section - Large Image at the Top */}

      <div className="homehero">
        <a href="/Footer" className="hero-button">
          View More
        </a>
      </div>

      {/* Content Section */}
      <div className="home-container">
        {/* Grid Container */}
        <div className="headbl1">
          {/* Left Section: Heading, Paragraph, and Button */}
          <div className="left-section">
            <h2 className="grid-heading">
              WHY SHOULD YOU CHOOSE <b> US</b> ?
            </h2>
            <p className="grid-paragraph">
              Choosing <b> Blissful Occasions</b> ensures an exceptional event
              Management experience. Our team brings unmatched expertise and
              creativity, turning your vision into reality with meticulous
              attention to detail. We offer personalized planning tailored to
              your unique needs and preferences, ensuring every event is a true
              reflection of your style. Our budget-friendly packages provide
              outstanding value without compromising on quality, allowing you to
              host memorable occasions within your budget
            </p>
            <a href="/about">
              <button className="view-button">VIEW MORE</button>
            </a>
          </div>

          {/* Right Section: Image Boxes and Center Circle */}
          <div className="right-section">
            <div className="headlbimgs">
              <img src="src/assets/img/gridimg.png" alt="gridimg" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* Additional sections can go here */}
      <div className="hprojs">
        <h2 className="headingproj">SUCCESSFULLY COMPLETED 1000+ PROJECTS</h2>
        <div className="headingprojb">
          <div className="headingprojb1">
            <img
              src="src/assets/img/png1.png"
              alt="Image 1"
              className="headingprojb1img"
            />
            <p className="grid-item-name">
              <br />
              Corporate Events
            </p>
          </div>
          <div className="headingprojb1">
            <img
              src="src/assets/img/png2.png"
              alt="Image 2"
              className="headingprojb1img"
            />
            <p className="grid-item-name">Wedding Events</p>
          </div>
          <div className="headingprojb1">
            <img
              src="src/assets/img/png3.png"
              alt="Image 3"
              className="headingprojb1img"
            />
            <p className="grid-item-name">Outdoor Events</p>
          </div>
          <div className="headingprojb1">
            <img
              src="src/assets/img/png4.png"
              alt="Image 4"
              className="headingprojb1img"
            />
            <p className="grid-item-name">
              <br />
              Collaboration
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="custom-grid-section">
        <div className="heading-container">
          <h2 className="section-heading">Explore our Services</h2>
          <br />
          <br />
          <br />
          <a href="/services">
            <button className="header-button">More Services</button>
          </a>
        </div>
      <div className="cards-container">
        <div className="product-card1" >
            <div className="card-content">
                <h2 className="card-title">PHOTOGRAPHY</h2>
                <div className="card-description">
                    <p>A powerful magic—the ability to capture and preserve memories</p>
                </div>
                <div className="card-actions">
                    <button className="book-now">BOOK NOW </button>
                    <button className="view-more">More Like This → </button>
                </div>
            </div>
        </div>
        <div className="product-card2" >
            <div className="card-content">
                <h2 className="card-title">Product 2</h2>
                <div className="card-description">
                    <p>This is product 2 description.</p>
                </div>
                <div className="card-actions">
                    <button className="book-now">BOOK NOW </button>
                    <button className="view-more">More Like This →</button>
                </div>
            </div>
        </div>
        <div className="product-card3" >
            <div className="card-content">
                <h2 className="card-title">Product 3</h2>
                <div className="card-description">
                    <p>This is product 3 description.</p>
                </div>
                <div className="card-actions">
                    <button className="book-now">BOOK NOW </button>
                    <button className="view-more">More Like This →</button>
                </div>
            </div>
        </div>
    </div>















































































      </div>
      <hr />
      <h1 className="headin-m">Our Past Work</h1>
      <div>
        <ImageSlider />
      </div>

      <hr />
      <h1 className="heading">Let our clients Speak for us</h1>
    <div className="page-container">
        {/* Heading at the top */}
       

        {/* Main content container */}
        <div className="main-container">
          {/* Left side (image) */}
          <div className="left-side">
            <img
              src="src/assets/img/young-attractive-handsome-guy-feels-delighted-gladden-amazed-min_ccexpress 1.png"
              alt="Placeholder"
              className="image"
            />
          </div>

          {/* Right side (content) */}
          <div className="right-side">
            <p>
              We entrusted Blissful Occasions with our companys annual gala, and
              they exceeded our expectations in every way. From the initial
              planning stages to the final execution, their team was
              professional, attentive, and incredibly creative. The event was
              flawlessly organized, with stunning decor and seamless
              coordination. Our guests were thoroughly impressed, and we could
              not have asked for a better experience. Thank you, Blissful
              Occasions, for making our event truly memorable!
            </p>
            <br />
            <b>VICKY</b>
            <p>HOTEL MANAGEMENT</p>
          </div>
        </div>
      </div>

      <hr />
      <div className="grid-containerp">
        {/* Left Box (Content) */}
        <div className="left-boxp">
          <p className="contentp">
            <h2>
              <b>Secure Your Unforgettable Event Now !</b>
            </h2>
            Take the first step towards creating an unforgettable experience
            with us. <br />
            Whether its a corporate event, wedding, or a social gathering,{" "}
            <br />
            our expert team is ready to bring your vision to life
          </p>
        </div>

        {/* Right Box (Button) */}
        <div className="right-boxp">
          <button className="buttonp">Click Me</button>
        </div>
      </div>
<hr />
<h1 className="faqh">Frequently Asked Questions</h1>
      <div className="grid-containerf">
        <div className="grid-boxf">
          {items.map((item, index) => (
            <div className="grid-itemf" key={index}>
              <div className="heading-sectionf">
                <h2>{item.title}</h2>
                <button
                  className="toggle-buttonf"
                  onClick={() => toggleContent(index)}
                >
                  +
                </button>
              </div>
              {activeIndex === index && (
                <p className="contentf">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
