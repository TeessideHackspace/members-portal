<script>
  import FaEdit from "svelte-icons/fa/FaEdit.svelte";
  import { client } from "../apollo";
  import { mutate } from "svelte-apollo";

  import Card, { Content } from "@smui/card";
  import { Icon } from "@smui/fab";
  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";

  export let model;

  if (!model) {
    model = {};
  }

  const getStatus = () => {
    if (model.status == "active") {
      return "active";
    } else if (
      model.status == "submitted" ||
      model.status == "created" ||
      model.status == "pending_submission"
    ) {
      return "pending";
    } else if (model.status == "failed") {
      return "failed";
    } else {
      return "none";
    }
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
  <div class="direct-debit {getStatus()}">
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
      <dl>
        <dt>Status</dt>
        <dd>{model.status}</dd>

        <dt>Payment Reference</dt>
        <dd>{model.reference}</dd>

        <dt>Created at</dt>
        <dd>{model.created_at}</dd>
      </dl>

    </Content>
  </div>
</Card>
