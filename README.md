## Installation

To use this UserScript, you will need a userscript manager extension for your web browser, such as Tampermonkey for Chrome or Greasemonkey for Firefox. Additionally, you must install a CORS extension to allow cross-origin requests. Follow these steps to install the script:

1. **Install a Userscript Manager:**

   - If you are using Chrome, install the Tampermonkey extension from the [Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).
   - If you are using Firefox, install the Greasemonkey extension from the [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) page.

2. **Install a CORS Extension:**

   - To enable cross-origin requests required by this script, install the ["Allow CORS: Access-Control-Allow-Origin" Chrome extension](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf) from the Chrome Web Store.

3. **Install the Script**:
   - Visit the following URL to open the script on GitHub: [Steam Game Profitability Calculator For Argentina Page](https://github.com/R4r3s/Steam-Game-Profitability-Calculator-For-Argentina/raw/main/steam-game-profitability.user.js).
   - Your userscript manager should detect the script and prompt you to install it. Click the "Install" or "Add" button in the prompt.

## Description

This UserScript calculates the profitability of a Steam game in Argentina. It does so by fetching the game's current price on Steam and the prices of its trading cards on the Steam Market. It then calculates the potential profit based on these prices.

## Usage

1. Open a Steam game's store page on [store.steampowered.com](https://store.steampowered.com/app/*).

2. The script will automatically run and calculate the profitability of the game.

3. A message will be displayed on the page indicating whether there is potential profit ("ARS$" followed by the profit amount) or no profit.

## Note

- The script uses a `regionPriceRatio` variable, which you can manually update with the appropriate value for your region if needed.

Enjoy using the Steam Game Profitability Calculator For Argentina!

---

If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the GitHub repository.
