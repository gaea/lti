import React from 'react';

function Welcome() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Welcome to ATS System</h1>
      <p className="lead">
        Your comprehensive solution for managing the entire recruitment process.
      </p>
      <hr className="my-4" />
      <p>
        Our Applicant Tracking System helps you streamline your hiring workflow,
        from job posting to candidate selection. Track applications, schedule
        interviews, and make better hiring decisions with our powerful tools.
      </p>
      <div className="mt-4">
        <h2>Key Features:</h2>
        <ul className="list-group mt-3">
          <li className="list-group-item">Centralized candidate database</li>
          <li className="list-group-item">Automated application tracking</li>
          <li className="list-group-item">Interview scheduling</li>
          <li className="list-group-item">Collaborative hiring process</li>
          <li className="list-group-item">Analytics and reporting</li>
        </ul>
      </div>
    </div>
  );
}

export default Welcome; 