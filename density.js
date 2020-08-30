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

export const getSpaceAnalytics = () => fetch('https://api.density.io/v2/spaces', { headers: { 'Authorization': 'Bearer tok_Gj4NFeMxCtg62gZeDvsgygVy6elahJyE2m6owBA9VCA' } })
  .then(response => response.json())
  .then(data => {
    // console.log("-----Spaces", data);
    return data.results;
  })
  .then(async data => {
    await Promise.all(data.map((space, index, array) => {
      // console.log(space.id, ":", space.name);
      return fetch( `https://api.density.io/v2/spaces/${space.id}/counts/?start_time=2020-08-24&end_time=2020-08-29`, { headers: { 'Authorization': 'Bearer tok_Gj4NFeMxCtg62gZeDvsgygVy6elahJyE2m6owBA9VCA' }})
        .then(response => response.json())
        .then(data => {
          array[index] = {...space, ...data};
          // console.log("update");
        });
    }));

  // console.log("----Analytics", data);
  return data
});