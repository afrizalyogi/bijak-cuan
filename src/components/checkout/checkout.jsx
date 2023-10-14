"use client"
import Link from "next/link"
import process from "@/components/checkout/process"
import generateOrderId from "@/components/generate-order-id"

export default function CheckoutButton() {
	return (
		<Link
			href={"/checkout/pembayaran"}
			onClick={() => {
				let total = 74227
				let orderId = generateOrderId()
				process(orderId, total)
			}}
			className="btn btn-primary w-100">
			Bayar & Gabung Kelas Sekarang
		</Link>
	)
}
