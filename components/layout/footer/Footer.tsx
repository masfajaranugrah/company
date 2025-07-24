import Link from 'next/link'

export default function Footer() {
	return (
		<footer>
			<div className="section-footer">
				<div className="container-fluid bg-white">
					<div className="container position-relative z-2">
						<div className="row py-90">
							{/* Kolom 1 */}
							<div className="col-lg-3 col-md-6 col-12 pe-lg-5 mb-4">
								<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
									<img src="assets/imgs/logo/logo.png" alt="infinia" className="me-2" style={{ width: "50px" }} />
									<span>Dev_Dream</span>
								</Link>
								<p className="fw-medium mt-3 mb-6" style={{ color: '#555' }}>
									Kami adalah pilihan utama untuk layanan implementasi proyek IT yang terjangkau, efisien, dan dapat diandalkan. Dengan komitmen kami terhadap kualitas, kami menawarkan solusi tercepat dan termurah dalam sesuai kebutuhan.
								</p>
							</div>

							{/* Kolom 2 */}
							<div className="col-lg-3 col-md-6 col-12 mb-4">
								<h3 className="text-900 fs-6 fw-black text-uppercase pb-3">Company</h3>
								<div className="d-flex flex-column align-items-start">
									<Link className="hover-effect text-900 mb-2 fw-medium fs-6" href="/#">Mission &amp; Vision</Link>
									<Link className="hover-effect text-900 mb-2 fw-medium fs-6" href="/our-teams">Our Team</Link>
									<Link className="hover-effect text-900 mb-2 fw-medium fs-6" href="/">Testimonials</Link>
								</div>
							</div>

							{/* Kolom 3 */}
							<div className="col-lg-3 col-md-6 col-12 mb-4">
								<h3 className="text-900 fs-6 fw-black text-uppercase pb-3">Contact</h3>
								<div className="d-flex flex-column align-items-start">
									<p className="hover-effect text-900 mb-2 fw-medium fs-6">devdreamtech20@gmail.com</p>
									<p className="hover-effect text-900 mb-2 fw-medium fs-6">+62 878-3616-7585</p>
									<p className="hover-effect text-900 mb-2 fw-medium fs-6">+62 857-4230-3620</p>
								</div>
							</div>

							{/* Kolom 4 */}
							<div className="col-lg-3 col-md-6 col-12 mb-4">
								<h3 className="text-900 fs-6 fw-black text-uppercase pb-3">Payment</h3>
								<div className="d-flex social-icons">
									<img src="/assets/imgs/pay/bca.svg" alt="BCA" style={{ width: "50px", marginLeft: "15px" }} />
									<img src="/assets/imgs/pay/bri.png" alt="Logo BRI" width="50" height="19"   style={{ marginLeft: "15px" }}/>
 									<img src="/assets/imgs/pay/bni.png"  width="50" height="19" alt="BNI" style={{ marginLeft: "15px" }} />
								</div>
								<div className="d-flex social-icons mt-3">
									<img src="/assets/imgs/pay/qris.png" alt="QRIS" style={{ width: "150px", marginLeft: "15px" }} />
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="container-fluid bg-primary-soft">
					<div className="container">
						<div className="row">
							<div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 py-4 border-top border-white border-opacity-10">
								<p className="mb-0 fs-7" style={{ color: '#555' }}>
									Copyright © 2025 Dev Dream. All Rights Reserved
								</p>
								<div className="d-flex flex-wrap">
									<Link href="/#" className="text-900 me-3">Privacy Policy</Link>
									<Link href="/#" className="text-900 me-3">Disclaimer</Link>
									<Link href="/#" className="text-900">Terms of Service</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
