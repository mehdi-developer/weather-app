import React, { useEffect, useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import axios from 'axios';
// Components
import Header from './components/header/Header';
import MySearch from './components/search/MySearch';
import Details from './components/details/Details';
import MoreDetails from './components/moredetails/MoreDetails';

import { motion } from 'framer-motion';

import AddToHomescreen from 'react-add-to-homescreen';

const api = {
	key: `6dcaae0ccbdb2edf77a946b61d5f2849`,
	base: `https://api.openweathermap.org/data/2.5/`
};

function App() {
	const [ weather, setWeather ] = useState({});

	const dateBuilder = (d) => {
		let days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

		let day = days[d.getDay()];
		let date = d.getDate();

		return `${day} ${date} th`;
	};

	useEffect(() => {
		axios.get(`${api.base}weather?q=manchester&units=metric&APPID=${api.key}`).then((res) => {
			setWeather(res);
		});
	}, []);

	const getValue = (e) => {
		axios.get(`${api.base}weather?q=${e}&units=metric&APPID=${api.key}`).then((res) => {
			setWeather(res);
		});
	};

	const handleAddToHomescreenClick = () => {
		alert(`
		  1. Open Share menu
		  2. Tap on "Add to Home Screen" button`);
	};

	return (
		<div className="wrapper">
			<div
				className={
					typeof weather.data !== 'undefined' ? weather.data.weather[0].main === 'Clear' ? (
						'App clear font'
					) : weather.data.weather[0].main === 'Haze' ? (
						'App haze font'
					) : weather.data.weather[0].main === 'Rain' ? (
						'App rain font'
					) : weather.data.weather[0].main === 'Mist' ? (
						'App mist font'
					) : weather.data.weather[0].main === 'Snow' ? (
						'App snow font'
					) : weather.data.weather[0].main === 'Thunderstorm' ? (
						'App thunder font'
					) : weather.data.weather[0].main === 'Smoke' ? (
						'App smoke font'
					) : weather.data.weather[0].main === 'Clouds' ? (
						'App clouds font'
					) : (
						'App normal font'
					) : (
						'App normal font'
					)
				}
			>
				<Header />
				<div className="line" />
				<AddToHomescreen onAddToHomescreenClick={handleAddToHomescreenClick} />
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ opacity: { duration: '.5' } }}
					className="d-flex justify-content-center mt-4"
				>
					<MySearch inputValue={getValue} />
				</motion.div>
				<div className="container mt-5">
					<div className="row">
						{typeof weather.data !== 'undefined' ? (
							<React.Fragment>
								<motion.div
									initial={{ x: '-200px', opacity: 0 }}
									animate={{ x: '0px', opacity: 1 }}
									transition={{ x: { duration: '.5' }, opacity: { duration: '1' } }}
									className="col-lg-6 col-md-6 col-sm-12 col-12"
								>
									<Details
										temp={Math.round(weather.data.main.temp)}
										city={weather.data.name}
										country={weather.data.sys.country}
										date={dateBuilder}
										weather={weather.data.weather[0].main}
									/>
								</motion.div>
								<motion.div
									initial={{ x: '200px', opacity: 0 }}
									animate={{ x: '0px', opacity: 1 }}
									transition={{ x: { duration: '.5' }, opacity: { duration: '1' } }}
									className="col-lg-6 col-md-6 col-sm-12 col-12"
								>
									<MoreDetails
										temp={Math.round(weather.data.main.temp)}
										temp_max={Math.round(weather.data.main.temp_max)}
										temp_min={Math.round(weather.data.main.temp_min)}
										wind={weather.data.wind.speed}
										pressure={weather.data.main.pressure}
										humidity={weather.data.main.humidity}
									/>
								</motion.div>
							</React.Fragment>
						) : (
							<div className="d-flex flex-column align-items-center w-100 font">
								<img alt="img" style={{ width: '100px' }} src={require('./assets/wifi.png')} />
								<p className="mt-3">Please check your internet connection</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
