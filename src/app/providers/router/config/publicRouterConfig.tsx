import { RouteProps } from "react-router-dom";
import { MainPageAsync as MainPage } from "../../../../pages/MainPage/MainPage.async";

export enum publicRouter {
  MAIN = "main",
}

export const publicRoutePath: Record<publicRouter, string> = {
  [publicRouter.MAIN]: "/",
};

export const publicRouterConfig: Record<publicRouter, RouteProps> = {
  [publicRouter.MAIN]: { path: publicRoutePath.main, element: <MainPage /> },
};
