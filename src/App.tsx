import "reflect-metadata";
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {DataView} from "./components/DataView";
import {DataViewOverProp} from "./components/DataViewOverProp";
import {DataService} from "./services/data-service";
import {container} from "./inversify/container";
import {Types} from "./inversify/types";

class App extends Component {
    private service: DataService = container.get(Types.DataService);

    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <p>
                        <DataView/>
                        <DataViewOverProp value={this.service.value}/>
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
