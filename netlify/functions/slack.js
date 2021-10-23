exports.handler = async function(event, context) {
    // thats the context that the function gets:
    // see https://docs.netlify.com/functions/build-with-javascript/

    // {
    //     "path": "Path parameter (original URL encoding)",
    //     "httpMethod": "Incoming request’s method name",
    //     "headers": {Incoming request headers},
    //     "queryStringParameters": {Query string parameters},
    //     "body": "A JSON string of the request payload",
    //     "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encoded"
    // }
    

    // what can be returned:
    // {
    //     "isBase64Encoded": true|false,
    //     "statusCode": httpStatusCode,
    //     "headers": { "headerName": "headerValue", ... },
    //     "multiValueHeaders": { "headerName": ["headerValue", "headerValue2", ...], ... },
    //     "body": "..."
    // }

    
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello World"})
    };
}