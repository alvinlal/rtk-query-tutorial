import { useTodosQuery } from './services/TodoApi';

function App() {
  const { data, error, isLoading, isFetching, isSuccess } = useTodosQuery();
  return (
    <div className='App'>
      <h1>React redux toolkit RTK query tutorial</h1>
      {(isLoading || isFetching) && <h2>...Loading</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <div>
          {data.map(todo => (
            <div key={todo.id}>
              <h3>{todo.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
