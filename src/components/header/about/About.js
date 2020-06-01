import React, { useState } from 'react';

import { Button, Modal } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

function About() {
	const [ visible, setVisible ] = useState(false);

	const showModal = () => {
		setVisible(true);
	};

	const handleOk = (e) => {
		setVisible(true);
	};

	const handleCancel = (e) => {
		setVisible(false);
	};
	return (
		<div>
			<QuestionCircleOutlined onClick={showModal} className="header__about" />
			<Modal
				title="About"
				visible={visible}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[
					<Button key="back" onClick={handleCancel}>
						OK
					</Button>
				]}
			>
				<p className="m-0 p-0">
					Weather app made with ❤ by
					<a
						className="ml-1 mr-1"
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.linkedin.com/in/mahdifaraij/"
					>
						Mehdi Faraji
					</a>
					. To see my other projects please checkout my
					<a
						className="ml-1 mr-1"
						target="_blank"
						href="https://github.com/mehdi-developer"
						rel="noopener noreferrer"
					>
						Github
					</a>
					profile . You can also contact me via
					<a
						className="ml-1 mr-1"
						target="_blank"
						rel="noopener noreferrer"
						href="mailto:mahdifarajideveloper@gmail.com?subject=Weather App"
					>
						Email
					</a>
					. Thanks for your time and have a Nice day .
				</p>
			</Modal>
		</div>
	);
}

export default About;
