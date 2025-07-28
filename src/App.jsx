import React from 'react';
import InputForm from "./components/inputForm.jsx";
import MessegeContent from "./components/messegeContent.jsx";

function App() {

  const [value, setValue] = React.useState('');

  const [messeges, setMesseges] = React.useState([]);


  async function handleEnter (e){
    e.preventDefault();
    if (!value.trim()) return;

    const newMessege = {
      id: messeges.length + 1,
      label: value,
      type: "user"
    };

    setMesseges(prev => [...prev, newMessege]);
    setValue("");

    try {

      const res = await fetch('http://localhost:3000/ask', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({message: newMessege.label})
      });

      if (!res.ok) {
        throw new Error(data.error || 'Что-то пошло не так');
      }

      const data = await res.json();
      console.log(data.reply) ;

      const newMessege1 = {
        id: messeges.length + 1,
        label: data.reply,
        type: "ai"
      };

      setMesseges(prev => [...prev, newMessege1]);

    }catch (err){
      console.error('Ошибка:', err.message);
    }


  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (<div className={"bg-neutral-900"}>
      <div className="relative w-[60%] m-auto h-screen text-white p-4">
        <MessegeContent messeges={messeges}/>
        <InputForm handleEnter={handleEnter} value={value} handleChange={handleChange}/>
      </div>

    </div>

  )
}

export default App;
