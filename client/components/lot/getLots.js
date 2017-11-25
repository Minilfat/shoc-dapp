
Template.currentLots.helpers({
    allots: function() {
        // console.log(LotsCollection.find().fetch());
        return LotsCollection.find().fetch();
    }
});

Template.currentLots.events({
    "click .lot-row": function(e, t) {
        k = parseInt($(e.target).closest("tr").find("#make-bid-id").text());
        val = parseInt($(e.target).closest("tr").find("#current-bid-price").text());
        $("#myModal").modal();
    },
    "click #make-bid": function(e, t) {
        console.log("Making bid to lot with id: ", k);
        var d = parseInt($('#valueToSend').val());

        if (d < val) {
            alert("You have to bid more than current bid!");
            $('#myModal').modal('toggle');
            return;
        } else {
            smci.MakeBid(k, {
                gas: 300000,
                from: web3.eth.accounts[0],
                value: web3.toWei(d, 'finney')
            }, (err, result) => {
                if (!err)
                    console.log("Tx hash: ", result);
                else 
                    console.warn("Didn't work...");
            });

            $('#myModal').modal('toggle');
        }
    }    
});
