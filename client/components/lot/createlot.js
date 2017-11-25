Template.createLot.events({
    "click #zapilit": function() {

        var d = $('#lotds').val();
        var m = parseInt($('#minprice').val());
        var b = parseInt($('#buyout').val());

        if (m > b) {
            alert("Buy out < starting price. U r mad?");
            $('#lotds').val("");
            $('#minprice').val("");
            $('#buyout').val("");
            return;
        }
        console.log(d,m,b);
        smci.AddLot(d, m, b, {
            gas: 300000,
            from: web3.eth.accounts[0]
        }, (err, result) => {
            if (result)
                console.log("Tx hash: ", result);
            else
                console.log("Oopss.. Didn't work :(");
        });

        $('#lotds').val("");
        $('#minprice').val("");
        $('#buyout').val("");
        

    }
});
