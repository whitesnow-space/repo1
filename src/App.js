import { BrowserRouter } from "react-router-dom";

import CustomRoutes from "./routes";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <CustomRoutes />
    </BrowserRouter>
  );
};

export default App;
