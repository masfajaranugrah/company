'use client'
import Link from "next/link"
import CountUp from 'react-countup'
export default function Cta() {

	return (
		<>
			<section className="section-cta-2 bg-3 position-relative section-padding fix">
				<div className="container">
					<div className="text-center mb-8">
						<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
							<img src="/assets/imgs/features-1/dots.png" alt="dev" />
							<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Kenapa Harus Memilih Dev Dream?</span>
						</div>
						<h3 className="ds-3 my-3 fw-regular">Solusi<span className=" fw-bold"> Digital Terintegrasi</span> untuk <br className="d-lg-block d-none" /> <span className=" fw-bold">Bisnismu</span> </h3>
					</div>
					<div className="row">
						<div className="col-lg-5 pe-lg-0">
							<div className="bg-linear-1 text-center rounded-4 position-relative">
								<img className="rounded-4 border border-2 border-white mb-10 mt-5" src="/assets/imgs/logo/logo.png" alt="dev" style={{ width: "350px" }} />
								<div className="position-absolute bottom-0 left-0 mb-3 w-100">
									<Link href="https://fajaranugrahdev.my.id" scroll={false} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter px-3 py-2 popup-video hover-up me-3 shadow-1">

										<span className="fw-bold fs-7 text-900">
											Portfolio
										</span>
									</Link>
								</div>
								<div className="position-absolute top-0 end-0">
									<img className="flickering" src="/assets/imgs/cta-2/star-2.png" alt="dev" />
								</div>
								<div className="position-absolute bottom-0 start-0">
									<img className="alltuchtopdown" src="/assets/imgs/cta-2/star-1.png" alt="dev" />
								</div>
							</div>
						</div>
						<div className="col-lg-6 offset-lg-1 ps-lg-0 pe-lg-5 mt-lg-0 mt-6">
							<h5 className="ds-5">Di Dev Dream, </h5>
							<p className="fs-5 text-500">kamu akan mendapatkan:</p>
							<div className="d-md-flex align-items-center mt-4 mb-5">
								<ul className="list-unstyled phase-items mb-0">
									<li className="d-flex align-items-center mt-3">
										<img src="/assets/imgs/cta-2/check.svg" alt="dev" />
										<span className="ms-2 text-900 fw-medium fs-6"> Desain Website & Aplikasi yang Menarik dan Mobile-Friendly</span>
									</li>
									<li className="d-flex align-items-center mt-3">
										<img src="/assets/imgs/cta-2/check.svg" alt="dev" />
										<span className="ms-2 text-900 fw-medium fs-6">Pengembangan Custom Sesuai Kebutuhan</span>
									</li>
									<li className="d-flex align-items-center mt-3">
										<img src="/assets/imgs/cta-2/check.svg" alt="dev" />
										<span className="ms-2 text-900 fw-medium fs-6">100% Transparan & Kolaboratif</span>
									</li>
									<li className="d-flex align-items-center mt-3">
										<img src="/assets/imgs/cta-2/check.svg" alt="dev" />
										<span className="ms-2 text-900 fw-medium fs-6">Multi Bahasa & Lokal Adaptif</span>
									</li>
								</ul>
								<ul className="list-unstyled phase-items ms-md-5 mb-0">
									<li className="d-flex align-items-center mt-3">
										<img src="/assets/imgs/cta-2/check.svg" alt="dev" />
										<span className="ms-2 text-900 fw-medium fs-6">Integrasi Fitur Canggih</span>
									</li>
									<li className="d-flex align-items-center mt-3">
										<img src="/assets/imgs/cta-2/check.svg" alt="dev" />
										<span className="ms-2 text-900 fw-medium fs-6">SEO & Kecepatan Optimal</span>
									</li>

									<li className="d-flex align-items-center mt-3">
										<img src="/assets/imgs/cta-2/check.svg" alt="dev" />
										<span className="ms-2 text-900 fw-medium fs-6">Dukungan & Maintenance Profesional</span>
									</li>

								</ul>
							</div>
							<div className="row position-relative mt-5 mt-md-0">
								<div className="col-md-6 d-flex align-items-center">
									<div className="rounded-circle" style={{ width: "20%" }}>
										<img
											className="rounded-circle border border-5 border-primary-light"
											src="assets/imgs/cta/fajar.jpg"
											
											alt="dev"
										/>
									</div>
									<div className="ms-3">
										<h6 className="mt-1">Fajar Anugrah <span className="text-500 fs-6">, CEO & Founder Dev Dream</span></h6>
									</div>
								</div>
								<div className="col-md-6 d-flex align-items-center">
									<span className="line-verticarl border-start h-50 pe-8 position-absolute top-50 start-50 translate-middle d-none d-md-block" />
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto">
											<h2 className="count ds-2 fw-black text-primary">+<span className="odometer" />
												<CountUp end={4} enableScrollSpy={true} />
											</h2>
										</div>
									</div>
									<p className="ms-3 fs-5">Years’ <br /> Experience</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
