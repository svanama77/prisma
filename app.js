// App.js
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});

const GET_TASK_TRACKERS = gql`
  query {
    taskTrackers {
      id
      title
    }
  }
`;

function TaskList() {
  const { loading, error, data } = useQuery(GET_TASK_TRACKERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Task Trackers</h2>
      <ul>
        {data.taskTrackers.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Task Tracker App</h1>
        <TaskList />
      </div>
    </ApolloProvider>
  );
}

export default App;
