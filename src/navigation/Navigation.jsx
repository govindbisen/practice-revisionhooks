import { useAuth } from '../react-hooks/AuthProvider';

function Navigation() {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <div>
      {isLoggedIn && (
        <li>
          <a>link 1 </a>
        </li>
      )}
      {isLoggedIn && (
        <li>
          <a> link 2 </a>
        </li>
      )}
      {!isLoggedIn && (
        <li>
          <a> link 3 </a>
        </li>
      )}
      <button onClick={login}>login</button>
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default Navigation;
