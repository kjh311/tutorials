var app = angular.module('myApp',[]);



// MY CONTROLLER
app.controller('myCtrl', ['$scope', function($scope) {

  var vm = this;

   $scope.links = [
       {
            "name" : "A/B Testing",
            "link" : "https://docs.google.com/document/d/1oAGs_4qRMF_1G-TeuS1CG8ClVcTWxuLYLDcal7l5DHU/edit"
        },{
            "name" : "Angular",
            "link" : "https://docs.google.com/document/d/1CTJMwlcXYNZMBGXT8JgOTQ9-tVLU-YyOz0k_eRq4Pps/edit"
        },{
            "name" : "Hide API Keys w/Node.js",
            "link" : "https://docs.google.com/document/d/15wFpFjs7LvGTzs1ekeDXch9xHN3lMqisNyZ1H1hrZi8/edit"
        },{
            "name" : "Javascript",
            "link" : "https://docs.google.com/document/d/171EGFnSvRig9RXdj-NBaVlqW_i4ZqnzuOmau7k1-jL8/edit?usp=docs_web"
        },{
            "name" : "Setting up Node",
            "link" : "https://docs.google.com/document/d/1dcVEbqgiQWRsKoSmqhDew4PHXXY-lWnxQzT_IyKWtpo/edit?usp=docs_web"
        },{
            "name" : "Host on Github",
            "link" : "https://docs.google.com/document/d/1Kp40EZMo_eTNR5jGpYLfkPmUMbqCABaJktazV281sgs/edit"
        },{
            "name" : "PHP",
            "link" : "https://docs.google.com/document/d/1GH7H-oEaDK6bVsSHVAVrG6iF_6eSrR30Yyh556fe3nc/edit?usp=docs_web"
        },{
            "name" : "Test Driven Development",
            "link" : "https://docs.google.com/document/d/109SwWYqAeFWiugb70tGhb55CBvdfg6Zl0XJD7iDWqyE/edit"
        },{
            "name" : "AJAX",
            "link" : "https://docs.google.com/document/d/1tuIvVJCGadV2EwZVG3la5yHq4VaGkX9ehOD0KzXd8ls/edit#"  
        },{
            "name" : "Animation JS and CSS",
            "link" : "https://docs.google.com/document/d/1q8YlhZ3wLaIdHq0Ew-HG60cN0LaEPYEKmXABbV1D5_E/edit"
        },{
            "name" : "CDNs",
            "link" : "https://docs.google.com/document/d/17howIS3Vj_Fy0vM1hPUwBVl607KdKElQRcclNlm-1iA/edit"
        },{
            "name" : "REACT",
            "link" : "https://docs.google.com/document/d/1I82GYM1u3-im7mFgE7BtMD0lEAKE8elGdbxA-gEd2E4/edit?usp=docs_web"
        },{
            "name" : "DESIGN",
            "link" : "https://docs.google.com/document/d/1oyS5L3g1k6fc1YqO6ZO68bH-i_ZonedRgDhFXdfj3h8/edit"
        },{
            "name" : "GIT",
            "link" : "https://docs.google.com/document/d/15i7lnZ1B-XPd3oZE0fbO9sX_WNk7EV9ug4S0CZYxxsE/edit#"
        },{
            "name" : "Wordpress Theme Development",
            "link" : "https://docs.google.com/document/d/1fRdGC3BM9gyCqQ3ahjTbsyKcZEdqTWSkDLjzeDv-JyM/edit"
        },{
            "name" : "MongoDB",
            "link" : "https://docs.google.com/document/d/1VPJaVD1U6Pys10iJ0YlqKwUeje9UqNPaS20vDULNeog/edit#"
        },{
           "name" : "Backing up Macbook After a crash",
            "link" : "https://docs.google.com/document/d/1OenAKONyRY-lHPlMExtdiSEg_2nROxwiMxUHCEwl9o8/edit#heading=h.a91sogvsdzai"
        },{
           "name" : "Machine Learning",
            "link" : "https://docs.google.com/document/d/1wcF7KJYxD6WGewsQrTCUBaoL80_JaIyuC6QNmzre9eM/edit"
        }
    ]

}]);
