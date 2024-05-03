import User from "~/pages/Admin/User";

const { default: routes } = require("~/config/routes");
const { default: Login } = require("~/pages/Login");
const { default: Role } = require("~/pages/Admin/Users");

const publicRoutes = [
  {
    path: routes.login,
    Component: Login,
  },
  {
    path: routes.users,
    Component: Role,
  },
  {
    path: routes.user,
    Component: User,
  }
];

export { publicRoutes };
