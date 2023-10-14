export default function generateOrderId() {
	const currentDate = new Date()
	const year = currentDate.getFullYear()
	const month = (currentDate.getMonth() + 1).toString().padStart(2, "0")
	const day = currentDate.getDate().toString().padStart(2, "0")
	const timestamp = new Date().getTime()
	const random = Math.floor(Math.random() * 90 + 10)
	return `ORDER${year}${month}${day}${timestamp}${random}`
}
