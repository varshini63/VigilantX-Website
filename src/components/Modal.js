import React from 'react';

const Modal = ({ show, onClose, type, eventType, onRegister }) => {
  const eventDetails = {
    'opening': {
      title: '🎉 Inauguration Ceremony',
      image: './images/opening-ceremony.jpg',
      hasRegistration: false,
      registrationUrl: '',
      details: `
      <h4>🎯 What to Expect:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>🎤 Keynote by renowned cybersecurity expert</li>
      <li>🤝 Networking with industry professionals</li>
      <li>📋 Event briefing and schedules</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 October 15, 2025<br/>🕘 9:30 AM - 10:30 AM<br/>📍 Main Auditorium, VNR VJIET</p>
      <h4>👥 Student Coordinators:</h4>
      <p>🎯 Raghava - 9XXXXXXXXXX<br/>🎯 Praneeth - 9XXXXXXXXXX</p>`,
      description: 'Join us for the grand inauguration of VigilantX 2025! Get ready for an inspiring start to the biggest cybersecurity event of the year.'
    },
    'non-cyber-ctf': {
      title: '🧩 Non-Cyber CTF Challenge',
      image: './images/non-cyber-ctf.jpg',
      hasRegistration: true,
      registrationUrl: 'https://forms.gle/CfQxNqJWeN4FuNgT9',
      details: `
      <h4>🎯 Challenge Categories:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>🧠 Logic Puzzles & Brain Teasers</li>
      <li>🔢 Mathematical Problem Solving</li>
      <li>🎨 Creative Thinking Challenges</li>
      <li>📝 Pattern Recognition Tasks</li>
      <li>🎲 Strategy Games & Riddles</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 October 15, 2025<br/>🕙 10:00 AM - 4:30 PM<br/>📍 VNR VJIET Campus</p>
      <h4>🏆 Prize Pool:</h4>
      <p>💰 Total Prize Pool: ₹5,000<br/>🥇 1st Prize: ₹2,500<br/>🥈 2nd Prize: ₹1,500<br/>🥉 3rd Prize: ₹1,000<br/>👥 Winners - 3 Teams</p>
      <h4>👥 Student Coordinators:</h4>
      <p>🎯 Raghava - 9XXXXXXXXXX<br/>🎯 Praneeth - 9XXXXXXXXXX</p>`,
      description: 'Test your analytical and creative thinking skills with brain-teasing logic puzzles, mathematical challenges, and innovative problem-solving scenarios.'
    },
    'seminar-docker': {
      title: '🐳 Docker/Kubernetes Seminar',
      image: './images/docker-seminar.jpg',
      hasRegistration: true,
      registrationUrl: 'https://forms.gle/DockerSeminarForm123',
      details: `
      <h4>📚 Seminar Topics:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>🐳 Docker Fundamentals & Best Practices</li>
      <li>☸️ Kubernetes Architecture & Deployment</li>
      <li>🔒 Container Security Strategies</li>
      <li>🛠️ DevOps Integration & CI/CD</li>
      <li>📊 Monitoring & Scaling Solutions</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 October 15, 2025<br/>🕙 10:30 AM - 1:30 PM<br/>📍 Seminar Hall, VNR VJIET</p>
  
      <h4>👥 Student Coordinators:</h4>
      <p>🎯 Yeshaswini - 9XXXXXXXXXX<br/>🎯 Hemalatha - 9XXXXXXXXXX<br/>🎯 CK - 9XXXXXXXXXX</p>`,
      description: 'Comprehensive seminar on containerization technologies with Docker and Kubernetes orchestration. Learn from industry experts about modern DevOps practices.'
    },
    'paper-presentation': {
      title: '📝 Patent Paper Presentation',
      image: './images/paper-presentation.jpg',
      hasRegistration: true,
      registrationUrl: 'https://forms.gle/PaperPresentationForm456',
      details: `
      <h4>📚 Presentation Topics:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>🤖 Any topic of your choice</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 October 15, 2025<br/>🕐 1:30 PM - 3:30 PM<br/>📍 Conference Hall, VNR VJIET</p>
      <h4>🏆 Prize Pool:</h4>
      <p>💰 Total Prize Pool: ₹4,000<br/>👥 Winners - 4 Teams<br/>🎯 1 Domain - ₹1,000 Each</p>
      <h4>👥 Student Coordinators:</h4>
      <p>🎯 Pratham - 9XXXXXXXXXX<br/>🎯 Chandu - 9XXXXXXXXXX</p>`,
      description: 'Present your innovative research on cutting-edge technologies. Share your insights with industry experts and fellow enthusiasts.'
    },
    'hacking-expo': {
      title: '🔧 Hacking Tools Expo',
      image: './images/hacking-expo.jpg',
      hasRegistration: true,
      registrationUrl: 'https://forms.gle/HackingExpoForm789',
      details: `
      <h4>🛠️ Tools Showcase:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>🔍 Penetration Testing Tools</li>
      <li>🛡️ Network Security Scanners</li>
      <li>🕵️ Digital Forensics Software</li>
      <li>⚡ Exploit Development Frameworks</li>
      <li>🔐 Cryptography Tools</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 October 16, 2025<br/>🕙 10:00 AM - 4:30 PM<br/>📍 Tech Lab, VNR VJIET</p>
      <h4>👥 Student Coordinators:</h4>
      <p>🎯 Sreshta - 9XXXXXXXXXX<br/>🎯 Haarika - 9XXXXXXXXXX</p>`,
      description: 'Discover the latest in cybersecurity tools and techniques through live demonstrations by security experts. Get hands-on experience with professional-grade tools.'
    },
    'bug-bounty': {
      title: '🐛 Bug Bounty & Red Teaming',
      image: './images/bug-bounty.jpg',
      hasRegistration: true,
      registrationUrl: 'https://forms.gle/BugBountyForm101',
      details: `
      <h4>🎯 Target Applications:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>🌐 Web Applications</li>
      <li>📱 Mobile Applications</li>
      <li>🖥️ Desktop Software</li>
      <li>🔗 API Endpoints</li>
      <li>🛡️ Security Configurations</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 October 16, 2025<br/>🕙 10:00 AM - 12:30 PM<br/>📍 Cyber Lab, VNR VJIET</p>
      <h4>🏆 Prize Pool:</h4>
      <p>💰 Total Prize Pool: ₹3,500<br/>👥 Winners - 2 Teams<br/>🥇 1st Prize: ₹2,000<br/>🥈 2nd Prize: ₹1,500</p>
      <h4>👥 Student Coordinators:</h4>
      <p>🎯 Sreshta - 9XXXXXXXXXX<br/>🎯 Haarika - 9XXXXXXXXXX</p>`,
      description: 'Discover vulnerabilities, exploit systems ethically, and demonstrate advanced red team methodologies in a controlled environment.'
    },
    'cyber-hunt': {
      title: '🕵️ Cyber Hunt Challenge',
      image: './images/cyber-hunt.jpg',
      hasRegistration: true,
      registrationUrl: 'https://forms.gle/CyberHuntForm202',
      details: `
      <h4>🎯 Hunt Categories:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>🔍 OSINT (Open Source Intelligence)</li>
      <li>🔐 Cryptographic Puzzles</li>
      <li>🌐 Web-based Clues</li>
      <li>📱 Digital Footprint Analysis</li>
      <li>🗺️ Virtual Treasure Hunt</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 October 16, 2025<br/>🕐 2:00 PM - 4:30 PM<br/>📍 Computer Lab, VNR VJIET</p>
      <h4>🏆 Prize Pool:</h4>
      <p>💰 Total Prize Pool: ₹5,000<br/>👥 Winners - 3 Teams<br/>🥇 1st Prize: ₹2,500<br/>🥈 2nd Prize: ₹1,500<br/>🥉 3rd Prize: ₹1,000</p>
      <h4>👥 Student Coordinators:</h4>
      <p>🎯 Tilak - 9XXXXXXXXXX<br/>🎯 Akshith - 9XXXXXXXXXX</p>`,
      description: 'Embark on a digital treasure hunt with cryptographic puzzles, OSINT challenges, and cybersecurity clues scattered across the digital realm.'
    },
    'workshop': {
      title: '🔗 Block Chain Technology Workshop',
      image: './images/workshop.jpg',
      hasRegistration: true,
      registrationUrl: 'https://forms.gle/BlockchainWorkshop303',
      details: `
      <h4>📚 Workshop Modules:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>🔗 Blockchain fundamentals and security</li>
      <li>🐳 Docker container security</li>
      <li>☸️ Kubernetes security best practices</li>
      <li>🔒 Smart contract auditing</li>
      <li>🛠️ Practical lab sessions</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 October 17, 2025<br/>🕘 9:30 AM - 12:30 PM<br/>📍 Workshop Hall, VNR VJIET</p>
      <h4>👥 Student Coordinators:</h4>
      <p>🎯 Yeshaswini - 9XXXXXXXXXX<br/>🎯 Hemalatha - 9XXXXXXXXXX<br/>🎯 CK - 9XXXXXXXXXX</p>`,
      description: 'Comprehensive hands-on blockchain security and containerization workshop with expert guidance. Learn cutting-edge technologies and security practices.'
    },
    'game-of-threats': {
      title: '⚔️ Game of Threats',
      image: './images/game-of-threats.jpg',
      hasRegistration: true,
      registrationUrl: 'https://forms.gle/GameOfThreats404',
      details: `
      <h4>🎮 Game Mechanics:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>🛡️ Defense Strategy Planning</li>
      <li>⚔️ Attack Simulation Scenarios</li>
      <li>🔄 Real-time Decision Making</li>
      <li>👥 Team Collaboration</li>
      <li>📊 Risk Assessment Challenges</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 October 17, 2025<br/>🕙 10:00 AM - 4:30 PM<br/>📍 Gaming Arena, VNR VJIET</p>
      <h4>🏆 Prize Pool:</h4>
      <p>💰 Total Prize Pool: ₹3,000<br/>👥 Winners - 2 Teams<br/>🥇 1st Prize: ₹2,000<br/>🥈 2nd Prize: ₹1,000</p>
      <h4>👥 Student Coordinators:</h4>
      <p>🎯 Yeshaswini - 9XXXXXXXXXX<br/>🎯 Hemalatha - 9XXXXXXXXXX<br/>🎯 CK - 9XXXXXXXXXX</p>`,
      description: 'Strategic cybersecurity simulation game with real-world threat scenarios and defense strategies. Test your incident response skills.'
    },
    'debugging-contest': {
      title: '🐞 Cyber Coding Contest',
      image: './images/debugging-contest.jpg',
      hasRegistration: true,
      registrationUrl: 'https://forms.gle/CodingContest505',
      details: `
      <h4>💻 Programming Languages:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>🐍 Python Security Scripts</li>
      <li>☕ Java Applications</li>
      <li>🌐 JavaScript/Node.js</li>
      <li>⚡ C/C++ System Code</li>
      <li>🔒 Security-sensitive Applications</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 October 17, 2025<br/>🕙 10:30 AM - 12:30 PM<br/>📍 Programming Lab, VNR VJIET</p>
      <h4>🏆 Prize Pool:</h4>
      <p>💰 Total Prize Pool: ₹3,500<br/>👥 Winners - 3 Teams<br/>🥇 1st Prize: ₹2,000<br/>🥈 2nd Prize: ₹1,000</p>
      <h4>👥 Student Coordinators:</h4>
      <p>🎯 Tilak - 9XXXXXXXXXX<br/>🎯 Akshith - 9XXXXXXXXXX</p>`,
      description: 'Identify and fix critical bugs in security-sensitive code with time-pressure challenges. Test your debugging skills under pressure.'
    },
    'valedictory': {
      title: '🏆 Valedictory & Prize Distribution',
      image: './images/valedictory.jpg',
      hasRegistration: false,
      registrationUrl: '',
      details: `
      <h4>🎊 Ceremony Highlights:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>🏆 Prize distribution for all events</li>
      <li>🎖️ Certificate ceremony</li>
      <li>📸 Photo sessions with winners</li>
      <li>🎤 Closing speeches</li>
      <li>🤝 Networking session</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 October 17, 2025<br/>🕐 2:00 PM - 3:30 PM<br/>📍 Main Auditorium, VNR VJIET</p>
      <h4>💰 Total Prize Pool:</h4>
      <p>Over ₹30,000+ in cash prizes and exciting goodies await the winners!</p>
      <h4>👥 Organized by:</h4>
      <p>🎯 Core Team - VigilantX 2025</p>`,
      description: 'Grand finale of VigilantX 2025 with prize distribution and celebration of achievements. Join us for the closing celebration.'
    }
  };

  const handleEventRegistration = () => {
    if (eventType && eventDetails[eventType] && eventDetails[eventType].registrationUrl) {
      window.open(eventDetails[eventType].registrationUrl, '_blank');
    }
  };

  if (!show) return null;

  if (type === 'registration') {
    return (
      <div className="modal" style={{ display: 'flex' }}>
        <div className="modal-content">
          <button className="close-btn" onClick={onClose}>&times;</button>
          <h2 style={{ color: '#0ff', marginBottom: '20px' }}>🎯 Complete Registration</h2>
          <p style={{ marginBottom: '30px' }}>Scan the QR code to complete payment and secure your spot!</p>
          <div className="qr-container">
            <div style={{ width: '200px', height: '200px', background: '#000', color: '#0ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', textAlign: 'center' }}>
              QR CODE<br />PAYMENT<br />GATEWAY
            </div>
          </div>
          <div className="payment-info">
            <p style={{ color: '#f0f', fontSize: '1.2rem', marginBottom: '10px' }}>💰 Registration Fees:</p>
            <p className="price">🎓 VNR Students: ₹100</p>
            <p className="price">🏫 Other Colleges: ₹150</p>
            <p style={{ marginTop: '15px', color: '#0ff', fontSize: '0.9rem' }}>* Includes access to all events, workshops, and refreshments</p>
          </div>
          <button onClick={onClose} className="cta-button">CLOSE</button>
        </div>
      </div>
    );
  }

  if (type === 'event' && eventType && eventDetails[eventType]) {
    const event = eventDetails[eventType];

    return (
      <div className="modal" style={{ display: 'flex' }}>
        <div className="modal-content" style={{ maxWidth: '800px' }}>
          <button className="close-btn" onClick={onClose}>&times;</button>
          <h2 style={{ color: '#0ff', marginBottom: '20px' }}>{event.title}</h2>
          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <img src={event.image} alt={event.title} style={{ width: '100%', maxWidth: '400px', objectFit: 'contain', borderRadius: '15px', border: '2px solid #0ff', boxShadow: '0 0 20px rgba(0,255,255,0.3)' }} />
          </div>
          <div style={{ color: '#fff', lineHeight: '1.6' }} dangerouslySetInnerHTML={{ __html: event.details }} />
          <h4 style={{ color: '#f0f', margin: '20px 0 10px 0' }}>📝 Event Description:</h4>
          <p style={{ marginBottom: '20px' }}>{event.description}</p>
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            {event.hasRegistration && (
              <button className="cta-button" onClick={handleEventRegistration} style={{ marginTop: '20px' }}>REGISTER FOR EVENT</button>
            )}
            <button className="cta-button" onClick={onClose} style={{ marginLeft: '10px', background: 'linear-gradient(45deg, #666, #999)' }}>CLOSE</button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Modal;