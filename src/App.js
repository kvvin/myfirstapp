function App(props){
  const currDate = new Date();

  return (
      <div>
        <h1>Hello, World! My name is Kevin.</h1>
        <h2>The date is: {currDate.toDateString()} and the time now is {currDate.toLocaleTimeString()}.</h2>
      </div>
  );
}
export default App;
