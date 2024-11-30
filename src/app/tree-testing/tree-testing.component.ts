import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from './node.service';

@Component({
    selector: 'app-tree-testing',
    templateUrl: './tree-testing.component.html',
    styleUrls: ['./tree-testing.component.css'],
    standalone: false
})
export class TreeTestingComponent implements OnInit {
  files: TreeNode[] = [];
  selectedFiles: TreeNode<any> | TreeNode<any>[] = [];
  selectedFilesB: TreeNode<any> | TreeNode<any>[] = [];
  constructor(private nodeService: NodeService) { }

  ngOnInit(): void {
    this.nodeService.getFiles().subscribe(files => this.files = files);
  }
  nodeSelect(event) {
    // event.node = selected node
    console.log('nodeSelect', this.selectedFiles);
  }
  nodeUnselect(event) {
    // event.node = selected node
    console.log('nodeUnselect', this.selectedFiles);
  }
  onDrop(event) {
    console.log('onDrop', event);
  }
}
