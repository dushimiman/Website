import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

function Team() {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  }, []);

  // Array containing team members' data
  const teamMembers = [
    { name: 'IKOMEZE Amani', position: 'Director of Operations', image: 'img/team-1.jpg' },
    { name: 'NKURUNZIZA SAMUEL', position: 'Finance & Administration Officer', image: 'img/team-2.jpg' },
    { name: 'NSHIMIYIMANA Cyprien', position: 'Operations Manager', image: 'img/team-3.jpg' },
    { name: 'T.MUNYANA Agnes', position: 'Software Developer', image: 'img/team-4.jpg' },
    { name: 'UMUTONI Christine', position: 'Accountant', image: 'img/team-5.jpg' },
    { name: 'UWIMANA Soleil', position: 'Store Keeper', image: 'img/team-6.jpg' },
    { name: 'GAKURU Yvonne', position: 'Customer Care', image: 'img/team-7.jpg' },
    { name: 'TUYISHIMIRE Joselyne', position: 'Receptionist', image: 'img/team-8.jpg' },
  ];

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
        <div className="container-fluid team pb-5">
          <div className="container pb-5">
            <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
              <h1 className="display-5 text-capitalize mb-3">Our<span className="text-primary"> Amazing Team</span></h1>
              <p className="mb-0">Quality and trust are the backbone of our business, along with our other core values. That is why alone we can do so little, but together with you we can do so much.</p>
            </div>
            <div className="row g-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay={`${0.1 * (index + 1)}s`}>
                  <div className="team-item p-4 pt-0">
                    <div className="team-img">
                      <img src={member.image} className="img-fluid rounded w-100" alt={`${member.name}`} />
                    </div>
                    <div className="team-content pt-4">
  <h4 style={{ fontSize: "1rem" }}>{member.name}</h4> {/* Adjust the font size as desired */}
  <p>{member.position}</p>
  <div className="team-icon d-flex justify-content-center">
    <a className="btn btn-square btn-light rounded-circle mx-1" href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
    <a className="btn btn-square btn-light rounded-circle mx-1" href="https://twitter.com"><i className="fab fa-twitter"></i></a>
    <a className="btn btn-square btn-light rounded-circle mx-1" href="https://instagram.com"><i className="fab fa-instagram"></i></a>
    <a className="btn btn-square btn-light rounded-circle mx-1" href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
  </div>
</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
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

export default Team;
