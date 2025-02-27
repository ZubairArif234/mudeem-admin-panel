import Router from "./router";
import { Toaster } from "sonner";
import { BrowserRouter } from "react-router-dom";
import "./app.css";
function App() {
  return (
    <>
      <Toaster richColors />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;