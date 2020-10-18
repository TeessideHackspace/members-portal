import gql from "graphql-tag";

export const GET_USER_QUERY = gql`
  query {
    user_entity {
      id
      username
      email
      first_name
      last_name
      user_address {
        line_1
        line_2
        postcode
        town
      }
      user_emergency_contact {
        first_name
        last_name
        phone
      }
      user_rfids {
        name
        id
      }
      subscription {
        amount
        status
        id
        createdAt
      }
      mandate {
        id
        status
        reference
        nextPossibleChargeDate
        createdAt
      }
    }
  }
`;

export const GET_SUBSCRIPTION_QUERY = gql`
  query {
    subscription {
      amount
      status
      id
      createdAt
    }
  }
`;

export const UPDATE_ADDRESS_MUTATION = gql`
  mutation(
    $line_1: String!
    $line_2: String!
    $town: String!
    $postcode: String!
  ) {
    insert_user_address(
      objects: {
        line_1: $line_1
        line_2: $line_2
        postcode: $postcode
        town: $town
      }
      on_conflict: {
        constraint: user_address_user_key
        update_columns: [line_1, line_2, town, postcode]
      }
    ) {
      returning {
        line_1
        line_2
        postcode
        town
      }
    }
  }
`;

export const UPDATE_EMERGENCY_CONTACT_MUTATION = gql`
  mutation($first_name: String!, $last_name: String!, $phone: String!) {
    insert_user_emergency_contact(
      objects: { first_name: $first_name, last_name: $last_name, phone: $phone }
      on_conflict: {
        constraint: user_emergency_contact_user_key
        update_columns: [first_name, last_name, phone]
      }
    ) {
      returning {
        first_name
        last_name
        phone
      }
    }
  }
`;

export const GET_GOCARDLESS_REDIRECT_MUTATION = gql`
  mutation {
    generateRedirectUrl {
      gocardlessUrl
    }
  }
`;

export const CONFIRM_GOCARDLESS_REDIRECT_MUTATION = gql`
  mutation($redirectFlowId: String!) {
    confirmRedirect(redirectFlowId: $redirectFlowId) {
      id
    }
  }
`;

export const GOCARDLESS_SUBSCRIBE_MUTATION = gql`
  mutation($amount: Int!) {
    subscribe(amount: $amount) {
      id
    }
  }
`;

export const GOCARDLESS_UPDATE_SUBSCRIPTION_MUTATION = gql`
  mutation($amount: Int!) {
    changeSubscriptionAmount(amount: $amount) {
      id
    }
  }
`;

export const GOCARDLESS_CANCEL_SUBSCRIPTION_MUTATION = gql`
  mutation {
    cancelSubscription {
      id
    }
  }
`;

export const MEMBERSHIP_STATS_QUERY = gql`
  query {
    stats {
      average
      income
      numLessAverage
      numMembers
    }
  }
`;
