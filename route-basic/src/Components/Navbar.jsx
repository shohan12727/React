import { Link } from 'react-router'; 
const Navbar = () => {
  

  return (
    <div>
      <nav>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/login"><li>Login</li></Link>
        <Link to="/contacts"><li>Contacts</li></Link>
      </nav>
    </div>
  );
};

export default Navbar;