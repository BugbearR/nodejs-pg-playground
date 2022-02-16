const { Client } = require("pg");

async function main() {
	const client = new Client();
	client.connect();

	await client.query(`
CREATE TABLE outputtypeexp (
k1 CHAR(10) NOT NULL,
type_char CHAR(2),
type_varchar VARCHAR(2),
type_numeric NUMERIC(3),
type_numeric_int NUMERIC(3,0),
type_numeric_fixed NUMERIC(4,2),
type_integer INTEGER,
type_smallint SMALLINT,
type_bigint BIGINT
);
`);

await client.query(`
INSERT INTO outputtypeexp (
k1,
type_char,
type_varchar,
type_numeric,
type_numeric_int,
type_numeric_fixed,
type_integer,
type_smallint,
type_bigint
) VALUES (
'MAX',
'AA',
'AA',
99.9,
999,
99.99,
2147483647,
32767,
9223372036854775807
);
`);

	const result = await client.query(`
SELECT
	k1,
	type_char,
	type_varchar,
	type_numeric,
	type_numeric_int,
	type_numeric_fixed,
	type_integer,
	type_smallint,
	type_bigint
FROM outputtypeexp;
`);
	console.log(result.rows[0]);

	await client.query(`
DROP TABLE outputtypeexp;
`);

	await client.end();
}

//(() => { hello().then(console.log("end")); })();
(() => { main(); })();
