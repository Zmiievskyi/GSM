import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../features/Loader";
import { Header } from "../components/Header";

export const Layout = () => {
  return (
    <>
      <Header  />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
