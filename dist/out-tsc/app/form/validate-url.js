export var valideUrl = function (ctrl) {
    var valid = false;
    valid = /^(ftp|https|http)+$/gi.test(ctrl.value);
    return valid ? null : {
        url: {
            valid: false,
            message: 'Not a valid url'
        }
    };
};
//# sourceMappingURL=/home/assad/Desktop/Projects/smartbook/src/app/form/validate-url.js.map