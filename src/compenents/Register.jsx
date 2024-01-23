

function Register() {

  return (
    <>
      <h2>Create Your Account</h2>
      <form>
        <label>
          <input
            type="text"
            name="username"
            placeholder="Name"
          />
        </label>
        <br />
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
        <button type="submit">Register</button>
      </form>
    </>
  );
};