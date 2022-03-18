import { Routes, Route } from 'react-router-dom';

import FolderPage from './containers/FolderPage';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/folder/*' element={<FolderPage />} />
    </Routes>
  );
}

export default App;
