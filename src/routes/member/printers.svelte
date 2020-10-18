<script>
  import CONST from "../../constants";
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

  iframe {
    width: 640px;
    height: 480px;
    border: none;
  }
</style>

<svelte:head>
  <title>{CONST.TITLE}: 3D Printers</title>
</svelte:head>

<h1>Printer 1 Webcam feed</h1>
<iframe
  title="Printer 1 Webcam feed"
  src="http://printer1.infrastructure.teessidehackspace.org.uk/webcam/?action=stream" />

<h1>Printer 2 Webcam feed</h1>
<iframe
  title="Printer 2 Webcam feed"
  src="http://printer2.infrastructure.teessidehackspace.org.uk/webcam/?action=stream" />

<h1>Printer 3 Webcam feed</h1>
<iframe
  title="Printer 3 Webcam feed"
  src="http://printer3.infrastructure.teessidehackspace.org.uk/webcam/?action=stream" />

<h1>Printer 4 Webcam feed</h1>
<iframe
  title="Printer 4 Webcam feed"
  src="http://printer4.infrastructure.teessidehackspace.org.uk/webcam/?action=stream" />
