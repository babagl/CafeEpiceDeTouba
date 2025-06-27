 function initPayPalButton(id, price) {
                paypal.Buttons({
                    createOrder: function(data, actions) {
                        return actions.order.create({
                            purchase_units: [{ amount: { value: price } }]
                        });
                    },
                    onApprove: function(data, actions) {
                        return actions.order.capture().then(function(details) {
                            alert('Paiement réussi pour ' + details.payer.name.given_name);
                        });
                    }
                }).render('#paypal-button-container-' + id);
            }
            
            initPayPalButton(1, "10");
            initPayPalButton(2, "12");