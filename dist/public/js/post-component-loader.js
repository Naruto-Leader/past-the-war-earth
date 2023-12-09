function loadPostComponents() {
    let pathPrefix = '../'
    if(window.location.href.indexOf('/ru/') > -1) {
        pathPrefix += '../'
    }
    loadIntoTag(pathPrefix + 'components/header.html', 'header');
    loadIntoTag(pathPrefix + 'components/summary.html', 'summary');
    loadIntoClass(pathPrefix + 'components/comments.html', 'comments-wrap');
    loadIntoTag(pathPrefix + 'components/footer.html', 'footer');
}

function loadIntoTag(url, selector) {
    loadContent(url, 'getElementsByTagName', selector);
}

function loadIntoClass(url, selector) {
    loadContent(url, 'getElementsByClassName', selector);
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

function updateMenu(
    articleId,
    year
) {
    const articleMenuItem = document.querySelectorAll('[href="../' + year + '/' + articleId + '.html"]')[0];
    articleMenuItem.classList.add('highlighted')
    selectYearOnPage(year)
}

loadPostComponents();
