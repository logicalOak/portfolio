import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../mock/data.json';

const Projects = () => {
	// Hooks
	const [loadMore, setLoadMore] = useState(2);
	const elements = projects.projects;
	const handleLoadMore = () => {
		setLoadMore((prevState) => (prevState < elements.length ? prevState + 2 : prevState));
	};
	return (
		<section className='project'>
			<div className='project-container'>
				<div>
					<nav className='menu'>
						{projects.projects.slice(0, loadMore).map((project, index) => (
							<AnimatePresence key={index}>
								<motion.div
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{
										delay: 0.2,
										default: {
											duration: 0.4,
											ease: [0.6, 0.05, -0.01, 0.9],
										},
									}}>
									<div className='menu__item'>
										<a href={project.href} className='menu__item-link' target='_blank'>
											/ {project.name}
										</a>
										<img className='menu__item-img' src={project.src} />
										<div className='marquee'>
											<div className='marquee__inner'>
												{Array(4)
													.fill(project.name)
													.map((name, index) => (
														<span key={index} className='marquee__item'>
															{name}
														</span>
													))}
											</div>
										</div>
									</div>

									<div className='divider' />
								</motion.div>
							</AnimatePresence>
						))}
						{loadMore < elements.length && (
							<button className='loadMore' onClick={() => handleLoadMore()}>
								LOAD
							</button>
						)}
					</nav>
				</div>
			</div>
		</section>
	);
};

export default Projects;
