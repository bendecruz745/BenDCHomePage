import React from "react";

function Projects() {
  return (
    <body className="container">
      <h1 className="display-4 lead">Projects</h1>
      <a href="https://bendecruz745.github.io/ToDoList/">
        <h2>To Do List</h2>
      </a>
      <p>
        I've got to start somewhere, and what else other than a simple To Do
        list that makes me question myself?
      </p>
      <a href="https://bendecruz745.github.io/WeatherApp/">
        <h2>Weather App</h2>
      </a>
      <p>
        Weather App made using WeatherAPI's free API, got the data retrieval and
        overall functionally going pretty quickly, so I focused this time on
        making it prettier looking. CSS/Bootstrap may take a bit for me to
        learn...
      </p>
      <a href="https://benchatapp.onrender.com/">
        <h2>Basic Chat App</h2>
      </a>
      <p>
        Now you might be thinking, isnt jumping from the previous two projects
        to a chat app a bit ambitious? Well, yes it is, it ended up being quite
        the struggle. <br />
        <b>NOTE:</b> My NodeJS server is being hosted on render.com and the
        service is spun down when it is inactive for awhile, if you are checking
        this out, attempt to login/signup and give it a minute or two and it
        should be ready to go.
      </p>
    </body>
  );
}

export default Projects;
