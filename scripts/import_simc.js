const fs = require('fs');
const importSimc = require('./lib/import').importSimc;

if (process.argv.length != 4) {
    console.error(
        'Invalid format. Should be of format: "node import_simc.js <input.simc> <output.json>"',
    );
    process.exit(1);
}

const inputFile = process.argv[2];
const outputFile = process.argv[3];

importSimc(inputFile).then((gearset) => {
    try {
        fs.writeFileSync(outputFile, JSON.stringify(gearset, null, 4));
        // file written successfully
    } catch (err) {
        console.error(err);
    }
});
