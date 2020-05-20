import { GraphQLClient } from 'graphql-hooks'
import memCache from 'graphql-hooks-memcache'

let graphQLClient = null

function create(initialState = {}) {
  return new GraphQLClient({
    ssrMode: typeof window === 'undefined',
    url: 'http://localhost:1337/graphql',
    cache: memCache({ initialState }),
    useGETForQueries: true
  })
}

export default function initGraphQL(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!graphQLClient) {
    graphQLClient = create(initialState)
  }

  return graphQLClient
}