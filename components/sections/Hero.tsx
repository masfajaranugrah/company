
import Link from "next/link"

export default function Hero2() {
	return (
		<>

			<section className="section-hero-2 position-relative fix section-padding pb-lg-0">
				<div className="container">
					<div className="row text-center position-relative z-1">
						<div className="col">
							<div className="border-linear-1 rounded-pill d-inline-block mb-2" data-aos="zoom-in" data-aos-delay={100}>
								<div className="text-primary bg-white px-4 py-2 rounded-pill fw-medium position-relative z-2">🚀 Free Maintenance & Konsultasi</div>
							</div>
							<h3 className="ds-3 fw-normal position-relative z-2 mb-5">
								Mau Punya Website atau Aplikasi Cepat? <br />
								<span className="fw-bold" data-aos="fade-zoom-in" data-aos-delay={20}>
									Bisa Launching dalam 7 Hari!
								</span> Siap Support & Gratis Konsultasi.
							</h3>

							<div className="d-flex gap-3 flex-column flex-md-row justify-content-center">
								<Link href="#services" className="btn btn-gradient" data-aos="fade-zoom-in" data-aos-delay={100}>
									Get Started
									<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
								<Link href="https://wa.me/6287836167585?text=Halo%20Desk%20Dream%2C%20saya%20tertarik%20dengan%20jasa%20yang%20ditawarkan.%20Bolehkah%20saya%20berdiskusi%20terlebih%20dahulu%3F
"

									className="btn btn-outline-secondary hover-up" data-aos="fade-zoom-in" data-aos-delay={300}>
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
									Pesan Sekarang!
								</Link>
							</div>
							<div className="mt-10 mt-md-8 position-relative z-1  text-900">
								<img src="/assets/imgs/hero-2/macbook.png" alt="devdream" data-aos="fade-up" data-aos-delay={100} />
								<img className="alltuchtopdown d-none d-md-block position-absolute bottom-0 end-0 pe-10 me-lg-10 mb-lg-10" src="/assets/imgs/hero-2/vector.png" alt="devdream" />
								<div className="position-md-absolute d-inline-block pt-10 pt-md-5 top-50 start-0 translate-middle-y mt-10 ">
									<div className="alltuchtopdown backdrop-filter rounded-4 p-4">

										<h6 className="fw-semibold mb-2 text-dark">🚀 Kenapa Pilih Kami?</h6>
										<p className="mb-1 text-dark">
											<span className="text-primary fw-semibold">Kami mitra digital strategis Anda.</span><br />
											Fokus kami bukan desain semata, tapi <span className="text-primary fw-semibold">hasil nyata</span>:
											<span className="text-primary fw-semibold"> penjualan</span>,
											<span className="text-primary fw-semibold"> efisiensi</span>,
											<span className="text-primary fw-semibold"> loyalitas</span>.
										</p>
										<p className="mt-2 mb-0">
											<span className="badge bg-primary">GRATIS</span> domain, SSL, & maintenance 1 tahun.
										</p>



										<ul className="list-unstyled phase-items text-900">
											 
											<li className="d-flex align-items-center mt-2">
												<img src="/assets/imgs/hero-2/check.png" alt="devdream" />
												<span className="ms-2 text-left">Super Cepat & Aman</span>
											</li>
											<li className="d-flex align-items-center mt-2">
												<img src="/assets/imgs/hero-2/check.png" alt="devdream" />
												<span className="ms-2 text-left">Integrasi WhatsApp, Payment, dan SEO</span>
											</li>
											<li className="d-flex align-items-center mt-2">
												<img src="/assets/imgs/hero-2/check.png" alt="devdream" />
												<span className="ms-2 text-start text-left"> Pakai teknologi terbaru (Next.js, Flutter, Laravel, dsb)</span>
											</li>
											<li className="d-flex align-items-center mt-2">
												<img src="/assets/imgs/hero-2/check.png" alt="devdream" />
												<span className="ms-2 text-start text-left"> Bisa request custom sesuai kebutuhanmu!</span>
											</li>
											<li className="d-flex align-items-center mt-2">
												<img src="/assets/imgs/hero-2/check.png" alt="devdream" />
												<span className="ms-2 text-start text-left">  dipercaya puluhan klien dari UMKM, Sekolah, hingga Startup!</span>
											</li>

										</ul>
									</div>
								</div>
							</div>
							<div className="position-absolute top-0 start-0 ms-10 mt-10 pt-10">
								<img className="flickering" src="/assets/imgs/hero-2/star-1.png" alt="devdream" />
							</div>
							<div className="rotateme position-absolute top-0 end-0 me-10 pe-8 z-0">
								<img className="flickering" src="/assets/imgs/hero-2/star-3.png" alt="devdream" />
							</div>
							<div className="position-absolute top-50 end-0 translate-middle-y pe-md-10 pe-5 pt-10 mt-8">
								<div className="shake">
									<img className="flickering" src="/assets/imgs/hero-2/star-2.png" alt="devdream" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="position-absolute top-0 start-50 translate-middle-x">
					<img src="/assets/imgs/hero-2/bg-line.png" alt="devdream" />
				</div>
				<div className="bouncing-blobs-container">
					<div className="bouncing-blobs-glass" />
					<div className="bouncing-blobs">
						<div className="bouncing-blob bouncing-blob--green" />
						<div className="bouncing-blob bouncing-blob--green" />
						<div className="bouncing-blob bouncing-blob--white" />
						<div className="bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
						<div className="bouncing-blob bouncing-blob--purple" />
						<div className="bouncing-blob bouncing-blob--purple" />
						<div className="bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
					</div>
				</div>
				<div className="position-absolute top-50 start-0 translate-middle-y d-none d-md-block z-2">
					<div className="socials rotate-90 bg-white px-3 py-2 rounded-pill d-inline-flex d-flex align-items-center justify-content-center">
						<p className="text-900 mb-0">Follow us:</p>
						<ul className="list-unstyled d-flex mb-0">
							<li className="ms-3">
								<Link href="http://www.tiktok.com" target="_blank">
									<span className="icon">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16">
											<path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
										</svg>
									</span>
								</Link>
							</li>
							<li className="ms-3">
								<Link href="http://www.instagram.com" target="_blank">
									<span className="icon">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
											<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
										</svg>
									</span>
								</Link>
							</li>
					 	 
						</ul>
					</div>
				</div>
			</section>

		</>
	)
}
