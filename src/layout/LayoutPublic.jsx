import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
  return (
    <>
      <main className="container">
        <Outlet />
      </main>
      <footer className="container text-center">Footer</footer>
    </>
  );
};

export default LayoutPublic;
