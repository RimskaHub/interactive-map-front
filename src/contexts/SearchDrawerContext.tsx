import { createContext, useState, useCallback, useContext } from 'react';

interface ISearchDrawerContext {
  open: boolean;
  toggleOpen: () => void;
}

const SearchDrawerContext = createContext<ISearchDrawerContext>({
  open: false,
  toggleOpen: () => {},
});

export const SearchDrawerProvider = ({ children }: any) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <SearchDrawerContext.Provider value={{ open, toggleOpen }}>
      {children}
    </SearchDrawerContext.Provider>
  );
};

export const useSearchDrawerContext = () => {
  const context = useContext(SearchDrawerContext);
  if (context === undefined) {
    throw new Error('useSearchDrawer must be used within a SearchDrawerProvider');
  }
  return context;
};
