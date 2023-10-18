export const handleLogout = () => {
	localStorage.removeItem("isLoggedIn")
	setIsLoggedIn(false)
}
