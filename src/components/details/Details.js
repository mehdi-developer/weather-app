import React from 'react';
import { motion } from 'framer-motion';
function Details(props) {
	return (
		<div className="d-flex justify-content-center">
			<div>
				{props.weather === 'Clear' ? (
					<motion.img
						alt="img"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ opacity: { duration: '2' } }}
						exit={{ opacity: 0 }}
						className="d-block img"
						style={{
							width: '100px',
							filter: 'drop-shadow(0px 0px 13px #C7C7C7)'
						}}
						src={require(`../../assets/left/clear.png`)}
					/>
				) : null}
				{props.weather === 'Smoke' ? (
					<motion.img
						alt="img"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ opacity: { duration: '2' } }}
						exit={{ opacity: 0 }}
						className="d-block img"
						style={{
							width: '100px',
							filter: 'drop-shadow(0px 0px 13px #C7C7C7)'
						}}
						src={require(`../../assets/left/smoke.png`)}
					/>
				) : null}
				{props.weather === 'Haze' ? (
					<motion.img
						alt="img"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ opacity: { duration: '2' } }}
						exit={{ opacity: 0 }}
						className="d-block img"
						style={{
							width: '100px',
							filter: 'drop-shadow(0px 0px 13px #C7C7C7)'
						}}
						src={require(`../../assets/left/haze.png`)}
					/>
				) : null}
				{props.weather === 'Clouds' ? (
					<motion.img
						alt="img"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ opacity: { duration: '2' } }}
						exit={{ opacity: 0 }}
						className="d-block img"
						style={{
							width: '100px',
							filter: 'drop-shadow(0px 0px 13px #C7C7C7)'
						}}
						src={require(`../../assets/left/cloud.png`)}
					/>
				) : null}
				{props.weather === 'Rain' ? (
					<motion.img
						alt="img"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ opacity: { duration: '2' } }}
						exit={{ opacity: 0 }}
						className="d-block img"
						style={{
							width: '100px',
							filter: 'drop-shadow(0px 0px 13px #C7C7C7)'
						}}
						src={require(`../../assets/left/rain.png`)}
					/>
				) : null}
				{props.weather === 'Snow' ? (
					<motion.img
						alt="img"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ opacity: { duration: '2' } }}
						exit={{ opacity: 0 }}
						className="d-block img"
						style={{
							width: '100px',
							filter: 'drop-shadow(0px 0px 13px #C7C7C7)'
						}}
						src={require(`../../assets/left/snow.png`)}
					/>
				) : null}
				{props.weather === 'Thunderstorm' ? (
					<motion.img
						alt="img"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ opacity: { duration: '2' } }}
						exit={{ opacity: 0 }}
						className="d-block img"
						style={{
							width: '100px',
							filter: 'drop-shadow(0px 0px 13px #C7C7C7)'
						}}
						src={require(`../../assets/left/thunderstorm.png`)}
					/>
				) : null}
				{props.weather === 'Mist' ? (
					<motion.img
						alt="img"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ opacity: { duration: '2' } }}
						exit={{ opacity: 0 }}
						className="d-block img"
						style={{
							width: '100px',
							filter: 'drop-shadow(0px 0px 13px #C7C7C7)'
						}}
						src={require(`../../assets/left/mist.png`)}
					/>
				) : null}
				<h2 style={{ color: 'white' }} className="text-center m-0 p-0 mt-3 pb-3">
					{props.temp} °C
				</h2>
			</div>
			<div className="d-flex flex-column ml-4 mt-2">
				<div className="text-start">
					<h3 style={{ color: 'white' }} className="mobilee">
						{props.city} - {props.country}
					</h3>
					<h3 style={{ color: 'white' }} className="mobilee">
						{props.date(new Date())}
					</h3>
				</div>
				<div className="text-center mobile">
					<h2 style={{ color: 'white' }} className="p-0 mt-3">
						{props.weather}
					</h2>
				</div>
			</div>
		</div>
	);
}

export default Details;
