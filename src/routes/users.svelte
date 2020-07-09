<script>
  import Address from "../components/Address.svelte";
  import EmergencyContact from "../components/EmergencyContact.svelte";
  import DirectDebit from "../components/DirectDebit.svelte";
  import Subscription from "../components/Subscription.svelte";
  import { getUser } from "../api";
  import CONST from "../constants";

  import Button, {Label, Icon} from '@smui/button';

  const user = getUser();
</script>

<style>

</style>

<svelte:head>
  <title>{CONST.TITLE}: Account</title>
</svelte:head>

{#await $user}
  <li>Loading...</li>
{:then result}
  {#each result.data.user_entity as user}
  <h1>{user.first_name} {user.last_name}</h1>
    <h3>{user.email}</h3>

    <Address model={user.user_address} />
    <EmergencyContact model={user.user_emergency_contact} />
  {/each}
  <DirectDebit model={result.data.gocardlessMandate} />
  <Subscription model={result.data.gocardlessSubscription} />


{:catch error}
  <li>Error loading user: {error}</li>
{/await}
