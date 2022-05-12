import React from 'react';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import 'antd/dist/antd.css';
import { RadarChartOutlined } from '@ant-design/icons'
import './Footer.css';



const Footer = () => {
  return (
    <>
      <Row className='footer-container'>
        <Col span={24} className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Join our exclusive membership to receive the latest news and trends
          </p>
          <p className='footer-subscription-text'>
            You can unsubscribe at any time.
          </p>
          <div className='input-areas'>
            <form>
              <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Your Email'
              />
                <Button buttonStyle='btn--outline'>Subscribe</Button>
              </form>
            </div>
        </Col>
      </Row>
      <Row className='footer-link-wrapper'>
        <Col 
          xs={24}
          sm={12}
          lg={6}
          xl={6}
          className='footer-link-items'
          >
          <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
        </Col>
        <Col
          xs={24}
          sm={12}
          lg={6}
          xl={6} 
          className='footer-link-items'
        >
        <h2>Contact Us</h2>
            <Link to='/sign-up'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
        </Col>

        <Col 
          xs={24}
          sm={12}
          lg={6}
          xl={6} 
          className='footer-link-items'>
        <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
        </Col>

        <Col
          xs={24}
          sm={12}
          lg={6}
          xl={6} 
          className='footer-link-items'>
        <h2>Social Media</h2>
            <Link to='/sign-up'>Facebook</Link>
            <Link to='/'>Twitter</Link>
            <Link to='/'>Instagram</Link>
            <Link to='/'>LinkedIn</Link>
        </Col>

      </Row>
      
      <Row>
        <Col span = {24} className='social-media'>
          <section >
            <div className='social-media-wrap'>
              <div className='footer-logo'>
                <Link to='/' className='social-logo'>
                  <RadarChartOutlined className='navbar-icon' />
                    LAVISH
                </Link>
              </div>
              <small className='website-rights'>LAVISH © 2020</small>
              <div className='social-icons'>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <FaFacebook />
              </Link>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram />
              </Link>
              <Link
                className='social-icon-link'
                to={
                  '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
                }
                target='_blank'
                aria-label='Youtube'
              >
                <FaYoutube />
              </Link>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <FaTwitter />
              </Link>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
      </section>
        </Col>
      </Row>
    </>
  );
}

export default Footer;

// import React from 'react';
// import './Footer.css';
// import { Button } from '../../Button';
// import { Link } from 'react-router-dom';
// import {
//   FaFacebook,
//   FaInstagram,
//   FaYoutube,
//   FaTwitter,
//   FaLinkedin
// } from 'react-icons/fa';
// import { MdFingerprint } from 'react-icons/md';

// function Footer() {
//   return (
//     <div className='footer-container'>
//       <section className='footer-subscription'>
//         <p className='footer-subscription-heading'>
//           Join our exclusive membership to receive the latest news and trends
//         </p>
//         <p className='footer-subscription-text'>
//           You can unsubscribe at any time.
//         </p>
//         <div className='input-areas'>
//           <form>
//             <input
//               className='footer-input'
//               name='email'
//               type='email'
//               placeholder='Your Email'
//             />
//             <Button buttonStyle='btn--outline'>Subscribe</Button>
//           </form>
//         </div>
//       </section>
//       <div className='footer-links'>
//         <div className='footer-link-wrapper'>
//           <div className='footer-link-items'>
//             <h2>About Us</h2>
//             <Link to='/sign-up'>How it works</Link>
//             <Link to='/'>Testimonials</Link>
//             <Link to='/'>Careers</Link>
//             <Link to='/'>Investors</Link>
//             <Link to='/'>Terms of Service</Link>
//           </div>
//           <div className='footer-link-items'>
//             <h2>Contact Us</h2>
//             <Link to='/'>Contact</Link>
//             <Link to='/'>Support</Link>
//             <Link to='/'>Destinations</Link>
//             <Link to='/'>Sponsorships</Link>
//           </div>
//         </div>
//         <div className='footer-link-wrapper'>
//           <div className='footer-link-items'>
//             <h2>Videos</h2>
//             <Link to='/'>Submit Video</Link>
//             <Link to='/'>Ambassadors</Link>
//             <Link to='/'>Agency</Link>
//             <Link to='/'>Influencer</Link>
//           </div>
//           <div className='footer-link-items'>
//             <h2>Social Media</h2>
//             <Link to='/'>Instagram</Link>
//             <Link to='/'>Facebook</Link>
//             <Link to='/'>Youtube</Link>
//             <Link to='/'>Twitter</Link>
//           </div>
//         </div>
//       </div>
//       <section className='social-media'>
//         <div className='social-media-wrap'>
//           <div className='footer-logo'>
//             <Link to='/' className='social-logo'>
//               <MdFingerprint className='navbar-icon' />
//               LAVISH
//             </Link>
//           </div>
//           <small className='website-rights'>LAVISH © 2020</small>
//           <div className='social-icons'>
//             <Link
//               className='social-icon-link'
//               to='/'
//               target='_blank'
//               aria-label='Facebook'
//             >
//               <FaFacebook />
//             </Link>
//             <Link
//               className='social-icon-link'
//               to='/'
//               target='_blank'
//               aria-label='Instagram'
//             >
//               <FaInstagram />
//             </Link>
//             <Link
//               className='social-icon-link'
//               to={
//                 '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
//               }
//               target='_blank'
//               aria-label='Youtube'
//             >
//               <FaYoutube />
//             </Link>
//             <Link
//               className='social-icon-link'
//               to='/'
//               target='_blank'
//               aria-label='Twitter'
//             >
//               <FaTwitter />
//             </Link>
//             <Link
//               className='social-icon-link'
//               to='/'
//               target='_blank'
//               aria-label='LinkedIn'
//             >
//               <FaLinkedin />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Footer;
