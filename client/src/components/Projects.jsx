import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2>Project Lifecycle</h2>
        <p>
          Every project follows a unique lifecycle, from inception to completion. We ensure to manage
          each phase effectively to deliver optimal outcomes for our clients and stakeholders.
        </p>
      </div>

        <div className="project-description">
          <h3>Projects</h3>
          <p>1. Employee Management System</p>
          <p>
          The Employee Management System is a web-based application built to streamline the management of employee data and organizational processes. This system provides features like employee registration, role-based access, attendance tracking, and payroll management. With its intuitive user interface, it simplifies tasks such as managing employee records, generating reports, and tracking performance. The project incorporates data management for secure storage and retrieval of employee information and integrates APIs for functionalities like automated email notifications, payment processing, and generating payslips.
          </p>
          <p>Tools and Technologies:Eclipse</p>
{/* <p>Java Technologies: The project will primarily use Java for backend development, with servlets to handle client requests, manage sessions, and interact with the database. Java Database Connectivity (JDBC) </p> */}
          <div className="projects-content">
        <div className="project-img">
          <img 
            src="/images/employee.png"  // Image path from the public directory
            alt="Kashmir Tourist Destination"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </div>
        {/* <p>2. Insurance Management System using Spring Framework</p>
          <p>
          An Insurance Management System built using the Spring Framework is a web application designed to manage the various aspects of insurance policies, claims, customer information, and other related services. This type of project typically involves functionalities such as managing policy details, processing claims, managing customer data, generating policy documents, and handling payments. The system can also include features like premium calculation, policy renewal reminders, claim status tracking, and real-time updates regarding policy terms and conditions.
          </p>
          <p>Tools and Technologies:Apache Maven,JUnit & Mockito.</p> */}

          <p>2. Hospital Management System</p>
          <p>
          The Hospital Management System is a comprehensive web application designed to manage hospital operations efficiently. It includes modules for patient registration, appointment scheduling, doctor and staff management, and inventory tracking. The system features an intuitive user interface for seamless navigation and ensures robust data management for storing medical records and patient history. Key functionalities include integration with APIs for payment processing, automated email or SMS notifications for appointment reminders, and billing. This system enhances the hospital's operational efficiency while improving the overall patient experience.
          </p>
          <p>Tools and Technologies:Eclipse,API</p>

          <div className="project-img">
          <img 
            src="/images/hospital.png"  // Image path from the public directory
            alt="Insurance"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
