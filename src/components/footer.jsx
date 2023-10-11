export default function Footer() {
	return (
		<footer>
			<div className="container footer-content">
				<div className="row">
					<div className="col">
						<h4>
							<a className="fw-bold" href="#">
								Bijakcuan.
							</a>
						</h4>
						<p>Pelatihan Keuangan untuk Sukses Finansial</p>
					</div>
					<div className="col">
						<h6>Halaman</h6>
						<ul className="navbar-nav">
							<li>
								<a href="#">Program</a>
							</li>
							<li>
								<a href="#">Promo</a>
							</li>
						</ul>
					</div>
					<div className="col">
						<h6>Komunitas</h6>
						<ul className="navbar-nav">
							<li>
								<a href="#">Event</a>
							</li>
							<li>
								<a href="#">Artikel</a>
							</li>
						</ul>
					</div>
					<div className="col">
						<h6>Hubungi Kami</h6>
						<ul className="navbar-nav">
							<li>
								<a href="#">Pusat Bantuan</a>
							</li>
							<li>
								<a href="#">Kontak</a>
							</li>
						</ul>
					</div>
					<div className="col">
						<h6>Media Sosial</h6>
						<div className="d-flex gap-6"></div>
					</div>
				</div>
			</div>
			<div className="border-top">
				<div className="container">
					<p className="pt-4 pb-2">
						© 2023 <b>Bijak Cuan</b>. All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}
