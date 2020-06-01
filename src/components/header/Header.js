import React from 'react';
import './Header.scss';

import About from './about/About';
import Audio from './audio/Audio';

import { Button } from 'antd';

function Header() {
	return (
		<div className="header font d-flex justify-content-between align-items-center">
			<div className="font">
				<About />
			</div>
			<div className="d-flex align-items-center h-100">
				<img alt="img" className="header__logo" src={require('../../assets/logoorg.png')} />

				<h3 className="p-0 m-0 header__logo-text">
					<b>WEATHER</b>
				</h3>
			</div>
			<div>
				<Audio />
			</div>
		</div>
	);
}

export default Header;
