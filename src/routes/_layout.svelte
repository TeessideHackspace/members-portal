<script>
  import Nav from "../components/Nav.svelte";
  import Auth from "../auth";
  import { loggedIn } from "../main.store";
  import routes from '../routes.js'
  import { tick } from 'svelte'
  import { guard } from '@beyonk/sapper-rbac'
  import { stores, goto } from '@sapper/app'

  let ready = false;
  if (process.browser) {
    (async () => {
      if (!$loggedIn) {
        const user = await Auth.getUser();
      }
      ready = true;
    })();
  }

  const { page, session } = stores()

  const options = {
    routes,
    deny: () => {
      ready = false;
      Auth.login({
        redirect_uri: window.location
      });
    }
    // we don't specify grant here, since we don't need to do anything.
  }

  // Listen to the page store.
  page.subscribe(async v => {
    await tick() // let the previous routing finish first.
    const user = await Auth.getUser();
    let scopes = $loggedIn && user ? ['logged_in'] : [];
    if(scopes.length) {
      scopes = scopes.concat(user.profile.resource_access['hackspace-api'].roles)
    }
    guard(v.path, {scope: scopes}, options)
  })

  export let segment;
</script>

<style type="text/scss">

  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }

  @media (min-width: 1600px) {
    main {
      max-width: 84em;
    }
  }
</style>

{#if ready}
  <Nav {segment} />
  <main>
    <slot />
  </main>
{/if}
