const { app, BrowserWindow,screen } = require('electron');
const path = require('path');

function createWindow() {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const win = new BrowserWindow({
    maximizable: true,
    width: width,
    height: height,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadURL('http://localhost:5173'); // URL for Vite dev server
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
    }
);

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
}
);
