<script>
  import Auth from "../auth.js";
  import { loggedIn } from "../main.store";
  import HackspaceLogo from "../components/HackspaceLogo.svelte";
  function logout() {
    Auth.logoutSession();
  }

  function login() {
    Auth.login({
      redirect_uri: window.location
    });
  }

  let roles = [];
  if (process.browser) {
    (async () => {
      const user = await Auth.getUser();
      if (user) {
        console.log(user);
        roles = user.profile.resource_access["hackspace-api"].roles;
      }
    })();
  }

  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid #1ab91b;
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  li:last-child {
    float: right;
  }

  button {
    margin: 0.35em 0;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: #1ab91b;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }

  button {
    float: right;
  }

  .logoContainer {
    float: left;
    width: 100px;
  }
  header h1 {
    float: left;
    font-weight: 900;
    font-size: 2.5em;
    line-height: 0.8;
    width: 0;
    margin: 20px 10px;
  }
  header:after {
    content: "";
    display: table;
    clear: both;
  }
</style>

<nav>
  <header>
    <div class="logoContainer">
      <HackspaceLogo />
    </div>
    <h1>Teesside Hackspace</h1>
  </header>
  <ul>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        Home
      </a>
    </li>
    <li>
      <a
        aria-current={segment === 'organisation' ? 'page' : undefined}
        href="organisation">
        Organisation
      </a>
    </li>
    <li>
      <a href="https://dokuwiki.teessidehackspace.org.uk/Main">Wiki</a>
    </li>
    <li>
      <a aria-current={segment === 'stats' ? 'page' : undefined} href="stats">
        Stats
      </a>
    </li>
    <li>
      <a
        aria-current={segment === 'account' ? 'page' : undefined}
        href="account">
        Account
      </a>
    </li>
    {#if roles.includes('member')}
      <li>
        <a
          aria-current={segment === 'member' ? 'page' : undefined}
          href="member">
          Member
        </a>
      </li>
    {/if}
    {#if roles.includes('trustee')}
      <li>
        <a
          aria-current={segment === 'trustee' ? 'page' : undefined}
          href="trustee">
          Trustee
        </a>
      </li>
    {/if}
    {#if $loggedIn}
      <li>
        <button on:click={logout}>Logout</button>
      </li>
    {:else}
      <li>
        <button on:click={login}>Login</button>
      </li>
    {/if}
  </ul>
</nav>
