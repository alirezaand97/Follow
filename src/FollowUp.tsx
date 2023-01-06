import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NotFound } from "./pages";
import routes from "./routes";

const Marketing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route {...route} key={route.path} />
        ))}
        <Route element={<NotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default Marketing;
