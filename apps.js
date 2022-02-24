const loadData = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayData(data))
}
loadData()
const displayData = countries =>{
    const countriesDiv = document.getElementById('countries')
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('countries')
        div.innerHTML = `
            <h3>${country.name.common}</h3>
            <p>${country.capital}</p>
            <button onclick="loadDetails('${country.name.common}')">Details</button>
        `
        countriesDiv.appendChild(div)

        
    });
    
}

const loadDetails = name =>{
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(response => response.json())
    .then(data => dispalyCountryDetails(data[0]))
}

const dispalyCountryDetails = country =>{
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
        <h2>${country.name.official}<h2>
        <img src="${country.flags.png}">
        <p>Population: ${country.population}</p>
    `
    console.log(country)
    
}