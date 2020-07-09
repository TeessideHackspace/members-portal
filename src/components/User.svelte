<script>
  import FormComponent from "../components/FormComponent.svelte";
  import { updateAddress as mutation } from "../api.js";

  import Textfield, { Input, Textarea } from "@smui/textfield";
  import HelperText from "@smui/textfield/helper-text/index";

  export let model;
  model = model ? model : {};

  let isComplete = x => x && x.line_1 && x.town && x.postcode;
</script>

<style>

</style>

<FormComponent title="Address" bind:model {isComplete} {mutation}>
  <Textfield
    fullwidth
    bind:value={model.line_1}
    label="Line 1"
    input$aria-controls="helper-text-standard-line-1"
    input$aria-describedby="helper-text-standard-line-1" />
  <HelperText id="helper-text-standard-line-1">
    The first line of your address, e.g. 123 Fake St
  </HelperText>

  <Textfield
    fullwidth
    bind:value={model.line_2}
    label="Line 2"
    input$aria-controls="helper-text-standard-line-2"
    input$aria-describedby="helper-text-standard-line-2" />
  <HelperText id="helper-text-standard-line-2">
    The second line of your address (optional)
  </HelperText>

  <Textfield
    fullwidth
    bind:value={model.town}
    label="Town"
    input$aria-controls="helper-text-standard-town"
    input$aria-describedby="helper-text-standard-town" />
  <HelperText id="helper-text-standard-town">
    Your town, e.g. Middlesbrough
  </HelperText>

  <Textfield
    fullwidth
    bind:value={model.postcode}
    label="Postcode"
    input$aria-controls="helper-text-standard-postcode"
    input$aria-describedby="helper-text-standard-postcode" />
  <HelperText id="helper-text-standard-postcode">
    Your postcode, e.g. TS2 1RT
  </HelperText>
</FormComponent>
