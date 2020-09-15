// const express = require('express');
// const app = express();
// app.get('/hello', function (req, res) {
//     return res.json({ 'name': 'abhishek' });
// })
// app.listen(8080, function () {
//     console.log('listening on 8080');
// });

var promise = new Promise((resolve, reject) => {
    setTimeout(function () {


        if (0 > 2)
            resolve('hello');
        else
            reject('wrong');
    }, 1000);
});

promise.then((data) => {
    console.log(data);
})
    .catch((err) => {
        console.log(err);
    });






//METHOD	DESCRIPTION
// res.download()	Prompt a file to be downloaded.
// res.end()	End the response process.
// res.json()	Send a JSON response.
// res.jsonp()	Send a JSON response with JSONP support.
// res.redirect()	Redirect a request.
// res.render()	Render a view template.
// res.send()	Send a response of various types.
// res.sendFile()	Send a file as an octet stream.
// res.sendStatus()	Set the response status code and send its string representation as the response body.
