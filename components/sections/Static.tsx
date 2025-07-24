'use client'
import CountUp from 'react-countup'

export default function Static() {
	return (
		<section className="section-static-1 position-relative fix z-0 section-padding">
			<div className="container">
				<div className="inner">
					<div className="row justify-content-between">
						<div className="col-xl-3 col-lg-4 col-sm-6">
							<div className="counter-item-cover counter-item">
								<div className="content text-center mx-auto">
									<h6>Pertumbuhan Klien <br /> Secara Konsisten</h6>
									<span className="h1 count fw-black text-primary my-0">
										+<CountUp end={24} enableScrollSpy={true} />k
									</span>
									<p className="fs-5">Akun baru terdaftar</p>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-lg-4 col-sm-6">
							<div className="counter-item-cover counter-item">
								<div className="content text-center mx-auto">
									<h6>Proyek Digital <br /> Diselesaikan</h6>
									<span className="h1 count fw-black text-primary my-0">
										+<CountUp end={1024} enableScrollSpy={true} />
									</span>
									<p className="fs-5">Website & Aplikasi</p>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-lg-4 col-sm-6">
							<div className="counter-item-cover counter-item">
								<div className="content text-center mx-auto">
									<h6>Tim Ahli yang <br /> Berdedikasi</h6>
									<span className="h1 count fw-black text-primary my-0">
										+<CountUp end={865} enableScrollSpy={true} />
									</span>
									<p className="fs-5">Developer & Designer</p>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-lg-4 col-sm-6">
							<div className="counter-item-cover counter-item">
								<div className="content text-center mx-auto">
									<h6>Peningkatan <br /> Visibilitas Digital</h6>
									<span className="h1 count fw-black text-primary my-0">
										+<CountUp end={168} enableScrollSpy={true} />k
									</span>
									<p className="fs-5">Interaksi media & kampanye</p>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
	)
}
