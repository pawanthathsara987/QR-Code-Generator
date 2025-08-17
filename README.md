# QR Code Generator (Node.js CLI)

A simple Node.js command-line tool that generates QR codes from user-provided URLs and saves them as PNG images.  
It also logs every generated URL into a text file for reference.

---

## Features
- Interactive CLI prompt to enter a URL.
- Generates a QR code image (`.png`) for the given URL.
- Saves the generated QR code into a `QR_Images/` folder.
- Stores all URLs in a `QR.txt` file for history.

---

## Tech Stack
- [Node.js](https://nodejs.org/)  
- [Inquirer](https://www.npmjs.com/package/inquirer) – for interactive command-line input.  
- [qr-image](https://www.npmjs.com/package/qr-image) – to generate QR code images.  
- [fs (File System)](https://nodejs.org/api/fs.html) – to save images and append URLs to a text file.  

---

## Installation
1. Clone or download this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run the following command to install the required dependencies:
   ```bash
   npm install inquirer qr-image fs
   ```
4. Create a directory named `QR_Images` in the project root to store the generated QR code images:
   ```bash
   mkdir QR_Images
   ```

## Usage
1. Run the script using Node.js:
   ```bash
   node index.js
   ```
2. Enter a valid URL when prompted.
3. The script will:
   - Generate a QR code image and save it as `<URL>.png` in the `QR_Images` directory.
   - Append the URL to `QR.txt` in the project root.
4. If successful, you will see a confirmation message: `The URL has been saved to QR.txt!`.

## Error Handling
- If the terminal environment does not support rendering the prompt, an error message will be displayed: `Prompt could not be rendered in this environment.`
- Any other unexpected errors will be logged with: `An unexpected error occurred: <error>`.

## Dependencies
- `inquirer`: For interactive command-line user prompts.
- `qr-image`: For generating QR code images from URLs.
- `fs`: Built-in Node.js module for file system operations.

## File Structure
- `index.js`: Main script containing the QR code generation logic.
- `QR_Images/`: Directory where generated QR code images are saved.
- `QR.txt`: Text file where input URLs are logged.
- `README.md`: This file, providing project documentation.

## Notes
- Ensure the `QR_Images` directory exists before running the script, as the script does not create it automatically.
- The generated QR code image file name is based on the input URL, which may cause issues if the URL contains invalid characters for file names. Consider sanitizing the URL if needed.
- The `QR.txt` file will be created automatically if it does not exist.

## Example
1. Run the script: `node index.js`
2. Enter a URL, e.g., `https://example.com`
3. Output:
   - A QR code image named `https://example.com.png` will be saved in the `QR_Images` directory.
   - The URL `https://example.com` will be appended to `QR.txt`.
   - Console output: `The URL has been saved to QR.txt!`

## License
This project is licensed under the MIT License.
