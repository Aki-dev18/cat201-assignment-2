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

// --- 3. SERVICES COMPONENT ---
function Services() {

  const services = [
    { title: "Web Development", icon: "💻" },
    { title: "SEO Optimization", icon: "🚀" },
    { title: "Mobile App Design", icon: "📱" }
  ];

  return (
    <section style={{ padding: '60px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <h2>Our Services</h2>

      
     <div   style={{ // box them in one container
    display: 'flex', // sit next to each other
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
    marginTop: '30px',
    flexWrap: 'wrap'   
  }}>
      <div>
       <video 
            src={WebVid} 
            autoPlay loop muted playsInline
            style={{ 
              width: '400px', 
              maxWidth: '400px', 
              borderRadius: '10px', 
              height: '210px',
              display: 'block',
              objectFit: 'cover',
              backgroundColor: '#444141ff',padding: '3px' 
            }} 
          ></video>

          <h5>Website Development</h5>
       </div> 

      <div>
       <video 
            src={UIVid} 
            autoPlay loop muted playsInline
            style={{ 
              width: '400px', 
              maxWidth: '400px', 
              borderRadius: '10px', 
              height: '210px',
              display: 'block',
              objectFit: 'cover',
              backgroundColor: '#444141ff',padding: '3px' 
            }} 
          ></video>

          <h5>UI Design</h5>
       </div>  

      <div>
       <video 
            src={Ads} 
            autoPlay loop muted playsInline
            style={{ 
              width: '400px', 
              maxWidth: '400px', 
              borderRadius: '10px', 
              height: '210px',
              display: 'block',
              objectFit: 'cover',
              backgroundColor: '#444141ff',padding: '3px' 
            }} 
          ></video>

          <h5>Advertisement Video</h5>
       </div>

             
    </div>   
  <div   style={{ // box them in one container
    display: 'flex', // sit next to each other
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
    marginTop: '30px',
    flexWrap: 'wrap'   
  }}>
    
          <div>
       <video 
            src={AppVid} 
            autoPlay loop muted playsInline
            style={{ 
              width: '400px', 
              maxWidth: '400px', 
              borderRadius: '10px', 
              height: '210px',
              display: 'block',
              objectFit: 'cover',
              backgroundColor: '#444141ff',padding: '3px' 
            }} 
          ></video>

          <h5>App Development</h5>
       </div> 

                 <div>
       <video 
            src={threeDVid} 
            autoPlay loop muted playsInline
            style={{ 
              width: '400px', 
              maxWidth: '400px', 
              borderRadius: '10px', 
              height: '210px',
              display: 'block',
              objectFit: 'cover',
              backgroundColor: '#444141ff',padding: '3px' 
            }} 
          ></video>

          <h5>3D Animation</h5>
       </div> 
    
    
    </div> 
      

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px', flexWrap: 'wrap' }}>
        {services.map((item, index) => (
          <div key={index} style={{ background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', width: '200px' }}>
             <div style={{ fontSize: '40px' }}>{item.icon}</div>
             <h3>{item.title}</h3>
          </div>
        ))}
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