import React from 'react';
import './App.css';
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
import missionPic from './MissionBackground.jpg';
import companyLogo from './WhatAWebb_logo.png';

// --- 1. INTRO COMPONENT (Renamed from Hero) ---
function Intro() {
  return (
    <section style={{ padding: '80px', textAlign: 'center', backgroundColor: '#282c34', color: 'white' }}>
      <img
      src={companyLogo}
      alt="WhatAWebb Logo"
      style={{
        width: '500px',
        maxWidth: '100%',
        height: 'auto',
        marginBottom: '20px',
        alignItems: 'center'
      }}
      />
      <h1 style={{ fontSize: '3rem', margin: '0', textAlign: 'center'}}>WhatAWebb</h1>
      <h3 style={{ fontWeight: '300', textAlign: 'center' }}>Your Vision, Our Design</h3>
      <p style={{ marginTop: '20px', textAlign: 'justify'}}>Long gone are the days where you have to design your own website. The advancement in web design is here courtesy of our team at WhatAWebb. Here in this company, we help startups and established companies make their vision of a perfect website a reality. We tailor every design to our client's needs so that peak customer satisfaction can be achieved. We also pay attention to the most minute details to make sure that every single one of our designs is unique.</p>
      <button style={{ marginTop: '20px', padding: '10px 25px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#61dafb', border: 'none', borderRadius: '5px' }}>
        Contact Us
      </button>
    </section>
  );
}

// --- 2. MISSION COMPONENT ---
function Mission() {
  return (
    <section style={{ 
      padding: '60px 20px', 
      textAlign: 'center', 

      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0.1)), url(${missionPic})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',

      boxshadow: 'inset 0 0 20px rbga(0, 0, 0, 0.05)',
    }}>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#ffffffff' }}>Our Mission</h2>
        <p style={{ fontSize: '18px', color: '#b1b1b1ff' }}>
          To empower every local business with a world-class online presence, 
          making technology accessible and profitable for everyone.
        </p>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#ffffffff' }}>Our Vision</h2>
        <p style={{ fontSize: '18px', color: '#b1b1b1ff' }}>
          To be the most trusted and innovative web agency in Malaysia by 2030.
        </p>
      </div>

      <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '40px', 
          flexWrap: 'wrap', 
          textAlign: 'left', // Professional lists look better left-aligned
          marginTop: '40px',
          borderTop: '1px solid #ddd',
          paddingTop: '40px'
        }}></div>

      <div style={{ flex: '1', minWidth: '300px' }}>
            <h3 style={{ color: '#ffffffff', borderLeft: '4px solid #61dafb', paddingLeft: '15px' }}>Strategic Goals</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: '#b1b1b1ff', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '15px' }}>
                <strong>Market Leadership:</strong> Establish WhatAWebb as the standard-bearer for web quality in the Northern Region.
              </li>
              <li style={{ marginBottom: '15px' }}>
                <strong>Continuous Innovation:</strong> Integrate emerging technologies like AI and Web3 into standard client packages.
              </li>
              <li>
                <strong>Client Retention:</strong> Shift from project-based revenue to a sustainable, retainer-based partnership model.
              </li>
            </ul>
          </div>

      <div style={{ flex: '1', minWidth: '300px' }}>
            <h3 style={{ color: '#ffffffff', borderLeft: '4px solid #b1b1b1ff', paddingLeft: '15px' }}>FY2026 Objectives</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: '#b1b1b1ff', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '15px' }}>
                <strong>Acquisition:</strong> Onboard 50 enterprise-tier clients by Q4 2026.
              </li>
              <li style={{ marginBottom: '15px' }}>
                <strong>Quality Assurance:</strong> Achieve a Net Promoter Score (NPS) of 70+ through rigorous UX testing.
              </li>
              <li>
                <strong>Efficiency:</strong> Reduce average project deployment time by 20% using proprietary templates.
              </li>
            </ul>
          </div>

      </div>
    </section>
  );
}
// for servicee
const ServiceBlock = ({ videoSource, label, description }) => {
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <div style={{ textAlign: 'center' }}>
      <div 
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{ 
          position: 'relative', 
          width: '400px', 
          height: '210px', 
          borderRadius: '10px', 
          border: isHovering ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
          overflow: 'hidden',
          backgroundColor: '#000',
          // --- ADD THESE THREE LINES ---
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooths the movement
    transform: isHovering ? 'translateY(-10px)' : 'translateY(0)', // Moves it up 10px
    boxShadow: isHovering ? '0 20px 40px rgba(0,0,0,0.3)' : '0 4px 10px rgba(0,0,0,0.1)', // Adds depth
    // -----------------------------
          
        }}
      >
        <video 
          src={videoSource} 
          autoPlay loop muted playsInline
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            filter: isHovering ? 'brightness(0.3)' : 'brightness(1)',
            transform: isHovering ? 'scale(1.1)' : 'scale(1)',
            transition: '0.4s'
          }} 
        />
        <div style={{ // text layer
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white', padding: '20px', textAlign: 'center',
          opacity: isHovering ? 1 : 0,
          transition: '0.4s',
          background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))',
          backdropFilter: 'blur(8px)',
          pointerEvents: 'none',
          letterSpacing: '1px', // This breathes space between each letter
          lineHeight: '1.6',      // This creates space between lines of text
                  
        }}>
          <p>{description}</p>
        </div>
      </div>
      <h5 style={{ marginTop: '10px' }}>{label}</h5>
    </div>
  );
};

// --- 3. SERVICES COMPONENT ---
function Services() {
  return (
    <section style={{ padding: '60px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <h2>Our Services</h2>

      {/* Row 1: Web, UI, and Ads */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '30px', flexWrap: 'wrap' }}>
        
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
        
      </div>

      {/* Row 2: Apps and 3D */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '30px', flexWrap: 'wrap' }}>
        
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

      </div>
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
    <section style={{ padding: '60px', textAlign: 'center' }}>
      <h2>Meet Our Team</h2>
      <p style={{ marginBottom: '40px' }}>The minds behind the magic.</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
        {members.map((member, index) => (
          <div key={index} style={{ border: '1px solid #eee', padding: '20px', borderRadius: '15px', width: '45%', minWidth: '300px', flexGrow: 1, boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
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
      <Intro /> 
      <Mission />
      <Services />
      <Team />
      
      <footer style={{ padding: '20px', background: '#222', color: 'white', textAlign: 'center' }}>
        <p>&copy; 2026 WhatAWebb. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;