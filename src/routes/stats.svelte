<script>
  import CONST from "../constants";
  import HackspaceLogo from "../components/HackspaceLogo.svelte";
  import { getMembershipStats } from "../api.js";
  import Chart from "svelte-frappe-charts";

  const stats = getMembershipStats();

  const expenses = [
    {
      label: "Rent",
      v: 625
    },
    {
      label: "Service Charge for Industrial Est.",
      v: 52.91
    },
    {
      label: "Building Insurance",
      v: 29.16
    },
    {
      label: "Liability Insurance",
      v: 20
    },
    {
      label: "Accounting",
      v: 25
    },
    {
      label: "Electricity",
      v: 100
    },
    {
      label: "Gas",
      v: 50
    },
    {
      label: "Water",
      v: 22.16
    },
    {
      label: "Internet",
      v: 38.4
    },
    {
      label: "Hosting & Email",
      v: 8.22
    }
  ];
  const totalExpense = expenses.reduce(function(p, c) {
    p += c.v;
    return p;
  }, 0);

  let data = {
    labels: expenses.map(x => x.label),
    datasets: [
      {
        values: expenses.map(x => x.v)
      }
    ]
  };

  stats.subscribe(async value => {
    const result = await value;

    result.data.stats.income = 768;

    const max = Math.max(result.data.stats.income, totalExpense);
    inOut = {
      in: result.data.stats.income.toFixed(2),
      inPct: (result.data.stats.income / max) * 100,
      out: totalExpense.toFixed(2),
      outPct: (totalExpense / max) * 100
    };
  });

  let inOut = {
    in: 0,
    inPct: 0,
    out: 0,
    outPct: 0
  };
</script>

<style>
  .chart-container {
    padding: 30px 50px 50px 50px;
  }
  .bar {
    height: 20px;
    background: #1ab91b;
  }
  dt {
    font-weight: bold;
  }
  .loss {
    color: red;
  }
  .profit {
    color: #1ab91b;
  }
</style>

<svelte:head>
  <title>{CONST.TITLE}: Stats</title>
</svelte:head>

<strong>
  Teesside Hackspace is entirely funded by your membership subscriptions &
  donations.
</strong>
<p>
  We've taken a massive leap in moving to our new space, and we're currently
  making a monthly loss and burning through our cash reserves. We can't spend
  more money on making the space more awesome until we're making a monthly
  surplus.
</p>

{#await $stats}
  <li>Loading...</li>
{:then result}

  <dl>
    <dt>Number of members</dt>
    <dd>{result.data.stats.numMembers}</dd>

    <dt>Average Subscription:</dt>
    <dd>£{result.data.stats.average} / month</dd>

    <dt>Number of members paying less than the average</dt>
    <dd>{result.data.stats.numLessAverage}</dd>
  </dl>

  <h1>
    We are making a monthly
    {#if inOut.in >= inOut.out}
      <span class="profit">profit</span>
    {:else}
      <span class="loss">loss</span>
    {/if}
    of
    <strong>£{Math.abs(inOut.in - inOut.out).toFixed(2)}</strong>
  </h1>

  <h2>Subscriptions: £{inOut.in}</h2>
  <div class="chart-container">
    <div class="bar subs" style="width: {inOut.inPct}%;" />
    <!--<div class="bar expenses" style="width: {inOut.outPct}%;">Expenses: £{inOut.in}</div>-->
  </div>

  <h2>Expenses: £{inOut.out}</h2>
  <Chart {data} type="percentage" maxSlices="100" height="150" />

  <article>
    <header>
      <h2>How You Can Help</h2>
    </header>
    <ul>
      <li>
        <strong class="large">
          <a href="/members">Join Teesside Hackspace today!</a>
        </strong>
        You'll get 24/7 access, a storage box for your projects, and warm fuzzy
        feelings for supporting us. Our recommended minimum subscription is
        £15/month. For students, retirees or low income members the minimum
        subscription is £5/month.
      </li>
      <li>
        If you're already a member,
        <strong class="large">
          increase your monthly subscription payment
        </strong>
        by a few pounds.
      </li>
      <li>
        Volunteer to run a workshop on your area of expertise, or help us keep
        our infrastructure in shape.
      </li>
      <li>
        Let us know if there's something you'd like added to or changed in the
        Hackspace that would convince you to pay more each month.
      </li>
    </ul>
  </article>

{:catch error}
  <li>Error loading stats: {error}</li>
{/await}
