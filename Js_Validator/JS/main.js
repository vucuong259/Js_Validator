var Validator = function(options) {
    // hàm lấy cấp cha của input
    var selectorRules = {};

    function getParent(inputElement, selector) {
        while (inputElement.parentElement) {
            if (inputElement.parentElement.matches(selector)) {
                return inputElement.parentElement
            }
            inputElement = inputElement.parentElement;
        }
    }
    // hàm thực hiện validate
    function validate(inputElement, rule) {
        var parentElement = getParent(inputElement, options.inputClass);
        var errorElement = parentElement.querySelector(options.errorSelector);
        var errorMessage;
        var rules = selectorRules[rule.selector];
        for (var i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.value);
            if (errorMessage) break;
        }
        if (errorMessage != undefined) {
            errorElement.innerText = errorMessage;
            parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            parentElement.classList.remove('invalid');
        }
    }


    // chạy các require validator
    options.rules.forEach(rule => {
        if (Array.isArray(selectorRules[rule.selector])) {
            selectorRules[rule.selector].push(rule.check);
        } else {
            selectorRules[rule.selector] = [rule.check];
        }
        var inputElement = document.querySelector(rule.selector)
        if (inputElement) {
            inputElement.onblur = function() {
                validate(inputElement, rule);
            }
        }
    });



}
Validator.isRequire = function(selector) {
    return {
        selector: selector,
        check: function(value) {
            return value.trim() ? undefined : "Trường này không được để trống";
        }
    }
}

Validator.isEmail = function(selector) {
    return {
        selector: selector,
        check: function(value) {
            return value ? undefined : "Trường này không được để trống";
        }
    }
}