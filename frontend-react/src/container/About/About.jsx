import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion'
import './About.scss'
import {AppWrap, MotionWrap} from '../../wrapper'
import {urlFor, client} from '../../client'






const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};
export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
// const abouts = [
//   {title: 'Front End Development', description: 'I am good at Front End Development', imgUrl: images.about01},
//   {title: 'Web Design', description: 'I am good at Web Design', imgUrl: images.about02},
//   {title: 'UI/UX', description: 'I am good at UI/UX', imgUrl: images.about03},
//   {title: 'Web Animations', description: 'I am good at Web Animations', imgUrl: images.about04},
// ];


// const About = () => {


//   return (
//     <>
//     <h2 className='head-text'> I know that <span>Good Develpment</span> <br /> means <span>Good Buisness</span>  </h2>    
//       <div className='app__profiles'>
//         {abouts.map((about, index) => (
//           <motion.div
//           whileInView={{ opacity: 1 }}
//           whileHover={{ scale: 1.1 }}
//           transition={{ duration: 0.5, type: 'tween' }}
//           className='app__profile-item'
//           key={about.title + index}
//           >
//           <img src={about.imgUrl} alt={about.title} />
//           <h2 className='bold-text' style={{ marginTop: 20 }} >{about.title}</h2>
//           <p className='p-bold'style={{ marginTop: 10 }}>{about.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default About