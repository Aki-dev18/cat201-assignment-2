import React, { useState } from 'react';
import './App.css';
import myBackground from './introbg.jpg';
import websiteImg from './website.jpg';
import Ads from './ads.mp4'; 
import UIImg from './UIImg.jpg';
import AppVid from './app.mp4';
import WebVid from './web.mp4';
import UIVid from './UIvid.mp4';
import threeDVid from './3d.mp4';
import nazirulPic from './nazirul.jpg';
import syedPic from './syed.jpg';
import izhamPic from './izham.png';
import faridPic from './farid.jpg';
import missionPic from './9270553.jpg';
import companyLogo from './WhatAWebb_logo.png';

// --- NAVBAR COMPONENT ---
function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    backgroundColor: 'rgba(34, 34, 34, 0.95)',
    padding: '10px 0',
    textAlign: 'center',
    zIndex: '2000', // Increased z-index to be safe
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'nowrap', // Forces buttons to stay on one line
    overflowX: 'auto',  // Allows tiny scroll if screen is VERY small
  };

  const buttonStyle = {
    background: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '11px', // Reduced font size to fit small screens
    fontWeight: 'bold',
    margin: '0 5px',  // Reduced margins significantly
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '0.5px', // Reduced spacing
    padding: '8px 5px',
    whiteSpace: 'nowrap' // Prevents text from wrapping
  };

  return (
    <nav style={navStyle}>
      <button style={buttonStyle} onClick={() => scrollToSection('intro')}>Home</button>
      <button style={buttonStyle} onClick={() => scrollToSection('mission')}>Mission</button>
      <button style={buttonStyle} onClick={() => scrollToSection('services')}>Services</button>
      <button style={buttonStyle} onClick={() => scrollToSection('team')}>Team</button>
    </nav>
  );
}

