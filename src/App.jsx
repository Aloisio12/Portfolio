import "./App.css"
import Button from "./Button"
import img1 from "./photo-aloisio.jpg"
import img2 from "./html-5.png"
import img3 from "./css-3.png"
import img4 from "./js.png"
import img5 from "./reactjs.png"
import img6 from "./nextjs.png"
import img7 from "./python.png"
import img8 from "./doctor-care.png"
import img9 from "./responsive-site.png"
import img10 from "./link-tree.png"
import img11 from "./digital-watch.png"
import img12 from "./linkedin.png"
import img13 from "./email.png"
import img14 from "./github.png"

export default function App() {
  return (
    <>
    <header>
      <div id="header-left">
        <img src={img1} alt="foto de Aloísio Vitório" />
        <p>Aloísio Vitório</p>
      </div>

      <div id="header-right">
        <a href="#header-left"><p>INÍCIO</p></a>
        <a href="#biography-left"><p>SOBRE MIM</p></a>
        <a href="#h1-projects-main"><p>PROJETOS</p></a>
        <a href="#contacts-main"><p>CONTATO</p></a>
      </div>

    </header>

    <main>
    <div id="line"></div>

      <div id="biography-title">
        <h1>Olá, eu me chamo Aloísio Vitório</h1>
      </div>

      <div id="main-first">
        <div id="biography-left">
          <h1>SOBRE MIM</h1>
            <p>Sou um entusiasta de tecnologia com muita vontade de aprender,<br></br> sou graduando em Sistemas para Internet pelo Instituto Federal<br></br> do Maranhão, tenho experiência em projetos pessoais front-end,<br></br>buscando aprendizado frequentemente.</p>
        </div>

        <div id="biography-right">
          <h1>TECNOLOGIAS</h1>
          <div id="tecnologies">

        <div className="icons-main-1">
            <div className="icons">
              <img src={img2} alt="html5-icon" />
              <p>HTML 5</p>
            </div>

            <div className="icons">
              <img src={img3} alt="css3-icon" />
              <p>CSS 3</p>
            </div>

            <div className="icons">
              <img src={img4} alt="js-icon" />
              <p>JavaScript</p>
            </div>

        </div>

        <div id="line-2"></div>

        <div className="icons-main-2">

            <div className="icons">
              <img src={img5} alt="reactjs-icon" />
              <p>ReactJS</p>
            </div>

            <div className="icons">
              <img src={img6} alt="nextjs-icon" />
              <p>NextJS</p>
            </div>

            <div className="icons">
              <img src={img7} alt="python-icon" />
              <p>Python</p>
            </div>
        </div>
            
          </div>
        </div>
      </div>


      <div id="main-second">
        <h1 id="h1-projects-main">PROJETOS</h1>  
        <div id="projects">

          <div className="projects-description">
            <img src={img8} alt="site_doctor_care" /> 
            <div className="projects-description-right">
            <Button link='https://doctor-care-aloisio.netlify.app/'/>
            </div>        
          </div>


          <div className="projects-description">
            <img src={img9} alt="site-clonify" /> 
            <div className="projects-description-right">
            <Button link='https://responsive-site-aloisio.netlify.app/'/>
            </div>        
          </div>


          <div className="projects-description">
            <img src={img10} alt="site_link-tree" /> 
            <div className="projects-description-right">
            <Button link='https://link-tree-aloisio.netlify.app/'/>
            </div>        
          </div>


          <div className="projects-description">
            <img src={img11} alt="site_link-tree" /> 
            <div className="projects-description-right">
              <Button link='https://digital-watch-aloisio.netlify.app/'/>
            </div>        
          </div>

        </div>
      </div>
    </main>

    <footer>
      <div id="contacts-title">
        <h3>CONTATO</h3>
      </div>
      <div id="contacts-main">
        <div className="contacts">
          <a href="https://linkedin.com/in/aloisiovitorio">
            <img src={img12} alt="linkedin" />
          </a>
        </div>

        <div className="contacts">
          <a href="mailto:aloisiovitorio56@gmail.com">
            <img src={img13} alt="email" />
          </a>
        </div>

        <div className="contacts">
          <a href="https://github.com/Aloisio12">
            <img src={img14} alt="github" />
          </a>
        </div>
      </div>
        <div id="line-contacts"></div>

        <div id="copyrights">
          <h6>@Copyright 2024. Made by Aloísio Vitório</h6>
        </div>
    </footer>

    </>
  )
}
