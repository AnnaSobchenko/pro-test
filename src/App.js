import "./App.scss";
import { Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PublicRoute from "./components/_routs/PublicRoute";
import PrivateRoute from "./components/_routs/PrivatRoute";
import TestPage from "./pages/TestPage/TestPage";
import ResultPage from "./pages/ResultPage/ResultPage";
import RedirectNew from "./components/_navigation/RedirectNew";
import AuthPage from "./pages/AuthPage/AuthPage";
import Loader from "./components/_shared/Loader/Loader";
import MainPage from "./pages/MainPage/MainPage";
import MaterialsPage from "./pages/MaterialsPage/MaterialsPage";
import ContactsPage from "./pages/Contacts/ContactsPage";
import AppBar from "./components/_navigation/AppBar";
import Footer from "./components/_navigation/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getNewTokens } from "./redux/auth/authOperations";
import { getIsLoggedIn, getRefreshToken } from "./redux/auth/authSelector";

function App() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const stateRefreshToken = useSelector(getRefreshToken);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn && !stateRefreshToken) dispatch(getNewTokens());
  }, [dispatch, isLoggedIn, stateRefreshToken]);

  return (
    <div className="content">
      <div>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<AppBar />}>
              <Route
                index
                element={isLoggedIn ? <MainPage /> : <Navigate to="auth" />}
              />
              <Route path="contacts" element={<ContactsPage />} />
              <Route element={<PublicRoute />}>
                <Route path="auth" element={<AuthPage />} />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path="test/:type" element={<TestPage />} />
                <Route path="result" element={<ResultPage />} />
                <Route path="materials" element={<MaterialsPage />} />
                {/* <Route path="contacts" element={<ContactsPage />} /> */}
              </Route>
              <Route path="*" element={<RedirectNew to="/" replace />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
