/* eslint-disable react/no-unused-state, no-plusplus */
import React, { Component } from 'react';
import { Table, Button, Pagination } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import CustomTable from '../CustomTable'

const MOCK_DATA = [
    {
        step: '打开登录界面',
        note: '-',
        id:'1'
    },
    {
        step: '输入用户名',
        note: '-',
        id:'2'
    },
    {
        step: '输入密码',
        note: '-',
        id:'3'
    },
    {
        step: '点击登录',
        note: '-',
        id:'4'
    },
    {
        step: '校验登录状态',
        note: '-',
        id:'5'
    }
];
export default class UserTable extends Component {

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
                title: '步骤',
                dataIndex: 'step',
                key: 'step',
                width: 150,
            },
            {
                title: '备注',
                width: 150,
                dataIndex: 'note',
                key: 'note',
            },
            {
                title: '操作',
                key: 'action',
                width: 80,
                render: (value, index, record) => {
                    return (
                        <span>
                            <Button type="primary" size="small" onClick={() => this.onSearch(value, index, record)}>搜索</Button>
                        </span>
                    );
                },
            },
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
    
    onSearch = (value, index, record) => {
        this.props.setValue(record.step)
    }
   
    handlePaginationChange = (current) => {
        this.setState({
        current,
        });
    };

    render() {
        return (
            <IceContainer title="YL_COBP_1001000_0001">
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
