import React from 'react';
import './App.css';
import websiteImg from './website.jpg';
import Ads from './ads.mp4'; 
import UIImg from './UIImg.jpg';
import AppVid from './app.mp4';
import WebVid from './web.mp4';
import UIVid from './UIvid.mp4';
import threeDVid from './3d.mp4';

// --- 1. INTRO COMPONENT (Renamed from Hero) ---
function Intro() {
  return (
    <section style={{ padding: '80px', textAlign: 'center', backgroundColor: '#282c34', color: 'white' }}>
      <h1 style={{ fontSize: '3rem', margin: '0' }}>PixelPerfect Designs</h1>
      <h3 style={{ fontWeight: '300' }}>We Build Digital Experiences</h3>
      <p style={{ marginTop: '20px' }}>Welcome to the future of web design. We help businesses grow.</p>
      <button style={{ marginTop: '20px', padding: '10px 25px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#61dafb', border: 'none', borderRadius: '5px' }}>
        Contact Us
      </button>
    </section>
  );
}

// --- 2. MISSION COMPONENT ---
function Mission() {
  return (
    <section style={{ padding: '60px 20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#333' }}>Our Mission</h2>
        <p style={{ fontSize: '18px', color: '#666' }}>
          To empower every local business with a world-class online presence, 
          making technology accessible and profitable for everyone.
        </p>
      </div>
      <div>
        <h2 style={{ color: '#333' }}>Our Vision</h2>
        <p style={{ fontSize: '18px', color: '#666' }}>
          To be the most trusted and innovative web agency in Malaysia by 2030.
        </p>
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
    { name: "Ali", role: "Team Lead", photo: "https://via.placeholder.com/150" },
    { name: "Siti", role: "UI Designer", photo: "https://via.placeholder.com/150" },
    { name: "Chong", role: "Developer", photo: "https://via.placeholder.com/150" },
    { name: "Muthu", role: "Content", photo: "https://via.placeholder.com/150" }
  ];

  return (
    <section style={{ padding: '60px', textAlign: 'center' }}>
      <h2>Meet Our Team</h2>
      <p style={{ marginBottom: '40px' }}>The minds behind the magic.</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
        {members.map((member, index) => (
          <div key={index} style={{ border: '1px solid #eee', padding: '20px', borderRadius: '15px', width: '200px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <img 
              src={member.photo} 
              alt={member.name} 
              style={{ borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover', marginBottom: '15px' }} 
            />
            <h3 style={{ margin: '10px 0 5px 0' }}>{member.name}</h3>
            <p style={{ color: 'gray', margin: '0' }}>{member.role}</p>
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
        <p>&copy; 2026 PixelPerfect Designs. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;