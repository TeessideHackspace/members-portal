import {
  UPDATE_EMERGENCY_CONTACT_MUTATION,
  UPDATE_ADDRESS_MUTATION,
  GET_USER_QUERY,
  GET_GOCARDLESS_REDIRECT_MUTATION,
  CONFIRM_GOCARDLESS_REDIRECT_MUTATION,
  GOCARDLESS_SUBSCRIBE_MUTATION,
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

export const getGocardlessUrl = () =>
  mutate(client, { mutation: GET_GOCARDLESS_REDIRECT_MUTATION });

export const confirmGocardlessRedirect = (redirect_flow_id) =>
  mutate(client, {
    mutation: CONFIRM_GOCARDLESS_REDIRECT_MUTATION,
    variables: {
      redirect_flow_id: redirect_flow_id,
    },
  });

export const gocardlessSubscribe = (subscription_amount) =>
  mutate(client, {
    mutation: GOCARDLESS_SUBSCRIBE_MUTATION,
    variables: {
      subscription_amount: subscription_amount,
    },
  });

export const getMembershipStats = () =>
  query(client, { query: MEMBERSHIP_STATS_QUERY });
