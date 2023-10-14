import axios from "axios"
import { useEffect } from "react"
import { CLIENT_KEY, API_SERVER } from ".env"

export default async function process(order_id, total) {
	const data = {
		order_id: order_id,
		total: total,
	}

	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	}

	const response = await axios.post(API_SERVER, data, config)

	setToken(response.data.token)

	useEffect(() => {
		const myScript = document.createElement("script")
		myScript.setAttribute(
			"src",
			"https://app.sandbox.midtrans.com/snap/snap.js"
		)
		myScript.setAttribute("data-client-key", CLIENT_KEY)
		document.head.appendChild(myScript)
	}, [])

	useEffect(() => {
		if (token) {
			window.snap.pay(token)
		}
	}, [token])
}
