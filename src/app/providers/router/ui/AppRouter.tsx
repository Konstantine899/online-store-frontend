import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { publicRouterConfig } from "../config/publicRouterConfig";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route />
        {Object.values(publicRouterConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};
