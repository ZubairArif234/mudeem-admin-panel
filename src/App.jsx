import Router from "./router";
import { Toaster } from "sonner";
import { BrowserRouter } from "react-router-dom";
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
