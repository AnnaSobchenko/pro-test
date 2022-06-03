import {Outlet} from 'react-router-dom'

const  AppBar = () => {
    return ( <>
    <header className="App-header">AppBar</header>
<Outlet />
    </>  );
    
}
 
export default AppBar ;