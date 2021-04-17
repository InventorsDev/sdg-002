export default function ({ redirect }) {
  if (!localStorage.user_token) {
    redirect('/auth/login')
  }
}
