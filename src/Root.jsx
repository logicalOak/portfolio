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
	// Render
	return (
		<div className='wrapper'>
			<div className='container'>
				{/* Navbar */}
				<NavBar />

				{/* Header */}
				<Header />

				{/* HeroImage */}
				<div className='hero-image'>
					<div className='hero-image-container' data-scroll data-scroll-speed='2'>
						<img src='hero-image.jpg' alt='' />
					</div>
				</div>

				{/* About */}
				<SectionHeader title='about' order='/001' />
				<About />

				{/* Projects */}
				<SectionsHeader title='projects' order='/002' />
				<Projects />

				{/* Stack */}
				<SectionsHeader title='stack' order='/003' />
				<Stack />

				{/* Socials */}
				<SectionsHeader title='socials' order='/004' />
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
