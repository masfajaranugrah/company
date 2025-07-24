export default function Logo3D() {
  return (
    <div className="logo-3d-container" data-aos="fade-up" data-aos-delay={100}>
      <div className="logo-3d-scene">
        <div className="logo-3d-wrapper">
          <img src="/assets/imgs/logo/logo.png" alt="DevDream Logo" className="logo-3d" />
          <div className="logo-glow"></div>
          <div className="logo-shadow"></div>
        </div>
        <div className="floating-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
          <div className="floating-triangle triangle-1"></div>
          <div className="floating-triangle triangle-2"></div>
        </div>
      </div>
    </div>
  )
}
