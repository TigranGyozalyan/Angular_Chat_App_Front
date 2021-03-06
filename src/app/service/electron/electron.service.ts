import { Injectable } from '@angular/core';

import { ipcRenderer, webFrame, remote, app } from 'electron';
import * as childProcess from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

@Injectable({
  providedIn: 'root'
})
export class ElectronService {
  ipcRenderer: typeof ipcRenderer;
  webFrame: typeof webFrame;
  remote: typeof remote;
  childProcess: typeof childProcess;
  app: typeof app;
  fs: typeof fs;

  userDataPath: string;

  constructor() {
    // Conditional imports
    if (this.isElectron) {
      this.ipcRenderer = window.require('electron').ipcRenderer;
      this.webFrame = window.require('electron').webFrame;
      this.remote = window.require('electron').remote;

      this.childProcess = window.require('child_process');
      this.fs = window.require('fs');


      this.userDataPath = path.join((app || this.remote.app).getPath('userData'), 'data.json');


    }
  }

  get isElectron(): boolean {
    return !!(window && window.process && window.process.type);
  }
}
