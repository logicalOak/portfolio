import projects from './mock/data.json';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import data from './mock/mock.js';

const Root = () => {
	// Hooks
	const [loadMore, setLoadMore] = useState(2);
	const elements = projects.projects;
	const handleLoadMore = () => {
		setLoadMore((prevState) =>
			prevState < elements.length ? prevState + 2 : prevState
		);
	};

	// Render
	return (
		<div className='wrapper'>
			<div className='container'>
				<div className='navbar'>
					<div className='navbar-container'>
						<div className='site-title'>by logicalOak</div>
						<div className='site-type'>portfolio</div>
						<div className='site-year'>2022</div>
					</div>
				</div>

				<div className='divider' />

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

				<div className='hero-image'>
					<div
						className='hero-image-container'
						data-scroll
						data-scroll-speed='2'
					>
						<img src='../public/images/hero-image.jpg' alt='' />
					</div>
				</div>

				<div className='whitespace' />

				<div className='section-header'>
					<div className='section-header-container'>
						<div className='section-title'>about</div>
						<div className='section-order'>/001</div>
					</div>
				</div>

				<div className='divider' />

				<section className='about'>
					<div className='about-container'>
						<p>
							Hello. I am Dmitry Mozhny, a young developer from
							Volgograd. I have been doing frontend development
							for several years, practicing and improving.
						</p>
						<p>I love coding, learning new technologies.</p>
						<p>
							Below are my works and the stack of technologies I
							have mastered. The rest of my projects can be viewed
							in my github profile.
						</p>
					</div>
				</section>

				<div className='whitespace' />

				<div className='section-header'>
					<div className='section-header-container'>
						<div className='section-title'>projects</div>
						<div className='section-order'>/002</div>
					</div>
				</div>

				<div className='divider' />

				<section className='project'>
					<div className='project-container'>
						<div>
							<nav className='menu'>
								{projects.projects
									.slice(0, loadMore)
									.map((project, index) => (
										<AnimatePresence key={index}>
											<motion.div
												initial={{ opacity: 0, y: -20 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: -20 }}
												transition={{
													delay: 0.2,
													default: {
														duration: 0.4,
														ease: [
															0.6, 0.05, -0.01,
															0.9,
														],
													},
												}}
											>
												<div className='menu__item'>
													<a
														href={project.href}
														className='menu__item-link'
														target='_blank'
													>
														/ {project.name}
													</a>
													<img
														className='menu__item-img'
														src={project.src}
													/>
													<div className='marquee'>
														<div className='marquee__inner'>
															{Array(4)
																.fill(
																	project.name
																)
																.map(
																	(
																		name,
																		index
																	) => (
																		<span
																			key={
																				index
																			}
																			className='marquee__item'
																		>
																			{
																				name
																			}
																		</span>
																	)
																)}
														</div>
													</div>
												</div>

												<div className='divider' />
											</motion.div>
										</AnimatePresence>
									))}
								{loadMore < elements.length && (
									<button
										className='loadMore'
										onClick={() => handleLoadMore()}
									>
										LOAD
									</button>
								)}
							</nav>
						</div>
					</div>
				</section>

				<div className='whitespace' />

				<div className='section-header'>
					<div className='section-header-container'>
						<div className='section-title'>stack</div>
						<div className='section-order'>/003</div>
					</div>
				</div>

				<div className='divider' />

				<section className='stack'>
					<div className='stack-container'>
						<p>
							<br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML, CSS,
							JavaScript, React, Redux, Redux Toolkit, pug,
							sass/scss, gulp, vite, git, npm,
							<br />
						</p>
					</div>
				</section>

				<div className='whitespace' />

				<div className='section-header'>
					<div className='section-header-container'>
						<div className='section-title'>socials</div>
						<div className='section-order'>/004</div>
					</div>
				</div>

				<div className='divider'></div>

				<section className='socials'>
					<div className='socials-container'>
						<div className='socials-id dr'>
							<a href='https://github.com/logicalOak'>github</a>
						</div>
						<div className='socials-id ig'>
							<a href=''>vk</a>
						</div>
						<div className='socials-id tw'>
							<a href='https://www.instagram.com/mozhnyy'>
								instagram
							</a>
						</div>
					</div>
				</section>

				<div className='divider'></div>

				<div className='footer'>
					<div className='navbar'>
						<div className='navbar-container'>
							<div className='site-title'>
								created by logicalOak
							</div>
							<div className='site-year'>48.71672, 44.5107</div>
						</div>
					</div>
				</div>
				<br />
			</div>
		</div>
	);
};

export default Root;
