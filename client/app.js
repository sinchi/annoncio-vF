import React from 'react';
import Header from './components/header';
import LoginForm from './components/login_form';
import SideMenu from './components/side_menu';
import SearchBar from './components/search_bar';
import AnnoncesMain from './components/annonces/annonces_main';


const App = () => {
  return(
    <div>
      <Header />

      <div className="container" style={{ marginTop:"90px" }}>
        <div className="col-xs-2" style={{ position:"fixed"}}>
          <SideMenu />
        </div>
        <div className="col-xs-6 col-xs-offset-3" >
          <AnnoncesMain />
        </div>

        <div className="col-xs-2">

        </div>
      </div>

    </div>
  )
}

export default App;
