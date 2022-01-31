import React from "react";
import Form from "./Components/Form";
import Checkbox from "./Components/Checkbox";
import MultiCheckbox from "./Components/MultiCheckbox";
import Radio from "./Components/Radio";
import Dropdown from "./Components/Dropdown";
import Slider from "./Components/Slider";
import "./App.css";

const App = () => {
  return (
    <main>
      <h1>Welcome to React</h1>
      {<Form />}
      {<Checkbox />}
      {<MultiCheckbox />}
      {<Radio />}
      {<Dropdown />}
      <Slider />
    </main>
  );
};

export default App;
