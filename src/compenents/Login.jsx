

function Login() {

    return (
       <>
       <h2>Create Your Account</h2>
      <form>
        <label>
          <input
            type="email"
            name="email"
            placeholder="Email"
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            name="password"
            placeholder="Password"
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
       </>
    )
}

export default Login