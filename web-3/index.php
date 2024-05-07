<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Daniel Gálvez Dev</title>
    <link rel="stylesheet" href="./css/style.css" />

    <!-- iconos -->
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />
    <link rel="icon" type="image/x-icon" href="./img/favicon.ico" />

    <link rel="stylesheet" href="./css/estilos.css" />
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
    ></script>

    <!-- <script type="text/javascript">
      emailjs.init("0r7G6_2ElA5h-KCxi");
    </script> -->
  </head>
  <body>
    <!-- Header -->
    <header class="header">
      <a href="#" class="logo">
        <img
          src="./img/logo-amarillo_1.png"
          width="40px"
          height="30px"
          alt="logo dani galvez"
        />
        <!-- <span class="animate" style="--i: 1"></span> -->
      </a>
      <div class="bx bx-menu" id="menu-icon">
        <span class="animate" style="--i: 2"></span>
      </div>
      <nav class="navbar">
        <a href="#home" class="active">Home</a>
        <a href="#skills">Skills</a>
        <a href="#apps">Apps</a>
        <!-- <a href="#designs">Diseños</a> -->
        <a href="#snake">Gift</a>
        <a href="#contact">Contact</a>

        <span class="active-nav"></span>
        <!-- <span class="animate" style="--i: 2"></span> -->
      </nav>
    </header>
    <!-- seccion de inicio -->
    <section class="home show-animate" id="home">
      <span class="animate" style="--i: 1"></span>
      <div class="home-content">
        <div class="about-img">
          <img src="./img/foto-henry.png" alt="Daniel Gálvez" />
          <span class="circle-spin"></span>
        </div>
        <h1>
          I am
          <span>Daniel Gálvez</span>
          <!-- <span class="animate" style="--i: 1"></span> -->
        </h1>
        <div class="text-animate">
          <h3>Web Developer</h3>
          <!-- <span class="animate" style="--i: 1"></span> -->
        </div>
        <p>
          I am a developer specialized in FrontEnd for microservices and web
          Applications. Throughout my career I have contributed to reducing task
          execution times in various areas of the company where I work. I I am
          passionate about what I do and I love continually learning how to grow
          in my career.
          <!-- <span class="animate" style="--i: 1"></span> -->
        </p>
        <div class="btn-box">
          <!-- este dirije al formulario -->
          <a href="#contact" class="btn">Contact Me </a>
          <a download href="./DanielGalvezCv.pdf" class="btn">Resume</a>
          <!-- <span class="animate" style="--i: 1"></span> -->
        </div>
      </div>

      <div class="home-sci">
        <a href="https://github.com/DanielHernandezGalvez" target="_blank"
          ><i class="bx bxl-github"></i
        ></a>
        <a
          href="https://www.linkedin.com/in/-daniel-galvez-dev/"
          target="_blank"
          ><i class="bx bxl-linkedin"></i
        ></a>
        <a href="mailto:hernandezgalvezalejandro@gmail.com"
          ><i class="bx bx-envelope"></i
        ></a>
        <!-- <span class="animate" style="--i: 1"></span> -->
      </div>
    </section>
    <!-- sección de skills -->

    <section class="skills" id="skills">
      <h2 class="heading">
        Technical <span>Skills</span>
        <span class="animate scroll" style="--i: 1"></span>
      </h2>

      <div class="proyects-row">
        <div class="proyects-column">
          <div class="skills-box">
            <div class="skill-card">
              <img src="./img/typescript.png" alt="Material ui" />
              <p>TypeScript</p>
            </div>

            <div class="skill-card">
              <img src="./img/next.png" alt="" />
              <p>Next</p>
            </div>

            <div class="skill-card">
              <img src="./img/reactjs.png" alt="" />
              <p>React</p>
            </div>

            <div class="skill-card">
              <img src="./img/tailwind.png" alt="tailwind" />
              <p>Tailwind</p>
            </div>

            <span class="animate scroll" style="--i: 3"></span>
          </div>

          <div class="skills-box">
            <div class="skill-card">
              <img src="./img/html.png" alt="html" />
              <p>HTML</p>
            </div>

            <div class="skill-card">
              <img src="./img/css.png" alt="css" />
              <p>CSS</p>
            </div>

            <div class="skill-card">
              <img src="./img/js.png" alt="Javascript" />
              <p>Javascript</p>
            </div>

            <div class="skill-card">
              <img src="./img/bootstrap.png" alt="bootstrap" />
              <p>Bootstrap</p>
            </div>

            <span class="animate scroll" style="--i: 3"></span>
          </div>

          <div class="skills-box">
            <div class="skill-card">
              <img src="./img/wordpress.png" alt="Wordpress" />
              <p>Wordpress</p>
            </div>
            <div class="skill-card">
              <img src="./img/mysql.png" alt="MySQL" />
              <p>MySQL</p>
            </div>

            <div class="skill-card">
              <img src="./img/native.png" alt="" />
              <p>Native</p>
            </div>

            <div class="skill-card">
              <img src="./img/PHP-logo.svg.png" alt="PHP" />
              <p>PHP</p>
            </div>

            <span class="animate scroll" style="--i: 3"></span>
          </div>

          <div class="skills-box">
            <!-- <div class="skill-card">
              <img src="./img/sass.png" alt="sass" />
              <p>SASS</p>
            </div> -->
            <!-- <div class="skill-card">
              <img src="./img/ilustrador.png" alt="" />
              <p>Ilustrador</p>
            </div>

            <div class="skill-card">
              <img src="./img/figma_1.png" alt="" />
              <p>Figma</p>
            </div>

            <div class="skill-card">
              <img src="./img/git.png" alt="" />
              <p>Git</p>
            </div> -->

            <!-- <div class="skill-card">
              <img src="./img/photoshop.png" alt="" />
              <p>Photoshop</p>
            </div> -->
            <span class="animate scroll" style="--i: 3"></span>
          </div>

          <!-- <div class="skills-box end">
            <div class="skill-card">
              <img src="./img/git.png" alt="" />
              <p>Git</p>
            </div> -->

            <!-- <div class="skill-card">
              <img src="./img/redux.png" alt="" />
              <p>Redux</p>
            </div> -->

            <!-- <div class="skill-card">
              <img src="./img/sql.png" alt="" />
              <p>SQL</p>
            </div>
            <div class="skill-card">
              <img src="./img/expressjs_logo.png" alt="" />
              <p>Express</p>
            </div> -->
            <span class="animate scroll" style="--i: 3"></span>
          </div>
        </div>
      </div>
    </section>

    <!-- sección apps  -->
    <section class="proyects" id="apps">
      <h2 class="heading">
        My Web <span>Apps</span>
        <span class="animate" style="--i: 1"></span>
      </h2>

      <div class="proyects-box">
        <div class="proyects-card">
          <h4>Voice to Text</h4>
          <a href="https://chat-voice.netlify.app/" target="_blank">
            <img src="./img/voice.png" alt="Reconocimiento de voz" />
          </a>
          <div class="tecnology">
            <p>Voice recognition and text conversion application</p>
            <img src="./img/reactjs.png" width="40px" alt="reactjs" />
            <img src="./img/bootstrap.png" alt="bootstrap" />
          </div>
          <a
            class="href"
            href="https://github.com/DanielHernandezGalvez/Chat-Voice.git"
            target="_blank"
            >Repository</a
          >
          <span class="animate" style="--i: 2"></span>
        </div>

        <div class="proyects-card">
          <h4>El creador web</h4>
          <a
            href="https://elcreadorweb.com"
            target="_blank"
          >
            <img src="./img/elcreadorweb.png" alt="el creador web" />
          </a>
          <div class="tecnology">
            <p>Web site to my freelance web delevopment</p>
            <img src="./img/PHP-logo.svg.png" width="40px" alt="php" />
            <img src="./img/mysql.png" width="40px" alt="mysql" />
          </div>
          <a
            class="href"
            href="https://github.com/DanielHernandezGalvez/WebNegocios"
            target="_blank"
            >Repository</a
          >
          <span class="animate" style="--i: 2"></span>
        </div>

        <div class="proyects-card">
          <h4>Weather App</h4>
          <a
            href="https://weather-app-danielgalvez.netlify.app/"
            target="_blank"
          >
            <img src="./img/clima.png" alt="Clima" />
          </a>
          <div class="tecnology">
            <p>
              Application to check the weather in different cities and countries
            </p>
            <img src="./img/reactjs.png" width="40px" alt="" />
            <img src="./img/css.png" alt="" />
          </div>
          <a
            class="href"
            href="https://github.com/DanielHernandezGalvez/weather-app.git"
            >Repository</a
          >
          <span class="animate" style="--i: 2"></span>
        </div>

        <div class="proyects-card">
          <h4>Resume Generator</h4>
          <a
            href="https://cvgenetator-dg.netlify.app/"
            target="_blank"
          >
            <img src="./img/cv-generator.png" alt="Generador de pdf" />
          </a>
          <div class="tecnology">
            <p>
              A resume PDF generator
            </p>
            <img src="./img/typescript.png" width="40px" alt="typescript" />
            <img src="./img/reactjs.png" alt="reactjs" />
          </div>
          <a
            class="href"
            href="https://github.com/DanielHernandezGalvez/Resume-Generator"
            target="_blank"
            >Repository</a
          >
          <span class="animate" style="--i: 2"></span>
        </div>

        <div class="proyects-card">
          <h4>Voz 21</h4>
          <a
            href="https://voz21estudio.com/"
          >
            <img src="./img/voz21.png" alt="voz 21" />
          </a>
          <div class="tecnology">
            <p>Catalog of Announcer voices</p>
            <img src="./img/typescript.png" width="40px" alt="JavaScript" />
            <img src="./img/tailwind.png" width="40px" alt="HTML" />
          </div>
          <a
            class="href"
            href="https://voz21estudio.com"
            target="_blank"
            >In Production</a
          >
          <span class="animate" style="--i: 2"></span>
        </div>

        <span class="animate" style="--i: 1"></span>
      </div>
    </section>
    <hr />
    <!-- sección para proyectos -->

    <div class="designs show-animate" id="designs">
      <!-- <h2 class="heading">
        Mis <span>Diseños web</span>
        <span class="animate" style="--i: 1"></span>
      </h2>

      <div class="design-box">
        <div class="design-card1">
          <div class="content-design">
            <a href="#">
              <h3>Ir al Demo</h3>
            </a>
          </div>
        </div>

        <div class="design-card2">
          <div class="content-design">
            <a href="#">
              <h3>Ir al Demo</h3>
            </a>
          </div>
        </div>

        <div class="design-card3">
          <div class="content-design">
            <a href="#">
              <h3>Ir al Demo</h3>
            </a>
          </div>
        </div>

        <span class="animate" style="--i: 2"></span>
      </div> -->
    </div>

    <!-- gift -->
    <section class="snake" id="snake">
      <h2 class="heading">
        Gift <span class="animate scroll" style="--i: 1"></span>
      </h2>
      <div id="game-container">
        <canvas id="gc" class="game-canvas" width="400" height="400"></canvas>
        <span class="animate scroll" style="--i: 2"></span>
      </div>
      <div class="keys">
        <a class="up arr" onclick="Snake.action('up')"> ↑</a>
        <br />
        <a class="left arr" onclick="Snake.action('left')">←</a>
        <a class="down arr" onclick="Snake.action('down')"> ↓</a>
        <a class="right arr" onclick="Snake.action('right')"> →</a>
        <span class="animate scroll" style="--i: 1"></span>
      </div>
    </section>

    <!-- Contacto -->
    <section class="contact" id="contact">
      <h2 class="heading">
        Contact <span>Me!</span>
        <span class="animate scroll" style="--i: 1"></span>
      </h2>
      <form action="form.php" id="form" method="post">
        <div class="input-box">
          <div class="input-field">
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              pattern=".*\S+.*"
              required
            />
            <span class="focus"></span>
            <span class="animate scroll" style="--i: 2"></span>
          </div>
          <div class="input-field">
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              required
            />
            <span class="focus"></span>
            <span class="animate scroll" style="--i: 2"></span>
          </div>
        </div>
        <div class="textarea-field">
          <textarea
            cols="30"
            rows="10"
            placeholder="Message"
            name="message"
            id="message"
            required
          ></textarea>
          <span class="focus"></span>
          <span class="animate scroll" style="--i: 2"></span>
        </div>

        <div class="btn-box btns">
          <button type="submit" id="sendEmail" value="Send Email" class="btn">
            Submit
          </button>
          <span class="animate scroll" style="--i: 3"></span>
        </div>
      </form>
    </section>

    <!-- footer -->
    <hr />
    <footer class="footer">
      <div class="footer-text">
        <p>Copyrigth &copy; 2024 Developed by <span>Daniel Galvez</span></p>
        <!-- <span class="animate scroll" style="--i: 1"></span> -->
      </div>

      <div class="footer-iconTop">
        <a href="#"><i class="bx bx-chevron-up"></i></a>
        <!-- <span class="animate scroll" style="--i: 2"></span> -->
      </div>
    </footer>

    <!-- Javascript -->
    <script src="./js/script.js"></script>
    <script type="text/javascript" src="./js/game.js"></script>
  </body>
</html>
