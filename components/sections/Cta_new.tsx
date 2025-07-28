"use client";
import Link from "next/link";
import { useState } from "react";

export default function Cta() {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 6;
	
	// Data portfolio projects
	const portfolioData = [
		// Page 1
		{
			title: "Lompat Kelas",
			image: "/assets/imgs/project-1/demo1.png",
			link: "https://lompatkelas.vercel.app/"
		},
		{
			title: "Company Profile",
			image: "/assets/imgs/project-1/demo2.png",
			link: "https://demo1-lompatkelas.vercel.app/"
		},
		{
			title: "Dashboard",
			image: "/assets/imgs/project-1/demo3.png",
			link: "https://github.com/masfajaranugrah/philiadash"
		},
		{
			title: "Company Profile",
			image: "/assets/imgs/project-1/demo5.png",
			link: "https://paten-masfajaranugrahs-projects.vercel.app/"
		},
		{
			title: "Philia Adventure Land",
			image: "/assets/imgs/project-1/demo6.png",
			link: "https://www.philiadventureland.com/"
		},
		{
			title: "Philia Adventure Land",
			image: "/assets/imgs/project-1/demo7..png",
			link: "https://github.com/masfajaranugrah/up_philia"
		},
		// Page 2
		{
			title: "Marketplace",
			image: "/assets/imgs/project-1/demo8.png",
			link: "https://github.com/masfajaranugrah/marketplace"
		},
		{
			title: "API App Course",
			image: "/assets/imgs/project-1/demo9.png",
			link: "https://github.com/App-Course/backend"
		},
		{
			title: "Website & Mobile App Development Services",
			image: "/assets/imgs/project-1/demo10.png",
			link: "https://joki.fajaranugrahdev.my.id/"
		}

	];

	const totalPages = Math.ceil(portfolioData.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentItems = portfolioData.slice(startIndex, startIndex + itemsPerPage);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const handlePrevious = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handleNext = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	return (
		<>
			<section className="section-cta pt-5 position-relative overflow-hidden">
				<div className="container position-relative z-3">
					<div className="text-center mb-8">
						<h3 className="ds-3" data-aos="fade-up" data-aos-delay={100}>
							Portfolio Kami
						</h3>
						<p className="fs-5 text-500" data-aos="fade-up" data-aos-delay={200}>
							Lihat hasil karya terbaik kami untuk berbagai klien dan industri
						</p>
					</div>

					{/* Portfolio Grid */}
					<div className="row g-4">
						{currentItems.map((project, index) => (
							<div key={`${currentPage}-${index}`} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
								<div className="portfolio-item position-relative overflow-hidden rounded-4 shadow-1 hover-up">
									<Link href={project.link} className="d-block">
										<div className="portfolio-image position-relative">
											<img 
												src={project.image} 
												alt={project.title}
												className="w-100"
												style={{ 
													height: "300px",
													objectFit: "cover",
													transition: "transform 0.5s ease"
												}}
											/>
										</div>
									</Link>
								</div>
							</div>
						))}
					</div>

					{/* Pagination */}
					<div className="d-flex justify-content-center mt-8">
						<nav aria-label="Portfolio pagination" data-aos="fade-up" data-aos-delay={200}>
							<ul className="pagination pagination-custom">
								<li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
									<button 
										className="page-link border-0 bg-transparent text-500"
										onClick={handlePrevious}
										disabled={currentPage === 1}
									>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
											<path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</button>
								</li>
								
								{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
									// Show first page, current page and neighbors, last page
									if (
										page === 1 || 
										page === totalPages || 
										(page >= currentPage - 1 && page <= currentPage + 1)
									) {
										return (
											<li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
												<button 
													className={`page-link border-0 ${
														currentPage === page 
															? 'bg-gradient text-white' 
															: 'bg-transparent text-900 hover-bg-primary-soft'
													}`}
													onClick={() => handlePageChange(page)}
												>
													{page}
												</button>
											</li>
										);
									} else if (
										(page === currentPage - 2 && currentPage > 3) ||
										(page === currentPage + 2 && currentPage < totalPages - 2)
									) {
										return (
											<li key={page} className="page-item">
												<span className="page-link border-0 bg-transparent text-500">...</span>
											</li>
										);
									}
									return null;
								})}
								
								<li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
									<button 
										className="page-link border-0 bg-transparent text-900 hover-bg-primary-soft"
										onClick={handleNext}
										disabled={currentPage === totalPages}
									>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
											<path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</button>
								</li>
							</ul>
						</nav>
					</div>
				</div>

				{/* Background decorations */}
				<div className="position-absolute top-0 start-50 translate-middle-x z-0">
					<img src="/assets/imgs/service-2/bg-line.png" alt="dev" />
				</div>
				<div className="rotate-center ellipse-rotate-success position-absolute z-1" />
				<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
			</section>
		</>
	);
}
