import Styles from "./Home.module.css";

const Home = () => {
  return (
    <main>
      <section className={`${Styles.cloumns} ${Styles.section1}`}>
        <section>
          <img src="https://wallpaperaccess.com/full/1489353.jpg" alt="" />
        </section>

        <section className={Styles.content_center}>
          <h1>About</h1>
          <ul>
            <h3>Todo App design because:</h3>
            <li>
              Write your goals for today or long time to remember or check when
              them done.
            </li>
            <li>
              When you write you goals, you are more determined to finish them
            </li>
          </ul>
        </section>
      </section>

      <section className={Styles.section2}>
        <h1>How use it</h1>
        <section className={`${Styles.cloumns} ${Styles.row1}`}>
          <section className={Styles.content_center}>
            <p>1. Place to write your todo</p>
            <p>2. Click or press enter for create your todo</p>
          </section>

          <section className={Styles.content_center}>
            <img src="https://wallpaperaccess.com/full/1489353.jpg" alt="" />
          </section>
        </section>

        <section className={`${Styles.cloumns} ${Styles.row2}`}>
          <section className={Styles.content_center}>
            <img src="https://wallpaperaccess.com/full/1489353.jpg" alt="" />
          </section>

          <section className={Styles.content_center}>
            <p>1. Toggle menu to access option</p>
            <p>2. Delete todo</p>
            <p>3. Edit todo</p>
            <p>4. Change todo complete</p>
          </section>
        </section>
      </section>
    </main>
  );
};
export default Home;
