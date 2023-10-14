"use client"
import { useRouter } from "next/navigation"
import GetPaket from "./get-paket"

export default function GetPaketDisplay() {
	const router = useRouter()
	const paket = GetPaket()

	let paketDisplay

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
			router.push("/program")
			break
	}

	return paketDisplay
}
