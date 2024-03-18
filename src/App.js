import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import routes from "./routes";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            );
          })}
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
