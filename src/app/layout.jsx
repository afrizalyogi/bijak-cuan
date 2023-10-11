import "bootstrap/dist/css/bootstrap.css"
import "./globals.css"
import Bootstrap from "@/utils/bootstrap"
import { Montserrat } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["300", "400", "600", "700"],
})

export const metadata = {
	title: "Bijakcuan.",
	description:
		"Membantu kamu mengelola keuangan bisnis bersama para ahli keuangan",
}

export default function RootLayout({ children }) {
	return (
		<html lang="id">
			<body className={montserrat.className}>
				<Navbar />
				{children}
				<Footer />
				<Bootstrap />
			</body>
		</html>
	)
}
