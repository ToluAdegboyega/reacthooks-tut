import React, {useReducer} from 'react';

import './App.css';
import ClassCounter from './components/ClassCounter';
import ClassCounterOne from './components/ClassCounterOne';
import ClassMouse from './components/ClassMouse';
import ComponentAuseReducer from './components/ComponentAuseReducer';
import ComponentBuseReducer from './components/ComponentBuseReducer';
import ComponentC from './components/ComponentC';
import ComponentCuseReducer from './components/ComponentCuseReducer';
import CounterOne from './components/CounterOne';
import CounterThree from './components/CounterThree';
import CounterTwo from './components/CounterTwo';
import DataFetching from './components/DataFetching';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import HookMouse from './components/HookMouse';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

export const CountContext = React.createContext()

// const initialState = 0
// const reducer = (state, action) => {
//     switch(action) {
//         case 'increment':
//             return state + 1
//         case 'decrement':
//             return state - 1
//         case 'reset':
//             return initialState
//         default:
//             return state
//     }
// }

function App() {
  //const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">

     
     
     {/* 
     <DataFetchingTwo />
     
     <DataFetchingOne />

      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }} >
        <div>
          Count - {count}
          <ComponentAuseReducer />
          <ComponentBuseReducer />
          <ComponentCuseReducer />
        </div>
      </CountContext.Provider>

     <CounterThree/>

     <CounterTwo/>

     <CounterOne/>

     <UserContext.Provider value={'Tolu'} >
       <ChannelContext.Provider value={'T0lzz'} >
          <ComponentC />
       </ChannelContext.Provider>
     </UserContext.Provider>

     <DataFetching />
     
     <IntervalHookCounter />
     <IntervalClassCounter />

     <MouseContainer/>

     <HookMouse />

     <ClassMouse />

     <HookCounterOne/>
     <ClassCounterOne/>

     <HookCounterFour />

     <HookCounterThree />

     <HookCounterTwo />

     <HookCounter />

     <ClassCounter /> 
     */}
    </div>
  );
}

export default App;
