import React from 'react';

function Team() {
  return (
    <div className="container pt-5 mt-5">
      {/* Section Title */}
      <div className="row border-top py-5">
        <div className="col text-center">
          <h1 className="fw-bold">People</h1>
        </div>
      </div>

      {/* Team Member Block */}
      <div className="row align-items-center pb-5">
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/rajeev1.jpg"
            alt="Rajeev Kushwaha"
            className="img-fluid"
            style={{ borderRadius: "50%", maxWidth: "40%" }}
          />
          <h4 className="mt-3 mb-1">Rajeev Kushwaha</h4>
          <h5 className="text-muted">Zerodha Clone Developer</h5>
        </div>
        <div className="col-md-6">
          <p>
            Rajeev Kushwaha is a passionate full-stack developer with a deep interest in financial technology and modern web development. With a strong background in JavaScript, React, Node.js, and MongoDB, he brings user-friendly and high-performance applications to life.
          </p>
          <p>
            Rajeev is currently focused on building a Zerodha clone to better understand brokerage systems, real-time trading dashboards, and secure user authentication flows. He loves exploring open-source codebases and learning through hands-on projects.
          </p>
          <p>
             In the Zerodha clone project, Rajeev has developed core modules including signup/login flows with JWT authentication, a dashboard for holdings and positions, and integrated RESTful APIs for simulating trades. His work emphasizes clean code, scalability, and a seamless user experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
