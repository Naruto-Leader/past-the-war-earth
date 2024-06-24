function loadPostComponents() {
    let pathPrefix = '../'
    let subdirPrefix = ''
    if (
        window.location.href.indexOf('/ru/Ideology_Governance_Economics/') > -1
        || window.location.href.indexOf('/ru/direction/') > -1
        || window.location.href.indexOf('/ru/history/') > -1
    ) {
        pathPrefix += '../../'
        subdirPrefix = 'subdir_'
    } else if (
        window.location.href.indexOf('/direction/') > -1
        || window.location.href.indexOf('/Ideology_Governance_Economics/') > -1
        || window.location.href.indexOf('/history/') > -1) {
        pathPrefix += '../'
        subdirPrefix = 'subdir_'
    }
    loadIntoTag(pathPrefix + 'components/' + subdirPrefix + 'header.html', 'header');
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
                elementList[0].outerHTML = htmlText
            }
        });
}

function updateMenu(
    articleId,
    year,
    months,
    subDirectory
) {
    setTimeout(function () {
        setTimeout(function () {
            let prefix = '../' + year
            if (subDirectory) {
                prefix = '../../' + year + '/' + subDirectory
            }
            const articleMenuItem = document.querySelectorAll('[href="' + prefix + '/' + articleId + '.html"]')[0]
            articleMenuItem.classList.add('highlighted')
            if(months) {
                selectMonthsOnPage(year, months)
            } else {
                selectYearOnPage(year)
            }
        }, 250)
    }, 250)
}

loadPostComponents();
