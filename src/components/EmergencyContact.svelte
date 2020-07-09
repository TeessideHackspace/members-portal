<script>
  import FormComponent from "../components/FormComponent.svelte";
  import { updateEmergencyContact as mutation } from "../api.js";

  import Textfield, { Input, Textarea } from "@smui/textfield";
  import HelperText from "@smui/textfield/helper-text/index";

  export let model;
  model = model ? model : {
    first_name: '',
    last_name: '',
    phone: ''
  };

  let isComplete = x => x && x.first_name && x.last_name && x.phone;
</script>

<style>

</style>

<FormComponent title="Emergency Contact" bind:model {isComplete} {mutation}>
  <Textfield
    fullwidth
    bind:value={model.first_name}
    label="First Name"
    input$aria-controls="helper-text-standard-first-name"
    input$aria-describedby="helper-text-standard-first-name" />
  <HelperText id="helper-text-standard-first-name">
    The first name of your emergency contact
  </HelperText>

  <Textfield
    fullwidth
    bind:value={model.last_name}
    label="Last Name"
    input$aria-controls="helper-text-standard-last-name"
    input$aria-describedby="helper-text-standard-last-name" />
  <HelperText id="helper-text-standard-last-name">
    The last name of your emergency contact
  </HelperText>

  <Textfield
    fullwidth
    bind:value={model.phone}
    label="Phone"
    input$aria-controls="helper-text-standard-phone"
    input$aria-describedby="helper-text-standard-phone" />
  <HelperText id="helper-text-standard-phone">
    The phone number of your emergency contact
  </HelperText>
</FormComponent>
