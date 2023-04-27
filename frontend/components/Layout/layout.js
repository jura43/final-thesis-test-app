import WineataNavbar from "../Navbar/navbar";

function Layout(props) {
  return (
    <>
      <WineataNavbar />
      {props.children}
    </>
  );
}

export default Layout;
