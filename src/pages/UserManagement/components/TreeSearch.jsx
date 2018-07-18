import { Tree, Search, Loading } from "@icedesign/base";
import React, { Component } from 'react';

const { Node: TreeNode } = Tree;

const data = 
[
    {
      id: "0-0",
      name:'交易银行业务枢纽（COBP）',
      type:'100',
      children: [
        {
            id: "0-0-0",
            name:'登录（1001000）',
            type:'1001',
            children:[
                {
                    id: "0-0-0-1",
                    name:"测试用例_1001000_0001",
                    type:'10010'
                },
                {
                    id: "0-0-0-2",
                    name:"测试用例_1001000_0002",
                    type:'10010'
                }
            ]
        },
        {
            id: "0-0-1",
            name:'余额查询（本行账户）（C0101011)',
            type:'1001'
        },
        {
            id: "0-0-2",
            name:'明细查询（本行账户）（C0102011)',
            type:'1001'
        },
        {
            id: "0-0-3",
            name:'开户网点查询（C0299014)',
            type:'1001'
        },
        {
            id: "0-0-4",
            name:'用户资料修改（CI0010605)',
            type:'1001'
        },
        {
            id: "0-0-5",
            name:'用户密码修改（CI0010607)',
            type:'1001'
        }
      ]
    },
    {
        id:"0-1",
        name:'人行二代支付系统（CNP2）',
        type:'100'
    }
];
let expandedKeys = [];
let selectedKeys2 = '';
export default class TreeSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            expandedKeys: [],
            autoExpandParent: true,
            data:[],
            loading:true,
            filter: [
                {
                  text: "系统名称",
                  value: "systemName"
                },
                {
                    text: "系统编码",
                    value: "systemCode"
                }
            ]
        };
        this.matchedKeys = [];
        this.handleSearch = this.handleSearch.bind(this);
        this.handleExpand = this.handleExpand.bind(this);
    }
    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                loading:false,
                data:data
            })
        },1000)
    }
    onSelect = (selectedKeys,extra) => {
        let expandedKeys = this.state.expandedKeys;
        let index;
        console.log('extra',extra)
        if(selectedKeys[0]){
            index =expandedKeys.indexOf(selectedKeys[0]);
            selectedKeys2 = selectedKeys[0]        
        }else {
            index =expandedKeys.indexOf(selectedKeys2);
        }
        if(index == -1){
            //展开节点
            expandedKeys.push(selectedKeys2)
            this.setState({
                expandedKeys:expandedKeys
            })
        }else if(index != -1) {
            // console.log('关闭')
            expandedKeys.splice(index,1);
            this.setState({
                expandedKeys:expandedKeys
            })
        }
        //跳转到table界面
        if(extra.selectedNodes[0]){
            let node = extra.selectedNodes[0].props
            this.props.onSelect(selectedKeys,node)
        }
    }
    handleSearch = (result) => {
        const value = result.key;
        const matchedKeys = [];
        const loop = data =>
            data.forEach(item => {
                if (item.name.indexOf(value.trim()) > -1) {
                    matchedKeys.push(item.id);
                }
                if (item.children && item.children.length) {
                    loop(item.children);
                }
            });
        loop(this.state.data);
        this.setState({
            value: result.key,
            expandedKeys: matchedKeys,
            autoExpandParent: true
        });
        this.matchedKeys = matchedKeys;
    }

    handleExpand = (keys) => {
        this.setState({
            expandedKeys: keys,
            autoExpandParent: false
        });
    }
    
    render() {
        //定义loop方法，传入data参数，返回树节点
        const loop = data =>
            data.map(item => {
                if (item.children) {
                    return (
                        <TreeNode label={item.name} key={item.id}  type={item.type}>
                            {item.children && loop(item.children)}
                        </TreeNode>
                    );
                }
                return (
                    <TreeNode
                        label={item.name}
                        key={item.id}
                        isLeaf={item.isLeaf}
                        type={item.type}
                    />
                );
        });
        //返回的treeNodes就是要渲染到页面上的树节点数据

        const { value, expandedKeys, autoExpandParent } = this.state;
        //待筛选的节点
        const filterTreeNode = node =>
        value && this.matchedKeys.indexOf(node.props.eventKey) > -1;
        return (
            <Loading visible={this.state.loading} shape="fusion-reactor">
                <Search
                    type="normal"
                    size="small"
                    autoWidth={true}
                    searchText=""
                    // onChange={this.onChange.bind(this)}
                    onSearch={this.handleSearch}
                    filter={this.state.filter}
                    // onFilterChange={this.onFilterChange.bind(this)}
                />
                <Tree
                    onSelect={this.onSelect.bind(this)}
                    // loadData={this.onLoadData.bind(this)}
                    showLine={true}
                    expandedKeys={expandedKeys}
                    autoExpandParent={autoExpandParent}
                    filterTreeNode={filterTreeNode}
                    onExpand={this.handleExpand}
                >
                    {loop(this.state.data)}
                </Tree>
            </Loading>
        );
    }
}
