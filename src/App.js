import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {AccountSummary} from './components/AccountSummary';
import {TransactionHistory} from './components/TransactionHistory';
import {AddTransaction} from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';
import firebase from './firebase';
function App() {
  const messaging=firebase.messaging();
  messaging.requestPermission().then(()=>{
    return messaging.getToken()
  }).then((token)=>{
    prompt('token',token);
    console.log('token',token);
  })
  return (
    <GlobalProvider>
        <Header/>
        <div className="container">
          <Balance/>
          <AccountSummary/>
          <TransactionHistory/>
          <AddTransaction/>
        </div>
    </GlobalProvider>
  );
}

export default App;
