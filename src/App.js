import { BrowserRouter } from "react-router-dom";

import CustomRoutes from "./routes";
import CustomNavbar from "./components/custom/navbar";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <CustomRoutes />
    </BrowserRouter>
  );
};

export default App;
