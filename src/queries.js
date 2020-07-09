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
      }
      gocardlessSubscription {
        amount
        status
        id
        created_at
      }
      gocardlessMandate {
        created_at
        id
        next_possible_charge_date
        reference
        status
      }
    }
  `;

export const UPDATE_ADDRESS_MUTATION = gql`
  mutation($line_1: String!, $line_2: String!, $town: String!, $postcode: String!) {
    insert_user_address(
      objects: {line_1: $line_1, line_2: $line_2, postcode: $postcode, town: $town}, 
      on_conflict: {constraint: user_address_user_key, update_columns: [line_1, line_2, town, postcode]}
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
      objects: {first_name: $first_name, last_name: $last_name, phone: $phone}, 
      on_conflict: {constraint: user_emergency_contact_user_key, update_columns: [first_name, last_name, phone]}
    ) {
      returning {
        first_name
        last_name
        phone
      }
    }
  }
`;