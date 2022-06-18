import { useState } from "react";

const Home = () => {

    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);


    return (
        <div className="container">
            <h1>My Todos </h1>

            <ul>
                <li>
                    <input
                        type="text"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        onKeyPress={(e) => e.key === "Enter" ? setTodos(todos.concat(inputValue)) & setInputValue("") : null}

                        placeholder="What you need to do?"
                    ></input>
                </li>
                {todos.map((e,index) => (
                    <li>
                        {e} {""}
                        <span
                            onClick={()=>setTodos(todos.filter( (t, i) => index != i ))}


                        >X</span>
                    </li>
                ))}


                {/* <li>Walk the dog<span>X</span></li>
                <li>Pay taxes<span>X</span></li>
                <li>Go on vacations<span>X</span></li> */}

            </ul>
            <div>{todos.length} task</div>

        </div>
    );
}

export default Home;
