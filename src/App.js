import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Card } from "react-bootstrap";

function App() {
  const [user, setUser] = useState({});
  const [active, setActive] = useState(false);

  function handleToggle() {
    setActive(!active);
    fetch("https://api.github.com/users/amourtos")
      .then((response) => response.json())
      .then((data) => setUser(data));

    //console.log("hello!");
  }

  return (
    <div className="App">
      <button onClick={handleToggle}>Toggle User</button>
      {active ? (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={user.avatar_url} />
          <Card.Body>
            <Card.Title>{`${user.name}`}</Card.Title>
            <Card.Text>
              <div>{user.login}</div>
              <div>{user.bio}</div>
            </Card.Text>
          </Card.Body>
        </Card>
      ) : null}
    </div>
  );
}

export default App;
