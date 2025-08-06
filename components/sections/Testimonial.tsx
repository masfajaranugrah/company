"use client"
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Testimonial3() {

	const swiperOptions = {
		slidesPerView: 3,
		spaceBetween: 20,
		slidesPerGroup: 1,
		centeredSlides: false,
		loop: true,
		autoplay: {
			delay: 4000,
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			},
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
		},
	}

	return (
		<>


			<section className="section-testimonial-3 position-relative section-padding fix">
				<div className="container position-relative z-1">
					<div className="row pb-9">
						<div className="col-lg-7 mx-lg-auto">
							<div className="text-center mb-lg-0 mb-5">
								<div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Testimonials</span>
								</div>
								<h5 className="ds-5 my-3 fw-regular">
									Apa Kata <span className="fw-bold">Klien</span> Tentang <br />
									<span className="fw-bold"> Layanan Kami</span>
								</h5>
								<p className="fs-5 mb-0 text-900">
									Rasakan langsung kualitas layanan kami dari testimoni nyata para klien yang puas dengan hasil website & aplikasi mereka. 🔥
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<Swiper {...swiperOptions}
							className="swiper slider-1 pt-2 pb-3"
							modules={[Keyboard, Autoplay, Pagination, Navigation]}
						>
							<div className="swiper-wrapper">
								{/* prettier-ignore */}
								<SwiperSlide className="swiper-slide">
									<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
										<div className="d-flex align-items-center mb-5">
											<img className="avatar-lg" src="/assets/imgs/testimonial/pp.png" alt="infinia" />
											<div className="d-flex flex-column">
												<h6 className="ms-3 fs-6 mb-0">Andre P., </h6>
												<div className="flag ms-3">
													<img src="/assets/imgs/testimonial/flag.png" alt="infinia" style={{width: "20px"}}/>
													<span className="fs-8">Manager Operasional</span>
												</div>
											</div>
										</div>
										<p className="text-900 border-bottom pb-4 mb-4">Sistem dashboard manajemen yang dikembangkan mempermudah semua proses internal kami. Sangat recommended!"</p>
										<div className="d-flex">
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<span className="fs-8 text-600 ms-2">(For services and support)</span>
										</div>
										<div className="position-absolute top-0 end-0 m-4">
											<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
												<g clipPath="url(#clip0_551_13914)">
													<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
													<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
												</g>
												<defs>
													<clipPath>
														<rect width={52} height={52} fill="white" />
													</clipPath>
												</defs>
											</svg>
										</div>
									</div>
								</SwiperSlide>
									<SwiperSlide className="swiper-slide">
									<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
										<div className="d-flex align-items-center mb-5">
											<img className="avatar-lg" src="/assets/imgs/testimonial/pp.png" alt="infinia" />
											<div className="d-flex flex-column">
												<h6 className="ms-3 fs-6 mb-0">Iqbal R., </h6>
												<div className="flag ms-3">
													<img src="/assets/imgs/testimonial/flag.png" alt="infinia" style={{width: "20px"}}/>
													<span className="fs-8">Direktur PT. Mitra Solusi</span>
												</div>
											</div>
										</div>
										<p className="text-900 border-bottom pb-4 mb-4">Saya merasa dilayani seperti partner, bukan hanya klien. Proyek ERP kami berjalan lancar dan efektif.</p>
										<div className="d-flex">
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<span className="fs-8 text-600 ms-2">(For services and support)</span>
										</div>
										<div className="position-absolute top-0 end-0 m-4">
											<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
												<g clipPath="url(#clip0_551_13914)">
													<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
													<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
												</g>
												<defs>
													<clipPath>
														<rect width={52} height={52} fill="white" />
													</clipPath>
												</defs>
											</svg>
										</div>
									</div>
								</SwiperSlide>	<SwiperSlide className="swiper-slide">
									<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
										<div className="d-flex align-items-center mb-5">
											<img className="avatar-lg" src="/assets/imgs/testimonial/pp.png" alt="infinia" />
											<div className="d-flex flex-column">
												<h6 className="ms-3 fs-6 mb-0">Riko S., </h6>
												<div className="flag ms-3">
													<img src="/assets/imgs/testimonial/flag.png" alt="infinia" style={{width: "20px"}}/>
													<span className="fs-8">Pengusaha UMKM</span>
												</div>
											</div>
										</div>
										<p className="text-900 border-bottom pb-4 mb-4">Gila banget developernya pelayanan mantul, free maintenance kalo ada kendala di bantu terus, pokoknya recomended dah tidak lepas dari tanggung jawabnya, terimaksih banyk buat tim dev dream .</p>
										<div className="d-flex">
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<span className="fs-8 text-600 ms-2">(For services and support)</span>
										</div>
										<div className="position-absolute top-0 end-0 m-4">
											<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
												<g clipPath="url(#clip0_551_13914)">
													<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
													<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
												</g>
												<defs>
													<clipPath>
														<rect width={52} height={52} fill="white" />
													</clipPath>
												</defs>
											</svg>
										</div>
									</div>
								</SwiperSlide>
									<SwiperSlide className="swiper-slide">
									<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
										<div className="d-flex align-items-center mb-5">
											<img className="avatar-lg" src="/assets/imgs/testimonial/pp.png" alt="infinia" />
											<div className="d-flex flex-column">
												<h6 className="ms-3 fs-6 mb-0">Agung T., </h6>
												<div className="flag ms-3">
													<img src="/assets/imgs/testimonial/flag.png" alt="infinia" style={{width: "20px"}}/>
													<span className="fs-8">Pengusaha</span>
												</div>
											</div>
										</div>
										<p className="text-900 border-bottom pb-4 mb-4">Pelayanan bagus banget terjadwal dan sesuai jobdesk , web nya bisa di pakai kenceng banget design nya modern kelihatan bersih gitu enak lah, recommended lah pokoknya.</p>
										<div className="d-flex">
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<span className="fs-8 text-600 ms-2">(For services and support)</span>
										</div>
										<div className="position-absolute top-0 end-0 m-4">
											<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
												<g clipPath="url(#clip0_551_13914)">
													<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
													<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
												</g>
												<defs>
													<clipPath>
														<rect width={52} height={52} fill="white" />
													</clipPath>
												</defs>
											</svg>
										</div>
									</div>
								</SwiperSlide>
									<SwiperSlide className="swiper-slide">
									<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
										<div className="d-flex align-items-center mb-5">
											<img className="avatar-lg" src="/assets/imgs/testimonial/pp.png" alt="infinia" />
											<div className="d-flex flex-column">
												<h6 className="ms-3 fs-6 mb-0">Salsabila A., </h6>
												<div className="flag ms-3">
													<img src="/assets/imgs/testimonial/flag.png" alt="infinia" style={{width: "20px"}}/>
													<span className="fs-8">-</span>
												</div>
											</div>
										</div>
										<p className="text-900 border-bottom pb-4 mb-4">Maaf ya kak sebelumnya saya banyak bertanya, dan saya sangat salut juga mas" nya ramah banget malah dijelasin sampai paham cara penggunaanya.</p>
										<div className="d-flex">
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<span className="fs-8 text-600 ms-2">(For services and support)</span>
										</div>
										<div className="position-absolute top-0 end-0 m-4">
											<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
												<g clipPath="url(#clip0_551_13914)">
													<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
													<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
												</g>
												<defs>
													<clipPath>
														<rect width={52} height={52} fill="white" />
													</clipPath>
												</defs>
											</svg>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
										<div className="d-flex align-items-center mb-5">
											<img className="avatar-lg" src="/assets/imgs/testimonial/pp.png" alt="infinia" />
											<div className="d-flex flex-column">
												<h6 className="ms-3 fs-6 mb-0"> Bayu H .,</h6>
												<div className="flag ms-3">
													<img src="/assets/imgs/testimonial/flag.png" alt="infinia" style={{width: "20px"}}/>
													<span className="fs-8">Startup Founder</span>
												</div>
											</div>
										</div>
										<p className="text-900 border-bottom pb-4 mb-4">Aplikasi mobile yang dibuat sangat responsif dan user-friendly. Timnya komunikatif dan paham kebutuhan saya.</p>
										<div className="d-flex">
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<span className="fs-8 text-600 ms-2">(For services and support)</span>
										</div>
										<div className="position-absolute top-0 end-0 m-4">
											<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
												<g clipPath="url(#clip0_551_13914)">
													<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
													<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
												</g>
												<defs>
													<clipPath>
														<rect width={52} height={52} fill="white" />
													</clipPath>
												</defs>
											</svg>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
										<div className="d-flex align-items-center mb-5">
											<img className="avatar-lg" src="/assets/imgs/testimonial/pp.png" alt="infinia" />
											<div className="d-flex flex-column">
												<h6 className="ms-3 fs-6 mb-0">Rina A., </h6>
												<div className="flag ms-3">
													<img src="/assets/imgs/testimonial/flag.png" alt="infinia" style={{width: "20px"}}/>
													<span className="fs-8">Pemilik Toko Online</span>
												</div>
											</div>
										</div>
										<p className="text-900 border-bottom pb-4 mb-4">Layanan luar biasa! Website bisnis saya selesai tepat waktu dan tampil sangat profesional.</p>
										<div className="d-flex">
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<span className="fs-8 text-600 ms-2">(For services and support)</span>
										</div>
										<div className="position-absolute top-0 end-0 m-4">
											<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
												<g clipPath="url(#clip0_551_13914)">
													<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
													<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
												</g>
												<defs>
													<clipPath>
														<rect width={52} height={52} fill="white" />
													</clipPath>
												</defs>
											</svg>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
										<div className="d-flex align-items-center mb-5">
											<img className="avatar-lg" src="/assets/imgs/testimonial/pp.png" alt="infinia" />
											<div className="d-flex flex-column">
												<h6 className="ms-3 fs-6 mb-0">Randi .,</h6>
												<div className="flag ms-3">
													<img src="/assets/imgs/testimonial/flag.png" alt="infinia" style={{width: "20px"}}/>
													<span className="fs-8">UMKM Owner</span>
												</div>
											</div>
										</div>
										<p className="text-900 border-bottom pb-4 mb-4">Layanan cepat, hasilnya profesional. Website saya naik di Google dan pelanggan makin mudah order!</p>
										<div className="d-flex">
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<span className="fs-8 text-600 ms-2">(For services and support)</span>
										</div>
										<div className="position-absolute top-0 end-0 m-4">
											<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
												<g clipPath="url(#clip0_551_13914)">
													<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
													<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
												</g>
												<defs>
													<clipPath>
														<rect width={52} height={52} fill="white" />
													</clipPath>
												</defs>
											</svg>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
										<div className="d-flex align-items-center mb-5">
											<img className="avatar-lg" src="/assets/imgs/testimonial/pp.png" alt="infinia" />
											<div className="d-flex flex-column">
												<h6 className="ms-3 fs-6 mb-0">Iqbal R., </h6>
												<div className="flag ms-3">
													<img src="/assets/imgs/testimonial/flag.png" alt="infinia" style={{width: "20px"}}/>
													<span className="fs-8">Direktur PT. Mitra Solusi</span>
												</div>
											</div>
										</div>
										<p className="text-900 border-bottom pb-4 mb-4">Saya merasa dilayani seperti partner, bukan hanya klien. Proyek ERP kami berjalan lancar dan efektif.</p>
										<div className="d-flex">
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<span className="fs-8 text-600 ms-2">(For services and support)</span>
										</div>
										<div className="position-absolute top-0 end-0 m-4">
											<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
												<g clipPath="url(#clip0_551_13914)">
													<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
													<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
												</g>
												<defs>
													<clipPath>
														<rect width={52} height={52} fill="white" />
													</clipPath>
												</defs>
											</svg>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
										<div className="d-flex align-items-center mb-5">
											<img className="avatar-lg" src="/assets/imgs/testimonial/pp.png" alt="infinia" />
											<div className="d-flex flex-column">
												<h6 className="ms-3 fs-6 mb-0">Sarah M.,</h6>
												<div className="flag ms-3">
													<img src="/assets/imgs/testimonial/flag.png" alt="infinia" style={{width: "20px"}}/>
													<span className="fs-8"> Konsultan Digital Marketing</span>
												</div>
											</div>
										</div>
										<p className="text-900 border-bottom pb-4 mb-4">Tim developer-nya berpengalaman. Website kami langsung naik ranking di Google setelah rilis!</p>
										<div className="d-flex">
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<span className="fs-8 text-600 ms-2">(For services and support)</span>
										</div>
										<div className="position-absolute top-0 end-0 m-4">
											<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
												<g clipPath="url(#clip0_551_13914)">
													<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
													<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
												</g>
												<defs>
													<clipPath>
														<rect width={52} height={52} fill="white" />
													</clipPath>
												</defs>
											</svg>
										</div>
									</div>
								</SwiperSlide>
							</div>
							<div className="swiper-pagination" />
							<div className="text-center mt-8 position-relative z-3" />
						</Swiper>
					</div>
				</div>
				<div className="position-absolute top-0 start-50 translate-middle-x z-0">
					<img src="/assets/imgs/service-2/bg-line.png" alt="infinia" />
				</div>
				<div className="rotate-center ellipse-rotate-success position-absolute z-0" />
				<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
			</section>


		</>
	)
}
