
export const config = {
	app: {
		port: process.env.SERVER_PORT || 3000,
	},
	db: {
		connection : process.env.DB_CONNECTION || "",
	},
};