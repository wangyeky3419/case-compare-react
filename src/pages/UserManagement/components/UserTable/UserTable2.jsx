/* eslint-disable react/no-unused-state, no-plusplus */
import React, { Component } from 'react';
import { Button, Pagination, Loading } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import CustomTable from '../CustomTable'
import ViewModal from './ViewModal'

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
    },
    {
        id: '2',
        systemName: '交易银行业务枢纽',
        systemCode: 'COBP',
        transName:'登录',
        transCode:'1001000',
        transVersion:'2.0',
        step2:'YL_COBP_1001000_0001@4',
        note:'X86',
    }
];
export default class UserTable2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            dataSource:[],
            loading:true,
            rowSelection: {
                onChange: this.onChange.bind(this),
                onSelect: function(selected, record, records) {
                    //获取单选数据
                },
                onSelectAll: function(selected, records) {
                    //获取全选数据
                },
                selectedRowKeys: [],
            }
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
                            <Button type="primary" size="small" onClick={() => this.onView(value, index, record)}>查看</Button>
                        </span>
                    );
                },
            },
        ];
    }
    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                loading:false
            })
        },1000)
    }
    onChange(ids, records) {
        let { rowSelection } = this.state;
        rowSelection.selectedRowKeys = ids;
        this.props.setCarNumber(records)
        console.log('records',records)
        //在此处可以调用删除接口，实现多条删除
        this.setState({ rowSelection });
    }
    //清空selectedRowKeys，父组件调用
    clearKeys = () => {
        let { rowSelection } = this.state;
        rowSelection.selectedRowKeys = '';
        this.setState({
            rowSelection
        })
    }
    //查看案例详情
    onView = () => {
        this.viewElement.onAddopen([])
    }
    setTableValue = (searchValue) => {
        this.setState({
            loading:true
        })
        setTimeout(()=>{
            if(searchValue=='点击登录'||searchValue=='点击'||searchValue=='登录'||searchValue=='点击登'||searchValue=='击登录'){
                this.setState({
                    dataSource:MOCK_DATA,
                    loading:false
                })
            }else{
                this.setState({
                    dataSource:[],
                    loading:false
                })
            }
        },1000)
    }
    handlePaginationChange = (current) => {
        this.setState({
            current,
        });
    };

    render() {
        return (
            <IceContainer title="">
                <CustomTable 
                    dataSource={this.state.dataSource}
                    columns={this.columns}
                    hasBorder={false}
                    rowSelection={this.state.rowSelection}
                    maxBodyHeight={240}
                    fixedHeader={true}
                    isLoading={this.state.loading}
                />
                <Pagination
                    style={styles.pagination}
                    current={this.state.current}
                    onChange={this.handlePaginationChange}
                />
                <ViewModal ref={el => this.viewElement = el} onAddopen={this.onAddopen}/>
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
