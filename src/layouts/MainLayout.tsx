import Navbar from '@/components/common/navbar/Navbar';
import { Footer } from '@/components/common//footer/Footer';
import SearchDrawer from '@/components/common//search-drawer/SearchDrawer';

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <SearchDrawer />
    </>
  );
};

export default MainLayout;
