
// disconnect any meteor server
if (location.host !== 'localhost:3000' 
&& location.host !== '127.0.0.1:3000' 
&& typeof MochaWeb === 'undefined')
Meteor.disconnect();


function getNumberOfLots(callback) {
smci.GetLotsCount((err, result) => {
    if (result != null) {
        callback(result);
    } else {
        console.warn("Smth bad happened!");
    }
});
}

function UpdateTable(n) {
var k = LotsCollection.find().count();
for (var i = k; i < n; i++) {
    smci.GetLot(i, (err, res) => {
        if(res != null) {
            LotsCollection.insert({
                id: res[0].c[0],
                leader: res[2],
                description: res[3],
                price: res[4].c[0], 
                buyOutPrice: res[5].c[0], 
                isOpened: res[6] ? "Yes" : "No"
            });
            
        }
    });
}
}


if(Meteor.isClient) {
        
Session.setDefault('latestBlock', 0);

Meteor.startup(function() {
    
    LotsCollection.remove({});
    setInterval(function () {
        getNumberOfLots(UpdateTable)
    }, 20000);
    
});
}
