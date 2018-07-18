import React, { Component } from 'react';
import { Button,  Input } from "@icedesign/base";
import DetailTable from './components/DetailTable';
import IceContainer from '@icedesign/container';

export default class DetailInfo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    
    render() {
        return (
            <div>
                <IceContainer>
                    系统名称：<Input style={{marginRight:'10px'}}/>
                    交易名称：<Input style={{marginRight:'10px'}}/>
                    案例编号：<Input style={{marginRight:'10px'}}/>
                    <Button
                        type="primary"
                        component="a"
                    >
                        <span>搜索</span>
                    </Button>
                </IceContainer>
                <div className="cate-list-page">
                    <DetailTable/>
                </div>
            </div>
           
        );
    }
}

