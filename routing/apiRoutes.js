var friendsData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        // "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        // if (friendsData.length < 5) {
        console.log(req.body);
        friendsData.push(req.body);
        res.json(req.body);
        // }
        // else {
        //   waitListData.push(req.body);
        //   res.json(false);
        // }
    });

    //clear out the table while working with the functionality.
    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        friendsData.length = 0;

        res.json({ ok: true });
    });
};
