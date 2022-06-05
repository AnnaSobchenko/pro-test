import { NavLink, Outlet } from "react-router-dom";
import Footer from "../../components/_navigation/Footer";

const setActive = ({ isActive }) => (isActive ? "App-active-link" : "");

const AppBar = () => {
	return (
		<>
			{/* <header className="App-header">Header</header> */}
			<header>
				<NavLink to="/" className={setActive}>
					Home
				</NavLink>
				<NavLink to="/materials" className={setActive}>
					Materials
				</NavLink>
				<NavLink to="/contacts" className={setActive}>
					Contacts
				</NavLink>
			</header>
			<main className="App-header">
				{/* Лучше сделать класс Container */}
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default AppBar;
