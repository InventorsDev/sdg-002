export default async function ({ store, redirect }) {
  return await store.dispatch('user/attempt', localStorage.token).then(() => {
    if (!store.getters['user/authenticated']) {
      return redirect('/auth/login');
    }
  });
}
