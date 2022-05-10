const callApi = async () => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  return await fetch(
    'https://6147692565467e0017384b46.mockapi.io/customer',
    requestOptions
  )
    .then((response) => {
      return response.text();
    })
    .catch((error) => console.log('error', error));
};
export default callApi;
