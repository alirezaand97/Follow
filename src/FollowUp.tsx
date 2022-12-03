import { BrowserRouter, Route, Routes } from "react-router-dom";

import routes from "./routes";

const Marketing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route {...route} key={route.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Marketing;
