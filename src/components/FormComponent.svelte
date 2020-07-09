<script>
  import Button from "@smui/button";
  import Card, { Content } from "@smui/card";
  import { Icon } from "@smui/fab";
  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";

  import { client } from "../apollo";
  import { mutate } from "svelte-apollo";

  export let title;
  export let model;
  export let isComplete;
  export let mutation;

  if (!model) {
    model = {};
  }

  $: complete = isComplete(model);
  $: color = complete ? "primary" : "default";

  async function save(e) {
    e.preventDefault();
    try {
      await mutation(model);
    } catch (error) {
      console.log(error);
      // TODO
    }
  }
</script>

<style type="text/scss">
  .mdc-top-app-bar {
    :global(.material-icons) {
      padding-left: 8px;
    }
    :global(.done) {
      display: none;
    }
  }
  .complete {
    .mdc-top-app-bar {
      color: white;
      background-color: #1ab91b;
      :global(.done) {
        display: inline-block;
      }
      :global(.incomplete) {
        display: none;
      }
    }
  }
</style>

<Card>
  <div class:complete>
    <header
      variant="static"
      dense
      class="mdc-top-app-bar smui-top-app-bar--static mdc-top-app-bar--dense
      smui-top-app-bar--color-secondary">
      <Row>
        <Section>
          <Icon class="material-icons done">done</Icon>
          <Icon class="material-icons incomplete">forward</Icon>
          <Title>{title}</Title>
        </Section>
      </Row>
    </header>
    <Content>
      <form on:submit={save}>
        <slot {model} />
        <Button
          type="submit"
          variant="outlined"
          class="update-button"
          disabled={!complete}>
          Save
        </Button>
      </form>

    </Content>
  </div>
</Card>
