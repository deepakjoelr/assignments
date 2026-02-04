let browserName = "Chrome"
function launchBrowser(browserName) {
  if (browserName === "Chrome") {
    console.log("Launching Chrome");
  } else if (browserName === "Firefox") {
    console.log("Launching Firefox");
  } else if (browserName === "Safari") {
    console.log("Launching Safari");
  } else {
    console.log("Default browser selected");
  }
}

let testType = "smoke"
function runTests(testType) {
  if (testType === "smoke") {
    console.log("Running smoke tests");
  } else if (testType === "sanity") {
    console.log("Running sanity tests");
  } else if (testType === "regression") {
    console.log("Running regression tests");
  } else {
    console.log("Default tests to run");
  }
}

launchBrowser(browserName);
runTests(testType);
