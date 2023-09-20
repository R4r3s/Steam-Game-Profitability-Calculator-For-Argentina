# Steam Game Profitability Calculator For Argentina

![GitHub](https://img.shields.io/github/license/yourusername/steam-game-profitability-calculator)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/yourusername/steam-game-profitability-calculator)
![GitHub last commit](https://img.shields.io/github/last-commit/yourusername/steam-game-profitability-calculator)
![GitHub issues](https://img.shields.io/github/issues-raw/yourusername/steam-game-profitability-calculator)

## Description

The Steam Game Profitability Calculator For Argentina is a userscript that calculates the profitability of a Steam game for the Argentina region based on its price and market card prices. It helps users determine whether purchasing a game for trading cards is profitable.

This userscript fetches the game's price and card prices from the Steam store and calculates the potential profit in Argentine Pesos (ARS) based on a customizable exchange rate. It then displays the calculated profitability on the game's store page.

## Installation

1. **Install a Userscript Manager**:

   Before you can use this script, you need to install a userscript manager in your browser. We recommend using [Tampermonkey](https://www.tampermonkey.net/) for Chrome or [Greasemonkey](https://www.greasespot.net/) for Firefox.

2. **Install the Userscript**:

   Once you have a userscript manager installed:

   - Click on the [Install Userscript](https://github.com/yourusername/steam-game-profitability-calculator/raw/main/steam-game-profitability-calculator.user.js) link to install the script.

## Usage

1. **Visit a Steam Game Page**:

   Navigate to the Steam store page of a game you want to assess.

2. **Profitability Calculation**:

   The script will automatically calculate the profitability of the game based on the exchange rate you've set (default is 350 ARS to 1 USD).

3. **Profitability Display**:

   The calculated profitability will be displayed on the game's store page, helping you decide whether it's worth purchasing the game for trading cards.

## Customization

You can customize the exchange rate by modifying the `regionPriceRatio` variable in the script. Replace the value with the desired exchange rate.

```javascript
const regionPriceRatio = 350; // Update this with the exchange rate you want
