#!/usr/bin/env electron
const {app, BrowserWindow} = require('electron');
app.on('ready', () => {
	let win ;
	win = new BrowserWindow({width:800, height:600, frame:false});
	win.loadURL(`file://${__dirname}/index.html`);

})

app.on('window-all-closed', function() {
      app.quit();
 });
