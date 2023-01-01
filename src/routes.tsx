import { Home, LoginPage, RegistrationRequest } from "./pages";

import { pageNames } from "./constant";

const routes: { path: string; element: JSX.Element }[] = [
  { path: pageNames.registrationRequest, element: <RegistrationRequest /> },
  { path: pageNames.home, element: <Home /> },
  { path: pageNames.login, element: <LoginPage /> },
];

export default routes;
