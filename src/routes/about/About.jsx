import './about.style.scss'
import img1 from '../../assets/images/image-product-2.jpg'
import Button from '../../components/button/Button'
import { teamData } from '../../data/teamData'
import AboutCard from './AboutCard'
const About = () => {
  return (
    <section className="slide-left container about">
      <article className="grid-container grid-container--home ">
        <img src={img1} alt="img" className="about-img" />
        <div className="flow">
          <h1 className=" fs-700 text-dark text-bold ">
            Dediacte to quality and result
          </h1>
          <p>
            providing the best shoe of various types and manufacturing them for
            true travel lovers these items are lightweight and comfortable
          </p>
            <a href="#more">
              <Button>Read more</Button>
            </a>
        </div>
      </article>
      <article id="more">
        <h2 className="fs-700 text-bold text-dark title">About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <div className="about-card-container " >
          {teamData.map((person) => (
            <AboutCard key={person.id} person={person} />
          ))}
        </div>
      </article>
    </section>
  )
}

export default About
