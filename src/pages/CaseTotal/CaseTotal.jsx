import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import CaseTotalTable from './components/CaseTotalTable'
export default class CaseTotal extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render() {
        return (
            <div>
                <IceContainer>
                    <CaseTotalTable/>
                </IceContainer>
            </div>
        );
    }
}

