import axios from "axios"
import { useRouter } from "next/navigation"
import { CLIENT_KEY, API_SERVER } from ".env.local"
import generateOrderId from "@/components/generate-order-id"

export default async function process() {
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

	setToken(response.data.token)

	// useEffect(() => {
	// 	const snapScript = document.createElement("script")
	// 	snapScript.setAttribute(
	// 		"src",
	// 		"https://app.sandbox.midtrans.com/snap/snap.js"
	// 	)
	// 	snapScript.setAttribute("data-client-key", CLIENT_KEY)
	// 	document.head.appendChild(snapScript)
	// }, [])

	// useEffect(() => {
	// 	if (token) {
	// 		window.snap.pay(token)
	// 	}
	// }, [token])
	return response.data.token
}
