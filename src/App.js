import Main from './layout/Main';
import contextExports from './components/context';

function App() {
  return (
    <>
    <contextExports.UserContext.Provider value={{users:[]}}>
      <Main />
    </contextExports.UserContext.Provider>
    </>
  )
}

export default App;
