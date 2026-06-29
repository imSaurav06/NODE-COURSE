const { buffer } = require("node:stream/consumers");

const sumrequesthandler = (req, res) => {

    console.log("In sum request handler", req.url);

    const Body = [];

    req.on('data', chunk => chunk.body.push(chunk));

    req.on('end', () => {
        const bodyStr = buffer.concat(body).toString();
        const params = new URLSearchParams(bodyStr);
        const bodyobj = Object.fromEntries(params);
        const result = Number(bodyobj.first) + Number(bodyobj.second);

        console.log(result);

        res.setHeader('Content-type', 'text/html');
        res.write(
            <html>
                <head><title>Practise Set</title></head>
                <body>
                    <h1>Your Sum is ${result}</h1>

                </body>
            </html>
        );
        return res.end();
    });

}

module.exports.sumrequesthandler = sumrequesthandler;

