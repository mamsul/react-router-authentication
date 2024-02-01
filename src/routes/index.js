import AboutPage from "../pages/About";
import { DashboardPage } from "../pages/Dashboard";
import FeaturesPage from "../pages/Features";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import PricingPage from "../pages/Pricing";
import ProfilePage from "../pages/Profile";
import SettingsPage from "../pages/Settings";

export const publicRoutes = [
  {
    name: "Home",
    path: "/",
    element: HomePage,
  },
  {
    name: "About",
    path: "/about",
    element: AboutPage,
  },
  {
    name: "Features",
    path: "/features",
    element: FeaturesPage,
  },
  {
    name: "Pricing",
    path: "/pricing",
    element: PricingPage,
  },
  {
    name: "Login",
    path: "/login",
    element: LoginPage,
  },
];

export const protectedRoutes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    element: DashboardPage,
  },
  {
    name: "Profile",
    path: "/dashboard/profile",
    element: ProfilePage,
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    element: SettingsPage,
  },
];
