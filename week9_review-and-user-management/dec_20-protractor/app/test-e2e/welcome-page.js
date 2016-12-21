class WelcomePage {
    constructor() {
        this.uiView = element(by.css('main ui-view'));
    }

    get() {
        return browser.get('/');
    }

    get title() {
        return browser.getTitle();
    }

    get stateComponent() {
        return this.uiView.all(by.css('*')).first().getTagName();
    }
}

module.exports = WelcomePage;