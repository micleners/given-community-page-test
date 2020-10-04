// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open(
  'GET',
  'https://us-central1-given-test.cloudfunctions.net/getAllCompanies',
  true
);
//

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    console.log(data);
    data.forEach((company) => {
      var card = document.createElement('div');
      console.log(card);
      card.setAttribute('class', 'company-card');

      var companySlug = company.slug;
      var h3Name = document.createElement('h3');
      h3Name.textContent = company.name;
      h3Name.setAttribute('class', 'name');
      card.appendChild(h3Name);

      var h3DisplayName = document.createElement('h3');
      h3DisplayName.textContent = company.pDisplayName;
      h3DisplayName.setAttribute('class', 'display-name');
      card.appendChild(h3DisplayName);

      var logo = document.createElement('img');
      logo.src = company.logo;
      logo.alt = company.pDisplayName + ' Logo';
      h3DisplayName.setAttribute('class', 'company-logo');
      card.appendChild(logo);

      var pLevel = document.createElement('p');
      pLevel.textContent = company.level;
      pName.setAttribute('class', 'giving-level');
      card.appendChild(pLevel);

      var pWebsites = document.createElement('p');
      pWebsites.textContent = company.website;
      pName.setAttribute('class', 'website-url');
      card.appendChild(pWebsites);

      var pMetro = document.createElement('p');
      pMetro.textContent = company.metro;
      pName.setAttribute('class', 'metro');
      card.appendChild(pMetro);

      // Append the card to the div with "Cards-Container" id
      document.getElementById('Cards-Container').appendChild(card);
    });
  } else {
    console.log('error');
  }
};

// Send request
request.send();
