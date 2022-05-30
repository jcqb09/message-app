import "./App.css";
import { useRef, useEffect } from "react";

function App() {
  // const ref1 = useRef();
  // const ref2 = useRef();

  const getInput = () => {
    const ref1 = document.getElementById("user").value;

    const ref2 = document.getElementById("post").value;

    console.log(ref1);
    console.log(ref2);
  };

  return (
    <>
      <div className="App">Hello World</div>
      <div className="input" style={{ textAlign: "center" }}>
        <div>
          <p>Username: </p>
          <input type="text" id="user" name="username" />
        </div>
        <div>
          <p>Post: </p>
          <input type="text" id="post" name="post" />{" "}
        </div>

        <input
          type="submit"
          value="Post"
          onClick={() => {
            getInput();
          }}
        />
      </div>
    </>
  );
}

export default App;
