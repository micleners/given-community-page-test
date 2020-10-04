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
    console.log(data)
    data.forEach((company) => {
      // Create a div with a "Sample Card" class
      const card = document.createElement('div');
      console.log(card);
      card.setAttribute('class', 'company-card');

      // Create an h3 and set the text content to the film's title
      const h3 = document.createElement('h3');
      h3.textContent = company.slug;
      card.appendChild(h3);

      const pName = document.createElement('p');
      pName.textContent = company.name;
      pName.setAttribute('class', 'name-field')
      card.appendChild(pName);

      const pDisplayName = document.createElement('p');
      pDisplayName.textContent = company.displayName;
      pName.setAttribute('class', 'name-field')
      card.appendChild(pDisplayName);

      const logo = document.createElement('img')
      logo.src = company.logo
      logo.alt = "Company Logo"
      card.appendChild(logo);

      const pLevel = document.createElement('p');
      pLevel.textContent = company.level;
      pName.setAttribute('class', 'name-field')
      card.appendChild(pLevel);

      const pWebsites = document.createElement('p');
      pWebsites.textContent = company.website;
      pName.setAttribute('class', 'name-field')
      card.appendChild(pWebsites);

      const pMetro = document.createElement('p');
      pMetro.textContent = company.metro;
      pName.setAttribute('class', 'name-field')
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
