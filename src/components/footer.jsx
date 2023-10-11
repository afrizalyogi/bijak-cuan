import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faTwitter,
	faInstagram,
	faWhatsapp,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
	return (
		<footer>
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
								<Link href="#" class="text-white">
									Program
								</Link>
							</li>
							<li>
								<Link href="#" class="text-white">
									Promo
								</Link>
							</li>
						</ul>
					</div>

					<div class="col-lg-2 col-md-6 mb-4 mb-md-0">
						<h5 class=" ">Komunitas</h5>

						<ul class="list-unstyled">
							<li>
								<Link href="#" class="text-white">
									Event
								</Link>
							</li>
							<li>
								<Link href="#" class="text-white">
									Artikel
								</Link>
							</li>
						</ul>
					</div>

					<div class="col-lg-2 col-md-6 mb-4  mb-md-0">
						<h5 class=" ">Hubungi kami</h5>

						<ul class="list-unstyled">
							<li>
								<Link href="#" class="text-white">
									Pusat Bantuan
								</Link>
							</li>
							<li>
								<Link href="#" class="text-white">
									Kontak
								</Link>
							</li>
						</ul>
					</div>

					<div class="col-lg-2 col-md-6 mb-4 mb-md-0 ms-5">
						<h5 class=" ">Media Sosial</h5>
						<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
						<FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
						<FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
						<FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
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
