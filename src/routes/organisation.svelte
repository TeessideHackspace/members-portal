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


  <h2>Organisation</h2>
  <p>Teesside Hackspace Ltd. is a company registered in England and Wales, limited by guarantee. A limited-by-guarantee company has no shareholders to pay profit to. The <a href="organisation/docs/articles.pdf">constitution</a> of Teesside Hackspace prevents the company from paying profits to anyone, although we're not a registered charity and so still have to pay tax. We believe strongly in a transparent, community-run organisation.</p>

  <h3>Membership</h3>

  <p>Anyone can <a href="/members">become a member</a> of Teesside Hackspace by paying a monthly fee. Members of the company are entitled to vote at meetings and elect trustees.</p>

  <h3>Getting in Touch</h3>

  <p>There are several ways of getting in contact with Teesside Hackspace members and starting a first conversation, be it that you want to learn more about our community, you are interested in coming to our space, you want to discuss your project with someone, or for any other reason.</p>

  <p>We have a <a href="https://wiki.teessidehackspace.org.uk/wiki/Mailing_List">mailing list</a> for the community and its subgroups, a <a href="https://wiki.teessidehackspace.org.uk/wiki/Slack">Slack</a>, but also a weekly <a href="https://wiki.lteessidehackspace.org.uk/wiki/Weekly_Open_Evenings">social night every Tuesday</a> that is open to the public.</p>

  <h3>Trustees</h3>

  <p>The trustees of Teesside Hackspace ensure the long-term health of the space as an organisation and are elected by the members yearly.
    The current list of trustees is available <a href="https://wiki.teessidehackspace.org.uk/wiki/Trustees">on the wiki</a>.</p>

  <p>You can contact the trustees by emailing <i>trustees (at) teessidehackspace.org.uk</i>.</p>

  <h3>Statutory Information</h3>

  <p>Teesside Hackspace Ltd. is a company limited by guarantee, registered in England and Wales with company number 9955834. We are not VAT registered.</p>

  <p>Registered address:<br>
    147 Crescent Road<br>
    Middlesbrough<br> TS1 4QT</p>


