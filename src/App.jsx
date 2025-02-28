import Router from "./router";
import { Toaster } from "sonner";
import { BrowserRouter } from "react-router-dom";
import "./app.css";
import DynamicFavicon from "./components/DynamicFavicon/DynamicFavicon";
function App() {
  return (
    <>
      <DynamicFavicon />
      <Toaster richColors />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;