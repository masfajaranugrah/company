
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
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Tim Dev Dream</span>
								</div>
								<h3 className="ds-3 my-3" data-aos="fade-zoom-in" data-aos-delay={200}>Orang-orang Hebat di Balik Dev Dream</h3>
								<p className="fs-5" data-aos="fade-zoom-in" data-aos-delay={300}>
									Kami bukan sekadar tim, kami mitra kerja Anda. <br className="d-none d-lg-block" />
									Bersama, kami ciptakan solusi digital yang berdampak.
								</p>							</div>
						</div>
						<div className="row mt-6 d-flex justify-content-center">
 							<div className="col-lg-4 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/cta/fajar.jpg" alt="infinia" />
									</div>
									<div className="hover-up">
										<Link href="#" className="card-team text-start rounded-3 position-absolute top-100 translate-middle-y start-0 end-0 w-100 z-1 backdrop-filter w-auto p-4 mx-6 shadow-1">
											<h6>Fajar Angurah</h6>
											<span className="d-flex justify-content-between">
												<span className="fs-6 text-600 me-auto">FullStack Developer</span>
												<div className="d-flex gap-3">
													<Link href="https://linkedin.com/in/fajaranugrah22" target="_blank" rel="noopener noreferrer">
														<img src="/assets/imgs/icons/linkedin.png" alt="LinkedIn" width={40} height={40} />
													</Link>
													<Link href="https://github.com/masfajaranugrah" target="_blank" rel="noopener noreferrer">
														<img src="/assets/imgs/icons/github.png" alt="GitHub" width={40} height={40} />
													</Link>
												</div>
											</span>
										</Link>
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