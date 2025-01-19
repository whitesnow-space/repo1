import { BrowserRouter } from "react-router-dom";

import CustomRoutes from "./routes";
import CustomNavbar from "./components/custom/navbar";
import Footer from "./components/custom/footer";
import "./App.scss";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CustomNavbar />
        <CustomRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
