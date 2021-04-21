export default async function ({ store, redirect }) {
  await store.dispatch("user/attempt", localStorage.token);

  if (!store.getters["user/authenticated"]) {
    return redirect("/auth/login");
  }
}
