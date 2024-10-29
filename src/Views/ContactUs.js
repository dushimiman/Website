import { useState } from 'react';
import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Loading...');

    try {
      const response = await axios.post('https://website-backend-dushimiman.onrender.com/contact', formData);
      setStatus(response.data.message);
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    } catch (error) {
      setStatus('Failed to send message, please try again later.');
      console.error('Error sending message:', error);
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
              <a href="https://twitter.com" className="twitter"><i className="bi bi-twitter"></i></a>
              <a href="https://facebook.com" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="https://instagram.com" className="instagram"><i className="bi bi-instagram"></i></a>
              <a href="https://linkedin.com" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
        
        <div className="branding d-flex align-items-center">
          <div className="container position-relative d-flex align-items-center justify-content-between">
            <a href="/" className="logo d-flex align-items-center">
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
      <section id="contact" class="contact section">


<div class="container section-title" data-aos="fade-up">
  <h2>Contact</h2>
  <p>We're here for you all day, everyday!
  If you have any questions or comments please complete the form below.We'd love to hear from you!</p>
</div>

<div class="container" data-aos="fade-up" data-aos-delay="100">

  <div class="row gy-4">

    <div class="col-md-6">
      <div class="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
        <i class="icon bi bi-geo-alt flex-shrink-0"></i>
        <div>
          <h3>Address</h3>
          <p>
Nyabugogo, Manu Plaza,4th Floor
Room 20</p>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="300">
        <i class="icon bi bi-telephone flex-shrink-0"></i>
        <div>
          <h3>Call Us</h3>
          <p>(+250) 781 13 81 55
          </p>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="400">
        <i class="icon bi bi-envelope flex-shrink-0"></i>
        <div>
          <h3>Email Us</h3>
          <p>satorwandaltd@gmail.com</p>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="500">
        <i class="icon bi bi-share flex-shrink-0"></i>
        <div>
          <h3>Social Profiles</h3>
          <div class="social-links">
            <a href="#"><i class="bi bi-twitter-x"></i></a>
            <a href="#"><i class="bi bi-facebook"></i></a>
            <a href="#"><i class="bi bi-instagram"></i></a>
            <a href="#"><i class="bi bi-skype"></i></a>
            <a href="#"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>

  </div>

  <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="600">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="col-md-6">
                  <input type="email" className="form-control" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="col-md-12">
                  <input type="text" className="form-control" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                </div>

                <div className="col-md-12">
                  <textarea className="form-control" name="message" rows="6" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                </div>

                <div className="col-md-12 text-center">
                  {status && <div className="status-message">{status}</div>}
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>

</div>

</section>
      </main>

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
    </>
  );
}

export default ContactUs;
