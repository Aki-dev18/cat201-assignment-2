import './App.css';

function App() {
  return (
    <div className="App">
      
      {/* SECTION 1: Header & Company Info */}
      <header style={{ padding: '20px', backgroundColor: '#282c34', color: 'white' }}>
        <h1>My IT Company</h1>
        <p>We build the future of technology.</p>
      </header>

      {/* SECTION 2: Mission & Vision */}
      <section style={{ padding: '20px' }}>
        <h2>Our Mission</h2>
        <p>To provide the best software solutions.</p>
        
        <h2>Our Vision</h2>
        <p>To be the number one tech company in the world.</p>
      </section>

      {/* SECTION 3: The Team */}
      <section style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
        <h2>Meet Our Team</h2>
        <p>Team member photos will go here!</p>
      </section>

    </div>
  );
}

export default App;