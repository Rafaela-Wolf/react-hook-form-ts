import Form from "./components/Form";
import './index.css';

function App() {

  return (
    <div className="bg-zinc-100 min-h-screen w-full flex flex-col items-center gap-6 pt-8">
      <h1 className="font-bold text-lxl">Formulário</h1>
      <Form />
    </div>
  )
}

export default App;
