import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";

const ProtectedRoute = ({ children }) => {
  return auth.currentUser ? children : <Navigate to="/" />;
};

export default ProtectedRoute;