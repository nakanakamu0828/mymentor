'use strcit';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const statusCode = 200;

exports.handler = async (event, context, callback) => {
    const params = {};
    const product = event.queryStringParameters.product;
    if (product) params['product'] = product;
    const skus = await stripe.skus.list(params);
    callback(null, {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(skus.data)
    })
}
