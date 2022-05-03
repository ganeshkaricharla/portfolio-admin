import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import TopBar from './components/TopBar/TopBar';
import Homepage from './pages/HomePage/HomePage';
import BirthdayPage from './pages/BirthdayPage/BirthdayPage';
import TemplatePage from './pages/TemplatePage/TemplatePage';
import MessagePage from './pages/MessagePage/MessagePage';

function App() {
	const[sidebar,setSideBar] = useState(false);
	return (
		<div className="app-container">
			<Router>
				<TopBar sidebar={setSideBar}/>
				<section className='app-section'>
					<SideBar sidebar={sidebar} sidebarclose ={setSideBar}/>
					<Routes>
						<Route exact path='/' element={<Homepage />}/>
						<Route exact path='/birthdays' element={<BirthdayPage />}/>
						<Route exact path='/templates' element={<TemplatePage />}/>
						<Route exact path='/messages' element={<MessagePage />}/>
					</Routes>
				</section>
			</Router>
		</div>
	);
}

export default App;
