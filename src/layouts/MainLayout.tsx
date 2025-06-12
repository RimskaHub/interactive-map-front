import Navbar from '@/components/navbar/Navbar';
import SearchDrawer from '@/components/search-drawer/SearchDrawer';

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer>bla</footer>
      <SearchDrawer />
    </>
  );
};

export default MainLayout;
