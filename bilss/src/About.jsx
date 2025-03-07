import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="home-container">
      {/* Hero Section - Large Image at the Top */}
      <section className="abtbg">
        <img src="src\assets\img\long.jpeg" alt="Hero" className="abtbg-image" />
        <div className="hero-content">
          <h1>
            <span className="black-text">About</span>
            <span className="yellow-text">Us</span>
          </h1>
          <p>Blissful Occasions is not just about planning events;its about creating experiences that leave a lasting impact. We believe that every event should tell a story  your story..</p>
        </div>
      </section>
    
      <div className="abts2">
      <div className="abts2text">
        <h2>Who We Are</h2>
        <p>Welcome to <b>Blissful Occasions,</b> where we transform your dreams into reality. With a passion for perfection and an eye for detail, we are your dedicated event planning with partners, specializing in creating    unforgettable moments that reflect your unique vision and style</p>
        <button className='abts2-btn'>KNOW MORE <b>➡</b></button>
      </div>
      <div className="abts2video">
        <video width="400" controls>
          <source src="src/assets/img/Kiara & Sidharth _ Ranjha _ The Wedding Filmer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  

     
<div className='whychooseus'>
   <h1>
        Why Choose <b>Us </b>?
      </h1>
</div>

    <div className="abts3">
     
      <div className="abts3item">
        <img src="src/assets/img/meet2.jpeg" alt="Image 1" className="abts3image" />
        <h2>Personalized Service</h2>
        <p> "We believe every event is unique, and we tailor our services to match your specific requirements. Our approach begins with understanding your vision and preferences. <br /></p>
      </div>
      <div className="abts3item">
        <img src="src/assets/img/man.jpeg" alt="Image 2" className="abts3image" />
        <h2>Attention To Detail</h2>
        <p> "We believe every event is unique, and we tailor our services to match your specific requirements. Our dedicated team works closely with you to understand your vision, preferences, and goals.</p>
      </div>
      <div className="abts3item">
        <img src="src/assets/img/meet1.jpeg" alt="Image 3" className="abts3image" />
        <h2>Transparency</h2>
        <p>we prioritize transparency in all our interactions and operations. We believe that honesty and openness build trust and strengthen relationships with our clients, partners<br /></p>
      </div>
    </div>


    <div className='ourstoryheading'><h1>Our <b>story</b></h1></div>
      <section className="ourstory">
        <div className='ourstorytext'>
          
          <p >
            <b> From Dreams to Reality </b>Our journey began with a simple dream: to create unforgettable experiences that bring people together and leave lasting memories. With a passion for event planning and a commitment to excellence, our founders set out to build an event management company that stands out in the industry
          </p></div>
        <div className='ourstoryphoto'>

          <img src="src/assets/img/mix.jpeg" alt="Image 1" />




        </div>
      </section>

      <div className="App">
      <div className="content">
        <h2>Content Section</h2>
        <p>This is some content above the grid boxes.</p>
      </div>

      <div className="abts5">
        <div className="abts5box">
            <h1>7+</h1>
            <p>EXPERIENCE</p>
        </div>
        <div className="abts5box">
            <h1>900+</h1>
            <p>SATISFIED CLIENTS</p>
        </div>
        <div className="abts5box">
            <h1>1000+</h1>
            <p>PROJECT DONE</p>
        </div>
        <div className="abts5box">
            <h1>50+</h1>
            <p>ACTIVATIONS</p>
        </div>
      </div>
    </div>
    <br></br>
  
    </div>
    


  );
};

export default About;