import React from 'react';

const SectionHeader = ({ title, order }) => {
	return (
		<>
			<div className='whitespace'></div>
			<div className='section-header'>
				<div className='section-header-container'>
					<div className='section-title'>{title}</div>
					<div className='section-order'>{order}</div>
				</div>
			</div>
			<div className='divider' />
		</>
	);
};

export default SectionHeader;
