function loadBlogComponents() {
    loadIntoTag('./components/footer.html', 'footer');
    loadIntoTag('./components/main_header.html', 'header');
}

function loadIntoTag(url, selector) {
    loadContent(url, 'getElementsByTagName', selector);
}

function loadContent(url, docMethod, selector) {
    fetch(url)
        .then(response => response.text())
        .then(htmlText => {
            var elementList = document[docMethod](selector)
            if (elementList.length) {
                elementList[0].outerHTML = htmlText;
            }
        });
}

loadBlogComponents();
