import React from 'react';
import InputForm from "./components/inputForm.jsx";
import MessegeContent from "./components/messegeContent.jsx";

function App() {

  const [value, setValue] = React.useState('');

  const [messeges, setMesseges] = React.useState([]);

  const handleEnter = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    const newMessege = {
      id: messeges.length + 1,
      label: value,
      type: "user"
    };

    setMesseges(prev=> [...prev, newMessege]);
    setValue("");
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (<div className={"bg-neutral-900"}>
      <div className="relative w-[60%] m-auto h-screen text-white p-4">
        <MessegeContent messeges={messeges} />
        <InputForm handleEnter={handleEnter} value={value} handleChange={handleChange}/>
      </div>

    </div>

  )
}

export default App
