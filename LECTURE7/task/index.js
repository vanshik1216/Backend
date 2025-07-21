const fs = require('fs')

fs.readFile("../users.txt", "utf-8", function (err, data) {
    if (err) return console.log(err);

    let users = JSON.parse(data);

    fs.readFile("../users1.txt", "utf-8", function (err, data1) {
        if (err) return console.log(err);

        let user1 = JSON.parse(data1);
        let newarr = [...users, ...user1];

        fs.writeFile("../users2.txt", JSON.stringify(newarr), function (err) {
            if (err) return console.log(err)
            console.log("users written")
        })
    })

})

//assignment2-- to do application to do add krana hai file k andr file k andr add krana hai
