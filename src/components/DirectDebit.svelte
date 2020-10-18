<script>
  import FaEdit from "svelte-icons/fa/FaEdit.svelte";
  import Button from "@smui/button";
  import { client } from "../apollo";
  import { mutate } from "svelte-apollo";

  import Card, { Content } from "@smui/card";
  import { Icon } from "@smui/fab";
  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";

  import { getGocardlessUrl, confirmGocardlessRedirect } from "../api.js";

  export let model;

  if (!model) {
    model = {};
  }

  let cssStatus = "none";
  $: if (model.status == "active") {
    cssStatus = "active";
  } else if (
    model.status == "submitted" ||
    model.status == "created" ||
    model.status == "pending_submission"
  ) {
    cssStatus = "pending";
  } else if (model.status == "failed") {
    cssStatus = "failed";
  } else {
    cssStatus = "none";
  }

  const setupDirectDebit = async () => {
    const response = await getGocardlessUrl();
    const url = response.data.generateRedirectUrl.gocardlessUrl;
    window.location = url;
  };

  const handleRedirect = async () => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("redirect_flow_id")) {
      const result = await confirmGocardlessRedirect(
        params.get("redirect_flow_id")
      );
      model.refetch();
    }
  };
  handleRedirect();
</script>

<style type="text/scss">
  @import "@material/typography/mdc-typography";

  dl {
    @include mdc-typography("body1");
    dt {
      font-weight: bold;
      margin-top: 8px;
    }
  }

  .mdc-top-app-bar {
    :global(.material-icons) {
      padding-left: 8px;
      display: none;
    }
  }
  .active {
    .mdc-top-app-bar {
      color: white;
      background-color: #1ab91b;

      :global(.active) {
        display: inline-block;
      }
    }
  }
  .pending {
    .mdc-top-app-bar {
      color: white;
      background-color: orange;

      :global(.pending) {
        display: inline-block;
      }
    }
  }
  .failed {
    .mdc-top-app-bar {
      color: white;
      background-color: red;
      :global(.failed) {
        display: inline-block;
      }
    }
  }
</style>

<Card>
  <div class="direct-debit {cssStatus}">
    <header
      variant="static"
      dense
      class="mdc-top-app-bar smui-top-app-bar--static mdc-top-app-bar--dense
      smui-top-app-bar--color-secondary">
      <Row>
        <Section>
          <Icon class="material-icons active">done</Icon>
          <Icon class="material-icons pending">hourglass_empty</Icon>
          <Icon class="material-icons failed">report_problem</Icon>
          <Title>Direct Debit</Title>
        </Section>
      </Row>
    </header>
    <Content>
      {#if model.status == 'missing_customer'}
        <p>
          You do not yet have a Direct Debit mandate set up. Would you like to
          create one now?
        </p>
        <Button
          on:click={setupDirectDebit}
          variant="outlined"
          class="update-button">
          Set up Direct Debit
        </Button>
      {:else if model.status == 'missing_mandate'}
        <p>Setting up your direct debit, this may take a few minutes.</p>
      {:else}
        <dl>
          <dt>Status</dt>
          <dd>{model.status}</dd>

          <dt>Payment Reference</dt>
          <dd>{model.reference}</dd>

          <dt>Created at</dt>
          <dd>{model.createdAt}</dd>
        </dl>
      {/if}
    </Content>
  </div>
</Card>
