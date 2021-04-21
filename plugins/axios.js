export default function ({ $axios, store, redirect }) {
  // Automatically set bearer token for all request
  $axios.onRequest(() => {
    $axios.setToken(store.state.user.token, 'Bearer');
  });

  // If user make requests to endpoints (that is not /login or /register), refresh token
  $axios.onError((error) => {
    if (
      error.response.status === 401 &&
      (error.request.responseURL.includes('login') ||
        error.request.responseURL.includes('register'))
    ) {
      $axios
        .post('/auth/refresh')
        .then((response) => {
          localStorage.token = response.token;
        })
        .catch((err) => {
          redirect('/auth/login');
        });
    }
  });
}
