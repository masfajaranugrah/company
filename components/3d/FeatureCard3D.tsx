export default function FeatureCard3D() {
  return (
    <div className="card-3d-container" data-aos="fade-right" data-aos-delay={200}>
      <div className="card-3d backdrop-filter rounded-4 p-4">
        <div className="card-3d-content">
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
        <div className="card-3d-glow"></div>
        <div className="card-3d-shadow"></div>
      </div>
    </div>
  )
}
