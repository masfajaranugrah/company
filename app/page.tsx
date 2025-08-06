"use client"
import { useEffect } from 'react'
 
import Cta from "@/components/sections/Cta_new"
 
 import Services from "@/components/sections/Services"
 import Layout from "@/components/layout/Layout"
import Hero from "@/components/sections/Hero"
 
import Faqs from "@/components/sections/Faqs"
import Testimonial3 from "@/components/sections/Testimonial"
import { setCookie, getCookie } from "@/utils/cookie"
import LogoCloud from '@/components/sections/LogoCloud'
import Price from '@/components/sections/Price'
import  WhatsAppButton from '@/components/sections/WhatsappButton'
 
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
				<LogoCloud />
				<Price/>
				 <Cta />
				 <Services />
  				<Faqs />
			  <Testimonial3 />  
			</Layout>
				 <WhatsAppButton />
		</>
	)
}