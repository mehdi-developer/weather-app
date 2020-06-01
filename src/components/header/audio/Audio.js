import React, { useEffect, useState } from 'react';

import { Howler, Howl } from 'howler';
import Music from '../../../assets/music/mp3.mp3';

function Audio() {
	const [ mute, setMute ] = useState(false);
	useEffect(() => {
		const mp3 = new Howl({ src: Music });
		mp3.play();
	}, []);
	useEffect(
		() => {
			Howler.volume(mute ? 0 : 1);
		},
		[ mute ]
	);

	return (
		<div>
			<img
				onClick={() => setMute(!mute)}
				alt="img"
				className="header__audio"
				src={require('../../../assets/mute.png')}
			/>
		</div>
	);
}

export default Audio;
