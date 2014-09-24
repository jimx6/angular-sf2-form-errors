/**
 * @license mijankowski
 * License: MIT
 */
(function(window, angular) {'use strict';

    angular.module('sfFormErrors', []).
        factory('$sfFormErrors', [function () {
            return {
                setErrors: function(errors, formErrorsScopeModel) {
                    angular.forEach(errors.form.children, function(element, elementName){
                        if (typeof formErrorsScopeModel[elementName] != 'undefined')
                        {
                            formErrorsScopeModel[elementName].errors = [];
                            angular.forEach(element.errors, function(message){
                                formErrorsScopeModel[elementName].errors.push(message);
                            });
                        }
                    });
                },
                resetErrorsForElement: function(elementName, formErrorsScopeModel)
                {
                    if (typeof formErrorsScopeModel[elementName] != 'undefined')
                    {
                        formErrorsScopeModel[elementName].errors = [];
                    }
                },
                resetAllErrors: function(formErrorsScopeModel)
                {
                    angular.forEach(formErrorsScopeModel, function(element, elementName){
                        element.errors = [];
                    })
                }
            };

        }]);

})(window, window.angular);