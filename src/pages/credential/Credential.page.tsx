import CredentialCard from "../../components/credential-card/CredentialCard.component";
import Header from "../../components/shared/header/Header.component";
import Navbar from "../../components/shared/navbar/Navbar.component";
import Toolbar from "../../components/toolbar/Toolbar.component";
import CredentialSearch from "../../modules/search/Search.module";

import CardImage from './../../assets/img/sun.png'

const cards = [ 
    { id: 1, title: "Google Account Number The Raptor 1", icon: CardImage  },
    { id: 2, title: "Google Account 2", icon: CardImage  },
    { id: 3, title: "Google Account 3", icon: CardImage  },
    { id: 4, title: "Google Account 4", icon: CardImage  },
    { id: 5, title: "Google Account 5", icon: CardImage  },
    // { id: 6, title: "Google Account 6", icon: CardImage  },
    // { id: 7, title: "Google Account 7", icon: CardImage  },
]

const CredentialPage = () => {
    return (
        <div className="container-fluid text-center h-screen p-2">
            <Header />
            <Navbar />
            <div className="preview rounded-md px-2">
                <h2 className="my-4 text-2xl font-bold">Your Credentials</h2>
                <CredentialSearch />
                <Toolbar />
                <ul className="search-item-list mt-2 px-1.5 py-2">
                    {
                        cards.map((card => {
                            return  <CredentialCard key={card.id} title={card.title} icon={card.icon} />
                        }))
                    }
                </ul>
            </div>

        </div>
    )
}

export default CredentialPage;