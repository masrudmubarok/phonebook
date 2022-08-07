import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ContactList from './component/ContactList';
import AddContact from './component/AddContact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactList/>}/>
        <Route path="add" element={<AddContact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
