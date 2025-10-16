// Packages & Libraries -- node_modules
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Root Stylesheet (SCSS)
import './App.scss'

// Custom Pages 
import HomePage from './pages/home/Home.page';
import CredentialPage from './pages/credential/Credential.page'
import AccountPage from './pages/account/Account.page';
import RegisterPage from './pages/register/Register.page';
import LoginPage from './pages/login/Login.page';
import ResetPasswordPage from './pages/reset-password/ResetPassword.page';
import ForgotPasswordPage from './pages/forgot-password/ForgotPassword.page';
import AboutPage from './pages/about/About.page';

// Account Components
import AccountProfile from './components/account/profile/AccountProfile.component';
import AccountActivity from './components/account/activity/AccountActivity.component';
import AccountAdditional from './components/account/additional/AccountAdditional.component';
import AccountDanger from './components/account/danger/AccountDanger.component';
import AccountNotification from './components/account/notification/AccountNotification.component';
import AccountSecurity from './components/account/security/AccountSecurity.component';

// Root Application Function
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
                        <Route path='additional' element={<AccountAdditional />} />
                        <Route path='danger' element={<AccountDanger />} />
                        <Route path='security' element={<AccountSecurity />} />
                        <Route path='activity' element={<AccountActivity />} />
                        <Route path='notification' element={<AccountNotification />} />
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