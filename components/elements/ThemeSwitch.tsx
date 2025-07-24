'use client'
import { useEffect, useState } from "react"

export default function ThemeSwitch() {
	const [theme, setTheme] = useState<string | null>(null)  

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") || "light"
		setTheme(savedTheme)
		document.documentElement.setAttribute("data-bs-theme", savedTheme)
	}, [])

	useEffect(() => {
		if (theme) {
			localStorage.setItem("theme", theme)
			document.documentElement.setAttribute("data-bs-theme", theme)
		}
	}, [theme])

	const toggleTheme = () => {
		setTheme(prev => (prev === "light" ? "dark" : "light"))
	}

	// Jangan render icon sebelum theme siap
	if (!theme) return null

	return (
		<div
			className="dark-light-switcher d-flex justify-content-center align-items-center icon-shape icon-md border bg-white rounded-3 ms-3 me-md-3 me-0"
			onClick={toggleTheme}
			style={{ cursor: "pointer" }}
		>
			<i className={`bi theme-icon ${theme === "light" ? "bi-moon-stars-fill" : "bi-sun-fill"}`} />
		</div>
	)
}
