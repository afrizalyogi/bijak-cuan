export default function Footer() {
	return (
		<footer >
			<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet"></link>
			<div className="container footer-content">
				<div className="row justify-content-around">
					<div className="col">
						<h4>
							<a className="fw-bold" href="#">
								Bijakcuan.
							</a>
						</h4>
						<p>Pelatihan Keuangan untuk Sukses Finansial</p>
					</div>
					<div class="col-lg-2 col-md-6 mb-4 mb-md-0">
						<h5 class="">Halaman</h5>

						<ul class="list-unstyled mb-0">
						<li>
							<a href="#!" class="text-white">Program</a>
						</li>
						<li>
							<a href="#!" class="text-white">Promo</a>
						</li>
						</ul>
					</div>

					<div class="col-lg-2 col-md-6 mb-4 mb-md-0">
						<h5 class=" ">Komunitas</h5>

						<ul class="list-unstyled">
						<li>
							<a href="#!" class="text-white">Event</a>
						</li>
						<li>
							<a href="#!" class="text-white">Artikel</a>
						</li>
						</ul>
					</div>

					<div class="col-lg-2 col-md-6 mb-4  mb-md-0">
						<h5 class=" ">Hubungi kami</h5>

						<ul class="list-unstyled">
						<li>
							<a href="#!" class="text-white">Pusat Bantuan</a>
						</li>
						<li>
							<a href="#!" class="text-white">Kontak</a>
						</li>
						</ul>
					</div>

					<div class="col-lg-2 col-md-6 mb-4 mb-md-0 ms-5">
						<h5 class=" ">Media Sosial</h5>
						<i class="fab fa-twitter fa-lg "></i>
						<i class="fab fa-instagram  fa-lg mx-3"></i>
						<i class="fab fa-youtube fa-lg "></i>
						<i class="fab fa-whatsapp fa-lg  mx-3"></i>
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
