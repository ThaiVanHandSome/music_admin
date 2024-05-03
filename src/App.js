import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map(({path, Component}, index) => (
          <Route key={index} path={path} element={<Component />}/>
      ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
