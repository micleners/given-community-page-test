// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open(
  'GET',
  'https://us-central1-given-test.cloudfunctions.net/getAllCompanies',
  true
);

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    ['gold', 'silver', 'bronze'].forEach((level) => {
      data[level].forEach((company) => {
        var card = document.createElement('a');
        console.log(card);
        card.setAttribute('class', `company-card ${level} card link`);
        card.setAttribute('href', company.website);
        card.setAttribute('target', '_blank');

        var imageWrapper = document.createElement('div');
        imageWrapper.setAttribute('class', `company-logo_wrapper ${level}`);
        var logo = document.createElement('img');
        logo.src = company.logo;
        logo.alt = company.DisplayName + ' Logo';
        logo.setAttribute('class', `company-logo ${level}`);
        card.appendChild(logo);

        var h3DisplayName = document.createElement('h3');
        h3DisplayName.textContent = company.displayName;
        h3DisplayName.setAttribute('class', 'company-name');
        card.appendChild(h3DisplayName);

        // Append the card to the div with "cards-container" id
        document.getElementById(`${level} cards-container`).appendChild(card);
      });
    });
  } else {
    console.log('error');
  }
};
// Send request
request.send();
