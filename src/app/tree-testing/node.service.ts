import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor(private httpClient: HttpClient) { }
  getFiles(): Observable<TreeNode[]> {
    return this.httpClient.get<TreeNode[]>('/assets/files.json');
  }
}
