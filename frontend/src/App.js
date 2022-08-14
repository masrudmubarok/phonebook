import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ContactList from './component/ContactList';
import AddContact from './component/AddContact';
import EditContact from './component/EditContact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactList/>}/>
        <Route path="add" element={<AddContact/>}/>
        <Route path="edit/:id" element={<EditContact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
