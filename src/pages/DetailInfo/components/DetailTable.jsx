/* eslint-disable react/no-unused-state, no-plusplus */
import React, { Component } from 'react';
import { Pagination } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import CustomTable from '../../UserManagement/components/CustomTable'

const MOCK_DATA = [
    {
        id: '1',
        systemName: '交易银行业务枢纽',
        systemCode: 'COBP',
        transName:'登录',
        transCode:'1001000',
        transVersion:'1.0',
        step2:'YL_COBP_1001000_0001@4',
        note:'AS/400',
        analysisName:'张三',
        analysisTime:'2018-7-16 15:17:00'
    },
    {
        id: '2',
        systemName: '人行二代支付系统',
        systemCode: 'CNP2',
        transName:'单笔贷记往帐',
        transCode:'5700',
        transVersion:'1.0',
        step2:'YL_CNP2_5700_0003@2',
        note:'X86',
        analysisName:'张三',
        analysisTime:'2018-5-31 09:30:00'
    }
];
export default class DetailTable extends Component {

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
                title: '交易名称',
                width: 150,
                dataIndex: 'transName',
                key: 'transName',
            },
            {
                title: '交易编码',
                width: 150,
                dataIndex: 'transCode',
                key: 'transCode',
            },
            {
                title: '交易版本',
                width: 150,
                dataIndex: 'transVersion',
                key: 'transVersion',
            },
            {
                title: '步骤',
                width: 150,
                dataIndex: 'step2',
                key: 'step2',
            },
            {
                title: '备注',
                width: 150,
                dataIndex: 'note',
                key: 'note',
            },
            {
                title: '分析人',
                width: 150,
                dataIndex: 'analysisName',
                key: 'analysisName',
            },
            {
                title: '分析时间',
                width: 150,
                dataIndex: 'analysisTime',
                key: 'analysisTime',
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
