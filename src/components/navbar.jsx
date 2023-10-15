"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
	const route = usePathname()
	return (
		<nav className="navbar navbar-expand-lg fixed-top pt-3 pb-3">
			<div className="container">
				<h4>
					<Link className="navbar-brand fw-bold" href={"/"}>
						Bijakcuan.
					</Link>
				</h4>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse gap-4" id="navbarNav">
					<ul className="navbar-nav ms-auto align-items-center gap-2">
						<li className="nav-item">
							<Link
								className={`nav-link ${route === "/" ? "active" : ""}`}
								aria-current="page"
								href={"/"}>
								Beranda
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className={`nav-link ${route === "/program" ? "active" : ""}`}
								href={"/program"}>
								Program
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className={`nav-link ${route === "/event" ? "active" : ""}`}
								href={"/event"}>
								Event
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className={`nav-link ${route === "/promo" ? "active" : ""}`}
								href={"/promo"}>
								Promo
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className={`nav-link ${route === "/artikel" ? "active" : ""}`}
								href={"/artikel"}>
								Artikel
							</Link>
						</li>
					</ul>
					<ul className="navbar-nav gap-2 mt-2 mt-lg-0 align-items-center">
						<li className="nav-item w-100">
							<Link className="btn btn-outline-primary w-100" href={"/masuk"}>
								Masuk
							</Link>
						</li>
						<li className="nav-item w-100">
							<Link className="btn btn-primary w-100" href={"/daftar"}>
								Daftar
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
