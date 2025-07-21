
"use client"
import Link from "next/link"
import { useState } from "react";

export default function Faqs() {

	const [activeItem, setActiveItem] = useState(1);

	const handleActiveItem = (index: any) => {
		setActiveItem(index);
	};

	return (
		<>
			<section className="section-faqs-1 section-padding position-relative">
				<div className="container position-relative z-2">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="text-start position-relative d-inline-block mb-lg-0 mb-5">
								<img className="rounded-4" src=" assets/imgs/faqs-1/img-1.png" alt="infinia" />
								<div className="px-0 card-team rounded-4 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto px-5 py-8 m-5">
									<div className="d-flex flex-column flex-md-row align-items-start gap-3 mb-4" data-aos="fade-zoom-in" data-aos-delay={0}>
										<img src="/assets/imgs/faqs-1/icon-1.png" alt="infinia" />
										<div>
											<h6 className="m-0">Dukungan Live Chat 24/7</h6>
											<p className="m-0">Tim kami siap membantu Anda kapan saja.</p>
										</div>
									</div>
									<div className="d-flex flex-column flex-md-row align-items-start gap-3 mb-4" data-aos="fade-zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/faqs-1/icon-2.png" alt="infinia" />
										<div>
											<h6 className="m-0">Pusat Bantuan & Help Desk</h6>
											<p className="m-0">Dukungan melalui sistem tiket. Tersedia 24 jam / 7 hari.</p>
										</div>
									</div>
									<div className="d-flex flex-column flex-md-row align-items-start gap-3" data-aos="fade-zoom-in" data-aos-delay={200}>
										<img src="/assets/imgs/faqs-1/icon-3.png" alt="infinia" />
										<div>
											<h6 className="m-0"> Zoom Meet</h6>
											<p className="m-0">
												Dapatkan bantuan langsung melalui sesi Zoom. Tim kami siap memandu Anda secara langsung.
											</p>
										</div>

									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 mt-lg-0 mt-5">
							<h3 className="ds-3" data-aos="fade-up" data-aos-delay={0}>Pertanyaan yang Sering Diajukan (FAQ)</h3>
							<p className="fs-5 my-4" data-aos="fade-up" data-aos-delay={0}>Temukan jawaban atas pertanyaan yang paling sering diajukan pengguna kami.</p>
							<div className="accordion">
								<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0" data-aos="fade-up" data-aos-delay={0}>
									<div className="px-0 card-header border-0 bg-gradient-1">
										<a className={` ${activeItem} == 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center `} onClick={() => handleActiveItem(1)} data-bs-toggle="collapse">
											<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">1</span>
											<h6 className="m-0">Berapa lama waktu pembuatan website atau aplikasi?</h6>
											<span className="ms-auto arrow me-2">
												<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
													<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
										</a>
									</div>
									<div id="collapseOne" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
										<p className="px-0 card-body fs-6 text-600">
											Waktu pengerjaan tergantung pada kompleksitas proyek: <br />
											Website Company Profile: 3–7 hari kerja<br />
											Website E-commerce: 7–14 hari kerja<br />
											Aplikasi Mobile (Android/iOS): 2–6 minggu<br />
											Kami selalu memberikan estimasi waktu setelah konsultasi awal.


										</p>
									</div>
								</div>
								<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0" data-aos="fade-up" data-aos-delay={0}>
									<div className="px-0 card-header border-0 bg-gradient-1">
										<a className={` ${activeItem} == 2 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center `} onClick={() => handleActiveItem(2)} data-bs-toggle="collapse">
											<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">2</span>
											<h6 className="m-0">Berapa biaya pembuatan website atau aplikasi?</h6>
											<span className="ms-auto arrow me-2">
												<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
													<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
										</a>
									</div>
									<div id="collapseTwo" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
										<p className="px-0 card-body fs-6 text-600">
											Biaya menyesuaikan dengan jenis proyek dan fitur yang dibutuhkan. Kami menawarkan beberapa paket:

											Mulai dari Rp 1.500.000 untuk website sederhana
											Aplikasi mobile custom mulai dari Rp 7.000.000
											Hubungi kami untuk penawaran detail dan konsultasi gratis.
										</p>
									</div>
								</div>
								<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0" data-aos="fade-up" data-aos-delay={0}>
									<div className="px-0 card-header border-0 bg-gradient-1">
										<a className={` ${activeItem} == 3 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center `} onClick={() => handleActiveItem(3)} data-bs-toggle="collapse">
											<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">3</span>
											<h6 className="m-0">Apakah saya bisa mengelola website sendiri setelah jadi?</h6>
											<span className="ms-auto arrow me-2">
												<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
													<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
										</a>
									</div>
									<div id="collapseThree" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
										<p className="px-0 card-body fs-6 text-600">
											Tentu! Kami menggunakan CMS (seperti WordPress) atau membangun panel admin custom, agar Anda bisa mengelola konten sendiri tanpa perlu coding.
										</p>
									</div>
								</div>
								<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0" data-aos="fade-up" data-aos-delay={0}>
									<div className="px-0 card-header border-0 bg-gradient-1">
										<a className={` ${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center `} onClick={() => handleActiveItem(4)} data-bs-toggle="collapse">
											<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">4</span>
											<h6 className="m-0">Apakah aplikasi bisa dipublish ke Play Store / App Store?</h6>
											<span className="ms-auto arrow me-2">
												<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
													<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
										</a>
									</div>
									<div id="collapsefour" className={activeItem == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
										<p className="px-0 card-body fs-6 text-600">Bisa! Kami menyediakan layanan fully custom sesuai kebutuhan bisnis Anda. Mulai dari desain UI/UX, sistem login, API, hingga integrasi payment gateway.</p>
									</div>
								</div>
								<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0" data-aos="fade-up" data-aos-delay={0}>
									<div className="px-0 card-header border-0 bg-gradient-1">
										<a className={` ${activeItem} == 5 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center `} onClick={() => handleActiveItem(5)} data-bs-toggle="collapse">
											<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">5</span>
											<h6 className="m-0">Apakah tersedia layanan after-sales atau maintenance?</h6>
											<span className="ms-auto arrow me-2">
												<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
													<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
										</a>
									</div>
									<div id="collapseFive" className={activeItem == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
										<p className="px-0 card-body fs-6 text-600">
											Ya, kami menyediakan paket support & maintenance bulanan atau tahunan untuk memastikan sistem Anda berjalan lancar dan selalu update.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<img className="position-absolute top-0 end-0 z-0" src="/assets/imgs/faqs-1/img-bg-line.png" alt="infinia" />
			</section>
		</>
	)
}
