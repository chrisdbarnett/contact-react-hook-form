import React from "react";
import ReactDOM from "react-dom";

import ContactForm from "./ContactForm";

function App() {
  return (
    <div className="App">
      <ContactForm />
      <br />
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://seifi.org/reactjs/build-a-contact-form-in-gatsby-part-2-react-hook-form.html"
      >
        Blog post about this repo
      </a>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
