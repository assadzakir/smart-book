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
//# sourceMappingURL=/home/assad/Desktop/Projects/2017/smartbook/src/app/shared/validate-url.js.map