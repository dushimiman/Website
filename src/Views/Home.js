import React, { useState } from 'react';

import { Modal, Button, Form, Input, notification } from 'antd';
import axios from 'axios';
import 'antd/dist/reset.css';

function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = async (values) => {
    console.log('Form values:', values);

    try {
      const response = await fetch('https://website-backend-dushimiman.onrender.com/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
        setIsModalVisible(false); 

        // Show success notification
        notification.success({
          message: 'Thank You!',
          description: 'Thank you for your requests. We will contact you in a few minutes. \nUrakoze gusaba kugura product zacu na service, turaguhamagara mu minota micye.',
          placement: 'topRight',
          duration: 5, // duration in seconds
        });
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <header id="header" className="header sticky-top">
        <div className="topbar d-flex align-items-center dark-background">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope d-flex align-items-center">
                <a href="mailto:contact@example.com">info@satorrwanda.rw</a>
              </i>
              <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>(+250) 781 13 81 55</span>
              </i>
              <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>6017</span>
              </i>
              <i className="bi bi-geo-alt d-flex align-items-center ms-4">
                <span>Nyabugogo, Manu Plaza, 4th Floor, Room 20</span>
              </i>
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
              <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
              <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div className="branding d-flex align-items-center">
          <div className="container position-relative d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center">
              <img src="assets/img/logo.png" alt="Logo" />
            </a>
            <nav id="navmenu" className="navmenu">
              <ul>
                <li><a href="/" className="active">Home</a></li>
                <li><a href="/Aboutus">About</a></li>
                <li><a href="/Media">Media</a></li>
                <li><a href="/OurTeam">Team</a></li>
                <li><a href="/Contactus">Contact</a></li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>
          </div>
        </div>
      </header>
      <main className="main">
        <section id="hero" className="hero section dark-background">
          <img src="assets/img/hero-bg.jpg" alt="Hero Background" data-aos="fade-in" />
          <div className="container position-relative">
            <div className="welcome position-relative" data-aos="fade-down" data-aos-delay="100">
              <h2 style={{ color: 'white', fontWeight: 'bold' }}>Welcome to Sator Rwanda Ltd</h2>
              <p>We provide good quality products and services</p>
            </div>

            <div className="content row gy-4">
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="why-box" data-aos="zoom-out" data-aos-delay="200">
                  <h3>Why Choose Our Services?</h3>
                  <p>
                    We are a leading company in Rwanda for delivering speed governors, with over 5 years of experience. Our speed governors and GPS trackers offer strong stability and easy installation. Speed governors limit speed intelligently, while GPS trackers provide real-time vehicle tracking.
                  </p>
                  <div className="text-center">
                    <a href="#" className="more-btn"><span>Learn More</span> <i className="bi bi-chevron-right"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 d-flex align-items-stretch">
                <div className="d-flex flex-column justify-content-center">
                  <div className="row gy-4">
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box" data-aos="zoom-out" data-aos-delay="300">
                        <i className="bi bi-clipboard-data"></i>
                        <h4 style={{ color: 'white', fontWeight: 'bold' }}>Our Mission</h4>
                        <p>To consistently supply quality Speed Governors and GPS Trackers, meeting safety standards within and outside Rwanda.</p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box" data-aos="zoom-out" data-aos-delay="400">
                        <i className="bi bi-gem"></i>
                        <h4 style={{ color: 'white', fontWeight: 'bold' }}>Our Vision</h4>
                        <p>To be the company of choice for quality brand products and support services in transport.</p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box" data-aos="zoom-out" data-aos-delay="500">
                        <i className="bi bi-inboxes"></i>
                        <h4 style={{ color: 'white', fontWeight: 'bold' }}>Fleet and Fuel Management</h4>
                        <p>Utilizing ultrasonic sensor technology for precise fuel level measurement in tanks.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid blog py-5">
  <div className="container py-5">
    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
      <h1 className="display-5 text-capitalize mb-3">Our Products <span className="text-primary">and Services</span></h1>
      <p className="mb-0">Innovative vehicle Solutions Enhancing Safety, Efficiency, and Performance</p>
    </div>
    <div className="row g-4">
      {[{id: 1, title: "Speed Governors", description: "Ensure Compliance and Road Safety with our RURA certified Speed Governors."},
        {id: 2, title: "GPS Trackers", description: "Real-time Vehicle Tracking Solutions for Enhanced security and Management."},
        {id: 3, title: "Fuel Management System", description: "Optimaze Fuel Consuption and Streameline fleet operations with our advanced systems."}
      ].map((product, i) => (
        <div className="col-lg-4 wow fadeInUp" data-wow-delay={`${i * 0.2}s`} key={product.id}>
          <div className="blog-item">
            <div className="blog-img position-relative" style={{ position: 'relative', overflow: 'hidden', height: '250px', width: '100%' }}>
              <img src={`img/blog-${product.id}.jpg`} 
                   className="img-fluid rounded-top w-100" 
                   alt={product.title} 
                   style={{ height: '100%', objectFit: 'cover' }} 
              />
              {/* Inline overlay content */}
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)', color: 'white', display: 'flex',
                flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                textAlign: 'center', padding: '20px', opacity: 0, transition: 'opacity 0.3s ease-in-out'
              }}
              className="overlay-content"
              onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
              onMouseLeave={(e) => e.currentTarget.style.opacity = 0}>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>{product.title}</h1>
                <p style={{ fontSize: '16px' }}>{product.description}</p>
              </div>
            </div>
            <div className="blog-content rounded-bottom p-4">
              <div className="blog-date" onClick={showModal}>Click to Request</div>
              <a href="#" className="h4 d-block mb-3">{product.title}</a>
              <p className="mb-3">{product.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


        <Modal
          title="Fill Your Information"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null} // Removing default footer buttons
        >
          <Form
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input placeholder="Your Name" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Please enter your email', type: 'email' }]}
            >
              <Input placeholder="Your Email" />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[{ required: true, message: 'Please enter your phone number' }]}
            >
              <Input placeholder="Your Phone Number" />
            </Form.Item>

            <Form.Item
              name="comment"
              label="Comment or Suggestion"
            >
              <Input.TextArea placeholder="Any comments or suggestions" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <footer id="footer" className="footer light-background">
        <div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item d-flex flex-column">
                            <div class="footer-item">
                                <h4 class="text-white mb-4">About Us</h4>
                                <p class="mb-3">We are a leading company in Rwanda to deliver speed governors with an experience of more than 5 years. Our speed governors and GPS trackers have strong stability and are easy to install. </p>
                            </div>
                            <div class="position-relative">
                                <input class="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email"/>
                                <button type="button" class="btn btn-secondary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item d-flex flex-column">
                            <h4 class="text-white mb-4">Quick Links</h4>
                            <a href="/"><i class="fas fa-angle-right me-2"></i> Home</a>
                            <a href="#"><i class="fas fa-angle-right me-2"></i> About Us</a>
                            <a href="#"><i class="fas fa-angle-right me-2"></i> Team</a>
                            <a href="#"><i class="fas fa-angle-right me-2"></i> Media</a>
                            <a href="#"><i class="fas fa-angle-right me-2"></i> Contact us</a>
                            <a href="#"><i class="fas fa-angle-right me-2"></i> Terms & Conditions</a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item d-flex flex-column">
                            <h4 class="text-white mb-4">Business Hours</h4>
                            <div class="mb-3">
                                <h6 class="text-muted mb-0">Mon - Friday:</h6>
                                <p class="text-white mb-0">07.30 am to 05.00 pm</p>
                            </div>
                            <div class="mb-3">
                                <h6 class="text-muted mb-0">Saturday:</h6>
                                <p class="text-white mb-0">07.30 am to 01.00 pm</p>
                            </div>
                            <div class="mb-3">
                                <h6 class="text-muted mb-0">Sunday:</h6>
                                <p class="text-white mb-0">09.00 am to 01.00 pm</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item d-flex flex-column">
                            <h4 class="text-white mb-4">Contact Info</h4>
                            <a href="#"><i class="fa fa-map-marker-alt me-2"></i> Nyabugogo, Manu Plaza</a>
                            <a href="mailto:info@example.com"><i class="fas fa-envelope me-2"></i>info@satorrwanda.rw
                            </a>
                            <a href="tel:+012 345 67890"><i class="fas fa-phone me-2"></i> (+250) 781 13 81 55</a>
                            <a href="tel:+012 345 67890" class="mb-3"><i class="fas fa-print me-2"></i> (+250) 728 62 62 68
                            </a>
                            <div class="d-flex">
                                <a class="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i class="fab fa-facebook-f text-white"></i></a>
                                <a class="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i class="fab fa-twitter text-white"></i></a>
                                <a class="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i class="fab fa-instagram text-white"></i></a>
                                <a class="btn btn-secondary btn-md-square rounded-circle me-0" href=""><i class="fab fa-linkedin-in text-white"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </footer>
      </main>
    </>
  );
}

export default Home;
