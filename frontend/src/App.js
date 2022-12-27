import './App.css';
import Login from './pages/auth/login';
import Registration from './pages/auth/register';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import BlogList from './components/BlogList/BlogList';

function App() {
  return (
    <>
      <Navbar />
      <BlogList />
      <Footer />
      {/* <Login /> */}
      {/* <Registration /> */}

    </>
  );
}

export default App;
