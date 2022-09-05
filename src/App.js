import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/layout';
import Home from './components/Home/home';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Dashboard from './components/Dashboard/dashboard';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
