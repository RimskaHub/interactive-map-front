import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '@/pages/Home';
import OmniSearch from '@/pages/OmniSearch';

import { SearchDrawerProvider } from '@/contexts/SearchDrawerContext';

function App() {
  return (
    <SearchDrawerProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/omnisearch" element={<OmniSearch />} />
        </Routes>
      </BrowserRouter>
    </SearchDrawerProvider>
  );
}

export default App;
