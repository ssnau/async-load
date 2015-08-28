function createScript(url) {
    var script = document.createElement('script');
    script.src = url;
    return script;
}

function createCss(url) {
    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;
    return link;
}

function createTask(url) {
    var item;
    if (/js$/.test(url)) item = createScript(url);
    if (/css$/.test(url)) item = createCss(url);

    return new Promise(function(resolve) {
        if (!item) {
            console.log(url + " is not a js, nor css!");
            return resolve();
        }
        document.head.appendChild(item);
        item.onload = resolve;
        item.onerror = resolve;
    });
}

module.exports = function() {
    var urls = [].slice.call(arguments);
    return new Promise(function(resolve) {
        function next() {
            if (!urls.length) return resolve();
            var url = urls.shift();
            createTask(url).then(next);
        }
        next();
    });
};
