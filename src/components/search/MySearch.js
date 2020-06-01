import React from 'react';

import { Input } from 'antd';

const { Search } = Input;

function MySearch(props) {
	const handleValue = (e) => {
		props.inputValue(e);
	};

	return (
		<div style={{ width: '220px' }}>
			<Search placeholder="Enter City Name ..." onSearch={(value) => handleValue(value)} />
		</div>
	);
}

export default MySearch;
