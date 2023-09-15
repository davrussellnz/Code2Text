//index.js

const fs = require('fs');
const path = require('path');

function convertFiles(directory, output, outputFile) {
    const directoryPath = directory;
    const outputPath = path.join(output, outputFile);

    console.log(`Converting files from ${directoryPath} to ${outputPath}`);

    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 

        files.forEach(function (file) {
            let filePath = path.join(directoryPath, file);

            console.log(`Reading file ${filePath}`);

            // read the file
            fs.readFile(filePath, 'utf8', function(err, data) {
                if (err) {
                    console.log(`Error reading file ${file}: `, err);
                    return;
                }

                console.log(`Writing to output file ${outputPath}`);

                // write the file name and the content to the output file
                fs.appendFile(outputPath, `/* File: ${file} */\n${data}\n\n`, function(err) {
                    if (err) {
                        console.log(`Error writing to output file for ${file}: `, err);
                        return;
                    }
                    console.log(`Successfully wrote to ${outputPath}`);
                });
            });
        });
    });
}

module.exports = convertFiles;