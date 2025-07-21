
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function PageTeam1() {

	return (
		<>

			<Layout >

				{/*Team 1*/}
				<section className="section-team-1 section-padding position-relative overflow-hidden">
					<div className="container">
						<div className="row position-relative z-1">
							<div className="text-center">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">OUR TEAM MEMBERS</span>
								</div>
								<h3 className="ds-3 my-3" data-aos="fade-zoom-in" data-aos-delay={200}>Meet Our Team</h3>
								<p className="fs-5" data-aos="fade-zoom-in" data-aos-delay={300}>Meet the talented and passionate team members who drive our company forward every day. <br className="d-none d-lg-block" /> company forward every day.</p>
							</div>
						</div>
						<div className="row mt-6 d-flex justify-content-center">
							{/* prettier-ignore */}

							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={200}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img
											className="img-fluid w-100 object-cover rounded-3"
											style={{ height: "450px", width: "400px" }}
											src="/assets/imgs/cta/fajar.webp"
											alt="devdream"
										/>
									</div>
									<div

										className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up"
									>
										<h6>Fajar Anugrah</h6>
										<div className="d-flex flex-column">
											<span className="fs-6 text-600 mb-2">Software Engineer</span>
											<div className="d-flex gap-3">
												<Link href="https://linkedin.com/in/fajaranugrah22" target="_blank" rel="noopener noreferrer">
													<img src="/assets/imgs/icons/linkedin.png" alt="LinkedIn" width={40} height={40} />
												</Link>
												<Link href="https://github.com/masfajaranugrah" target="_blank" rel="noopener noreferrer">
													<img src="/assets/imgs/icons/github.png" alt="GitHub" width={40} height={40} />
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={300}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img
											className="img-fluid  object-cover rounded-3"
											style={{ height: "450px", width: "400px" }}
											src="/assets/imgs/cta/rakha.png"
											alt="infinia"
										/>									</div>
									<div

										className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up"
									>
										<h6>Rakha Abimanyu</h6>
										<div className="d-flex flex-column">
											<span className="fs-6 text-600 mb-2">Software Engineer</span>
											<div className="d-flex gap-3">
												<Link href="https://linkedin.com/in/rakha-abimanyu" target="_blank" rel="noopener noreferrer">
													<img src="/assets/imgs/icons/linkedin.png" alt="LinkedIn" width={40} height={40} />
												</Link>
												<Link href="https://github.com/rakhaabimanyu" target="_blank" rel="noopener noreferrer">
													<img src="/assets/imgs/icons/github.png" alt="GitHub" width={40} height={40} />
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
					<div className="position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/team-1/bg-line.png" alt="infinia" />
					</div>
					<div className="rotate-center ellipse-rotate-success position-absolute z-0" />
					<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
				</section>


			</Layout>
		</>
	)
}