<script>
  import Auth from "../auth.js";
  import HackspaceLogo from "../components/HackspaceLogo.svelte";
  function logout() {
    Auth.logoutSession();
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
    width:100px;
  }
  header h1 {
    float:left;
    font-weight:900;
    font-size: 2.5em;
    line-height: 0.8;
    width:0;
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
<div class="logoContainer"><HackspaceLogo></HackspaceLogo></div>
<h1>Teesside Hackspace</h1>
</header>
  <ul>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        Home
      </a>
    </li>
    <li>
      <a aria-current={segment === 'organisation' ? 'page' : undefined} href="organisation">
        Organisation
      </a>
    </li>
    <li>
      <a aria-current={segment === 'stats' ? 'page' : undefined} href="stats">
        Stats
      </a>
    </li>
    <li>
      <a aria-current={segment === 'account' ? 'page' : undefined} href="account">
        Account
      </a>
    </li>
    <li>
      <a aria-current={segment === 'member' ? 'page' : undefined} href="member">
        Member
      </a>
    </li>
    <li>
      <a aria-current={segment === 'trustee' ? 'page' : undefined} href="trustee">
        Trustee
      </a>
    </li>
    <li>
      <button on:click={logout}>Logout</button>
    </li>
  </ul>
</nav>
