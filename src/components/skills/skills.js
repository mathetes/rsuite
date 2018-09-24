import React, { Component } from 'react';
import 'rsuite/dist/styles/rsuite.min.css';
import { List,RTList, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import { Tree } from 'antd';

const DirectoryTree = Tree.DirectoryTree;
const TreeNode = Tree.TreeNode;

class Skills extends Component {
    onSelect = () => {
     console.log('Trigger Select');
   };

   onExpand = () => {
     console.log('Trigger Expand');
   };
  render() {
    return (
      <div>
        <h1>Технологии и навыки</h1>
        <DirectoryTree
          multiple
          defaultExpandAll
          onSelect={this.onSelect}
          onExpand={this.onExpand}
        >
          <TreeNode title="Javascript" key="0-0">
            <TreeNode title="leaf 0-0" key="0-0-0" isLeaf />
            <TreeNode title="leaf 0-1" key="0-0-1" isLeaf />
          </TreeNode>
          <TreeNode title="Библиотека React.js" key="0-1">
            <TreeNode title="Life cycle" key="0-1-0" isLeaf />
            <TreeNode title="leaf 1-1" key="0-1-1" isLeaf />
          </TreeNode>
          <TreeNode title="Препроцессоры CSS" key="0-2">
            <TreeNode title="Stylus" key="0-2-0" isLeaf />
            <TreeNode title="SCSS" key="0-2-1" isLeaf />
          </TreeNode>
          <TreeNode title="React.js UI" key="0-2">
            <TreeNode title="Stylus" key="0-3-0" isLeaf />
            <TreeNode title="SCSS\SASS" key="0-3-1" isLeaf />
            <TreeNode title="Less" key="0-3-1" isLeaf />
          </TreeNode>
          <TreeNode title="React.js UI" key="0-2">
            <TreeNode title="Material UI" key="0-4-0" isLeaf />
            <TreeNode title="RSuite" key="0-4-1" isLeaf />
          </TreeNode>
          <TreeNode title="Инструменты" key="0-2">
            <TreeNode title="Webpack и Gulp" key="0-5-0" isLeaf />
            <TreeNode title="Работа с Git" key="0-5-1" isLeaf />
          </TreeNode>
        </DirectoryTree>
      </div>
    );
  }
}

export default Skills;
