import React from 'react';
import Header from '../components/Header';
import ProfileSection from '../components/ProfileSection';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
  return (
    <HelmetProvider>
    <div>
      <Header />
        <Helmet>
          <title>Nikhil Bhagat</title>
          <meta
            name="description"
            content="Frontend - React JS, Redux | Android/IOS - React Native ✔| Backend Services - Django, Django Rest Framework ✔ | Full-Stack Developer from Nepal 🙏
            Province - 01, Biratnagar. & As a Full-Stack Developer with expertise in both Android and Web development, I am passionate about crafting innovative solutions that drive exceptional user experiences. I leverage my technical skills to contribute to the success of organizations by delivering impactful, cutting-edge applications that stand out in today’s digital landscape. I am seeking a challenging role that will allow me to utilize my diverse skill set to develop high-quality software solutions." 
          />
        </Helmet>
      <ProfileSection />
     
      <section>
        <h2>Projects</h2>
        <ProjectCard link="https://nikhilbhagat.com.np/" />
        <ProjectCard link="https://github.com/NikeGunn/cineart-backend-v1" />
        <ProjectCard link="https://github.com/NikeGunn/BattisPutali-v2/" />
        <ProjectCard link="https://github.com/NikeGunn/battisPutali-backend-v2-Beta" />
        <ProjectCard link="https://github.com/NikeGunn/numathecafe.git"/>
        <ProjectCard link="https://github.com/NikeGunn/meetup-app.git"/>
        <ProjectCard link="https://github.com/NikeGunn/PyShop-in-DJANGO/tree/master"/>
        <ProjectCard link="https://cryptoappbynikhil.netlify.app/" />
        <ProjectCard link="https://codewithnikhil.netlify.app/" />
        <ProjectCard link="https://bhagatnikhil.com.np/" />
        <ProjectCard link="https://github.com/NikeGunn/QR-GENERATOR-BCA-ASSOCIATION/tree/master" />
        <ProjectCard link="https://github.com/NikeGunn/BCA-ASSOCIATION-QR-SCANNERAPP/tree/master" />
        <ProjectCard link="https://github.com/NikeGunn/Hauba/tree/master "/>
        <ProjectCard link="https://github.com/NikeGunn/readme-generator/tree/master"/>
      
      </section>
      <Footer />
    </div>
    </HelmetProvider>
  );
};

export default Home;
