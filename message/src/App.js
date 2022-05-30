import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "@mui/material";
function App() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/ex/info")
      .then((res) => res.json())
      .then((text) => setInfo(text.result))
      .catch((err) => console.log(err));
  }, []);

  console.log(info);

  const getInput = () => {
    const ref1 = document.getElementById("user").value;
    const ref2 = document.getElementById("post").value;

    console.log(ref1);
    console.log(ref2);
  };

  const post = () => {
    const ref1 = document.getElementById("user").value;
    const ref2 = document.getElementById("post").value;

    console.log(ref1);
    console.log(ref2);
    axios
      .post("http://localhost:9000/ex/post", {
        user: { ref1 },
        post: { ref2 },
      })
      .then((res) => console.log(res.data()))
      .catch((err) => console.log(err));
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
      <div className="feed">
        {info &&
          info.map((doc) => (
            <Card style={{ height: "100px" }}>
              <p style={{ textAlign: "center" }}>{doc.user}</p>
              <p style={{ textAlign: "center" }}>{doc.post}</p>
            </Card>
          ))}
      </div>
    </>
  );
}

export default App;
