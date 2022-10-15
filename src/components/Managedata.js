import React, { useState } from "react";

function Managedata(props) {
  const [state, setState] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((values) => ({ ...values, [name]: value }));
  };

  const handleImage = (e) => {
    const name = e.target.name;
    const image = URL.createObjectURL(e.target.files[0]);
    setState((values) => ({ ...values, [name]: image }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data in state on click submit:", state);
    props.addData(state);
    // setState([...state,'']);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
        //   value={state.name}
          type="text"
          onChange={(e) => handleChange(e)}
        ></input>

        <input
          name="startDate"
          placeholder="Start Date"
          type={"date"}
        //   value={state.startDate}
          onChange={(e) => handleChange(e)}
        ></input>

        <input
          name="endDate"
          placeholder="End Date"
          type={"date"}
        //   value={state.endDate}
          onChange={(e) => handleChange(e)}
        ></input>

        <input
          name="description"
          placeholder="Description"
        //   value={state.description}
          type="textarea"
          onChange={(e) => handleChange(e)}
        ></input>

        <input
          name="image"
          placeholder="Image"
          type={"file"}
          //value={state.image}
          onChange={(e) => handleImage(e)}
        ></input>

        <select
          name={"level"}
        //   value={state.level}
          onChange={(e) => handleChange(e)}
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option defaultValue="Difficult">Difficult</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Managedata;
