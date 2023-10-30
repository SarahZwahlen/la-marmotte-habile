import { RouterProvider } from "react-router-dom";
import "./styles.scss";
import router from "./routing/routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
