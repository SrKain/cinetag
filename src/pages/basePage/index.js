import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/header";
import FavProvider from "context/fav";
import { Outlet } from "react-router-dom";

export default function BasePage() {
  return (
    <main>
      <FavProvider>
        <Header />
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </FavProvider>
    </main>
  );
}
