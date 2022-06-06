export const serverLogIn = async (email, password) => {
    return fetch("https://loft-taxi.glitch.me/auth",
     { method: 'POST',
       body: JSON.stringify({ email, password }),
       headers: { 'Content-Type': 'application/json;charset=utf-8' } })
       .then(r => r.json())
       .then(o => o.success)
}