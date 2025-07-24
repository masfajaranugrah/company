"use client"
import { useEffect } from 'react'
 
import Cta from "@/components/sections/Cta"
 
import LogoCloud from "@/components/sections/LogoCloud"
import Services from "@/components/sections/Services"
import Static from "@/components/sections/Static"
import Layout from "@/components/layout/Layout"
import Hero from "@/components/sections/Hero"
 
import Faqs from "@/components/sections/Faqs"
import Testimonial3 from "@/components/sections/Testimonial"
import { setCookie, getCookie } from "@/utils/cookie"

 export default function Home() {
	useEffect(() => {
		const hasVisited = getCookie("hasVisited")

		if (!hasVisited) {
  			setCookie("hasVisited", "true", 30)  
		}  
	}, [])

	return (
		<>

			<Layout >
				<Hero />
				{/* <LogoCloud /> */}
				  <Services />
				<Cta />
				<Static />
 				<Faqs />
			  <Testimonial3 />  
			</Layout>
		</>
	)
}