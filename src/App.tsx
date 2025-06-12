import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '@/pages/Home';

import { SearchDrawerProvider } from '@/contexts/SearchDrawerContext';

function App() {
  return (
    <SearchDrawerProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </SearchDrawerProvider>
  );
}

export default App;
