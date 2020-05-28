import React, { Component } from 'react';
import terrier from './images/kyome_terrier.png';
import './App.css';
import { Header } from './Header';
import jp from './localize/jp.json';

class App extends Component {
    render() {
        return (<div className="App">
        <Header
        language={jp.language_link}
        profile={jp.profile_link}
        works={jp.works_link}
        articles={jp.articles_link}
        contact={jp.contact_link}
        />
        </div>
        );
    }
}

export default App;
