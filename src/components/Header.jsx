import React from 'react';
import data from '../mock/mock';
const Header = () => {
	return (
		<div className='header'>
			<div className='header-container'>
				<h1>
					{data.name}
					<br />
					Frontend
					<br />
					<span>&nbsp;Developer</span>
				</h1>
			</div>
		</div>
	);
};

export default Header;
