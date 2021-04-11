
export const config = {
	app: {
		port: process.env.SERVER_PORT || 1225,
	},
	db: {
		connection : process.env.DB_CONNECTION || "",
	},
};