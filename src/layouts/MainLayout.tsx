import Navbar from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import SearchDrawer from '@/components/search-drawer/SearchDrawer';

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
