import "./Service.css"; // Import the CSS file for styling
const Service = () => {
  return (
    <>
      <div className="home-container">
        {/* Hero Section - Large Image at the Top */}
        <div className="hero">
          <img
            src="src/assets/img/servicespage.jpg"
            alt="Hero"
            className="hero-image"
          />
          <div className="hero-content">
            <div className="">
              <h1>
                <span className="black-text">Explore our</span>
                <span className="yellow-text">Services</span>
              </h1>
            </div>
            <p>crafting unforgettable experiences</p>
          </div>
        </div>
      </div>
      <section className="service-alin">
        {/* Additional sections can go here */}
        <div className="container1">
          <div className="left-img1">
            <img
              src="src\assets\img\cam.jpg"
              alt="Service Image"
            />
          </div>
          <div className="right-content1">
            <h1>PHOTOGRAPHY</h1>
            <p>
              Capture the Moments, Create the Memories <br />
              Our lens transforms fleeting instants into timeless treasures,
              <br />
              preserving the beauty and emotion of every scene <br />
            </p>
            <div className="buttons-container1">
              <button className="know-more-btn1">KNOW MORE</button>
              <button className="book-now-btn1">BOOK NOW</button>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        {/* Content Section */}
        <div className="container2">
          <div className="left-content2">
            <h1>VIDEOGRAPHY</h1>
            <p>
              Capture the Action, Create the Narrative – Our <br /> videography
              brings your story to life, <br /> transforming every moment into a
              cinematic <br />
              masterpiece that you will cherish forever
            </p>
            <div className="buttons-container2">
              <button className="know-more-btn2">KNOW MORE</button>
              <button className="book-now-btn2">BOOK NOW</button>
            </div>
          </div>
          <div className="right-img2">
            <img src="src\assets\img\boy.png" alt="Service Image" />
          </div>
        </div>
        <div className="divider"></div>
        {/* Additional sections can go here */}
        <div className="container3">
          <div className="left-img3">
            <img src="src\assets\img\bridalpic.jpg" alt="Service Image" className="service-bridimg"/>
          </div>
          <div className="right-content3">
            <h1>BRIDAL MAKEUP</h1>
            <p>
              Radiant Beauty for Your Special Day – Our expert <br />
              bridal makeup artists ensure you look
              <br />
              breathtaking, enhancing your natural beauty with
              <br />
              a flawless touch that lasts throughout your
              <br />
              celebration
            </p>
            <div className="buttons-container3">
              <button className="know-more-btn3">KNOW MORE</button>
              <button className="book-now-btn3">BOOK NOW</button>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        {/* Content Section */}
        <div className="container4">
          <div className="left-content4">
            <h1>CORPORATE EVENTS</h1>
            <p>
              Elevate Your Corporate Gatherings – From <br />
              strategy meetings to grand celebrations, our
              <br />
              expert event planners ensure every corporate <br />
              event is seamless, sophisticated, and <br />
              impactful
            </p>
            <div className="buttons-container4">
              <button className="know-more-btn4">KNOW MORE</button>
              <button className="book-now-btn4">BOOK NOW</button>
            </div>
          </div>
          <div className="right-img4">
            <img
              src="src\assets\img\corprationeventpic.jpg"
              alt="Service Image"
            />
          </div>
        </div>
        <div className="divider"></div>
        {/* Additional sections can go here */}
        <div className="container5">
          <div className="left-img5">
            <img src="src\assets\img\partyphoto.jpg" alt="Service Image" />
          </div>
          <div className="right-content5">
            <h1>ENTERTAINMENT EVENTS</h1>
            <p>
              “Unleash the Fun”– Our entertainment events are <br />
              designed to captivate and delight, creating <br />
              unforgettable moments of joy and excitement for <br />
              every guest
            </p>
            <div className="buttons-container5">
              <button className="know-more-btn5">KNOW MORE</button>
              <button className="book-now-btn5">BOOK NOW</button>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        {/* Content Section */}
        <div className="container6">
          <div className="left-content6">
            <h1>EXHIBITIONS</h1>
            <p>
              “Showcase Your Innovation” – Our expertly <br />
              crafted exhibitions highlight your brands <br />
              brilliance, captivating audiences and creating lasting <br />
              impressions
            </p>
            <div className="buttons-container6">
              <button className="know-more-btn6">KNOW MORE</button>
              <button className="book-now-btn6">BOOK NOW</button>
            </div>
          </div>
          <div className="right-img6">
            <img src="src\assets\img\exhibitionpic.jpg" alt="Service Image" />
          </div>
        </div>
        <div className="divider"></div>
        {/* Additional sections can go here */}
        <div className="container7">
          <div className="left-img7">
            <img src="src\assets\img\eventphotos.jpg" alt="Service Image" />
          </div>
          <div className="right-content7">
            <h1>GOVERNMENT PROTOCOL EVENTS</h1>
            <p>
              Seamless Protocol, Distinguished Presence – <br />
              Our expertise ensures that government <br />
              protocol events are executed with precision,
              <br />
              elegance, and utmost respect for formalities
              <br />
              and traditions
            </p>
            <div className="buttons-container7">
              <button className="know-more-btn7">KNOW MORE</button>
              <button className="book-now-btn7">BOOK NOW</button>
            </div>
         
          </div>
    </div >
    </section>
    </>
  );
};

export default Service;