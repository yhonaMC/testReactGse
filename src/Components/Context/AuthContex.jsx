import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  browserSessionPersistence,
  setPersistence,
} from "firebase/auth";
import { auth } from "../../firebase";
export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const singUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const persistense = () => setPersistence(auth, browserSessionPersistence);

  const logout = () => {
    signOut(auth);
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
    });
  }, []);

  const data = {
    singUp,
    login,
    user,
    logout,
    loginWithGoogle,
    resetPassword,
    persistense,
  };
  return <authContext.Provider value={data}>{children}</authContext.Provider>;
};
