const { Client } = require("pg");

async function hello() {
	// console.log("start");
    // new Client() refers environment variables PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDATABASE.
	const client = new Client();
    // const client = new Client({
    //     host: "db",
    //     port: 5432,
    //     database: "example",
    //     user: "postgres",
    //     password: "Passw0rd!"
    // });
	// console.log(client);
	await client.connect();
    // client
	const result = await client.query("SELECT $1::text as message", ["Hello, world!"]);
	// console.log(result);
	console.log(result.rows[0].message);
	await client.end();
	// console.log("end ok");
}

//(() => { hello().then(console.log("end")); })();
(() => { hello(); })();
