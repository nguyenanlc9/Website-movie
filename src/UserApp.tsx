import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AdminApp from "./AdminApp"; // Import AdminApp
import {
  Header,
  Footer,
  SideBar,
  VideoModal,
  ScrollToTop,
  Loader,
} from "@/common";

import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";

//Lazy load các trang
const Catalog = lazy(() => import("./pages/Catalog"));
const Home = lazy(() => import("./pages/Home"));
const Detail = lazy(() => import("./pages/Detail"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Define admin routes constant
const ADMIN_ROUTES = [
  { path: "/admin/*", element: <AdminApp /> }, // AdminApp được import vào đây
];

const UserApp = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      <VideoModal />
      {/* Render SideBar chỉ nếu không phải là route admin */}
      {!isAdminRoute && <SideBar />}

      <Header />
      <main className="lg:pb-14 md:pb-4 sm:pb-2 xs:pb-1 pb-0">
        <ScrollToTop>
          <Suspense fallback={<Loader />}>
            <Routes>
              {/* Route của User*/}
              <Route path="/" element={<Home />} />
              <Route path="/:category/:id" element={<Detail />} />
              <Route path="/:category" element={<Catalog />} />

              {/* Route của Admin từ constant ADMIN_ROUTES */}
              {ADMIN_ROUTES.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}

              {/* Route cho NotFound */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ScrollToTop>
      </main>

      {/* Không hiển thị Footer khi đang ở route admin */}
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default UserApp;
