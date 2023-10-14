"use client"
import GetPaket from "./get-paket"
import { useRouter } from "next/navigation"

export default function CheckoutCondition() {
	let router = useRouter()
	let paketDisplay
	let paket = GetPaket()

	switch (paket) {
		case "trial":
			paketDisplay = "Trial"
			break
		case "monthly":
			paketDisplay = "Bulanan"
			break
		case "lifetime":
			paketDisplay = "Lifetime"
			break
		default:
			break
	}
	return paketDisplay
}
