import Link from "next/link";
import { useState } from "react";
export default function Price() {
    // Accordion


    const [activePlan, setActivePlan] = useState('monthly')

    const handlePlanChange = (planType: any) => {
        setActivePlan(planType)
    }

    const getPrices = () => {
        if (activePlan === 'monthly') {
            return {
                ladingPrice: '950.000',
                linklanding: "https://wa.me/6287836167585?text=Halo%20Dev%20Dream%2C%20saya%20tertarik%20membuat%20landing%20page%20untuk%20personal%20brand%20saya.%20Apakah%20bisa%20diskusi%20dulu%20sebelum%20saya%20mulai%3F",
                perusahaanPrice: '3 jt',
                linkperusahaan: 'https://wa.me/6287836167585?text=Halo%20Dev%20Dream%2C%20saya%20mewakili%20perusahaan%20dan%20tertarik%20membuat%20landing%20page%20profesional.%20Apakah%20kami%20bisa%20berdiskusi%20lebih%20lanjut%20mengenai%20kebutuhan%20dan%20harganya%3F',
                CustomePrice: '1.5 jt',
                listcustome : 'https://wa.me/6287836167585?text=Halo%20Dev%20Dream%2C%20saya%20membutuhkan%20web%20custom%20dengan%20fitur%20khusus.%20Apakah%20bisa%20dibantu%20diskusi%20dulu%20terkait%20teknis%20dan%20estimasi%20biayanya%3F'
            }
        }
    }

    const prices = getPrices()
    return (
        <>

            {/*Pricing 3*/}
            <section className="section-pricing-2 position-relative fix section-padding">
                <div className="container position-relative z-2">
                    <div className="text-center mb-8">
                        <div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
                            <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                            <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Pricing</span>
                        </div>
                        <h3 className="ds-3 my-3 fw-bold">
                            Jasa Pembuatan Website Terbaik di Indonesia

                        </h3>
                        <p className="fs-5 mb-0">
Dapatkan layanan pembuatan website berkualitas tinggi dengan harga yang lebih terjangkau. DevDream menyediakan lebih dari 100 pilihan desain template yang modern, responsif, dan ramah pengguna. Kami berkomitmen membantu bisnis Anda berkembang secara digital melalui solusi web yang optimal. Nikmati layanan garansi selamanya jika Anda menggunakan layanan hosting dari DevDream. Sangat cocok untuk berbagai skala usaha, mulai dari UMKM hingga perusahaan besar.                        </p>

                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-3 col-md-12 px-lg-0 mb-lg-0 mb-4 ">
                            <div className="p-6 bg-white position-relative border rounded-4 z-1 rounded-end-lg-0">
                                <h6>Landingpage</h6>
                                <p className="fs-7 text-black">mulai dari</p>

                                <div className="d-flex">
                                    <span className="fs-5 text-600 me-1">Rp.</span>
                                    <h3 className="text-primary mb-0 text-price-enterprise">{prices?.ladingPrice}</h3>
                                </div>
                                <a href={prices?.linklanding} className="btn btn-outline-secondary hover-up w-100 d-flex justify-content-between my-5">
                                    Pesan Sekaran
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path className="fill-dark" d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" fill="#111827" />
                                    </svg>
                                </a>
                                <ul className="list-unstyled mb-0">
                                    <li className="d-flex align-items-center mb-4">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                                        <h6 className="fs-6 mb-0 ms-2"> Desain profesional & modern</h6>
                                    </li>
                                    <li className="d-flex align-items-center mb-4">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                                        <h6 className="fs-6 mb-0 ms-2">Free domain .MY.ID</h6>
                                    </li>
                                    <li className="d-flex align-items-center mb-4">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                                        <h6 className="fs-6 mb-0 ms-2">Optimasi SEO On-Page Dasar</h6>
                                    </li>
                                    <li className="d-flex align-items-center mb-4">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                                        <h6 className="fs-6 mb-0 ms-2">15 GB SSD Storage</h6>
                                    </li>
                                    <li className="d-flex align-items-center mb-4">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                                        <h6 className="fs-6 mb-0 ms-2">Email bisnis (nama@domainmu)</h6>
                                    </li>

                                    <li className="d-flex align-items-center mb-4">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                                        <h6 className="fs-6 mb-0 ms-2">Gratis Domain & Maintenance 1 Tahun</h6>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                                        <h6 className="fs-6 mb-0 ms-2 text-black">Automatic SSL installation</h6>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 mb-lg-0 mb-4 px-lg-0">
                            <div className="p-8 bg-linear-2 position-relative border rounded-4 z-1 border-start-lg-0">
                                <div className="position-absolute top-0 end-0 z-0">
                                    <img src="/assets/imgs/pricing-3/bg-line-1.png" alt="infinia" />
                                </div>
                                <div className="position-relative z-1">
                                    <h6 className="text-white">Perusahaan
                                    </h6>
                                    <p className="fs-7 text-white">mulai dari</p>
                                    <div className="d-flex">
                                        <span className="fs-2 me-1 text-white">Rp</span>
                                        <h1 className="m-0 text-price-standard fw-black text-white">{prices?.perusahaanPrice}</h1>
                                    </div>
                                    <ul className="list-unstyled mb-0 mt-3">
                                        <li className="d-flex align-items-center mb-4">
                                            <img src="/assets/imgs/pricing-3/check-white.svg" alt="infinia" />
                                            <h6 className="fs-6 mb-0 ms-2 text-white">Desain korporat yang profesional & kredibel</h6>
                                        </li>
                                        <li className="d-flex align-items-center mb-4">
                                            <img src="/assets/imgs/pricing-3/check-white.svg" alt="infinia" />
                                            <h6 className="fs-6 mb-0 ms-2 text-white">Fitur CRM, formulir kontak</h6>
                                        </li>
                                        <li className="d-flex align-items-center mb-4">
                                            <img src="/assets/imgs/pricing-3/check-white.svg" alt="infinia" />
                                            <h6 className="fs-6 mb-0 ms-2 text-white">Optimasi SEO Struktur + Sitemap XML</h6>
                                        </li>
                                        <li className="d-flex align-items-center mb-4">
                                            <img src="/assets/imgs/pricing-3/check-white.svg" alt="infinia" />
                                            <h6 className="fs-6 mb-0 ms-2 text-white">Dukungan 24/7 via Email & Chat</h6>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <img src="/assets/imgs/pricing-3/check-white.svg" alt="infinia" />
                                            <h6 className="fs-6 mb-0 ms-2 text-white">Gratis Domain & Maintenance 1 Tahun</h6>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <img src="/assets/imgs/pricing-3/check-white.svg" alt="infinia" />
                                            <h6 className="fs-6 mb-0 ms-2 text-white">UNLIMITED Disk Space</h6>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <img src="/assets/imgs/pricing-3/check-white.svg" alt="infinia" />
                                            <h6 className="fs-6 mb-0 ms-2 text-white">Free Domain .COM</h6>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <img src="/assets/imgs/pricing-3/check-white.svg" alt="infinia" />
                                            <h6 className="fs-6 mb-0 ms-2 text-white">Automatic SSL installation</h6>
                                        </li>
                                         <li className="d-flex align-items-center">
                                            <img src="/assets/imgs/pricing-3/check-white.svg" alt="infinia" />
                                            <h6 className="fs-6 mb-0 ms-2 text-white">Proteksi AntiDDoS</h6>
                                        </li>
                                         <li className="d-flex align-items-center">
                                            <img src="/assets/imgs/pricing-3/check-white.svg" alt="infinia" />
                                            <h6  className="fs-6 mb-0 ms-2 text-white">Prosesor High End</h6>
                                        </li>
                                    </ul>
                                    <a href={prices?.linkperusahaan} className="btn bg-white-keep text-primary hover-up w-100 d-flex justify-content-between mt-5">
                                        Pesan Sekarang
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                            <path d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" fill="#6d4df2" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 px-lg-0 mb-lg-0 mb-4">
                            <div className="p-6 bg-white position-relative border rounded-4 z-1 border-start-lg-0 rounded-start-lg-0">
                                <h6>Custom</h6>
                                <p className=" fs-7">mulai dari</p>
                                <div className="d-flex">
                                    <span className="fs-5 text-600 me-1">Rp</span>
                                    <h3 className="text-primary mb-0 text-price-enterprise">{prices?.CustomePrice}</h3>
                                </div>
                                <a href={prices?.listcustome} className="btn btn-outline-secondary hover-up w-100 d-flex justify-content-between my-5">
                                    Pesan Sekarang
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path className="fill-dark" d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" fill="#111827" />
                                    </svg>
                                </a>
                                <ul className="list-unstyled mb-0">
                                    <li className="d-flex align-items-center mb-4">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                                        <h6 className="fs-6 mb-0 ms-2">Website & sistem disesuaikan penuh dengan kebutuhanmu</h6>
                                    </li>
                                    <li className="d-flex align-items-center mb-4">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                                        <h6 className="fs-6 mb-0 ms-2">Keamanan tingkat tinggi + skalabilitas cloud</h6>
                                    </li>
                                    <li className="d-flex align-items-center mb-4">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                                        <h6 className="fs-6 mb-0 ms-2">Integrasi dengan lebih dari 50 platform (API, CRM, Gateway, dll)</h6>
                                    </li>
                                    <li className="d-flex align-items-center mb-4">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                                        <h6 className="fs-6 mb-0 ms-2">SEO Advanced (Schema Markup, Speed Optimization)</h6>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                                        <h6 className="fs-6 mb-0 ms-2">Free Domain .COM</h6>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                                        <h6 className="fs-6 mb-0 ms-2">Gratis Domain & Maintenance 1 Tahun</h6>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-10">
                           <p className="mb-5 fs-5 text-center text-20">
                            Jika ada pertanyaan lain atau ingin membuat <span className="fw-bold">aplikasi mobile</span> bisa bubungin tim kami
                        </p>
                        <div className="d-flex align-items-center justify-content-lg-cener justify-content-center">
                            <Link href="https://wa.me/6287836167585?text=Halo%20Desk%20Dream%2C%20saya%20tertarik%20dengan%20jasa%20yang%20ditawarkan.%20Bolehkah%20saya%20berdiskusi%20terlebih%20dahulu%3F" className="btn btn-gradient">
                                Hubungi Kami
                                <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                    <path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                             
                        </div>
                    </div>
                </div>
                <div className="position-absolute bottom-0 start-50 translate-middle-x z-0">
                    <img src="/assets/imgs/pricing-3/bg-line-2.png" alt="infinia" />
                </div>
                <div className="rotate-center ellipse-rotate-success position-absolute top-50 z-1" />
                <div className="rotate-center-rev ellipse-rotate-primary position-absolute top-50 z-1" />
            </section>
        </>
    );
}


