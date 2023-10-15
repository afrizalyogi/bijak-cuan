import "../pembayaran.css"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/navigation"

export default async function PembayaranGagal() {
	const router = useRouter()
	const handleRefresh = () => {
		router.reload()
	}
	return (
		<main id="pembayaran">
			<div className="container align-items-center d-flex justify-content-center">
				<div className="container-lg text-center">
					<FontAwesomeIcon
						icon={faTimesCircle}
						className="mb-4 gagal"></FontAwesomeIcon>
					<h1 className="mb-4">Pembayaran Gagal</h1>
					<p className="mb-5 w-75 mx-auto">
						Silahkan lakukan pembayaran pesanan Anda
					</p>
					<Link
						href={"/program"}
						onClick={handleRefresh}
						className="btn btn-primary">
						Kembali
					</Link>
				</div>
			</div>
		</main>
	)
}
