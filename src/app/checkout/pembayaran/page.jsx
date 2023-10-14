import "./pembayaran.css"

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
							<div className="d-flex flex-column mb-5">
								<p>Total Pembayaran</p>
								<h2>Rp 74.227</h2>
							</div>
							<div className="d-flex flex-column gap-5">
								<p>Metode Pembayaran</p>
								<h6>Virtual Account</h6>
								<h6>E-Wallet</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
