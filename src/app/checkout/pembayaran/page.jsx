"use client"
import "./pembayaran.css"
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
							<div className="d-flex flex-column">
								<p>Metode Pembayaran</p>
								<div className="mt-4">
									<div className="mb-4">
										<b>Virtual Account</b>
										<div className="d-flex flex-wrap gap-2 mw-100">
											<img src="/assets/pembayaran/bca.png" alt="BCA" />
											<img src="/assets/pembayaran/bni.png" alt="BNI" />
											<img src="/assets/pembayaran/mandiri.png" alt="Mandiri" />
										</div>
									</div>
									<div className="mt-4">
										<b>E-Wallet</b>
										<div className="d-flex flex-wrap gap-2 mw-100">
											<img src="/assets/pembayaran/gopay.png" alt="Gopay" />
											<img
												src="/assets/pembayaran/shopeepay.png"
												alt="Shopeepay"
											/>
											<Link href={"/checkout/pembayaran/qris"}>
												<img src="/assets/pembayaran/qris.png" alt="QRIS" />
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
