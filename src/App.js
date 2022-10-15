import { useState } from "react";
import "./App.css";
import Managedata from "./components/Managedata";
import Display from "./components/Display";
function App() {
  const [data, setData] = useState([]);
  const addData = (state) => {
    const { name, startDate, endDate, description, image, level } = state;
    setData((st) => [
      ...data,
      {
        id: st.length + 1,
        name: name,
        startDate: startDate,
        endDate: endDate,
        description: description,
        image: image,
        level: level,
      },
    ]);
    console.log("data in main function is:", data);
  };
  return (
    <div className="App">
      <Managedata addData={addData}></Managedata>

      {Object.keys(data).length !== 0 ? <Display data={data}></Display> : ""}


    </div>
  );
}

export default App;
