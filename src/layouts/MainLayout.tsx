import Navbar from '@/components/navbar/Navbar';

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer>bla</footer>
    </>
  );
};

export default MainLayout;
