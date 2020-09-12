var Validator = function(options) {
    // lấy các element của form cần validate
    var selectorRules = {};
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
                console.log(inputElement);
            }
        }
    });



}
Validator.isRequire = function(selector) {
    return {
        selector: selector,
        check: function(value) {
            return value.rtrim() ? undefined : "Trường này không được để trống";
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