"use client"
import { useState } from "react"
import price from "@/data/program-price"
import discountData from "@/data/checkout-discount"
import FormatCurrency from "@/components/format-currency"
import GetPaket from "./get-paket"

export default function CardDetail() {
	const paket = GetPaket()
	const [discount, setDiscount] = useState(0)
	let random = 23

	if (paket === "trial") {
		random = 0
	}

	function handleDiscount(code) {
		const foundDiscount = discountData.find((item) => item.code === code)
		if (foundDiscount) {
			setDiscount(foundDiscount.discount * price[paket])
		} else {
			setDiscount(0)
		}
	}
	return (
		<div className="card-body d-flex flex-column gap-5">
			<div>
				<h6>Metode Pembayaran</h6>
				<div className="btn btn-primary">Otomatis</div>
			</div>
			<div className="d-flex flex-column gap-2">
				<h6>Kode Promo</h6>
				<input
					onChange={(e) => handleDiscount(e.target.value)}
					className="form-control"
					type="text"
					name="discount"
					id="discount"
					placeholder="Masukan kode promo agar lebih hemat"
				/>
			</div>
			<div className="d-flex flex-column gap-2">
				<h6>Detail Pembayaran</h6>
				<div className="d-flex flex-column gap-4">
					<div className="d-flex justify-content-between">
						<p>Harga Kursus</p>
						<p>{FormatCurrency(price[paket])}</p>
					</div>
					<div className="d-flex justify-content-between">
						<p>Kode Unik</p>
						<p className="color-info">-{FormatCurrency(random)}</p>
					</div>
					<div className="d-flex justify-content-between">
						<p>Diskon</p>
						<p className="color-info">-{FormatCurrency(discount)}</p>
					</div>
					<div className="d-flex justify-content-between">
						<h4>Total Harga</h4>
						<h4 id="total-harga">
							{FormatCurrency(price[paket] - random - discount)}
						</h4>
					</div>
				</div>
			</div>
		</div>
	)
}
