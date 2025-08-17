import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
        type:'input',
        name:'url',
        message:'Enter the URL you want to convert to QR code:'
    }
  ])
  .then((answers) => {
    const url = answers.url;
    var qrImage = qr.image(url);
    qrImage.pipe(fs.createWriteStream("./QR_Images/" + url + ".png"));

    fs.appendFile("QR.txt", url + "\n", (err) => {
      if (err) throw err;
      console.log('The URL has been saved to QR.txt!');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
        console.error('Prompt could not be rendered in this environment.');
    } else {
        console.error('An unexpected error occurred:', error);
    }
  });