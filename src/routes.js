import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";

const routes = [
  {
    path: "/",
    component: LoginPage,
  },
  {
    path: "/main",
    component: HomePage,
  },
  {
    path: "/join",
    component: JoinPage,
  },
];

export default routes;
