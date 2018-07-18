/* eslint-disable react/no-unused-state, no-plusplus */
import React, { Component } from 'react';
import {Pagination } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import DeleteBalloon from '../DeleteBalloon';
import CustomTable from '../CustomTable'

export default class CarInfoTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            infoData:[],
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
                title: '操作',
                key: 'action',
                width: 150,
                render: (value, index, record) => {
                    return (
                        <span>
                            <DeleteBalloon
                            handleRemove={() => this.handleRemove(value, index, record)}
                        />
                        </span>
                    );
                },
            },
        ];
    }
    componentWillReceiveProps = (nextProps) => {
        let infoData = nextProps.infoData
        this.setState({
            infoData:infoData
        })
    }
    handleRemove = (value, index, record) => {
        //删除，调用删除请求
        let infoData = this.state.infoData;
        infoData.splice(index, 1);
        this.setState({
            infoData:infoData
        });
    };
  
    handlePaginationChange = (current) => {
        this.setState({
            current,
        });
    };

    render() {
        return (
            <IceContainer>
                <CustomTable 
                    dataSource={this.state.infoData=this.state.infoData.length==0?this.props.infoData:this.state.infoData}
                    columns={this.columns}
                    hasBorder={false}
                    maxBodyHeight={240}
                    fixedHeader={true}
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
