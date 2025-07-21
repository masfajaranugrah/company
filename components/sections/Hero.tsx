
import Link from "next/link"
import { FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
	return (
		<>
			<section className="position-relative overflow-hidden section-padding">
				<div className="container">
					<div className="row content align-items-center">
						<div className="col-lg-6 col-md-12 mb-lg-0 mb-5">
							<div className="pe-2">
								<Link href="#" className="d-flex align-items-center bg-linear-1 d-inline-flex rounded-pill px-2 py-1">
									<span className="bg-primary fs-9 fw-bold rounded-pill px-2 py-1 text-white">New</span>
									<span className="fs-7 fw-medium text-primary mx-2">Gratis Domain .COM</span>
									<svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none">
										<path d="M10.3125 5.5625L14.4375 9.5L10.3125 13.4375" stroke="#6342EC" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M14.25 9.5H3.5625" stroke="#6342EC" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
								<h3 className="ds-3 mt-4 mb-5" data-aos="fade-zoom-in" data-aos-delay={0}>Jasa Pembuatan Website dan Aplikasi Mobile.</h3>
								<p className="pe-10 mb-5" data-aos="fade-zoom-in" data-aos-delay={200}>
									Kembangkan bisnis Anda dengan website & aplikasi yang dirancang khusus untuk menjangkau lebih banyak pelanggan. Gratis domain,
									hosting, dan garansi selamanya!
									<br />
									<br />
									Kami adalah pilihan utama untuk layanan implementasi proyek IT yang terjangkau, efisien, dan dapat diandalkan. Dengan komitmen kami terhadap kualitas, kami menawarkan solusi tercepat dan termurah dalam
									sesuai kebutuhan.
								</p>
								<Link
									href="https://wa.me/6287836167585?text=Halo%20Desk%20Dream%2C%20saya%20tertarik%20dengan%20jasa%20yang%20ditawarkan.%20Bolehkah%20saya%20berdiskusi%20terlebih%20dahulu%3F"
									className="btn btn-gradient"
									data-aos="fade-zoom-in"
									data-aos-delay={300}
								>
									<FaWhatsapp size={25} color="#25D366" className="me-2 mb-1" />
									Hubungi Kami
								</Link>

								<div className="row mt-8 mb-3">
									<h6 className="text-500 fs-5" data-aos="fade-zoom-in" data-aos-delay={100}>Dipercaya oleh perusahaan-perusahaan besar</h6>
								</div>
								<div className="d-flex align-items-center">
									<div className="me-2" data-aos="fade-zoom-in" data-aos-delay={200}>
										<div className="d-flex">
											<img src="/assets/imgs/hero-1/avatar-1.png" alt="infinia" />
											<img className="avt-hero" src="/assets/imgs/hero-1/avatar-2.png" alt="infinia" />
											<img className="avt-hero" src=" assets/imgs/hero-1/avatar-3.png" alt="infinia" />
										</div>
										<span className="fs-6 fw-bold">4.9/5 <span className="text-secondary fw-medium">(90k Reviews)</span></span>
									</div>

								</div>
							</div>
						</div>
						<div className="col-lg-6 position-relative justify-content-center">
							<img className="hero-img" src="/assets/imgs/hero-1/background.png" alt="infinia" />
							<div className="shape-1 position-absolute">
								<img className="rightToLeft" src="/assets/imgs/hero-1/shape-1.png" alt="infinia" data-aos="zoom-in" data-aos-delay={500} />
							</div>
							<div className="shape-2 position-absolute d-none d-md-block">
								<img src="/assets/imgs/hero-1/shape-2.png" alt="infinia" data-aos="zoom-in" data-aos-delay={200} />
							</div>
							<div className="shape-3 position-absolute d-none d-md-block">
								<img src="/assets/imgs/hero-1/shape-3.png" alt="infinia" data-aos="zoom-in" data-aos-delay={300} />
							</div>
							<div className="alltuchtopdown card-hero backdrop-filter rounded-3 text-center d-inline-block p-3 position-absolute">
								<img className="rounded-3" src="/assets/imgs/hero-1/shape-4.png" alt="infinia" />
								<h6 className="mt-3">Zoom Meet</h6>
								<p className="fs-7 text-700">
									Mulai proyek Anda dengan
									<br />
									diskusi gratis bersama tim kami
								</p>
								<Link href="#" className="shadow-sm d-flex align-items-center bg-white d-inline-flex rounded-pill px-2 py-1 mb-3">
									<span className="bg-primary fs-9 fw-bold rounded-pill px-2 py-1 text-white">Get</span>
									<span className="fs-7 fw-medium text-primary mx-2">Gratis Konsultasi</span>
									<svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none">
										<path d="M10.3125 5.5625L14.4375 9.5L10.3125 13.4375" stroke="#6D4DF2" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M14.25 9.5H3.5625" stroke="#6D4DF2" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
