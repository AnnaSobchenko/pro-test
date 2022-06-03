import "./App.scss";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<MainPage />} />
            <Route element={<PublicRoute />}>
              <Route path="auth" element={<AuthPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="test" element={<TestPage />} />
              <Route path="result" element={<ResultPage />} />
              <Route path="materials" element={<MaterialsPage />} />
              <Route path="contacts" element={<ContactsPage />} />
            </Route>
            <Route path="*" element={<RedirectNew to="/" replace />} />
          </Route>
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
