export async function getRedditDeals(subReddit) {
  return fetch(`https://www.reddit.com/r/${subReddit}/new.json`)
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error:", error);
    });
}

export async function getDeal(subReddit, id) {
  return fetch(`https://www.reddit.com/r/${subReddit}/comments/${id}/new.json`)
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error:", error);
    });
}

export async function getDealImage(deal) {
  var url = deal.url;

  if (
    deal.thumbnail &&
    (deal.thumbnail.startsWith("http://") ||
      deal.thumbnail.startsWith("https://"))
  ) {
    // If deal already has an image, use it
    return deal.thumbnail;
  }

  if (!deal.is_self) {
    // If deal has a link, try to use an image from the linked page
    return fetch("https://cors-anywhere.herokuapp.com/" + url).then((res) => {
      return res
        .text()
        .then((resText) => {
          var remotePageHtml = new DOMParser().parseFromString(
            resText,
            "text/html"
          );
          var matches = url.match(
            /^https?\:\/\/(?:.*?\.)?([^\/?#]+\.[^\/?#]+)(?:[\/?#]|$)/i
          );
          var domain = matches && matches[1];
          var imageUrl = "";

          if (domain === "amazon.com") {
            // Amazon doesn't use schema markup, so look for the image by ID
            if (
              remotePageHtml.getElementById("landingImage") &&
              remotePageHtml.getElementById("landingImage").dataset &&
              remotePageHtml.getElementById("landingImage").dataset.oldHires
            )
              imageUrl = remotePageHtml.getElementById("landingImage").dataset
                .oldHires;
          } else {
            // For all other websites, check for an image specified in the JSON-LD
            var jsonLDScripts = remotePageHtml.querySelectorAll(
              'script[type="application/ld+json"]'
            );

            jsonLDScripts.forEach((jsonLDScript) => {
              var jsonLDScriptObject = JSON.parse(jsonLDScript.innerText);

              if (jsonLDScriptObject.hasOwnProperty("image")) {
                imageUrl = jsonLDScriptObject.image;
              }
            });

            if (
              typeof imageUrl === "object" &&
              imageUrl.length > 0 &&
              typeof imageUrl[0] === "string"
            ) {
              imageUrl = imageUrl[0];
            }
          }

          if (imageUrl) {
            return imageUrl;
          }

          return getImageUrlFromBingSearch(deal);
        })
        .catch((error) => {
          console.error("Error:", error);
          return getImageUrlFromBingSearch(deal);
        });
    });
  } else {
    return getImageUrlFromBingSearch(deal);
  }
}

function getImageUrlFromBingSearch(deal) {
  const bingImageSearchRequestOptions = {
    headers: new Headers({
      // TODO: Move to back-end code, then regenerate key
      "Ocp-Apim-Subscription-Key": "4254ea3752ee4347b870241423c65d30",
    }),
  };

  // If no image was found yet, look for one using Bing Image Search
  return fetch(
    "https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=" +
      encodeURIComponent(deal.title),
    bingImageSearchRequestOptions
  )
    .then((res) => {
      return res.json().then((resJson) => {
        if (
          resJson &&
          resJson.value &&
          resJson.value.length > 0 &&
          resJson.value[0].contentUrl
        ) {
          return resJson.value[0].contentUrl;
        } else {
          // If no image was found, return an empty string
          return "";
        }
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
