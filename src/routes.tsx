import { Home, RegistrationRequest } from "./pages";

import { pageNames } from "./constant";

const routes: { path: string; element: JSX.Element }[] = [
  { path: pageNames.registrationRequest, element: <RegistrationRequest /> },
  { path: pageNames.home, element: <Home /> },
];

export default routes;
