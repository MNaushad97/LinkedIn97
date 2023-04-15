import React, { useState } from "react";

function Form() {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let a = e.target;

    console.log({ ...a });
  };
  const changeHandler = (e) => {
    console.log("e2->", e);
    let a = e.target.value;
    setInputValue(a);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="inputField"
        value={inputValue}
        onChange={changeHandler}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
