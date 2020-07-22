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

  <HackspaceLogo />

<h1>Only a Trustee can see this page</h1>