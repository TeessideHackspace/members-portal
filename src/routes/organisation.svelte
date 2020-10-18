<script>
  import CONST from "../constants";
  import HackspaceLogo from "../components/HackspaceLogo.svelte";
</script>

<style>
  iframe {
    width: 100%;
    min-height: 700px;
    border: none;
  }
</style>

<svelte:head>
  <title>{CONST.TITLE}: Home</title>
</svelte:head>

<iframe
  title="Organisation"
  src="https://dokuwiki.teessidehackspace.org.uk/organisation?do=export_xhtml" />
