import { Outlet } from "react-router";
import { Footer } from "./footer";
import { Navigation } from "./navigation";

export const Layout = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <section>
        <main>
          <Outlet></Outlet>
        </main>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};
