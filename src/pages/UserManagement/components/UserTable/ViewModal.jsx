import React, { Component } from 'react';
import { Dialog, Button, Loading } from '@icedesign/base';
import ViewTable from './ViewTable'

export default class ViewModal extends Component{
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
    render() {
        const footer = (
            <Button type="normal" size="small" onClick={this.onAddCancel}>关闭</Button>
          );
        return (
            <div style={styles.editDialog}>
                <Dialog
                    style={{ width:820 }}
                    visible={this.state.visible}
                    onOk={this.handleSubmit}
                    closable="esc,close"
                    onCancel={this.onAddCancel}
                    onClose={this.onAddCancel}
                    title="查看"
                    footer={footer}
                >
                    <ViewTable infoData={this.state.infoData}/>
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
