'use client'
import Link from 'next/link'
import { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	const [isAccordion, setIsAccordion] = useState(0)

	const handleAccordion = (key: any) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>
			{/* Offcanvas search */}
			<div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${isMobileMenu ? 'sidebar-visible' : ''}`}>
				<div className="mobile-header-wrapper-inner">
					<div className="mobile-header-logo">
						<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
							<img src="/assets/imgs/logo/logo.png" alt="dev" className='me-2' style={{width:"30px"}} />
							<span>Dev Dream</span>
						</Link>
						<div className={`burger-icon burger-icon-white border rounded-3 ${isMobileMenu ? 'burger-close' : ''}`} onClick={handleMobileMenu}>
							<span className="burger-icon-top" />
							<span className="burger-icon-mid" />
							<span className="burger-icon-bottom" />
						</div>
					</div>
					<div className="mobile-header-content-area">
						<div className="perfect-scroll">
							<div className="mobile-menu-wrap mobile-header-border">
								<nav>
									<ul className="mobile-menu font-heading ps-0">
										<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center" href="/">Home</Link>
					</li>
						<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center" href="our-teams">Our Teams</Link>
					</li>
						{/* <li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center" href="proses-pekerjaan">Proses Pekerjaan</Link>
					</li> */}
					<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center" href="contact">Contact</Link>
					</li>
									 
									 
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
