import "../pembayaran.css"
import Link from "next/link"

export default async function PembayaranSukses() {
	return (
		<main id="pembayaran">
			<div className="container align-items-center d-flex justify-content-center">
				<div className="container-lg text-center">
					<h1>Pembayaran Sukses</h1>
					<Link href={"#"} className="btn btn-primary">
						Mulai Belajar
					</Link>
				</div>
			</div>
		</main>
	)
}
