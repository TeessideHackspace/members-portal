<script>
  import CONST from "../constants";
  import HackspaceLogo from "../components/HackspaceLogo.svelte";
</script>

<style>
  .row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  .about {
    border-style: solid;
    border-width: 1px;
    border-color: #d8d8d8;
    margin-bottom: 1.25rem;
    padding: 1.25rem;
    background: #f2f2f2;
    color: #333333;
  }

  iframe {
    width:100%;
    min-height:700px;
    border:none;
  }
</style>

<svelte:head>
  <title>{CONST.TITLE}: Home</title>
</svelte:head>

<iframe title="Organisation" src="https://dokuwiki.teessidehackspace.org.uk/organisation?do=export_xhtml"></iframe>

