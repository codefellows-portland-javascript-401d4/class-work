
describe('My Todo App', function() {

    it('should have a title', function() {
        browser.get('/');
        expect(browser.getTitle()).toEqual('Cute Image Albums');
    });
    
    describe('navigation', function() {

        beforeEach(function() {
            // navigate to url (in this case baseUrl in protractor.conf.js)
            browser.get('/');
        });

        it('default to /', function() {
            
            // find the primary uiView
            const uiView = element(by.css('main ui-view'));

            function testState(url, componentName) {
                // test the current browser url
                expect(browser.getLocationAbsUrl()).toBe(url);

                // TODO: not happy with this verbose, inefficient way
                // to get first child element. find a better way
                const component = uiView.all(by.css('*')).first();
                // test that it is our actual component
                expect(component.getTagName()).toEqual(componentName);                
            }

            testState('/', 'welcome');
            
            const nav = element.all(by.css('nav a'));
            // const aWelcome = nav.get(0);
            const aGallery = nav.get(1);
            
            aGallery.click();

            testState('/albums', 'albums');
        });
    });
});