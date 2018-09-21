'use strcit';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const statusCode = 200;

exports.handler = async (event, context, callback) => {
    if (event.httpMethod !== 'POST' || !event.body) {
        callback(null, {
            statusCode: 404,
            body: ""
        })
        return
    }

    const data = JSON.parse(event.body);
    console.log(data);
    stripe.orders.create({
        currency: 'jpy',
        items: data.skus.map(function(sku) { return { type: 'sku', parent: sku } }),
        email: data.email,
        metadata: {
            name: data.name,
        }
    }, function(err, order) {
        // asynchronously called
    });

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
