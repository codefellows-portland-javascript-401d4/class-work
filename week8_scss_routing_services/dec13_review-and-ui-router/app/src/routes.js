routes.$inject = ['$stateProvider', '$urlRouterProvider']; 

export default function routes($stateProvider, $urlRouterProvider) {
    
    $stateProvider.state({
        name: 'welcome', // name of this defined app "state"
        url: '/', // url associated with the state,
        component: 'welcome' 
    });

    $stateProvider.state({
        name: 'pirates', // name of this defined app "state"
        url: '/pirates', // url associated with the state,
        component: 'pirates' 
    });

    $urlRouterProvider.otherwise('/');
}