<script>
  import FaEdit from "svelte-icons/fa/FaEdit.svelte";
  import Button from "@smui/button";
  import Textfield, { Input, Textarea } from "@smui/textfield";
  import HelperText from "@smui/textfield/helper-text/index";

  import { client } from "../apollo";
  import { mutate } from "svelte-apollo";

  import Card, { Content } from "@smui/card";
  import { Icon } from "@smui/fab";
  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";

  import {
    gocardlessSubscribe,
    gocardlessUpdateSubscription,
    gocardlessCancel,
    getSubscription
  } from "../api.js";

  export let model;

  if (!model) {
    model = {};
  }

  let subscriptionAmount = 15;

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

  const createSubscription = async () => {
    await gocardlessSubscribe(subscriptionAmount);
    await updateModel();
    console.log(model);
  };

  const updateSubscription = async () => {
    await gocardlessUpdateSubscription(parseInt(model.amount, 10));
    await updateModel();
    console.log(model);
  };

  const cancelSubscription = async () => {
    await gocardlessCancel();
    await updateModel();
    console.log(model);
  };

  const updateModel = async () => {
    const subscription = await getSubscription();
    await subscription.refetch();
    const response = await subscription.result();
    console.log(response);
    model = response.data.subscription;
  };
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
          <Title>Subscription</Title>
        </Section>
      </Row>
    </header>
    <Content>
      {#if model.status == 'missing_customer'}
        <p>You must set up a Direct Debit before you can subscribe.</p>
      {:else if model.status == 'missing_subscription'}
        <p>
          Teesside Hackspace is a members-owned non-profit association. Members
          have a hand in the running of the organisation as well as 24/7 access
          to the space.
        </p>

        <p>
          Membership can be paid monthly or annually by Direct Debit. We ask
          that you pay what you think the space will be worth to you. Please be
          as generous as you can, Teesside Hackspace is currently funded
          entirely by membership dues & donations. We're currently making a loss
          and burning through our cash reserves to finance our new space. Our
          recommended minimum subscription is £15/month. For students, retirees
          or low income members the minimum subscription is £5/month.
        </p>

        <span>£</span>
        <Textfield
          bind:value={subscriptionAmount}
          label="Amount"
          input$aria-controls="helper-text-standard-amount"
          input$aria-describedby="helper-text-standard-amount" />
        <HelperText id="helper-text-standard-amount">
          Subscription amount per month, in £
        </HelperText>

        <Button
          on:click={createSubscription}
          variant="outlined"
          class="update-button">
          Subscribe to Teesside Hackspace
        </Button>
      {:else}
        <dl>
          <dt>Status</dt>
          <dd>{model.status}</dd>

          <dt>Amount</dt>

          <dd>
            £
            <Textfield
              bind:value={model.amount}
              label="Amount"
              input$aria-controls="helper-text-standard-amount"
              input$aria-describedby="helper-text-standard-amount" />
            <HelperText id="helper-text-standard-amount">
              Subscription amount per month, in £
            </HelperText>
          </dd>

          <dt>Created at</dt>
          <dd>{model.createdAt}</dd>
        </dl>

        {#if model.status == 'active'}
          <Button
            on:click={updateSubscription}
            variant="outlined"
            class="update-button">
            Update Subscription
          </Button>
          <Button
            on:click={cancelSubscription}
            variant="outlined"
            class="update-button">
            Cancel Subscription
          </Button>
        {:else}
          <Button
            on:click={createSubscription}
            variant="outlined"
            class="update-button">
            Re-subscribe to Teesside Hackspace
          </Button>
        {/if}
      {/if}

    </Content>
  </div>
</Card>
