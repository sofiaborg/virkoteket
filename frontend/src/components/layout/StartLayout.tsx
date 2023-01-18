import { Outlet } from "react-router";

export const StartLayout = () => {
  return (
    <div className="bg-[#edeaea] h-full flex justify-center items-center">
      <section>
        <main>
          <Outlet></Outlet>
        </main>
      </section>
    </div>
  );
};
