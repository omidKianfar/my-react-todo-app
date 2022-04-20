import Styles from "./Home.module.css";
import TodoFormImg from "./Img/TodoForm.png";
import TodoListImg from "./Img/TodoList.png";
const Home = () => {
  return (
    <main>
      <section className={`${Styles.cloumns} ${Styles.section1}`}>
        <section>
          <img
            src="https://img.freepik.com/free-photo/female-hands-writing-plan-notepad-holding-coffee-tablet-money-wooden-background_1268-17465.jpg?w=2000"
            alt=""
          />
        </section>

        <section className={Styles.content_center}>
          <h1>About</h1>
          <div className={Styles.AboutSection}>
            <h3>Todo App design because:</h3>
            <ul>
              <li>
                Write your goals for today or long time to remember or check
                when them done.
              </li>
              <li>
                When you write you goals, you are more determined to finish them
              </li>
            </ul>
          </div>
        </section>
      </section>

      <section className={Styles.section2}>
        <h1>How use it</h1>
        <section className={`${Styles.cloumns} ${Styles.row1}`}>
          <section className={Styles.content_center}>
            <p>1. Place to write or edit your todo</p>
            <p>2. Click or press enter for create your todo</p>
          </section>

          <section className={Styles.content_center}>
            <img
              className={Styles.todoFormImg}
              src={TodoFormImg}
              alt="Todo Fotm"
            />
          </section>
        </section>

        <section className={`${Styles.cloumns} ${Styles.row2}`}>
          <section className={Styles.content_center}>
            <img
              className={Styles.todoListImg}
              src={TodoListImg}
              alt="Todo List"
            />
          </section>

          <section className={Styles.content_center}>
            <p>3. Search todo</p>
            <p>4. Filter todos: filter with complte or uncomplete todo</p>
            <p>5. Delete todo</p>
            <p>6. Edit todo: set your todo in input todo for update</p>
            <p>
              7. Change todo complete: green show complete todo and gray show
              its not
            </p>
          </section>
        </section>
      </section>
    </main>
  );
};
export default Home;
