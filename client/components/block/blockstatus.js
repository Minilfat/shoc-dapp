Template['blockchainStatus'].helpers({
    currentBlock: function () {
        return JSON.stringify(Session.get('latestBlock'), null, 2);
    }
});