import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { Row, Col} from 'antd';
import './Navbar.css';
import 'antd/dist/antd.css';
import { RadarChartOutlined, CloseOutlined, PlusOutlined } from '@ant-design/icons'


const Navbar = () => {
  
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
  }, []);

  return(
  <>
    <Row 
    className='navbar'
    wrap = {false}
    justify = 'space-between'
    >
      <Col 
      xs={12} sm={12} md={9.6} lg={9.6} xl={9.6}
      className='navbar-logo' 
      >
        <Link to='/' className='in-navbar-logo' onClick={closeMobileMenu}>
          <RadarChartOutlined  className='navbar-icon' />
          LAVISH
        </Link>
      </Col>

      <Col 
      xs={12} sm={12} md={14.4} lg={14.4} xl={14.4}
      className='navbar-menu-container'
      >
        <div className='menu-icon' onClick={handleClick}>
          {click ? <CloseOutlined /> : <PlusOutlined />}
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
             >
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li className='nav-btn'>
            {button ? (
              <Link to='/sign-up' className='btn-link'>
                <Button buttonStyle='btn--outline'>SIGN UP</Button>
              </Link>
              ) : (
              <Link to='/sign-up' className='btn-link'>
                <Button
                  buttonStyle='btn--outline'
                  buttonSize='btn--mobile'
                  onClick={closeMobileMenu}
                >
                  SIGN UP
                </Button>
              </Link>
            )}
          </li>
        </ul>
      </Col>

    </Row>
  </>
  );
}

export default Navbar;









// import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import { MdFingerprint } from 'react-icons/md';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { IconContext } from 'react-icons/lib';

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//     window.addEventListener('resize', showButton);
  
//   }, []);


//   return (
//     <>
//       <IconContext.Provider value={{ color: '#fff' }}>
//         <nav className='navbar'>
//           <div className='navbar-container container'>
//             <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//               <MdFingerprint className='navbar-icon' />
//               LAVISH
//             </Link>
//             <div className='menu-icon' onClick={handleClick}>
//               {click ? <FaTimes /> : <FaBars />}
//             </div>
//             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//               <li className='nav-item'>
//                 <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                   Home
//                 </Link>
//               </li>
//               <li className='nav-item'>
//                 <Link
//                   to='/services'
//                   className='nav-links'
//                   onClick={closeMobileMenu}
//                 >
//                   Services
//                 </Link>
//               </li>
//               <li className='nav-item'>
//                 <Link
//                   to='/products'
//                   className='nav-links'
//                   onClick={closeMobileMenu}
//                 >
//                   Products
//                 </Link>
//               </li>
//               <li className='nav-btn'>
//                 {button ? (
//                   <Link to='/sign-up' className='btn-link'>
//                     <Button buttonStyle='btn--outline'>SIGN UP</Button>
//                   </Link>
//                 ) : (
//                   <Link to='/sign-up' className='btn-link'>
//                     <Button
//                       buttonStyle='btn--outline'
//                       buttonSize='btn--mobile'
//                       onClick={closeMobileMenu}
//                     >
//                       SIGN UP
//                     </Button>
//                   </Link>
//                 )}
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </IconContext.Provider>
//     </>
//   );
// }

// export default Navbar;









