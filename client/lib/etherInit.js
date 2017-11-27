if (typeof web3 !== 'undefined'){
    console.log("Using web3 detected from external source like Metamask");
    web3 = new Web3(web3.currentProvider);
} else {
    console.warn("No injected web3 was found! App will not work :(");
}


var MyContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"GetLot","outputs":[{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"}],"name":"MakeBid","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"description","type":"bytes32"},{"name":"minPrice","type":"uint256"},{"name":"buyOutPrice","type":"uint256"}],"name":"AddLot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"GetLotsCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"}],"name":"NewLot","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"}],"name":"NewBid","type":"event"}]);
smci = MyContract.at("0x4FB5a036034eDD126C1432e201688dcAB280c333");

if (typeof web3.eth.accounts[0] == 'undefined') {
    alert("Unlock MetaMask and refresh the page!");
} 

console.log("Your address: ", web3.eth.accounts[0]);

web3.eth.filter('latest').watch(function(e, blockHash) {
    if(!e) {
        web3.eth.getBlock(blockHash, function(e, block){
            Session.set('latestBlock', block.number);
        });
        
    }
});
