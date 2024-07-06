import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CredentialPage from './pages/credential/Credential.page'

import './App.scss'
import HomePage from './pages/home/Home.page';
import AccountPage from './pages/account/Account.page';
import AccountProfile from './components/account/profile/AccountProfile.component';
import RegisterPage from './pages/register/Register.page';
import LoginPage from './pages/login/Login.page';
import ResetPasswordPage from './pages/reset-password/ResetPassword.page';
import ForgotPasswordPage from './pages/forgot-password/ForgotPassword.page';
import AboutPage from './pages/about/About.page';

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
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/forgot-password' element={<ForgotPasswordPage />} />
                <Route path='/reset-password' element={<ResetPasswordPage />} />
                <Route path='/about' element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
        
        </>
    )
}

export default App