# SimpleSkies – Airport Code Finder

**SimpleSkies** is a lightweight web application that helps you find detailed information about airports using their 3-letter **IATA** codes. It provides an intuitive interface to quickly look up an airport code and retrieve the airport’s name, location, elevation, and other key details. SimpleSkies is built with plain HTML, CSS, and JavaScript, using a comprehensive local dataset of airports – so it works offline and requires no external API. It’s an ideal tool for developers, aviation enthusiasts, or anyone who needs quick access to airport information.

## Features

- **Fast Airport Lookup by Code:** Enter a 3-letter IATA airport code (e.g. `JFK`) to quickly retrieve the corresponding airport’s details.
- **Autocomplete Suggestions:** As you type in the code, SimpleSkies suggests matching airport codes for convenience. If no input is given, a few popular airport codes are displayed to get you started.
- **Detailed Airport Information:** For each valid code, the app shows important details including the airport’s **name**, **location**, **elevation** (in feet), **ICAO code**, **IATA code**, **timezone**, and even a link to its official **website** (when available).
- **Light/Dark Theme Toggle:** Includes a built-in theme switcher. You can toggle between a light mode and dark mode UI with a single click for optimal readability in different environments.
- **Offline & Lightweight:** All airport data is stored locally in a `data.json` file and loaded in the browser. No external calls are needed, making the application fast and usable offline. *(Built with vanilla JS – no frameworks or libraries required.)*

## Installation

1. **Prerequisites:** All you need is a modern web browser. There are no additional dependencies or installations required.
2. **Clone or Download the Repository:** Download the ZIP of this repository and extract it, or clone the repo using Git:
   ```bash
   git clone https://github.com/rexmhall09/SimpleSkies.git
   cd SimpleSkies
   ```
3. **Open the Application:** Simply open the `index.html` file in your web browser to launch the app. You should see the SimpleSkies interface ready for use.  
   *🔹 **Note:** If you open the file directly and the data does not load (some browsers block fetching local files), you may need to serve the project on a local server. For example, you can run `python3 -m http.server` in the project directory and then open `http://localhost:8000` in your browser.* 

## Usage

Using SimpleSkies is straightforward:

1. **Launch the app** (open `index.html` in your browser, or navigate to the local host address if you set up a server as described above).
2. **Enter an Airport Code:** Click on the text input and type a 3-letter airport code. For example, type **`LAX`** or **`JFK`**. As you type, you will see autocomplete suggestions dropdown with matching codes.
3. **Select or Submit:** You can either click on one of the suggested codes or finish typing the code and press the **“Find Info”** button.
4. **View Airport Details:** After you submit a code, the airport’s information will appear below the search box. You’ll see the airport’s name, location (city/country), elevation, ICAO/IATA codes, timezone, and a clickable website link if available. If the code isn’t found in the database, the app will notify you.
5. **Toggle Theme (Optional):** In the top-right corner of the page, click the theme toggle icon (🌙/☀️) to switch between dark mode and light mode. The interface will instantly update to the selected theme.

*Example:* Entering **`JFK`** will display information for **John F. Kennedy International Airport** in New York, USA, along with its ICAO code **KJFK**, elevation, timezone, and a link to the airport’s website.

## Contributing

Contributions are welcome! If you’d like to improve **SimpleSkies** or add new features:

- **Fork the repository** to your GitHub account and clone it locally.
- Create a new branch for your feature or bug fix (`git checkout -b feature/YourFeature`).
- Make your changes or additions, with clear commit messages.
- Push the branch to your fork and open a **Pull Request** on this repository explaining your changes.

You can also open issues for any bugs or suggestions. Maintaining an up-to-date and comprehensive airport database or enhancing the user interface are just a couple of ways to contribute. Every bit of help is appreciated!

## License

This project is open source and available under the **MIT License**. Feel free to use, modify, and distribute it. See the [LICENSE](LICENSE) file for details.

![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)
