import "./styles.css";
import react, { useState } from "react";

const totalList = [
  { id: 1, name: "Arabayı Yıka ", status: false },
  { id: 2, name: "Köpeği Gezdir ", status: false },
  { id: 3, name: "Bahçeyi Sula", status: true }
];

function App() {
  const [list, setList] = useState(totalList);
  const [title, setTitle] = useState("");

  const addButton = (add) => {
    setList([...list, { id: Date.now(), name: add, status: false }]);
    setTitle("");
  };

  const completedList = (id) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  const deleteCompleted = () => {
    setList(list.filter((item) => item.status === false));
  };

  return (
    <div className="App">
      <h1>YAPILACAKLAR LİSTESİ</h1>
      <div className="add_form">
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={() => addButton(title)}>EKLE</button>
      </div>
      <div className="list">
        {list.map((item) => (
          <div
            key={item.id}
            onClick={() => completedList(item.id)}
            className={item.status ? "completed" : ""}
          >
            {item.name}
          </div>
        ))}

        <div />
      </div>
      <button onClick={() => deleteCompleted()} className="clear">
        TAMAMLANANLARI TEMİZLE
      </button>
    </div>
  );
}
export default App;
