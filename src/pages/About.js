import React, { useEffect } from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import PDF from '../assets/data/18IT08_Guruprasath_Resume.pdf';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__items1 {
    margin-top: 19rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function About() {
  useEffect(() => {
    document.title = 'Portfolio | About';
  }, []);
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Guruprasath</span>
              </p>
              <p className="about__subheading">B.Tech Information Technology</p>
              <p className="about__subheading">
                Sri Shakthi Institute of Engineering and Technology, Coimbatore.
              </p>
              <div className="about__info">
                <PText>
                  I am from Tiruppur,Tamilnadu. A place of beauty and nature.
                  Since my childhood, i love art and design. I always try to
                  design stuff with my unique point of view. I also love to
                  create things that can be usefull to others.
                  <br /> <br />
                  I started coding since I was in high school. Coding is also an
                  art for me. I love it and now I have the opportunity to design
                  along with the coding. I find it really interesting and I
                  enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              <a
                className="button "
                href={PDF}
                download="Guruprasath_Resume.pdf"
              >
                Download Resume
              </a>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={[
                  'Velavan Matriculation Higher Secondary School, Tiruppur',
                ]}
              />
              <AboutInfoItem
                title="College"
                items={['Sri Shakthi Institute of Engineering and Technology']}
              />
              <AboutInfoItem
                title="University"
                items={['Anna University , Tamilnadu']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'EJS', 'REACT']}
              />
              <AboutInfoItem title="BackEnd" items={['Node', 'Express']} />
              <AboutInfoItem
                title="Design"
                items={['Photoshop', 'After Effects', 'InShot']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Certifications</h1>

              <AboutInfoItem
                title="2020"
                items={['Java Tutorial Course, Solo Learn ']}
              />
              <AboutInfoItem
                title="2021"
                items={[
                  'Essentials Program in JavaScript Programming, Lets Upgrade  ',
                ]}
              />
              <AboutInfoItem
                title="2021"
                items={['The complete web developer zero to mastery, Udemy ']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Inplant Training</h1>

              <AboutInfoItem title="2019" items={['WEB DESIGN ']} />
              <AboutInfoItem title="2019" items={['JAVA ']} />
              <AboutInfoItem
                title="2021"
                items={['The complete web developer zero to mastery, Udemy ']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
