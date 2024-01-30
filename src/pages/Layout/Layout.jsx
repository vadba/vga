import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer.jsx";
import { styled } from "@mui/system";

const Layout = () => {
  let { pathname } = useLocation();

  const OutInt = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    margin: "0 auto",
    textAlign: "center",
    minHeight: "inherit",
    background:
      pathname === "/sing-up" || pathname === "/sing-in"
        ? `${theme.palette.background.default}`
        : "white",
  }));

  return (
    <OutInt>
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </OutInt>
  );
};

export default Layout;
