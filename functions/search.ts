exports.handler = async function ({ queryStringParameters }) {
	return {
		statusCode: 200,
		body: JSON.stringify({
			message: 'Hello search',
			queryStringParameters
		})
	};
};
