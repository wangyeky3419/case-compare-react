import React, { Component } from 'react';
import { Dialog, Icon  } from '@icedesign/base';
import CarInfoTable from './UserTable/CarInfoTable'

export default class CarInfoModal extends Component{
    constructor(props) {
        super(props);
        this.state = {
           visible:false,
           infoData:[]
        };
    }
    onAddopen = (info) => {
        this.setState({
            visible:true,
            infoData:info
        })
    }
    onAddCancel = () => {
        this.setState({
            visible:false
        })
    }
    handleSubmit = () =>{
        this.setState({
            visible:false
        })
        this.props.clear()
        const dialog = Dialog.alert({
            needWrapper: false,
            content: <div><Icon type="success" style={{ color: "#1DC11D", marginRight:'10px' }} />&nbsp;&nbsp;提交成功</div>,
            title: "",
        });
    }
    render() {
        return (
            <div style={styles.editDialog}>
                <Dialog
                    style={{ width:920 }}
                    visible={this.state.visible}
                    onOk={this.handleSubmit}
                    closable="esc,close"
                    onCancel={this.onAddCancel}
                    onClose={this.onAddCancel}
                    title="关联关系确认"
                >
                    <CarInfoTable infoData={this.state.infoData}/>
                </Dialog>
            </div>
        );
    }

}
const styles = {
    editDialog: {
        display: 'inline-block',
        marginRight: '5px',
    },
};
