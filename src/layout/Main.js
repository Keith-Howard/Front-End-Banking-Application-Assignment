import NavBar from '../components/NavBar';
import { Routes, Route, HashRouter } from 'react-router-dom';
import CreateAccount from '../components/CreateAccount';
import Login from '../components/Login';
import AllData from '../components/AllData';
import Transaction from '../components/Transaction'
import Home from '../components/Home';

function Main() {

  return (
    <div>
      <HashRouter>
            <NavBar />
            <div className="content">
                <Routes>
                    <Route path="/components/CreateAccount" element={<CreateAccount />} />
                    <Route path="/components/Deposit" element={<Transaction transactionType="DEPOSIT" />} />
                    <Route path="/components/Login" element={<Login />} />
                    <Route path="/components/Withdraw" element={<Transaction transactionType='WITHDRAW'  />} />
                    <Route path="/components/AllData" element={<AllData />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
      </HashRouter>
    </div>
  );

}

export default Main;