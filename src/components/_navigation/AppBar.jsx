import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const AppBar = () => {
	return (
		<>
			<header className="App-header">Header</header>
			<Outlet />
			<Footer />
		</>
	);
};

export default AppBar;
