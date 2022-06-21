import projects from './mock/data.json';
import { useState } from 'react';

import data from './mock/mock.js';
import {
	Header,
	NavBar,
	About,
	SectionHeader,
	Projects,
	Stack,
	Socials,
	Footer,
} from './components';

const Root = () => {
	// Hooks
	const [loadMore, setLoadMore] = useState(2);
	const elements = projects.projects;
	const handleLoadMore = () => {
		setLoadMore((prevState) => (prevState < elements.length ? prevState + 2 : prevState));
	};

	// Render
	return (
		<div className='wrapper'>
			<div className='container'>
				{/* Navbar */}
				<NavBar />

				<div className='divider' />

				{/* Header */}
				<Header />

				{/* HeroImage */}
				<div className='hero-image'>
					<div className='hero-image-container' data-scroll data-scroll-speed='2'>
						<img src='hero-image.jpg' alt='' />
					</div>
				</div>

				<SectionHeader title='about' order='/001' />
				{/* <div className='whitespace' />

				<div className='section-header'>
					<div className='section-header-container'>
						<div className='section-title'>about</div>
						<div className='section-order'>/001</div>
					</div>
				</div>

				<div className='divider' /> */}

				{/* About */}
				<About />

				<div className='whitespace' />

				<div className='section-header'>
					<div className='section-header-container'>
						<div className='section-title'>projects</div>
						<div className='section-order'>/002</div>
					</div>
				</div>

				<div className='divider' />

				{/* Projects */}
				<Projects />

				<div className='whitespace' />

				<div className='section-header'>
					<div className='section-header-container'>
						<div className='section-title'>stack</div>
						<div className='section-order'>/003</div>
					</div>
				</div>

				<div className='divider' />

				{/* Stack */}
				<Stack />

				<div className='whitespace' />

				<div className='section-header'>
					<div className='section-header-container'>
						<div className='section-title'>socials</div>
						<div className='section-order'>/004</div>
					</div>
				</div>

				<div className='divider'></div>

				{/* Socials */}
				<Socials />

				<div className='divider'></div>

				{/* Footer */}
				<Footer />
				<br />
			</div>
		</div>
	);
};

export default Root;
