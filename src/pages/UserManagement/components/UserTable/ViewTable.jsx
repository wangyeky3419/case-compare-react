/* eslint-disable react/no-unused-state, no-plusplus */
import React, { Component } from 'react';
import { Table, Switch, Button, Grid, Search } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import CustomTable from '../CustomTable'

const { Row, Col } = Grid;
const MOCK_DATA = [
    {"id":5513,"fieldIndex":1,"fieldLevel":"1","fieldCode":"serviceId","fieldName":"交易码"},
    {"id":5514,"fieldIndex":2,"fieldLevel":"1","fieldCode":"channelId","fieldName":"渠道号"},
    {"id":5518,"fieldIndex":1,"fieldLevel":"1","fieldCode":"stream","fieldName":"字段1",
        'children':[
            {"id":5519,"fieldIndex":2,"fieldLevel":"2","fieldCode":"list[name=commonDataList]","fieldName":"字段2",
                'children':[
                    {"id":5520,"fieldIndex":3,"fieldLevel":"3","fieldCode":"row","fieldName":"字段3",
                        "children":[
                            {"id":5521,"fieldIndex":4,"fieldLevel":"4","fieldCode":"language","fieldName":"字段4"},
                            {"id":5522,"fieldIndex":5,"fieldLevel":"4","fieldCode":"timeStamp","fieldName":"字段5"},
                            {"id":5523,"fieldIndex":6,"fieldLevel":"4","fieldCode":"random","fieldName":"字段6"},
                            {"id":5524,"fieldIndex":7,"fieldLevel":"4","fieldCode":"bsnCode","fieldName":"字段7"},
                            {"id":5525,"fieldIndex":8,"fieldLevel":"4","fieldCode":"productCode","fieldName":"字段8"},
                            {"id":5526,"fieldIndex":9,"fieldLevel":"4","fieldCode":"sysCode","fieldName":"字段9"},
                            {"id":5527,"fieldIndex":10,"fieldLevel":"4","fieldCode":"clientIP","fieldName":"字段10"},
                            {"id":5528,"fieldIndex":11,"fieldLevel":"4","fieldCode":"encryptFlag","fieldName":"字段11"},
                            {"id":5529,"fieldIndex":12,"fieldLevel":"4","fieldCode":"oprRole","fieldName":"字段12"},
                            {"id":5530,"fieldIndex":13,"fieldLevel":"4","fieldCode":"oprNm","fieldName":"字段13"},
                            {"id":5531,"fieldIndex":14,"fieldLevel":"4","fieldCode":"oprNo","fieldName":"字段14"},
                            {"id":5532,"fieldIndex":15,"fieldLevel":"4","fieldCode":"groupFlag","fieldName":"字段15"},
                            {"id":5533,"fieldIndex":16,"fieldLevel":"4","fieldCode":"cstNm","fieldName":"字段16"},
                            {"id":5534,"fieldIndex":17,"fieldLevel":"4","fieldCode":"cstNo","fieldName":"字段17"},
                            {"id":5535,"fieldIndex":18,"fieldLevel":"4","fieldCode":"loginType","fieldName":"字段18"}
                        ]
                    }
                ]
            },
            {"id":5536,"fieldIndex":19,"fieldLevel":"2","fieldCode":"provinceID","fieldName":"字段19"},
            {"id":5537,"fieldIndex":20,"fieldLevel":"2","fieldCode":"txCode","fieldName":"字段20"}
        ]
    },

]
export default class ViewTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            dataSource:[],
            loading:true
        };
        this.columns = [
            {
                title: 'id',
                dataIndex: 'fieldIndex',
                key: 'fieldIndex',
                width: 150,
            },
            {
                title: '字段名',
                dataIndex: 'fieldCode',
                key: 'fieldCode',
                width: 150,
            },
            {
                title: '字段描述',
                width: 150,
                dataIndex: 'fieldName',
                key: 'fieldName',
            }
        ];
    }
    componentDidMount = () => {
        setTimeout(()=>{
            this.setState({
                dataSource:MOCK_DATA,
                loading:false
            })
        },1000)
    }
    handlePaginationChange = (current) => {
        this.setState({
            current,
        });
    };

    render() {
        return (
            <IceContainer>
                <CustomTable 
                    dataSource={this.state.dataSource}
                    columns={this.columns}
                    hasBorder={false}
                    maxBodyHeight={240}
                    fixedHeader={true}
                    isTree={true}
                    indentSize={10}
                    isLoading={this.state.loading}
                    align="center"
                />
            </IceContainer>
        );
    }
}

const styles = {
    headRow: {
        marginBottom: '10px',
    },
    icon: {
        color: '#2c72ee',
        cursor: 'pointer',
    },
    deleteIcon: {
        marginLeft: '20px',
    },
    center: {
        textAlign: 'right',
    },
    button: {
        borderRadius: '4px',
    },
    pagination: {
        marginTop: '20px',
        textAlign: 'right',
    },
};
