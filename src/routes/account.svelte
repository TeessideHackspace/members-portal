<script>
  import Address from "../components/Address.svelte";
  import EmergencyContact from "../components/EmergencyContact.svelte";
  import DirectDebit from "../components/DirectDebit.svelte";
  import Subscription from "../components/Subscription.svelte";
  import { getUser } from "../api";
  import CONST from "../constants";
  import { loggedIn, userProfile } from "../main.store";
  import Chip from "../components/Chip.svelte";
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

{#if $userProfile.profile && loggedIn}
  <h1>Welcome {$userProfile.profile.name} 🎉</h1>
  <h2>Username</h2>
  <p>{$userProfile.profile.preferred_username}</p>
  <h2>Email</h2>
  <p>{$userProfile.profile.email}</p>
  <h2>Roles</h2>
	<div>
  {#each $userProfile.profile.resource_access['hackspace-api'].roles as role}
    <Chip value={role}></Chip>
  {/each}
	</div>

  {#each result.data.user_entity as user}
  <h1>{user.first_name} {user.last_name}</h1>
    <h3>{user.email}</h3>

    <Address model={user.user_address} />
    <EmergencyContact model={user.user_emergency_contact} />
  {/each}
  <DirectDebit model={result.data.gocardlessMandate} />
  <Subscription model={result.data.gocardlessSubscription} />



{/if}

  

{:catch error}
  <li>Error loading user: {error}</li>
{/await}
