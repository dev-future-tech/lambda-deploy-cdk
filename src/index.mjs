export const handler = async(event) => {
    const responseBody = {
        "id" : 123456,
        "name" : "Platypus",
        "origin" : "Australia"
    };

    const response = {
        statusCode: 200,
        body: JSON.stringify(responseBody),
        headers: {
            "Access-Control-Allow-Origins" : "http://localhost:9000"
        }
    };

    return response;
};