// --- 1. INTRO COMPONENT ---
function Intro() {
  return (
    <section id="intro" style={{ 
      padding: '0 20px', 
      textAlign: 'center', 
      backgroundImage: `url(${myBackground})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      color: 'white', 
      minHeight: '100vh', 
      display:'flex', 
      flexDirection:'column', 
      justifyContent:'center', 
      alignItems:'center',
      paddingTop: '80px', // Space for navbar
      paddingBottom: '80px'
    }}>
      <div style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
        padding: '30px 20px', 
        borderRadius: '15px', 
        maxWidth: '800px', 
        width: '100%',        // Fits mobile width
        margin: 'auto',
        boxSizing: 'border-box' // CRITICAL FIX
      }}>
        <img
          src={companyLogo}
          alt="WhatAWebb Logo"
          style={{
            width: '100%',
            maxWidth: '500px', // Ensures logo shrinks on phone
            height: 'auto',
            marginBottom: '20px',
          }}
        />
        <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', margin: '0', textAlign: 'center'}}>
          WhatAWebb
        </h1>
        <h3 style={{ fontWeight: '300', textAlign: 'center' }}>Your Vision, Our Design</h3>
        <p style={{ marginTop: '20px', textAlign: 'justify', lineHeight: '1.6'}}>
          Long gone are the days where you have to struggle through designing your own website from scratch. The future of digital presence is here, courtesy of our dedicated team at PixelPerfect Designs. We specialize in helping both ambitious startups and established enterprises turn their vision of a perfect website into a tangible reality. We believe that a website is more than just code; it is the digital face of your brand. That is why we tailor every single pixel to meet your specific business goals, ensuring that peak customer satisfaction is not just a goal, but a guarantee. By paying close attention to the most minute details—from seamless navigation to responsive layouts—we ensure that every design we craft is as unique as the business it represents. Let us handle the complexity of web development so you can focus on what you do best: growing your business.
        </p>
      </div>
    </section>
  );
}

// --- 2. MISSION COMPONENT ---
function Mission() {
  const [hovered, setHovered] = useState(null);

  const getContainerStyle = (section) => ({
    padding: '20px',
    borderRadius: '15px',
    transition: 'all 0.3s ease',
    backgroundColor: hovered === section ? '#007bff' : 'transparent',
    boxSizing: 'border-box' // CRITICAL FIX
  });

  const getTitleStyle = (section) => ({
    color: hovered === section ? 'white' : '#000000ff',
  });

  const getTextStyle = (section) => ({
    fontSize: '18px',
    color: hovered === section ? 'white' : '#252525ff',
    textAlign: 'justify',
  });

  const getListStyle = (section) => ({
    listStyle: 'none',
    padding: 0,
    color: hovered === section ? 'white' : '#252525ff',
    lineHeight: '1.8',
    textAlign: 'justify',
  });

  return (
    <section id="mission" style={{ 
      padding: '60px 20px', 
      textAlign: 'center', 
      backgroundColor: '#ffffff'
    }}>

      <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>

      <div 
        onMouseEnter={() => setHovered('mission')}
        onMouseLeave={() => setHovered(null)}
        style={{ ...getContainerStyle('mission'), marginBottom: '40px' }}
      >
        <h2 style={getTitleStyle('mission')}>Our Mission</h2>
        <p style={getTextStyle('mission')}>
          Our mission is to democratize digital excellence by empowering every local business, regardless of its size or industry, with a world-class online presence. We strive to bridge the technological divide, ensuring that sophisticated web solutions are not only accessible but also serve as a powerful, profitable engine for growth. By simplifying the complexities of the digital world, we enable our partners to focus on what they do best while we handle the rest.
        </p>
      </div>

      <div 
        onMouseEnter={() => setHovered('vision')}
        onMouseLeave={() => setHovered(null)}
        style={{ ...getContainerStyle('vision'), marginBottom: '20px' }}
      >
        <h2 style={getTitleStyle('vision')}>Our Vision</h2>
        <p style={getTextStyle('vision')}>
          We envision a future where WhatAWebb stands as the undisputed beacon of trust and innovation within the Malaysian digital landscape. Our goal is to set the industry benchmark for creativity, technical reliability, and user-centric design, establishing ourselves as the premier web agency in the nation by the year 2030. We aspire to be the catalyst that transforms local Malaysian enterprises into global digital competitors.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '0', paddingTop: '20px'}}>

      <div 
        onMouseEnter={() => setHovered('goals')}
        onMouseLeave={() => setHovered(null)}
        style={{ ...getContainerStyle('goals'), minWidth: '300px', flex: '1', marginBottom: '0px' }}
      >
            <h2 style={getTitleStyle('goals')}>Strategic Goals</h2>
            <ul style={getListStyle('goals')}>
              <li style={{ marginBottom: '15px' }}>
                <strong>Market Leadership:</strong> To solidify WhatAWebb’s position as the definitive standard-bearer for web quality across the Northern Region, ensuring that our brand becomes synonymous with digital excellence, reliability, and superior craftsmanship.
              </li>
              <li style={{ marginBottom: '15px' }}>
                <strong>Continuous Innovation:</strong> To relentlessly pursue technological advancement by actively integrating emerging frontiers—such as Artificial Intelligence (AI) and Web3 decentralized architectures—into our standard client packages, ensuring our clients always stay ahead of the competitive curve.
              </li>
              <li>
                <strong>Client Retention:</strong> To fundamentally transform our business model from transactional, project-based interactions to sustainable, long-term retainer partnerships. We aim to become a lifelong digital partner for our clients, fostering deep, enduring relationships that grow alongside their businesses.
              </li>
            </ul>
          </div>

      <div 
        onMouseEnter={() => setHovered('objectives')}
        onMouseLeave={() => setHovered(null)}
        style={{ ...getContainerStyle('objectives'), minWidth: '300px' }}
      >
            <h2 style={getTitleStyle('objectives')}>Objectives</h2>
            <ul style={getListStyle('objectives')}>
              <li style={{ marginBottom: '15px' }}>
                <strong>Acquisition:</strong> To aggressively expand our market footprint by successfully onboarding 50 high-value, enterprise-tier clients by the fourth quarter of 2026, thereby securing a dominant share of the local market.
              </li>
              <li style={{ marginBottom: '15px' }}>
                <strong>Quality Assurance:</strong> To uphold the highest standards of client satisfaction by achieving and maintaining a Net Promoter Score (NPS) of 70+. We will validate this through rigorous, ongoing User Experience (UX) testing and continuous feedback loops.
              </li>
              <li>
                <strong>Efficiency:</strong> To optimize our operational workflows and reduce average project deployment timelines by 20%. This will be achieved by leveraging our proprietary library of high-performance templates and adopting agile development methodologies to deliver faster results without compromising quality.
              </li>
            </ul>
          </div>

      </div>
      </div>
    </section>
  );
}

// --- 3. SERVICE BLOCK COMPONENT ---
const ServiceBlock = ({ videoSource, label, description }) => {
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      // FIX: Responsive Sizing
      width: '90%',           // Fills 90% of the screen width (Mobile & PC)
      maxWidth: '700px',      // But stops growing at 700px so it doesn't look too huge on PC
      margin: '0 auto 40px',  // Centers the box and adds 40px space at the bottom
      boxSizing: 'border-box'
    }}>
      <div 
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{ 
          position: 'relative', 
          width: '100%',         // Fills the container
          aspectRatio: '16/9',   // Forces the perfect video rectangle shape
          borderRadius: '15px', 
          border: isHovering ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
          overflow: 'hidden',
          backgroundColor: '#000',
          boxShadow: isHovering ? '0 20px 40px rgba(0,0,0,0.3)' : '0 4px 10px rgba(0,0,0,0.1)', 
          transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
          transform: isHovering ? 'translateY(-5px)' : 'translateY(0)', 
        }}
      >
        <video 
          src={videoSource} 
          autoPlay loop muted playsInline
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            filter: isHovering ? 'brightness(0.4)' : 'brightness(1)',
            transform: isHovering ? 'scale(1.05)' : 'scale(1)',
            transition: '0.4s'
          }} 
        />
        <div style={{ 
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white', padding: '20px', textAlign: 'center', 
          opacity: isHovering ? 1 : 0,
          transition: '0.4s',
          background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3))',
          backdropFilter: 'blur(5px)',
          pointerEvents: 'none',
          lineHeight: '1.5',      
        }}>
          <p style={{ fontSize: '16px', margin: 0 }}>{description}</p>
        </div>
      </div>
      <h5 style={{ marginTop: '15px', fontSize: '22px' }}>{label}</h5>
    </div>
  );
};

// --- 4. SERVICES SECTION ---
function Services() {
  return (
    <section id="services" style={{ 
      padding: '60px 0', 
      backgroundColor: '#f9f9f9', 
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column', // Stacks items vertically
      alignItems: 'center'     // Centers items horizontally
    }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '50px' }}>Our Services</h2>

      {/* No more separate rows, just a list of blocks */}
      
      <ServiceBlock 
        videoSource={WebVid} 
        label="Website Development" 
        description="High-performance web applications built with React, Next.js, and Node.js for seamless scalability." 
      />

      <ServiceBlock 
        videoSource={UIVid} 
        label="UI Design" 
        description="User-centric interfaces crafted in Figma and Adobe XD, focusing on accessibility and modern aesthetics." 
      />

      <ServiceBlock 
        videoSource={Ads} 
        label="Advertisement Video" 
        description="Engaging commercial content edited in Adobe Premiere Pro and After Effects to drive conversions." 
      />

      <ServiceBlock 
        videoSource={AppVid} 
        label="App Development" 
        description="Native and cross-platform mobile solutions using Flutter and React Native for iOS and Android." 
      />

      <ServiceBlock 
        videoSource={threeDVid} 
        label="3D Animation" 
        description="Photorealistic 3D modeling and motion graphics created using Blender, Cinema 4D, and Unreal Engine." 
      />
      
    </section>
  );
}

// --- 4. TEAM COMPONENT ---
function Team() {
  const members = [
    { 
      name: "Muhammad Nazirul Muazzam Bin Ahmad Faizal", 
      role: "Team Lead", 
      photo: nazirulPic,
      description:"As the Team Lead, Nazirul serves as the visionary and central coordinator for the entire project. His primary responsibility is to oversee the project lifecycle from conception to delivery, ensuring that strict timelines are met and that the team remains aligned with the company's strategic goals. He acts as the bridge between technical execution and client requirements, managing resources effectively to guarantee a high-quality final product."
    },
    { 
      name: " Syed Nur Haikal Al Aziz Bin Syed Baharin", 
      role: "UI Designer", 
      photo: syedPic,
      description: "Syed Nur Haikal is the creative force behind the agency’s visual identity, focusing on crafting intuitive and aesthetically pleasing digital experiences. He is responsible for designing the user interface layout, selecting color palettes, and defining typography to ensure the website is not only beautiful but also easy to navigate. His work centers on User Experience (UX) principles, ensuring that every design element serves a functional purpose for the visitor."
    },
    { 
      name: " Muhammad Izham Bin Shawal", 
      role: "Developer", 
      photo: izhamPic,
      description: "Muhammad Izham acts as the technical architect, translating creative designs into functional, high-performance code. He is tasked with building the underlying structure of the website using React, JavaScript, and CSS, ensuring that the interface is responsive across mobile and desktop devices. His role involves rigorous testing and debugging to maintain a smooth, error-free user experience while handling the deployment and maintenance of the site’s codebase."
    },
    { 
      name: "Muhammad Farid Haikal Bin Khairul Nizam", 
      role: "Content", 
      photo: faridPic,
      description: "Muhammad Farid Haikal is the voice of the brand, responsible for crafting compelling narratives that resonate with the audience. He develops all written content, from the mission statement to service descriptions, ensuring clarity, tone consistency, and engagement. His role is crucial in communicating the value of WhatAWebb to potential clients, transforming static information into persuasive marketing copy that drives business growth."
    }
  ];

  return (
    <section id="team" style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h2>Meet Our Team</h2>
      <p style={{ marginBottom: '40px' }}>The minds behind the magic.</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
        {members.map((member, index) => (
          <div key={index} style={{ border: '1px solid #eee', padding: '20px', borderRadius: '15px', width: '100%', maxWidth: '300px', flexGrow: 1, boxShadow: '0 2px 5px rgba(0,0,0,0.05)', boxSizing: 'border-box' }}>
            <img 
              alt="Member photo"
              src={member.photo}
              style={{ borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover', marginBottom: '15px' }} 
            />
            <h3 style={{ margin: '10px 0 5px 0' }}>{member.name}</h3>
            <p style={{ color: 'black', margin: '0 0 5px 0', fontWeight: 'bold' }}>{member.role}</p>
            <p style={{ color: 'black', margin: '0', textAlign:'justify' }}>{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- MAIN APP ---
function App() {
  return (
    <div className="App">
      {/* GLOBAL STYLE RESET: THIS IS THE KEY FIX */}
      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          overflow-x: hidden;
        }
      `}</style>

      <Navbar />

      <Intro /> 
      <Mission />
      <Services />
      <Team />
      
      <footer style={{ 
        padding: '10px',
        background: '#222', 
        color: 'white', 
        textAlign: 'center',
        position: 'fixed',        
        bottom: '0',
        left: '0',
        width: '100%',
        zIndex: '1000'
      }}>
        <p style={{ margin: 0, fontSize: '12px' }}>
          &copy; 2026 WhatAWebb. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;