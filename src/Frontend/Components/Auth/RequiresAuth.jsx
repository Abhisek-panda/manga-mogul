import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../..";

const RequiresAuth = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return (
    <div>
      {isLoggedIn ? (
        <>{children}</>
      ) : (
        <Navigate to={"/login"} state={{ from: location }} />
      )}
    </div>
  );
};

export default RequiresAuth;
