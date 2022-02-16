const { Client } = require("pg");

async function hello() {
	// console.log("start");
	const client = new Client();
	// console.log(client);
	client.connect();
	const result = await client.query("SELECT $1::text as message", ["Hello, world!"]);
	// console.log(result);
	console.log(result.rows[0].message);
	await client.end();
	// console.log("end ok");
}

//(() => { hello().then(console.log("end")); })();
(() => { hello(); })();
