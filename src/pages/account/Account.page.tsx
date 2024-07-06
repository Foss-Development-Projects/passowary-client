import AccountPreviewPane from "../../components/account/preview-pane/AccountPreviewPane.component";
import AccountNavigationBar from "../../components/account/navigation/AccountNavigation.component";
import Header from "../../components/shared/header/Header.component";
import Navbar from "../../components/shared/navbar/Navbar.component";

const AccountPage = () => {
    return (
        <div  className="w-full">
            <Header />
            <Navbar />
            <div className="px-2.5">
                <AccountNavigationBar />
                <AccountPreviewPane />
            </div>
        </div>
    )
}
export default AccountPage;