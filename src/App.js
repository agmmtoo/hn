// locl component
import Stories from './components/Stories';

// hooks
import useFetch from './hooks/fetch-hook';

// style
import './App.css';

const App = () => {
  const { loading, data, error } = useFetch({
    url: 'https://hacker-news.firebaseio.com/v0/beststories.json',
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>error: {JSON.stringify(error)}</div>;
  if (data) return (
    <Stories stories={data} />
  );
}

export default App;
