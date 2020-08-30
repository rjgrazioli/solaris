export const getSpaces = () => fetch('https://api.density.io/v2/spaces', { headers: { 'Authorization': 'Bearer tok_Gj4NFeMxCtg62gZeDvsgygVy6elahJyE2m6owBA9VCA' } })
  .then(response => response.json())
  .then((responseData) => {
    return responseData.results;
  })
  .catch(error => console.warn(error));

export function getAnalytics(spaceId) {
  fetch('https://api.density.io/v2/${spaceId}/counts', { headers: { 'Authorization': 'Bearer tok_Gj4NFeMxCtg62gZeDvsgygVy6elahJyE2m6owBA9VCA' } })
  .then(response => response.json())
  .then((responseData) => {
    // console.log(responseData);
    return responseData;
  })
  .catch(error => console.warn(error));
}