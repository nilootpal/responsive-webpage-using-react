import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './HeroSection.css';


const HeroSection = ({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) => {

  return (
    <>
      <Row
        wrap = {true}
        className = {lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <Col 
        flex = '1 1 400px'
        className='text-container'
        order = {imgStart === 'start' ? 2 : 1}
        >
          <div className='top-line'>{topLine}</div>
            <h1 className={lightText ? 'heading' : 'heading dark'}>
              {headline}
            </h1>
            <p
            className={
            lightTextDesc
            ? 'home__hero-subtitle'
            : 'home__hero-subtitle dark'
            }
            >
              {description}
            </p>
            <Link to='/sign-up'>
              <Button buttonSize='btn--wide' buttonColor='blue'>
                {buttonLabel}
              </Button>
            </Link>
             
        </Col>

        <Col 
        flex = '0 1 480px'
        order = {imgStart === 'start' ? 1 : 2}
        className='img-container'
        >
          <img src={img} alt={alt} className='home__hero-img' />
        </Col>

      </Row>
    </>
  )
};

export default HeroSection;


// import React from 'react';
// import './HeroSection.css';
// import { Button } from './Button';
// import { Link } from 'react-router-dom';


// function HeroSection({
//   lightBg,
//   topLine,
//   lightText,
//   lightTextDesc,
//   headline,
//   description,
//   buttonLabel,
//   img,
//   alt,
//   imgStart
// }) {
//   return (
//     <>
//       <div
//         className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
//       >
//         <div className='container'>
//           <div
//             className='row home__hero-row'
//             style={{
//               display: 'flex',
//               flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
//             }}
//           >
//             <div className='col'>
//               <div className='home__hero-text-wrapper'>
//                 <div className='top-line'>{topLine}</div>
//                 <h1 className={lightText ? 'heading' : 'heading dark'}>
//                   {headline}
//                 </h1>
//                 <p
//                   className={
//                     lightTextDesc
//                       ? 'home__hero-subtitle'
//                       : 'home__hero-subtitle dark'
//                   }
//                 >
//                   {description}
//                 </p>
//                 <Link to='/sign-up'>
//                   <Button buttonSize='btn--wide' buttonColor='blue'>
//                     {buttonLabel}
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//             <div className='col'>
//               <div className='home__hero-img-wrapper'>
//                 <img src={img} alt={alt} className='home__hero-img' />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default HeroSection;
