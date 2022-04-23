import Styles from "./Home.module.css";

import HomeImg from "./Img/Home.jpg";
import TodoFormImg from "./Img/TodoForm.png";
import TodoListImg from "./Img/TodoList.png";

const Home = () => {
  return (
    <main>
      <section className={`${Styles.cloumns} ${Styles.section1}`}>
        <section>
          <img src={HomeImg} alt="Home Image" />
        </section>

        <section className={Styles.content_center}>
          <h1>About</h1>
          <div className={Styles.about_section}>
            <h4>Todo App design because:</h4>
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
            <p title="Place to write or edit your todo">1. Input todo</p>
            <p title="Click or press enter for create your todo">2. Add todo</p>
          </section>

          <section className={Styles.content_center}>
            <img
              className={Styles.todo_form_img}
              src={TodoFormImg}
              alt="Todo Form"
              useMap="#todo_form_map"
            />
            <map name="todo_form_map">
              <area
                shape="circle"
                coords="40,35,15"
                alt="Input todo"
                title="Input todo"
              />

              <area
                shape="circle"
                coords="160,75,15"
                alt="Input todo"
                title="Add todo"
              />
            </map>
          </section>
        </section>

        <section className={`${Styles.cloumns} ${Styles.row2}`}>
          <section className={Styles.content_center}>
            <img
              className={Styles.todo_list_img}
              src={TodoListImg}
              alt="Todo List"
              useMap="#todo_list_map"
            />
            <map name="todo_list_map">
              <area
                shape="circle"
                coords="70,65,15"
                alt="Input todo"
                title="Search todo"
              />

              <area
                shape="circle"
                coords="345,65,15"
                alt="Input todo"
                title="Filter todos"
              />

              <area
                shape="circle"
                coords="430,150,15"
                alt="Input todo"
                title="Delete todo"
              />

              <area
                shape="circle"
                coords="465,115,15"
                alt="Input todo"
                title="Edit todo"
              />

              <area
                shape="circle"
                coords="505,150,15"
                alt="Input todo"
                title="Complete todo"
              />
            </map>
          </section>

          <section className={Styles.content_center}>
            <p title="Search todo with the todo title">3. Search todo</p>
            <p title="Filter todos with complte or uncomplete todos">
              4. Filter todos
            </p>
            <p title="Delete todo from your todos list">5. Delete todo</p>
            <p title="Set your todo in input todo for update">6. Edit todo</p>
            <p
              title="Green show complete todo and gray show
              its not"
            >
              7. Complete todo
            </p>
          </section>
        </section>
      </section>
    </main>
  );
};
export default Home;
