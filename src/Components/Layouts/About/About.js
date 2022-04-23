import Styles from "./About.module.css";

const About = () => {
  return (
    <main className={Styles.main}>
      <h1>About Application</h1>

      <section className={Styles.section1}>
        <section>
          <h3>Technologies:</h3>
          <p>HTML</p>
          <p>CSS Modules</p>
          <p>React.js</p>
          <ul>
            <li>ES6</li>
            <li>Hooks</li>
          </ul>
          <p>Uuid</p>
          <p>Axios</p>
          <p>Json server</p>
          <p>React Router</p>
          <p>Material design</p>
        </section>

        <section>
          <h3>Source: </h3>
          <ul>
            <li>
              <a href="https://www.w3schools.com/"> www.w3schools.com</a>
            </li>
            <li>
              <a href="https://reactjs.org/"> www.reactjs.org</a>
            </li>
          </ul>
        </section>
      </section>

      <h1>About me</h1>

      <section className={Styles.section2}>
        <img
          src="https://wallpaperaccess.com/full/1489353.jpg"
          alt="Omid Kianfar"
        />

        <section>
          <p>First Name: Omid</p>
          <p>Last Name: Kianfar</p>
          <p>Education: Software engineer from P.I.A.U university.</p>

          <h4>contact:</h4>
          <p>Gmail: omid.kianfar.990@gmail.com</p>
          <p>
            Github:
            <a href="https://github.com/omidKinfar">
              www.github.com/omidKinfar
            </a>
          </p>
          <p>
            Linkedin:
            <a href="https://www.linkedin.com/in/omid-kianfar-248723232/">
              https://www.linkedin.com/in/omid-kianfar-248723232/
            </a>
          </p>
        </section>
      </section>

      <h4>Copyright: 2022/20/4</h4>
    </main>
  );
};
export default About;
