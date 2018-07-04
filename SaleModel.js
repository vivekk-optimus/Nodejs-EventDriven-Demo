module.exports = {
    add() {
        const sale_data = {
            order_id: 1234,
            order_name: 't-shirt'
        }
        email_notification.emit('new_sale', sale_data );
    }
}
