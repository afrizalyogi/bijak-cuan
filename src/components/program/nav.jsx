"use client"
import Link from "next/link"
import { useState } from "react"
import TentangProgram from "./content-tentang"
import KurikulumProgram from "./content-kurikulum"
import AlatProgram from "./content-alat"

export default function NavProgram() {
	const [tab, setTab] = useState(0)

	const handleTabChange = (tab) => {
		setTab(tab)
	}
	return (
		<section id="content-detail">
			<div id="nav-program" className="d-flex">
				<Link
					href={"#"}
					className={`nav-item ${tab === 0 ? "active" : ""}`}
					onClick={() => handleTabChange(0)}>
					Tentang
				</Link>
				<Link
					href={"#"}
					className={`nav-item ${tab === 1 ? "active" : ""}`}
					onClick={() => handleTabChange(1)}>
					Kurikulum
				</Link>
				<Link
					href={"#"}
					className={`nav-item ${tab === 2 ? "active" : ""}`}
					onClick={() => handleTabChange(2)}>
					Alat
				</Link>
			</div>
			<div id="content-program">
				{tab === 0 && <TentangProgram />}
				{tab === 1 && <KurikulumProgram />}
				{tab === 2 && <AlatProgram />}
			</div>
		</section>
	)
}
