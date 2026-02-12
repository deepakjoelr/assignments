
let browser = "Chrome";


function checkBrowserVersion(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}

function browserVersion() {
  console.log(`Browser version is: ${browser}`);
}

checkBrowserVersion(browserVersion);