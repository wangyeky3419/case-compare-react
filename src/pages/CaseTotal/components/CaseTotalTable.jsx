/* eslint-disable react/no-unused-state, no-plusplus */
import React, { Component } from 'react';
import { Icon, Pagination } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import CustomTable from '../../UserManagement/components/CustomTable'

const MOCK_DATA = [
    {
        id: '1',
        systemName: '交易银行业务枢纽',
        systemCode: 'COBP',
        caseTotal:'500',
        relevance:'400',
        covered:'80%'
    },
    {
        id: '2',
        systemName: '人行二代支付系统',
        systemCode: 'CNP2',
        caseTotal:'50',
        relevance:'48',
        covered:'96%'
    }
];
export default class CaseTotalTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            dataSource:[],
            loading:true
        };
        this.columns = [
            {
                title: '序号',
                dataIndex: 'id',
                key: 'id',
                width: 80,
            },
            {
                title: '系统名称',
                dataIndex: 'systemName',
                key: 'systemName',
                width: 150,
            },
            {
                title: '系统编码',
                width: 150,
                dataIndex: 'systemCode',
                key: 'systemCode',
            },
            {
                title: '案例总数',
                width: 150,
                dataIndex: 'caseTotal',
                key: 'caseTotal',
            },
            {
                title: '关联数',
                width: 150,
                dataIndex: 'relevance',
                key: 'relevance',
            },
            {
                title: '覆盖率',
                width: 150,
                dataIndex: 'covered',
                key: 'covered',
            }
        ];
    }
    componentDidMount = () => {
        setTimeout(()=> {
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
                    isLoading={this.state.loading}
                />
                <Pagination
                    style={styles.pagination}
                    current={this.state.current}
                    onChange={this.handlePaginationChange}
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
