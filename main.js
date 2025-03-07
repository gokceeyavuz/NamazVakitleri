import {BaseUrl, BaseUrl1, BaseURL2} from './NetworkUrl';

const get = urlOption => {
  console.log('request', 'url:', urlOption);
  return fetch(BaseURL2 + urlOption, {
    headers: {
      'content-type': 'application/json',
      authorization: 'apikey 06Hr7hFbWRClYEgYOnHv5L:5kRCmb2O5Z6jhhpY8OGzG0',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonResponse = response.json();
      console.log('response', 'url:', urlOption, 'response:', jsonResponse);
      return jsonResponse;
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
};

const post = (urlOption, body) => {
  console.log('request', 'url:', urlOption, 'body:', body);
  return fetch(BaseUrl1 + urlOption, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'apikey 06Hr7hFbWRClYEgYOnHv5L:5kRCmb2O5Z6jhhpY8OGzG0', //bazı serviceler token gerektirir
    },
    body: JSON.stringify(body), //
  })
    .then(response => {
      const jsonResponse = response.json();
      console.log('response', 'url:', urlOption, 'response:', jsonResponse);
      return jsonResponse;
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
};

const put = (urlOption, body) => {
  console.log('request', 'url:', urlOption, 'body:', body);
  return fetch(BaseUrl1 + urlOption, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'apikey 06Hr7hFbWRClYEgYOnHv5L:5kRCmb2O5Z6jhhpY8OGzG0',
    },
    body: JSON.stringify(body),
  })
    .then(response => {
      const jsonResponse = response.json();
      console.log('response', 'url:', urlOption, 'response:', jsonResponse);
      return jsonResponse;
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
};

export {get, post, put};
