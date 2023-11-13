import { RouteProps } from "react-router-dom";
import { MainPageAsync as MainPage } from "../../../pages/MainPage/MainPage.async";
import { AboutPageAsync as AboutPage } from "../../../pages/AboutPage/AboutPage.async";

export enum AppRouter {
  MAIN = "main",
  ABOUT = "about",
}

export const routePath: Record<AppRouter, string> = {
  [AppRouter.MAIN]: "/",
  [AppRouter.ABOUT]: "/about",
};

export const routerConfig: Record<AppRouter, RouteProps> = {
  [AppRouter.MAIN]: { path: routePath.main, element: <MainPage /> },
  [AppRouter.ABOUT]: { path: routePath.about, element: <AboutPage /> },
};
