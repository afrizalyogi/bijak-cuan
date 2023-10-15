import "./checkout.css"
import CardDetail from "@/components/checkout/card-detail"
import CardCourse from "@/components/checkout/card-course"
import CheckoutButton from "@/components/checkout/checkout-button"

export default async function Checkout() {
	return (
		<main id="checkout">
			<div className="container pt-4 pb-5">
				<div className="row mb-4">
					<div className="col-lg-6">
						<h2>Laporan Terakhir Dapatkan Pembelajaran Impian Anda</h2>
					</div>
					<div className="col-lg-6"></div>
				</div>
				<div className="row d-flex gap-4 gap-lg-0">
					<div className="col-lg-6">
						<CardCourse />
					</div>
					<div className="col-lg-6">
						<div className="card">
							<CardDetail />
							<div className="card-footer">
								<CheckoutButton />
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
