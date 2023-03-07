import { Home, LoginPage, RegistrationRequest } from "./pages";

import AuthCenterOperational from "./pages/auth_center_operational";
import BranchesSetting from "./pages/branches_setting";
import PishkhanList from "./pages/pishkhan_list";
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
  {
    path: pageNames.registration.branchSetting,
    element: <BranchesSetting />,
  },
  {
    path: pageNames.registration.pishkhanList,
    element: <PishkhanList />,
  },
  { path: pageNames.home, element: <Home /> },
  { path: pageNames.auth.login, element: <LoginPage /> },
];

export default routes;
