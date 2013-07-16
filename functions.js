// QSC Mobile Plugins Fuctions
// 遵循

var QSCMobile = (function() {
    var user = {
        /**
         * 返回当前用户的学号
         * 注意学号已经有10位为防止溢出应为string型
         * @returns {String}
         */
        stuid: function() {
        },

        /**
         * 返回当前用户的密码
         * @returns {String}
         */
        pwd: function() {
        },

        /**
         * 返回当前用户的昵称
         * @returns {String}
         */
        id: function() {
        },

        /**
         * 返回当前用户的真实姓名
         * @returns {String}
         */
        name: function() {
        }
    };
    var load = {
        /**
         * 向当前dom注入JS文件 <Webview Only>
         * @param {String} src
         */
        js: function(src) {
        },

        /**
         * 向当前dom注入CSS文件 <Webview Only>
         * @param {String} src
         */
        css: function(src) {
        }
    };
    return {
        user: user,
        load: load
    };
})();

// usage
var stuid = QSCMobile.user.stuid()