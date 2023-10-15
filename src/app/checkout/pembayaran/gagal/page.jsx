import "../pembayaran.css"
import Link from "next/link"

export default async function PembayaranGagal() {
	return (
		<main id="pembayaran">
			<div className="container align-items-center d-flex justify-content-center">
				<div className="container-lg text-center">
					<h1>Pembayaran Gagal</h1>
					<Link href={"#"} className="btn btn-primary">
						Bayar Kembali
					</Link>
				</div>
			</div>
		</main>
	)
}
