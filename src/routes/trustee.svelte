<script>
  import CONST from "../constants";
  import HackspaceLogo from "../components/HackspaceLogo.svelte";
</script>

<style>
  p {
    background: #eee;
    padding: 10px;
    border: 1px solid #888;
  }
  div {
    border: 1px solid #eee;
  }
</style>

<svelte:head>
  <title>{CONST.TITLE}: Trustee</title>
</svelte:head>

<ul>
  <li>
    <a href="https://portainer.infrastructure.teessidehackspace.org.uk/">
      Portainer (Docker management)
    </a>
  </li>
  <li>
    <a href="https://traefik.infrastructure.teessidehackspace.org.uk/">
      Traefik (Reverse proxy)
    </a>
  </li>
  <li>
    <a href="https://netdata.infrastructure.teessidehackspace.org.uk/">
      Netdata (Server stats
    </a>
  </li>
  <li>
    <a href="https://dnsmasq.infrastructure.teessidehackspace.org.uk/">
      Dnsmasq (DNS Server)
    </a>
  </li>
  <li>
    <a href="https://shinobi.infrastructure.teessidehackspace.org.uk/">
      Shinobi (CCTV)
    </a>
  </li>
  <li>
    <a href="https://nodered.infrastructure.teessidehackspace.org.uk/">
      Nodered (Automation flows)
    </a>
  </li>
  <li>
    <a href="https://automationpanel.infrastructure.teessidehackspace.org.uk/">
      Automation Panel Nodered
    </a>
  </li>
  <li>
    <a href="https://duplicati.infrastructure.teessidehackspace.org.uk/">
      Duplicati (Backup)
    </a>
  </li>
  <li>
    <a href="https://pgadmin.infrastructure.teessidehackspace.org.uk/">
      pgadmin (Database access)
    </a>
  </li>
  <li>
    <a href="https://auth.infrastructure.teessidehackspace.org.uk/">
      Keycloak (Auth)
    </a>
  </li>
  <li>
    <a href="https://admin.matrix.teessidehackspace.org.uk/">
      Synapse Admin (Matrix server admin)
    </a>
  </li>
  <li>
    <a href="https://api.teessidehackspace.org.uk/">
      Hasura (GraphQL API Dashboard)
    </a>
  </li>
</ul>
