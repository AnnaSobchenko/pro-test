import "./App.css";
import { Suspense } from "react";
// import { Switch } from "react-router-dom";
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
      <header className="App-header"></header>
      <AppBar />
      <Suspense fallback={<Loader />}>
        {/* <Switch> */}
          <PublicRoute path="/auth" redirectTo="/" restricted>
            <AuthPage />
          </PublicRoute>

          <PrivateRoute path="/" redirectTo="/auth">
            <MainPage />
          </PrivateRoute>
          <PrivateRoute path="/test" redirectTo="/auth">
            <TestPage />
          </PrivateRoute>
          <PrivateRoute path="/result" redirectTo="/auth">
            <ResultPage />
          </PrivateRoute>
          <PrivateRoute path="/materials" redirectTo="/auth">
            <MaterialsPage />
          </PrivateRoute>
          <PrivateRoute path="/contacts" redirectTo="/auth">
            <ContactsPage />
          </PrivateRoute>

          <RedirectNew />
        {/* </Switch> */}
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
