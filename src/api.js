import {
  UPDATE_EMERGENCY_CONTACT_MUTATION,
  UPDATE_ADDRESS_MUTATION,
  GET_USER_QUERY,
  GET_SUBSCRIPTION_QUERY,
  GET_GOCARDLESS_REDIRECT_MUTATION,
  CONFIRM_GOCARDLESS_REDIRECT_MUTATION,
  GOCARDLESS_SUBSCRIBE_MUTATION,
  GOCARDLESS_UPDATE_SUBSCRIPTION_MUTATION,
  GOCARDLESS_CANCEL_SUBSCRIPTION_MUTATION,
  MEMBERSHIP_STATS_QUERY,
} from "./queries";
import { client } from "./apollo";
import { query, mutate } from "svelte-apollo";

export const updateEmergencyContact = (model) =>
  mutate(client, {
    mutation: UPDATE_EMERGENCY_CONTACT_MUTATION,
    variables: {
      first_name: model.first_name,
      last_name: model.last_name,
      phone: model.phone,
    },
  });

export const updateAddress = (model) =>
  mutate(client, {
    mutation: UPDATE_ADDRESS_MUTATION,
    variables: {
      line_1: model.line_1,
      line_2: model.line_2,
      town: model.town,
      postcode: model.postcode,
    },
  });

export const getUser = () => query(client, { query: GET_USER_QUERY });

export const getSubscription = () =>
  query(client, { query: GET_SUBSCRIPTION_QUERY });

export const getGocardlessUrl = () =>
  mutate(client, { mutation: GET_GOCARDLESS_REDIRECT_MUTATION });

export const confirmGocardlessRedirect = (redirectFlowId) =>
  mutate(client, {
    mutation: CONFIRM_GOCARDLESS_REDIRECT_MUTATION,
    variables: {
      redirectFlowId,
    },
  });

export const gocardlessSubscribe = (amount) =>
  mutate(client, {
    mutation: GOCARDLESS_SUBSCRIBE_MUTATION,
    variables: {
      amount,
    },
  });

export const gocardlessUpdateSubscription = (amount) => {
  mutate(client, {
    mutation: GOCARDLESS_UPDATE_SUBSCRIPTION_MUTATION,
    variables: {
      amount,
    },
  });
};

export const gocardlessCancel = () =>
  mutate(client, {
    mutation: GOCARDLESS_CANCEL_SUBSCRIPTION_MUTATION,
  });

export const getMembershipStats = () =>
  query(client, { query: MEMBERSHIP_STATS_QUERY });
