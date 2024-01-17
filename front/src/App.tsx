import { RouterProvider } from "react-router-dom";
import "./styles.scss";
import router from "./routing/routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

function App() {
  library.add(fas);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
