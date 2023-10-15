"use client"
import "../pembayaran.css"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/navigation"

export default async function PembayaranSukses() {
	const router = useRouter()
	const handleRefresh = () => {
		router.reload()
	}
	return (
		<main id="pembayaran">
			<div className="container align-items-center d-flex justify-content-center">
				<div className="container-lg text-center">
					<FontAwesomeIcon
						icon={faCheckCircle}
						className="mb-4"></FontAwesomeIcon>
					<h1 className="mb-4">Pembayaran Sukses</h1>
					<p className="mb-5 w-75 mx-auto">
						Silahkan mempelajari materi kelas yang telah kami design dengan baik
						untuk mencapai goals Anda
					</p>
					<Link href={"#"} onClick={handleRefresh} className="btn btn-primary">
						Mulai Belajar
					</Link>
				</div>
			</div>
		</main>
	)
}
