export default function Checkout() {
	return (
		<main>
			<div>
				<h2>Laporan Terakhir Dapatkan Pembelajaran Impian Anda</h2>
			</div>
			<div className="d-flex">
				<div className="card">
					<div></div>
					<h4>Bijakcuan Membership</h4>
					<ul>
						<li>Materi Up-To-Date</li>
						<li>Mentor Profesional</li>
						<li>Forum Diskusi</li>
					</ul>
				</div>
				<div className="card">
					<div>
						<h6>Metode Pembayaran</h6>
					</div>
					<div>
						<h6>Kode Promo</h6>
					</div>
					<div>
						<h6>Detail Pembayaran</h6>
					</div>
					<div className="d-flex justify-content-between">
						<h4>Total Harga</h4>
						<h4>Rp 88.877</h4>
					</div>
					<div>
						<button className="btn btn-primary">
							Bayar & Gabung Kelas Sekarang
						</button>
					</div>
				</div>
			</div>
		</main>
	)
}
