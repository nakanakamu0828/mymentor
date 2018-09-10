'use strcit';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const statusCode = 200;

exports.handler = async (event, context, callback) => {
    const products = await stripe.products.list({ limit: 6 });
    callback(null, {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(products.data)
    })
}
