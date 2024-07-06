import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CredentialPage from './pages/credential/Credential.page'

import './App.scss'
import HomePage from './pages/home/Home.page';
import AccountPage from './pages/account/Account.page';
import AccountProfile from './components/account/profile/AccountProfile.component';

function App() {

    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='' element={<HomePage />} />
                <Route path='/credentials' element={<CredentialPage />} />
                <Route path='/account' element={<AccountPage />}>
                    <Route path='' element={<AccountProfile />} />
                    <Route path='profile' element={<AccountProfile />} />
                </Route>
            </Routes>
        </BrowserRouter>
        
        </>
    )
}

export default App