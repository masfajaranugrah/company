
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function PageContact3() {

	return (
		<>

			<Layout >

				<section className="section-page-header py-10 fix position-relative">
					<div className="container position-relative z-1">
						<div className="text-start">
							<h3>Contact</h3>
							<div className="d-flex">
								<Link href="/">
									<p className="mb-0 text-900">Home</p>
								</Link>
								<svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
									<path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p className="text-primary mb-0">Contact Us</p>
							</div>
						</div>
					</div>
					<img className="position-absolute bottom-0 start-0 end-0 top-0 z-0" src="/assets/imgs/page-header/bg-line.png" alt="devdream" />
					<div className="bouncing-blobs-container">
						<div className="bouncing-blobs-glass" />
						<div className="bouncing-blobs">
							<div className="position-absolute top-0 start-0 translate-middle-y bouncing-blob--green" />
							<div className="position-absolute top-0 end-0 bouncing-blob--primary" />
						</div>
					</div>
				</section>
				{/* Contact 2*/}
				<section className="section-contact-2 position-relative section-padding bg-5">
					<div className="container position-relative z-1">
						<div className="text-center">
							<h5 className="ds-5 mt-3 mb-3">
								Punya proyek dalam pikiran? <br className="d-md-block d-none" />
								Hubungi kami sekarang.
							</h5>
						
							<span className="fs-5 fw-medium">Terhubunglah dengan kami melalui informasi di bawah ini atau  
							 </span>
						</div>
						<div className="row mt-8">
							<div className="col-lg-10 mx-lg-auto">
								<div className="row">
								 
									<div className="col-lg-6">
										<div className="ps-lg-6">
											<h6>Chat Dengan kami</h6>
											<p className="text-500">Tim support kami siap membantu Anda 24/7</p>
											<div className="d-flex mb-2">
												<img src="/assets/imgs/contact-2/icon-1.svg" alt="devdream" />
												<Link className="ms-2 text-decoration-underline text-900 fs-7" href="https://wa.me/6287836167585?text=Halo%20Desk%20Dream%2C%20saya%20tertarik%20dengan%20jasa%20yang%20ditawarkan.%20Bolehkah%20saya%20berdiskusi%20terlebih%20dahulu%3F"> Chat via WhatsApp</Link>
											</div>
										 
											<h6>Kirim email kepada kami</h6>
											<p className="text-500">Tim kami akan merespons pertanyaan Anda dengan cepat</p>
											<div className="d-flex mb-2">
												<img src="/assets/imgs/contact-2/icon-4.svg" alt="devdream" />
												<Link className="ms-2 text-decoration-underline text-900 fs-7"   href="mailto:devdreamtech20@gmail.com?subject=Permintaan%20Layanan%20Website&body=Halo%20Dev%20Dream,%0ASaya%20tertarik%20dengan%20layanan%20pembuatan%20website%20dan%20aplikasi%20mobile.%20Mohon%20informasikan%20lebih%20lanjut.%0ATerima%20kasih.">devdreamtech20@gmail.com email e</Link>
											</div>
										 
											<h6>Untuk pertanyaan lebih lanjut</h6>
											<p className="text-500">Hubungi kami untuk bantuan langsung</p>
											<div className="d-flex mb-2">
												<img src="/assets/imgs/contact-2/icon-5.svg" alt="devdream" />
												<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">+62 878-3616-7585</Link>
										 
											</div>
												<div className="d-flex mb-2">
											 
												<img src="/assets/imgs/contact-2/icon-5.svg" alt="devdream" />
												<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">+62 857-4230-3620</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Contact 5*/}
			 
				{/* <div className="container pb-120">
					<div className="contact-map w-100">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.332792000835!2d144.96011341744386!3d-37.805673299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sbd!4v1685027435635!5m2!1sen!2sbd" allowFullScreen loading="lazy" />
					</div>
				</div> */}

			</Layout>
		</>
	)
}