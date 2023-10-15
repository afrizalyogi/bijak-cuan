import "../pembayaran.css"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"

export default async function PembayaranGagal() {
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
					<Link href={"/program"} className="btn btn-primary">
						Kembali
					</Link>
				</div>
			</div>
		</main>
	)
}
