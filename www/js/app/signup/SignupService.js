angular.module('ionicapp.signup')
    .factory('SignupService', function ($firebaseAuth, ENV) {
        var createUserDeferredResponse = {};
        return {
            createUserDeferredRequest: function (username, password) {
                console.log("username is : " + username + " and password is : " + password);
                createUserDeferredResponse = createUser(username, password);
                return createUserDeferredResponse;
            },

            getCreateUserDeferredResponse: function () {
                return createUserDeferredResponse;
            }
        }

        function createUser(username, password) {
            var ref = new Firebase(ENV.firebaseURL);
            var auth = $firebaseAuth(ref);

            return auth.$createUser({
                email    : username,
                password : password
            });

        }
    });
