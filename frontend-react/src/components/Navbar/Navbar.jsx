import React, {useState} from 'react';

import { HiMenuAlt4, HiX} from 'react-icons/hi'
import { images } from '../../constants';
import { motion } from 'framer-motion'
import './Navbar.scss';

const Navbar = () => {
 const [toggle, setToggle] = useState(false)

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={images.logo} alt="logo" /> */}
      </div>


      <ul className='app__navbar-links'>
        
        {['home', 'about', 'work', 'skills', 'testimonial', 'contact'  ].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div/>
            <a href={`#${item}`}>{item}</a>

          </li>
        ))}

      </ul>

        <a 
          href="carlosrodriguezresume.pdf"
          download="carlosrodriguezresume.pdf">

          <button className='app__button' > RESUME</button>
        </a>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>

            <li>
              <a 
                href="carlosrodriguezresume.pdf"
                download="carlosrodriguezresume.pdf">

                <button className='app__button' > RESUME</button>
              </a>
              </li>
              
              {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            
            </ul>
              </motion.div>
            )
          }
     </div>
    </nav>
  );
};

export default Navbar;



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDj0kw5rJ3_l4HeL4jFCkFLiYWS-FzZlzM",
//   authDomain: "carlosarodriguezportfolio.firebaseapp.com",
//   projectId: "carlosarodriguezportfolio",
//   storageBucket: "carlosarodriguezportfolio.appspot.com",
//   messagingSenderId: "533216228992",
//   appId: "1:533216228992:web:f5038d0fcc926ffeddd865",
//   measurementId: "G-JKWTP5Q7GW"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);