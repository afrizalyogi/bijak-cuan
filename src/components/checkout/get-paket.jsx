"use client"
import { useSearchParams } from "next/navigation"

export default function GetPaket() {
	const searchParams = useSearchParams()
	return searchParams.get("paket")
}
