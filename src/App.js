import logo from './logo.svg';
import './App.css';
import {NextUIProvider} from "@nextui-org/react";

function App() {
  return (
    <div className="App">
     <NextUIProvider>
      <h1>Hello</h1>
     </NextUIProvider>
    </div>
  );
}

export default App;
