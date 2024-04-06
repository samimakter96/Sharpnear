function learnJavaScript(callback) {
  setTimeout(function() {
    console.log("JavaScript Learned")
    callback()
  }, 2000)
}

function learnReact() {
  setTimeout(function() {
    console.log('Learn React')
  }, 1000)
}

learnJavaScript(learnReact);