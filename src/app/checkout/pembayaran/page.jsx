import "./pembayaran.css"
import axios from "axios"
import { API_SERVER } from ".env"
import generateOrderId from "@/components/generate-order-id"
import Link from "next/link"

async function getToken() {
	const data = {
		order_id: generateOrderId(),
		total: 74227,
	}

	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	}

	const response = await axios.post(API_SERVER, data, config)
	console.log(response.data.token)

	return response.data.token
}

export default async function Pembayaran() {
	const token = await getToken()
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
								<h2>Rp. 74.227</h2>
							</div>
							{/* <div className="d-flex flex-column gap-5">
								<p>Metode Pembayaran</p>
								<h6>Virtual Account</h6>
								<h6>E-Wallet</h6>
							</div> */}
							<div className="d-flex flex-column gap-5">
								<Link
									href={`https://app.sandbox.midtrans.com/snap/v3/redirection/${token}`}
									prefetch={false}
									className="btn btn-primary w-100">
									Bayar Sekarang
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
