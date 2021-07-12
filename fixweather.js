import { readJSON, writeJSON, removeFile } from 'https://deno.land/x/flat@0.0.11/mod.ts' 

const filename = Deno.args[0];
const json = await readJSON(filename);
json.temperature = fixC(json.temperature);

json.forecast.forEach(f => {
	f.temperature = fixC(f.temperature);
});

console.log(json);

await writeJSON(filename, json);

function fixC(s) {
	let tempInC = s.split(' ')[0];
	return (tempInC * 1.8 + 32).toFixed(0);
}