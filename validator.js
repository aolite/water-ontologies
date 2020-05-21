const N3 = require('N3');
const fs = require('fs');


const parser = new N3.Parser();
const rdfStream = fs.createReadStream('nexus-ontology/water-nexus.ttl');

parser.parse(rdfStream, (error, quad, prefixes) => {
    if (error){
        console.log("Validation..... [NOK]");
        console.log(error)
    }
    else if (!quad){
        console.log("Validation..... [OK]");
    }
});