import { Outlet } from "react-router";

export const StartLayout = () => {
  return (
    <div className="bg-hero bg-cover h-screen flex justify-center items-center">
      <section>
        <main>
          <Outlet></Outlet>
        </main>
      </section>
    </div>
  );
};
