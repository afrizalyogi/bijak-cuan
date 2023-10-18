"use client"
import { useState } from "react"
import Pengaturan from "@/app/profil/pengaturan/page"
import KursusSaya from "@/app/profil/kursus/page"
import "./profil.css"
import Transaksi from "./transaksi/page"
import { handleLogout } from "@/components/handle-logout"

export default function Profil() {
	const [activeTab, setActiveTab] = useState("kursus-saya")

	const handleTabChange = (selectedTab) => {
		setActiveTab(selectedTab)
	}

	return (
		<main>
			<div className="container pb-5 h-100">
				<div className="container mt-5 mb-5">
					<div className="row justify-content-evenly">
						<div className="col-lg-3">
							<div className="card mb-4">
								<div className="card-body text-center">
									<img
										src="assets/profil/user.png"
										alt="avatar"
										className="rounded-circle img-fluid"
										style={{ width: "100px" }}
									/>
									<p className="mt-2">Halo, Ani</p>
								</div>
								<hr className="mb-0" />
								<div className="sidebar">
									<a
										onClick={() => handleTabChange("kursus-saya")}
										className={activeTab === "kursus-saya" ? "active" : ""}>
										Kursus Saya
									</a>
									<a
										onClick={() => handleTabChange("transaksi")}
										className={activeTab === "transaksi" ? "active" : ""}>
										Transaksi
									</a>
									<a
										href="/bantuan"
										className={activeTab === "pusat-bantuan" ? "active" : ""}>
										Pusat Bantuan
									</a>
									<a
										onClick={() => handleTabChange("pengaturan")}
										className={activeTab === "pengaturan" ? "active" : ""}>
										Pengaturan
									</a>
									<a
										href={"/"}
										onClick={() => handleLogout()}
										className={activeTab === "keluar" ? "active mb-3" : "mb-3"}>
										Keluar
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-9">
							{activeTab === "pengaturan" ? (
								<div>
									<h5 className="mb-4">Profil Saya</h5>
									<Pengaturan />
								</div>
							) : activeTab === "kursus-saya" ? (
								<div>
									<h5 className="mb-4">Kursus Saya</h5>
									<KursusSaya></KursusSaya>
								</div>
							) : activeTab === "transaksi" ? (
								<div>
									<h5 className="mb-4">Transaksi</h5>
									<Transaksi></Transaksi>
								</div>
							) : activeTab === "pusat-bantuan" ? (
								<div>
									<h5 className="mb-4">Pusat Bantuan</h5>
								</div>
							) : activeTab === "keluar" ? (
								<div>
									<h5 className="mb-4">Keluar</h5>
								</div>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
