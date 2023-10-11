export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg fixed-top">
			<div className="container">
				<h4>
					<a className="navbar-brand fw-bold" href="#">
						Bijakcuan.
					</a>
				</h4>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse gap-2" id="navbarNav">
					<ul className="navbar-nav ms-auto align-items-center">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								Beranda
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Program
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Event
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Promo
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Artikel
							</a>
						</li>
					</ul>
					<ul className="navbar-nav gap-2 align-items-center">
						<li className="nav-item">
							<a className="btn btn-outline-primary" href="#">
								Masuk
							</a>
						</li>
						<li className="nav-item">
							<a className="btn btn-primary" href="#">
								Daftar
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
