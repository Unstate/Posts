import { BrowserRouter } from "react-router-dom";
import AppRoute from "./AppRoute";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col items-center gap-6 bg-slate-900 p-7 text-white">
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </div>
  );
};

export default App;
