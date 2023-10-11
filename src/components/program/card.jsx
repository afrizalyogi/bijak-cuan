"use client"
import { useState } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import price from "@/data/program-price"

export default function CardProgram() {
	const [paket, setPaket] = useState("monthly")

	const handlePaketChange = (paket) => {
		setPaket(paket)
	}

	return (
		<div className="card d-flex flex-col gap-5">
			<h4>Bijak Cuan Membership</h4>
			<div id="content-paket">
				<h6>Pilihan Paket</h6>
				<div className="row">
					<div className="col">
						<div
							className={`btn ${
								paket === "trial" ? "btn-primary" : "btn-outline-primary"
							}`}
							onClick={() => handlePaketChange("trial")}>
							Trial
						</div>
					</div>
					<div className="col">
						<div
							className={`btn ${
								paket === "monthly" ? "btn-primary" : "btn-outline-primary"
							}`}
							onClick={() => handlePaketChange("monthly")}>
							Bulanan
						</div>
					</div>
					<div className="col">
						<div
							className={`btn ${
								paket === "lifetime" ? "btn-primary" : "btn-outline-primary"
							}`}
							onClick={() => handlePaketChange("lifetime")}>
							Lifetime
						</div>
					</div>
				</div>
			</div>
			<div id="content-benefit">
				<h6>Benefit</h6>
				<div>
					<div className="d-flex gap-2">
						<FontAwesomeIcon icon={faCircleCheck} />
						<p>Materi Up-To-Date</p>
					</div>
					<div className="d-flex gap-2">
						<FontAwesomeIcon icon={faCircleCheck} />
						<p>Mentor Profesional</p>
					</div>
					<div className="d-flex gap-2">
						<FontAwesomeIcon icon={faCircleCheck} />
						<p>Forum Diskusi</p>
					</div>
				</div>
			</div>
			<div id="content-price">
				<h6>Biaya</h6>
				<h2>{price[paket]}</h2>
			</div>
			<div id="content-checkout">
				<Link href={"#"} className="btn btn-primary w-100">
					Gabung Sekarang
				</Link>
			</div>
		</div>
	)
}
