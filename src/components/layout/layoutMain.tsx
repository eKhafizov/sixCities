import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';

function LayoutMain() : JSX.Element {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default LayoutMain;
