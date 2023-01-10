import { Home, LoginPage, RegistrationRequest } from "./pages";

import AuthCenterOperational from "./pages/auth_center_operational";
import { pageNames } from "./constant";

const routes: { path: string; element: JSX.Element }[] = [
  {
    path: pageNames.registration.registrationRequests,
    element: <RegistrationRequest />,
  },
  {
    path: pageNames.registration.AuthCenterOperational,
    element: <AuthCenterOperational />,
  },
  { path: pageNames.home, element: <Home /> },
  { path: pageNames.auth.login, element: <LoginPage /> },
];

export default routes;
