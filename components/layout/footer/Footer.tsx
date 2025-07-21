import Link from 'next/link'

export default function Footer() {
	return (
		<>
			<footer>
				<div className="section-footer">
					<div className="container-fluid bg-white">
						<div className=" container position-relative z-2">
							<div className="row py-90">
								<div className="col-lg-4 pe-10">
									<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
										<img src="assets/imgs/logo/logo.png" alt="infinia" className='me-2' style={{width: "50px"}}/>
										<span>Dev_Dream</span>
									</Link>
									<p className="text-900 fw-medium mt-3 mb-6 opacity-50">
										Kami adalah pilihan utama untuk layanan implementasi proyek IT yang terjangkau, efisien, dan dapat diandalkan. Dengan komitmen kami terhadap kualitas, kami menawarkan solusi tercepat dan termurah dalam sesuai kebutuhan.
									</p>
								
								</div>
								<div className="col-lg-8">
									<div className="row">
										<div className="col-lg-3 col-md-3 col-6">
											<h3 className="text-900 fs-6 fw-black text-uppercase pb-3 pt-5">Company</h3>
											<div className="d-flex flex-column align-items-start">
												<Link className="hover-effect text-900 mb-2 fw-medium fs-6" href="/#">Mission &amp; Vision</Link>
												<Link className="hover-effect text-900 mb-2 fw-medium fs-6" href="/our-teams">Our Team</Link>
								 
												<Link className="hover-effect text-900 mb-2 fw-medium fs-6" href="/">Testimonials</Link>
											</div>
										</div>
										<div className="col-lg-3 col-md-3 col-6">
											<h3 className="text-900 fs-6 fw-black text-uppercase pb-3 pt-5">Contact</h3>
											<div className="d-flex flex-column align-items-start">
												<p className="hover-effect text-900 mb-2 fw-medium fs-6" >devdreamtech20@gmail.com</p>
												<p className="hover-effect text-900 mb-2 fw-medium fs-6" >+62 878-3616-7585</p> 
												<p className="hover-effect text-900 mb-2 fw-medium fs-6" >+62 857-4230-3620</p>
										 
											</div>
										</div>
										<div className="col-lg-6 col-md-3">
											<h3 className="text-900 fs-6 fw-black text-uppercase pb-3 pt-5">Connect</h3>
											<div className="d-flex">
													<div className="d-flex social-icons">
								 
										<Link href="/https://www.linkedin.com/" className=" text-900 border    border-opacity-10 icon-shape icon-md">
											<i className="bi bi-linkedin" />
										</Link>
								 
									</div>
											</div>
										 
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="container-fluid bg-primary-soft">
						<div className="container">
							<div className="row">
								<div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 py-4 border-top border-white border-opacity-10">
									<p className="text-900 opacity-50 mb-0 fs-7">Copyright © 20245 Dev Dream. All Rights Reserved</p>
									<div className="d-flex">
										<Link href="/#" className="text-900 me-3"> Privacy policy </Link>
										<Link href="/#" className="text-900 me-3"> Disclaimer </Link>
										<Link href="/#" className="text-900 me-3"> Terms of service </Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
