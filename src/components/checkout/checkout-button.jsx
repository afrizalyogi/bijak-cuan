import Link from "next/link"

export default function CheckoutButton() {
	return (
		<Link href={"/checkout/pembayaran"} prefetch={false}>
			<div className="btn btn-primary w-100">Bayar & Gabung Kelas Sekarang</div>
		</Link>
	)
}
