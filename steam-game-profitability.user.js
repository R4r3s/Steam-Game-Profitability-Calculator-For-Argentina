// ==UserScript==
// @name         Steam Game Profitability Calculator For Argentina
// @namespace    Steam Script
// @version      1.0
// @description  Calculate the profitability of a Steam game based on its price and market card prices.
// @author       R4r3s
// @match        https://store.steampowered.com/app/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(async function() {
    const gameIDMatch = window.location.href.match(/\/app\/(\d+)\//);
    if (!gameIDMatch) {
        console.log("Not a valid game page.");
        return;
    }

    const gameID = gameIDMatch[1];
    const regionPriceRatio = 350; //update this
    const regionCode = "ar";

    // Helper function to filter numbers from a string
    function filterNumbers(string) {
        return parseFloat(string.replace(/[^\d.]/g, ""));
    }

    // Send a GET request to the URL with the game ID and region code
    const gameUrl = `https://store.steampowered.com/api/appdetails?appids=${gameID}&cc=${regionCode}`;
    const tradeUrl = `https://steamcommunity.com/market/search/render/?q=&category_753_Event%5B%5D=any&category_753_Game%5B%5D=tag_app_${gameID}&category_753_cardborder%5B%5D=tag_cardborder_0&category_753_item_class%5B%5D=tag_item_class_2&appid=753&norender=1&cc=${regionCode}`;

    try {
        const [gameResponse, tradeResponse] = await Promise.all([
            fetch(gameUrl),
            fetch(tradeUrl)
        ]);

        // Check if the requests were successful
        if (gameResponse.ok && tradeResponse.ok) {
            console.log("Requests were successful.");

            const gameData = await gameResponse.json();
            const tradeData = await tradeResponse.json();

            const gameDetails = gameData[gameID].data;
            const priceFormatted = gameDetails.price_overview.final_formatted;
            const priceInt = filterNumbers(priceFormatted) / 100;

            const cardsCount = tradeData.total_count;
            const cardResults = tradeData.results;
            const cardPrices = cardResults.map(result => {
                const priceText = result.sale_price_text;
                const price = filterNumbers(priceText);
                return price;
            });
            const sumCardPrice = cardPrices.reduce((acc, price) => acc + price, 0) * regionPriceRatio;

            console.log("Number of cards available for purchase:", cardsCount);
            console.log("List of card results:", cardResults);
            console.log("List of card prices in $:", cardPrices);
            console.log("Total card price in ARS:", sumCardPrice);
            console.log("Game price in ARS:", priceInt);

            const profit = (((sumCardPrice / 2) - priceInt)).toFixed(2);

            console.log("Profitability price in ARS:", profit);

            // Create a new element to display the profitability
            const profitabilityElement = document.createElement('div');
            profitabilityElement.textContent = `Profitability: `;

            // Set the text color based on profitability
            if (profit > 0) {
                profitabilityElement.textContent += `ARS$${profit}`;
                profitabilityElement.style.color = "lime";
            } else {
                profitabilityElement.textContent += "No Profit";
                profitabilityElement.style.color = "red";
            }

            profitabilityElement.style.fontSize = "18px"; // Optional: Adjust the font size

            // Find an appropriate location on the page to insert the profitability element
            const insertLocation = document.querySelector('.game_purchase_action');

            if (insertLocation) {
                // Insert the profitability element after the insertLocation
                insertLocation.parentNode.insertBefore(profitabilityElement, insertLocation.nextSibling);
            } else {
                console.log("Could not find insert location.");
            }
        } else {
            console.error("One or both requests were not successful.");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
})();
