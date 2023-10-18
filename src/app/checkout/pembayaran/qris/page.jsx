"use client"
import "../pembayaran.css"
import Link from "next/link"

export default function Pembayaran() {
	return (
		<main id="pembayaran">
			<div className="container align-items-center d-flex justify-content-center">
				<div className="container-lg">
					<div className="card">
						<div className="card-header">
							<h4>Bijakcuan.</h4>
						</div>
						<div className="card-body">
							<div className="d-flex flex-column mb-4">
								<p>Total Pembayaran</p>
								<h2>Rp. 74.227</h2>
							</div>
							<div className="d-flex flex-column justify-content-center text-center">
								<div className="mb-4 d-flex flex-column">
									<b>QRIS</b>
									<Link href={"/checkout/pembayaran/sukses"} rel="nofollow">
										<img src="https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fbijakcuan.vercel.app%2F&chs=180x180&choe=UTF-8&chld=L|2" />
									</Link>
								</div>
							</div>
							<Link
								href={"/checkout/pembayaran"}
								className="btn btn-primary w-100">
								Ganti Metode Pembayaran
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
