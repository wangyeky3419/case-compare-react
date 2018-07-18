import React, { Component } from 'react';
// import TreeSearch from '../../components/TreeSearch';
import { Grid } from "@icedesign/base";
import UserTable from './components/UserTable';
import UserTable2 from './components/UserTable/UserTable2';
import TreeSearch from './components/TreeSearch'
import { Search, Icon, Dialog } from "@icedesign/base";
const { Row, Col } = Grid;
import './UserManagement.scss';
import CarInfoModal from './components/CarInfoModal'
export default class UserManagement extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            table:'',
            table2:'',
            search:'none',
            searchValue:'',
            number:'',
            carInfo:[],
            visible2:false,
        };
    }
    onSelect(selectedKeys,node) {
        if(node.type=='10010'){
            this.setState({
                table:<UserTable setValue={this.setValue}/>,
                search:'block',
                table2:<UserTable2 setCarNumber={this.setCarNumber} ref={el => this.table2Element = el}/>
            })
        }else{
            this.setState({
                table:'',
                search:'none',
                table2:''
            })
        }
    }
    setValue = (searchValue) => {
        this.setState({
            searchValue:searchValue
        })
        this.table2Element.setTableValue(searchValue)
    }
    setCarNumber = (records) => {
        let number = records.length;
        if(number<10&&number>0){
            number = '0'+number
        }else if(number==0){
            number = ''
        }
        this.setState({
            number:number,
            carInfo:records
        })
    }
    onClose = () => {
        this.setState({
            visible2:false
        })
    }
    onSearch = (value) => {
        let searchValue2 = value.key;
        this.table2Element.setTableValue(searchValue2)
    }
    clear = () => {
        this.setState({
            number:'',
        })
        this.table2Element.clearKeys()
    }
    onOpenModal = () => {
       if(this.state.carInfo.length==0){
           const dialog = Dialog.alert({
                needWrapper: false,
                content: <div><Icon type="warning" size="xs" style={{ color: "#FFA003", marginRight:'20px',fontSize:'14px' }} />&nbsp;&nbsp;数据为空</div>,
                title: "",
            });
       }else {
            this.infoElement.onAddopen(this.state.carInfo)
       }
    }
    render() {
        return (
            <div className="cate-list-page">
                <Row className="demo-row">
                    <Col span="5" className="demo-col-left">
                        <TreeSearch onSelect={this.onSelect.bind(this)}/>
                    </Col>
                    <Col span="19" className="demo-col-inset">
                        {this.state.table}
                        <div className="cars" style={{display:this.state.search}} onClick={this.onOpenModal}>
                            <Icon type="cart" size="xl" className="car" /><br/>
                            <b className="bb" >{this.state.number}</b>
                        </div>
                        <hr style={{display:this.state.search}}/>
                        <Search 
                            style={{marginLeft:'20px',display:this.state.search}} 
                            inputWidth={200}
                            searchText='搜索'
                            placeholder='请输入内容'
                            onSearch={this.onSearch.bind(this)}
                            value={this.state.searchValue}
                        />
                        {this.state.table2}

                        <CarInfoModal ref={el => this.infoElement = el} onAddopen={this.onAddopen} clear={this.clear}/>
                        {/* <Dialog
                            visible={this.state.visible2}
                            onOk={this.onClose}
                            closable="esc,close"
                            onCancel={this.onClose}
                            onClose={this.onClose}
                            >
                            <Icon type="warning" style={{ color: "#FFA003", marginRight: "10px" }} />
                            当前数据为空
                        </Dialog> */}
                    </Col>
                </Row>
            </div>
        );
    }
}

