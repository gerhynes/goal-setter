import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">GoalSetter</Link>
      </div>
      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt /> Log in
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUser /> Sign up
          </Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;
