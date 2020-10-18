<script>
  export let segment;

  (async () => {
    (await segment).subscribe(async v => {});
  })();
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
</style>

<nav>
  <ul>
    <li>
      <a aria-current={segment === 'member' ? 'page' : undefined} href="member">
        Member
      </a>
    </li>
    <li>
      <a
        aria-current={segment === 'printers' ? 'page' : undefined}
        href="member/printers">
        Printers
      </a>
    </li>
    <li>
      <a href="https://dokuwiki.teessidehackspace.org.uk/Main">Wiki</a>
    </li>
  </ul>
</nav>
