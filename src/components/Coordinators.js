import React from 'react';

const Coordinators = () => {
  return (
    <section id="coordinators" className="section">
      <h2 className="section-title">Event Coordinators</h2>
      <h3 style={{textAlign:'center', margin:'30px 0', color:'#f0f'}}>Faculty Coordinators</h3>
      <div className="coordinators">
        <div className="coordinator-card">
          <h4>Dr. Rajesh Kumar</h4>
          <p>Head of CSE Department</p>
          <p>📧 hod.cse@vnrvjiet.in</p>
        </div>
        <div className="coordinator-card">
          <h4>Prof. Srinivas Reddy</h4>
          <p>Club Mentor</p>
          <p>📧 srinivas@vnrvjiet.in</p>
        </div>
        <div className="coordinator-card">
          <h4>Dr. Priya Sharma</h4>
          <p>Technical Advisor</p>
          <p>📧 priya.sharma@vnrvjiet.in</p>
        </div>
      </div>
      <h3 style={{textAlign:'center', margin:'30px 0', color:'#f0f'}}>Student Coordinators</h3>
      <div className="coordinators">
        <div className="coordinator-card">
          <h4>Raghavendra Sai</h4>
          <p>ChairPerson - VJ Garuda Vigilance</p>
          <p>📱 +91-9059494181</p>
        </div>
        
      </div>
    </section>
  );
};

export default Coordinators;