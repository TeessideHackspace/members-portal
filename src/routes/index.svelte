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
</style>

<svelte:head>
  <title>{CONST.TITLE}: Home</title>
</svelte:head>

<div class="about">
  Teesside Hackspace is a non-profit group running a community-operated workshop
  in Middlesbrough where members can come together to share tools and knowledge.
</div>

<div class="row">
  <div class="column">
    <h2>Get Involved</h2>
    <p>
      We hold
      <a href="https://wiki.teessidehackspace.org.uk/wiki/Weekly_Open_Evenings">
        public open evenings
      </a>
      every Tuesday from around 7pm at our space in
      <a href="https://wiki.teessidehackspace.org.uk/wiki/2D_Brighouse">
        Brighouse Business Village
      </a>
      .
    </p>
    <h2>Membership</h2>
    <p>
      Our members have a hand in the running of the organisation as well as 24/7
      access to the space. Pay us what you think is fair — join Teesside
      Hackspace.
    </p>
  </div>
  <div class="column">
    <h2>Resources</h2>
    <ul>
      <li>
        <a href="https://wiki.teessidehackspace.org.uk/">The wiki</a>
        , for more about the space
      </li>
      <li>
        <a href="https://wiki.teessidehackspace.org.uk/wiki/Slack">
          Chat to us on Slack
        </a>
      </li>
      <li>
        <a href="/members">Become a member</a>
      </li>
      <li>
        <a href="/organisation">About the organisation</a>
      </li>
    </ul>

    <h2>Donate!</h2>
    <p>
      Teesside Hackspace is currently funded entirely by membership dues &amp;
      donations. We're
      <a href="/stats">currently making a loss</a>
      and burning through our cash reserves to finance our new space. Your
      donation could help make the difference and keep us running.
    </p>
    <h3>Donate with Paypal</h3>
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="WW69KQ4P77SL4" />
      <input
        type="image"
        src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif"
        border="0"
        name="submit"
        alt="PayPal – The safer, easier way to pay online!" />
      <img
        alt=""
        border="0"
        src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif"
        width="1"
        height="1" />
    </form>
    <br />
    <h3>Donate With Cryptocurrency</h3>
    <div>
      <a
        class="donate-with-crypto"
        href="https://commerce.coinbase.com/checkout/5858453d-e069-450a-be3b-06f654d2cd0b"
        rel="noopener noreferrer"
        target="_blank">
        <span>Donate with Crypto</span>
      </a>
      <script src="https://commerce.coinbase.com/v1/checkout.js">

      </script>
    </div>
  </div>

  <div class="column">
    <h2>Social</h2>
        <div class="fb-page" data-href="https://www.facebook.com/teessidehackspace/" data-tabs="timeline" data-height="500" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/teessidehackspace/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/teessidehackspace/">Teesside Hackspace</a></blockquote></div>
        <a class="twitter-timeline" href="https://twitter.com/HackTees" data-widget-id="690915708587372545">Tweets by
          @HackTees</a>
        <script>!function (d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
          if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = p + "://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
          }
        }(document, "script", "twitter-wjs");</script>
  </div>
</div>
