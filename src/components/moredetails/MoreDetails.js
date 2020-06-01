import React from 'react';
import './MoreDetails.scss';
function MoreDetails(props) {
	return (
		<div className="d-flex justify-content-around mt-3">
			<div className="mobile-div-one">
				<h5 style={{ color: 'white' }} className="m-0 p-0">
					<p className="p-0 m-0 pb-2 mobile">Temperature</p>
					<img alt="img" className="icon pr-2" src={require('../../assets/right/temp.png')} />
					{props.temp} °C
				</h5>
				<h5 style={{ color: 'white' }} className="m-0 p-0 mt-3">
					<p className="p-0 m-0 pb-2 mobile">Max Temperature</p>
					<img alt="img" className="icon pr-2" src={require('../../assets/right/maxtemp.png')} />
					{props.temp_max} °C
				</h5>
				<h5 style={{ color: 'white' }} className="m-0 p-0 mt-3">
					<p className="p-0 m-0 pb-2 mobile">Min Temperature</p>
					<img alt="img" className="icon pr-2" src={require('../../assets/right/mintemp.png')} />
					{props.temp_min} °C
				</h5>
			</div>
			<div className="mobile-div">
				<h5 style={{ color: 'white' }} className="m-0 p-0">
					<p className="p-0 m-0 pb-2 mobile">Wind Speed</p>
					<img alt="img" className="icon pr-2" src={require('../../assets/right/wind.png')} />
					{props.wind} m/s
				</h5>
				<h5 style={{ color: 'white' }} className="m-0 p-0 mt-3">
					<p className="p-0 m-0 pb-2 mobile">Pressure</p>
					<img alt="img" className="icon pr-2" src={require('../../assets/right/pressure.png')} />
					{props.pressure} mmHg
				</h5>
				<h5 style={{ color: 'white' }} className="m-0 p-0 mt-3">
					<p className="p-0 m-0 pb-2 mobile">Humidity</p>
					<img alt="img" className="icon pr-2" src={require('../../assets/right/humidity.png')} />
					{props.humidity} %
				</h5>
			</div>
		</div>
	);
}

export default MoreDetails;
