const baseUrl = "https://developer.nps.gov/api/v1/";

async function getJson(endpoint) {
    // replace this with your actual key
    const apiKey = "1fgFpSyfNLgQ2k9zIzl5cAHfzuU89fDpbRNb52Mc";
    // construct the url: baseUrl + endpoint + parameters
    const url = `${baseUrl}${endpoint}`;
    // set the options. The important one here is the X-Api-Key
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Api-Key": apiKey
        }
    }
    // make the request
    const response = await fetch(url, options)
    if (!response.ok) {
        console.error(`Error: ${response.statusText}`);
        return null;
    }
    return await response.json();

}


// https://developer.nps.gov/api/v1/parks?q=climbing


function listTemplate(item) {
    return `
    <li>
        <a href="${item.url}" target="_blank">
            ${item.fullName}
        </a>
        ${item.states}
    </li>
    `;
}


async function renderClimbingList() {
    const endpoint = "parks?activities=climbing";
    const listElement = document.getElementById("outputList");
    const data = await getJson(endpoint);
    if (!data) return;
    const parks = data.data;
    const listHtml = parks.map(listTemplate).join("");
    listElement.innerHTML = listHtml;
    console.log(listElement.Html)

}

renderClimbingList();




// https://developer.nps.gov/api/v1/parks?stateCode=id
// https://developer.nps.gov/api/v1/campgrounds?parkCode=ciro
// https://developer.nps.gov/api/v1/galleries?q=bears