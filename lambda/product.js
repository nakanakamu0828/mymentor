'use strcit';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const statusCode = 200;

exports.handler = async (event, context, callback) => {
    const id = event.queryStringParameters.id;
    if (!id) {
        callback(null, {
            statusCode: 404,
            body: ""
        })
    }

    const product = await stripe.products.retrieve(id);
    callback(null, {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
}
