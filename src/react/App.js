import React from 'react';
import Gallery from './components/Gallery';
import {Container} from 'semantic-ui-react';
import UploadPhoto from "./components/UploadPhoto";
import LoadingBar from 'react-redux-loading-bar';

class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <LoadingBar/>
                </header>
                <div
                    style={
                        {
                            paddingTop: '20px'
                        }
                    }
                >
                    <Container>
                        <UploadPhoto/>
                        <Gallery/>
                    </Container>
                </div>
            </div>
        );
    }
}

export default App;
