import './App.css';
import Login from './pages/auth/login';
import Registration from './pages/auth/register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './components/Blog';
import BlogList from './components/BlogList';

function App() {
  return (
    <>
      <Navbar />
      <BlogList />
      {/* <Login /> */}
      {/* <Registration /> */}
      <Footer />

    </>
  );
}

export default App;
