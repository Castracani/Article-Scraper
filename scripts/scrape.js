const axios = require("axios");
const cheerio = require("cheerio");


const scrape = function() {
  // Scrape the Prison Planet (funded by Alex Jones!) Web site
  return axios.get("https://www.prisonplanet.com/").then(function(res) {
    var $ = cheerio.load(res.data);
    // Make an empty array to save our article info
    var articles = [];

    //Only one element with id=nFeaturedStoriesContent (obviously), but unclear how would this work without one parent element;
    $("div.itemblock").each(function(i, element) {

      let head = $(this)
        .find("a")
        .text()
        .trim();

      // Grab the URL of the article
      let url = $(this)
        .find("a")
        .attr("href");

      // Then we grab any children with the class of summary and then grab it's inner text
      // We store this to the sum variable. This is the article summary
      let sum = $(this)
        .find("div.subhead")
        .text()
        .trim();


        // Initialize an object we will push to the articles array

        const dataToAdd = {
          headline: head,
          summary: sum,
          url: "https://www.unz.com/" + url
        };

        articles.push(dataToAdd);
      }
    );
    return articles;
  });
};

// Export the function, so other files in our backend can use it
module.exports = scrape;