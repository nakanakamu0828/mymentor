'use strcit';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
let statusCode = 200;

exports.handler = async (event, context, callback) => {
    if (event.httpMethod !== 'POST' || !event.body) {
        callback(null, {
            statusCode: 404,
            body: ""
        })
        return
    }

    try {
        const data = JSON.parse(event.body)
        const order = await stripe.orders.create({
            currency: 'jpy',
            items: data.skus.map(function(sku) { return { type: 'sku', parent: sku } }),
            email: data.email,
            metadata: {
                name: data.name,
            }
        });
        console.log(order)

        const payOrder = await stripe.orders.pay(order.id, {
            source: data.token
        })
        console.log(payOrder);
    } catch (err) {
        statusCode = 401
    }

    callback(null, {
        statusCode: statusCode,
        body: ""
    })
}


// 'use strcit';

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const statusCode = 200;

// exports.handler = async (event, context, callback) => {
//     // if (event.httpMethod !== 'POST' || !event.body) {
//     //     callback(null, {
//     //         statusCode: 404,
//     //         body: ""
//     //     })
//     //     return
//     // }

//     // const data = JSON.parse(event.body);
//     // console.log(data);
//     // stripe.orders.create({
//     //     currency: 'jpy',
//     //     items: data.skus.map(function(sku) { return { type: 'sku', parent: sku } }),
//     //     shipping: {
//     //       name: data.name
//     //     },
//     //     email: data.email
//     // }, function(err, order) {
//     //     // asynchronously called
//     // });
    

//     callback(null, {
//         statusCode: statusCode,
//     })
// }
