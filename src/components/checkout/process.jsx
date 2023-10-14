import axios from "axios"

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

	try {
		const response = await axios.post(
			"http://localhost:1000/api/payment/process-transaction",
			data,
			config
		)
		console.log(response.data)
	} catch (error) {
		console.error("Error occurred:", error)
	}
}
