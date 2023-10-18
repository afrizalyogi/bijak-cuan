import "./artikel.css"

export default function Artikel() {
	return (
		<main id="artikel">
			<div className="hero">
				<div className="container">
					<div className="row flex-column-reverse flex-lg-row gap-5 gap-lg-0 align-items-center">
						<div className="col-lg-6">
							<h1 className="mb-4">
								Kiat Meningkatkan Pendapatan Bisnis Tanpa Menambah Utang
							</h1>
							<p className="mb-5">
								Pendapatan adalah salah satu aspek kunci dalam kesuksesan
								bisnis. <br />
								Meskipun seringkali pemilik bisnis menghadapi kebutuhan untuk
								mendapatkan pendanaan tambahan...
							</p>
							<button className="btn btn-primary">Lanjut Baca</button>
						</div>
						<div className="col-lg-6">
							<img className="card" src="/assets/artikel/hero.png" />
						</div>
					</div>
				</div>
			</div>

			<div className="container pt-5 pb-5">
				<h2 className="mb-4">Artikel Terbaru</h2>
				<div className="row">
					<div className="col-lg-3 col-md-6 mb-4">
						<div className="card">
							<img
								src="/assets/artikel/artikel-1.png"
								className="card-img-top"
							/>
							<div className="card-body">
								<h6>
									Mengoptimalkan Pengelolaan Keuangan untuk Usaha Menengah
									Kebawah
								</h6>
								<p className="card-text">
									Usaha menengah kebawah (UMKM) adalah tulang punggung ekonomi
									di banyak negara. Namun, seringkali UMKM menghadapi tantangan
									dalam mengelola keuangan mereka dengan efisien.{" "}
								</p>
							</div>
							<div className="card-footer">
								<a href="#" className="btn btn-primary w-100">
									Lihat Detail
								</a>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-md-6 mb-4">
						<div className="card">
							<img
								src="/assets/artikel/artikel-2.png"
								className="card-img-top"
							/>
							<div className="card-body">
								<h6>
									Tips Pengelolaan Keuangan Efektif untuk Usaha Menengah Kebawah
								</h6>
								<p className="card-text">
									Pengelolaan keuangan yang efektif adalah salah satu kunci
									kesuksesan usaha menengah ke bawah. Dalam artikel ini, kita
									akan membahas beberapa tips dan praktik terbaik yang dapat
									membantu Anda mengelola...
								</p>
							</div>
							<div className="card-footer">
								<a href="#" className="btn btn-primary w-100">
									Lihat Detail
								</a>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-md-6 mb-4">
						<div className="card">
							<img
								src="/assets/artikel/artikel-3.png"
								className="card-img-top"
							/>
							<div className="card-body">
								<h6>Strategi Membangun Dana Darurat Bisnis</h6>
								<p className="card-text">
									Pentingnya memiliki dana darurat bisnis dan memberikan
									strategi praktis untuk membangunnya. Ini termasuk
									langkah-langkah untuk mengalokasikan dana darurat, menentukan
									jumlah yang sesuai, dan bagaimana menggunakannya dalam...
								</p>
							</div>
							<div className="card-footer">
								<a href="#" className="btn btn-primary w-100">
									Lihat Detail
								</a>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-md-6 mb-4">
						<div className="card">
							<img
								src="/assets/artikel/artikel-4.png"
								className="card-img-top"
							/>
							<div className="card-body">
								<h6>
									Cara Efektif Menggunakan Teknologi dalam Pengelolaan Keuangan
									Bisnis
								</h6>
								<p className="card-text">
									Pebisnis usaha menengah kebawah dapat menggunakan teknologi
									terbaru dalam pengelolaan keuangan bisnis. Ini mencakup
									aplikasi keuangan, perangkat lunak akuntansi, dan alat digital
									lainnya yang dapat...
								</p>
							</div>
							<div className="card-footer">
								<a href="#" className="btn btn-primary w-100">
									Lihat Detail
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
