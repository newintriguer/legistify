var app = angular.module("mainApp", ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/signup.html',
            controller: 'signupCtrl'

        })
        .when('/profile', {
            templateUrl: 'views/profile.html',
            controller: "profileCtrl"
        })
        .otherwise({
            redirectTo: 'views/unknown.html'
        })
});


app.controller("signupCtrl", function ($scope, $http) {
    $scope.msg = "controller is working";


    // $scope.posts = [];
    $scope.newPost = {
        education: [{
            college: '',
            degree: '',
            year: ''
        }],
        court: [{
            value: '',
            ofcourt: ''

        }]
    };


    $scope.addEducation = function () {
        var baseClg = {
            college: '',
            degree: '',
            year: ''
        };
        $scope.newPost.education.push(baseClg);
    };

    $scope.addCourt = function () {
        var val = {
            value: '',
            ofcourt: ''
        };
        $scope.newPost.court.push(val);

    };

    $scope.showScreen = 0;

    function isValid(screen) {
        var sc = $scope.newPost;
        console.log( 'sc' , sc);
        if (screen === 0) {
            console.log('&& sc.gender' ,sc.gender);
            console.log('&& sc.mobile' ,sc.mobile);
            console.log('&& sc.dob' ,sc.dob);
           if(sc.name && sc.email && sc.username && sc.password  && sc.mobile && sc.dob ){
               return true;
           }
           else{
            return false;
           }
        }
        else if(screen === 1){
             if(sc.practiceArea && sc.state && sc.office){
               return true;
           }
           else{
            return false;
           }
        }

        return false;
    };

    $scope.changeScreen = function (calledFrom) {
        console.log('$scope.showScreen>', $scope.showScreen);

        if(!isValid($scope.showScreen)) {
            alert('Please Fill the details');
            return;
        }
        if (calledFrom == 'next' && $scope.showScreen < 4) {
            $scope.showScreen++;
        }
        else if (calledFrom === 'back' && $scope.showScreen >= 0) {
            $scope.showScreen--;
        }
        else {
            alert('Not Allowed');
        }
    }

});
app.controller("profileCtrl", function ($scope, $http) {
    $scope.loop=[1,2,3,4,5];

    $scope.profileData={
        name:"Rahul Shrivastava",
        records:["cooperative societies","Document Registrations","Ccooperative societies","Ernst Handel"],
        basicInfo:{
            gender:'male',
            dob:'dd/mm/yyyy',
            court:['court1','court2','court3']
        },
        education:{
            collegeName:'Mercer university-school of law',
            degree:'llb',
            graduated:'1990'
        },
        summary:"of Lorem Ipsum of Lorem Ipsum of Lorem Ipsum of Lorem Ipsum of Lorem Ipsum of Lorem Ipsum of Lorem Ipsum",
        reviews:[
            {
                img: 'images/profile_icon.png',
                name: 'sharad',
                subject: 'subject',
                review: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem "
            },
            {
                img: 'images/profile_icon.png',
                name: 'sSARAS',
                subject: 'NEWSUB',
                review: " IPSUM ipsum ipsum ipsumipsum ipsumipsum ipsumipsum ipsum ipsum ipsum ipsum"
            },
            {
                img: 'images/profile_icon.png',
                name: 'sSARAS',
                subject: 'NEWSUB',
                review: " IPSUM ipsum ipsum ipsumipsum ipsumipsum ipsumipsum ipsum ipsum ipsum ipsum "
            },
            {
                img: 'images/profile_icon.png',
                name: 'sSARAS',
                subject: 'NEWSUB',
                review: " IPSUM ipsum ipsum ipsumipsum ipsumipsum ipsumipsum ipsum ipsum ipsum ipsum"
            },
            {
                img: 'images/profile_icon.png',
                name: 'sSARAS',
                subject: 'NEWSUB',
                review: " IPSUM ipsum ipsum ipsumipsum ipsumipsum ipsumipsum ipsum ipsum ipsum ipsum"
            }
        ],


    userReviews:{'5':{rate:500} , '4':{rate:300} ,'3':{rate:150} , '2':{rate:50} ,'1':{rate:10}}

    }
    
    $scope.about = false;
    

    var sumRating = Object.keys($scope.profileData.userReviews).reduce(function(acc ,val , index , arr){
      acc+=$scope.profileData.userReviews[val].rate;
      return acc;
    },0);
    // $scope.profileData.avgRating /=5;
    $scope.profileData.avgRating = Object.keys($scope.profileData.userReviews).reduce(function(acc ,val , index , arr){
      var rate = ($scope.profileData.userReviews[val].rate*parseInt(val)*1.0/sumRating*1.0);
      // console.log('rate' , rate);
      acc+=rate;
      return acc;
    },0.0);
    $scope.profileData.avgRating = Math.round($scope.profileData.avgRating*10)/10.0;


});
