
export const config = {
	app: {
		backendPort: process.env.BACKEND_PORT || 1225,
	},
	db: {
		connection : process.env.DB_CONNECTION || "",
	},
};