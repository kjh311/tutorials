var app = angular.module('myApp',[]);



// MY CONTROLLER
app.controller('myCtrl', ['$scope', function($scope) {

  var vm = this;

   $scope.links = [{
        
            "name" : "A/B Testing",
            "link" : "https://docs.google.com/document/d/1oAGs_4qRMF_1G-TeuS1CG8ClVcTWxuLYLDcal7l5DHU/edit?usp=sharing"
        },{
            "name" : "Angular",
            "link" : "https://docs.google.com/document/d/1CTJMwlcXYNZMBGXT8JgOTQ9-tVLU-YyOz0k_eRq4Pps/edit?usp=sharing"
        },{
            "name" : "Hide API Keys w/Node.js",
            "link" : "https://docs.google.com/document/d/15wFpFjs7LvGTzs1ekeDXch9xHN3lMqisNyZ1H1hrZi8/edit?usp=sharing"
        },{
            "name" : "Javascript",
            "link" : "https://docs.google.com/document/d/1DCntNPd2SM_peqOI2FIhzVAjeE1WmwsJEDxV2JKk48k/edit"
        },{
            "name" : "Setting up Node",
            "link" : "https://docs.google.com/document/d/1dcVEbqgiQWRsKoSmqhDew4PHXXY-lWnxQzT_IyKWtpo/edit?usp=sharing"
        },{
            "name" : "Host on Github",
            "link" : "https://docs.google.com/document/d/1Kp40EZMo_eTNR5jGpYLfkPmUMbqCABaJktazV281sgs/edit?usp=sharing"
        },{
            "name" : "PHP",
            "link" : "https://docs.google.com/document/d/1GH7H-oEaDK6bVsSHVAVrG6iF_6eSrR30Yyh556fe3nc/edit?usp=sharing"
        },{
            "name" : "Test Driven Development",
            "link" : "https://docs.google.com/document/d/109SwWYqAeFWiugb70tGhb55CBvdfg6Zl0XJD7iDWqyE/edit?usp=sharing"
        },{
            "name" : "AJAX",
            "link" : "https://docs.google.com/document/d/1tuIvVJCGadV2EwZVG3la5yHq4VaGkX9ehOD0KzXd8ls/edit?usp=sharing"  
        },{
            "name" : "Animation JS and CSS",
            "link" : "https://docs.google.com/document/d/1q8YlhZ3wLaIdHq0Ew-HG60cN0LaEPYEKmXABbV1D5_E/edit?usp=sharing"
        },{
            "name" : "CDNs",
            "link" : "https://docs.google.com/document/d/17howIS3Vj_Fy0vM1hPUwBVl607KdKElQRcclNlm-1iA/edit?usp=sharing"
        },{
            "name" : "REACT",
            "link" : "https://docs.google.com/document/d/1I82GYM1u3-im7mFgE7BtMD0lEAKE8elGdbxA-gEd2E4/edit?usp=sharing"
        },{
            "name" : "DESIGN",
            "link" : "https://docs.google.com/document/d/1oyS5L3g1k6fc1YqO6ZO68bH-i_ZonedRgDhFXdfj3h8/edit?usp=sharing"
        },{
            "name" : "GIT",
            "link" : "https://docs.google.com/document/d/15i7lnZ1B-XPd3oZE0fbO9sX_WNk7EV9ug4S0CZYxxsE/edit?usp=sharing"
        },{
            "name" : "Wordpress Theme Development",
            "link" : "https://docs.google.com/document/d/1fRdGC3BM9gyCqQ3ahjTbsyKcZEdqTWSkDLjzeDv-JyM/edit?usp=sharing"
        },{
            "name" : "MongoDB",
            "link" : "https://docs.google.com/document/d/1VPJaVD1U6Pys10iJ0YlqKwUeje9UqNPaS20vDULNeog/edit?usp=sharing"
        },{
           "name" : "Backing up Macbook After a crash",
            "link" : "https://docs.google.com/document/d/1OenAKONyRY-lHPlMExtdiSEg_2nROxwiMxUHCEwl9o8/edit?usp=sharing"
        },{
           "name" : "Machine Learning",
            "link" : "https://docs.google.com/document/d/1wcF7KJYxD6WGewsQrTCUBaoL80_JaIyuC6QNmzre9eM/edit?usp=sharing"
        },{
           "name" : "Big O Time and Space for sorts and Data Types",
           "link" : "https://docs.google.com/spreadsheets/d/1RdGfkN0tM6cVLfXZ__g0FvB7rsKGly3ORmbT8SmqX-I/edit#gid=0" 
        },{
           "name" : "SEO",
           "link" : "https://docs.google.com/document/d/1o5aviUgJBVoApjH6c4iD44D3AnhxX0joHUC41g91bMw/edit" 
        },{
           "name" : "Interview Questions",
           "link" : "https://docs.google.com/document/d/11qBd-fY1onNXGuk50lFq9mvlarNldcpM4YqcCuCxMeE/edit#heading=h.qfqcrdnc57sf" 
        },{
           "name" : "OUTCO LINKS",
           "link" : "https://docs.google.com/document/d/1gCOYWXVkxk9N6tLAEyGmec4NwYFXD_JzsaZKb3MREMM/edit" 
        },{
           "name" : "Web Accessability Guildlines",
           "link" : "https://docs.google.com/document/d/116pmkQ0uV9GevmqY0vc6kYMXfGiYK358AfP8uJB9LVw/edit" 
        },{
           "name" : "Retina Graphics",
           "link" : "https://docs.google.com/document/d/1CEn8sgiZekYktt-2W0H-plNfJEDzjEHyo-ceJmpYYBQ/edit" 
        },{
           "name" : "Email HTML",
           "link" : "https://docs.google.com/document/d/1uYWJNUkwTCnOqzkyskHgRGgQ8sHYKztITm35aIO_MYM/edit" 
        },{
           "name" : "WebPack",
           "link" : "https://docs.google.com/document/d/1-bj7NVTvz2WjT9Ufec-bXFMJ8v4mTIdnRLyapp3xye0/edit" 
        },{
           "name" : "ES6 Javascript",
           "link" : "https://docs.google.com/document/d/1FGUXrwDlBVKFSuUOUK4j83hOQr5F34NPCRni4u2u1f0/edit" 
        },{
           "name" : "Object Oriented Programming",
           "link" : "https://docs.google.com/document/d/1LWRrVhwbhgq4HN8QLWlMbx4J2PDkz8S7SGobbGI8Pes/edit" 
        },{
           "name" : "Boiler Plates",
           "link" : "https://docs.google.com/document/d/1ox9eTO9ETRlGY6ljrVi_8iktlI1Mfi5gUQK0KMYPXOo/edit" 
        },{
           "name" : "User Authentication",
           "link" : "https://docs.google.com/document/d/1Cu7x_QnFqLPUnHgBAX3TCE08abtlGC1ls7I-unUBGn0/edit" 
        },{
           "name" : "REST API",
           "link" : "https://docs.google.com/document/d/1TWbDpHI5sC-RIQhXxpbamefBNUJBGnlJOUYlvtS9uGU/edit" 
        },{
           "name" : "Node Package Modules",
           "link" : "https://docs.google.com/document/d/1i4o0PX8-k3-rqDdvWf-x6opniNIS87v4642pGovZuRc/edit" 
        },{
           "name" : "Socket IO",
           "link" : "https://docs.google.com/document/d/15FJRgq0hi_9bn-Qnb2gZ4nzS4XE2K-qYChzERHXsFm4/edit" 
        },{
           "name" : "PSD to HTML",
           "link" : "https://docs.google.com/document/d/1sdLUr4u9L-By3VVA5Jw_XsBLXCfwkQ9oFHKW_cO9ilo/edit" 
        },{
           "name" : "Cross browser consistency",
           "link" : "https://docs.google.com/document/d/1RABNyqTxw_rOVSbL8tjXz90HXayW5t16AN7XqD-8xzk/edit" 
        },{
           "name" : "Ruby on Rails",
           "link" : "https://docs.google.com/document/d/1h3ybplv4Cf_MZwZiSYYScdPI4_VYQ7KUlG7qfU8oRrA/edit" 
        },{
           "name" : "JOB TACKER",
           "link" : "https://docs.google.com/spreadsheets/d/1gSw7s5zWh1AXBs9U-LNoRywiJzaCH43xlQ3FC0RrE7M/edit#gid=0/edit" 
        },{
           "name" : "COVER LETTER",
           "link" : "https://docs.google.com/document/d/1K0c6S6s8YzrBrq31Je5GsLkuD_OM6EY-b-Xn1lUq9Qs/edit" 
        },{
           "name" : "RESUME",
           "link" : "http://kjh311.github.io/Kevin_Huelsmann_Portfolio/Kevin_Huelsmann_Tech_Resume.pdf?" 
        },{
           "name" : "RESPONSIVE DESIGN",
           "link" : "https://docs.google.com/document/d/11tOglVlcodPJAnkp5U99W1EmL6tu413-AK-e1ydspwU/edit" 
        },{
           "name" : "STYLE GUIDELINES",
           "link" : "https://docs.google.com/document/d/1MaxgNIF30MmN3p0zV1CK0MG8uUGZ5QmI5bnbzOdNKjs/edit" 
        },{
           "name" : "PROGRESSIVE IMAGE LOADING",
           "link" : "https://docs.google.com/document/d/1Rfn18DKDA1uRgueNk7ihhTTKDwTtb8FqLV6HIke8ROY/edit" 
        },{
           "name" : "SVG",
           "link" : "https://docs.google.com/document/d/1i5Uq1JNbZVc1ZZo2NQ6cZHlEWrJSGqnYsaSIrBQQJSI/edit" 
        },{
           "name" : "EMAIL SIGNATURE",
           "link" : "https://kjh311.github.io/signature/" 
        },{
           "name" : "UI/UX",
           "link" : "https://docs.google.com/document/d/16lcGU3qiaRZxDbsTb5BGRkldmxQpLyfQnBQgL5dPFB0/edit" 
        },{
           "name" : "InDesign Web Design and Wireframing",
           "link" : "https://docs.google.com/document/d/1_6f1ZhMLZT92TZd-n9jFnngtf1IlVEmCI5y4r8DaIqk/edit" 
        },{
           "name" : "APRENTI",
           "link" : "https://docs.google.com/document/d/1_6uCfrbBK7hJSja_QDYK3iY7tGFOARsSh9ggUgv-Ykc/edit" 
        },{
           "name" : "HTML",
           "link" : "https://docs.google.com/document/d/1AVlGT30TguRCj5x3DuuWftlOHgqK0Q9BBlw8aSAKnu4/edit" 
        },{
           "name" : "CSS",
           "link" : "https://docs.google.com/document/d/19b9h2VrsmkKr15TpkCCeaFFDP0qQGesVC514pUPqh3A/edit" 
        },{
           "name" : "TO STUDY:",
           "link" : "https://docs.google.com/document/d/1nt43rt71D5L8D8cWBm3bUwS41Gvofsg6NqCGSKfqXsU/edit" 
        },{
           "name" : "FLEXBOX",
           "link" : "https://docs.google.com/document/d/1IdxmZ6L3Tv2o4Dwf9op7JlMCXWknYy-Hoc78WEVadzE/edit" 
        },{
           "name" : "BOOTSTRAP 4",
           "link" : "https://docs.google.com/document/d/1uYzPahdeupy3Ac9I2sIbSk9hPfkYT9TkDlgzBFGtIrw/edit" 
        },{
           "name" : "Accessability",
           "link" : "https://docs.google.com/document/d/1nhNR11rO4cVjum2ILemd6G5zv847lFJeAn5uq5t1FHI/edit" 
        },{
           "name" : "Adobe Illustrator",
           "link" : "https://docs.google.com/document/d/1_7GWn0wh_TkJ-4I17F9bbCF9hkgYpLN4uUnLJGZRf8c/edit" 
        },{
           "name" : "Sketch",
           "link" : "https://docs.google.com/document/d/1sCUBQBYDz-9BAQSp3RewCeuoq9gxT28jk8mHfRbWH7k/edit" 
        }


    ]

}]);
