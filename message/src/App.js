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

  //  console.log(info);

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

  const remove = (x) => {
    axios.delete("http://localhost:9000/ex/info/" + x);
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
            post();
          }}
        />
      </div>
      <div className="feed">
        {info &&
          info.map((doc) => (
            <Card key={doc.id}>
              <p style={{ textAlign: "center" }}>{doc.data.user}</p>
              <p style={{ textAlign: "center" }}>{doc.data.post}</p>
              <div style={{ textAlign: "center" }}>
                <button
                  style={{
                    borderColor: "red",
                    textAlign: "center",
                    margin: "20px",
                  }}
                  onClick={() => {
                    console.log(doc.id);
                    remove(doc.id);
                  }}
                >
                  DELETE
                </button>
                <button
                  style={{
                    borderColor: "gold",
                    textAlign: "center",
                    margin: "20px",
                  }}
                >
                  EDIT
                </button>
              </div>
            </Card>
          ))}
      </div>
    </>
  );
}

export default App;
