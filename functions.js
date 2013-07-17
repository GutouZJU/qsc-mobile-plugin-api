// QSC Mobile Plugins Fuctions
// 遵循

var QSCMobile = (function() {
    var user = {
        /**
         * 返回当前用户的学号
         * 注意学号已经有10位，为防止溢出应为string型
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

    var view = {
        /**
         * 重绘区域
         * @example 重绘 `hello world` 的section
         * QSCMobile.plugin.redraw('helloWorld', 'section');
         * @param {String} 插件id
         * @param {String} 重绘区域 section 或者 card
         */
        redraw: function(pluginId, area) {
        },

        /**
         * 弹出通知，（用于错误信息显示等）
         * @param {String} 通知信息
         */
        alert: function(msg) {
        },

        /**
         * 弹出确认
         * @param {String} 通知信息
         * @return {Boolean} 返回 True or False
         */
        confirm: function(msg) {
        }
    };

    var device = {
        /**
         * 手机震动
         * @param {Interger} 震动持续的微秒数，
         */
        vibrate: function(milliseconds) {
        },

        /**
         * 当前是否连网
         * @return {Boolean}
         */
        online: function() {
        },

        /**
         * 当前所处的位置
         * @example 获取当前位置
         * QSCMobile.device.position(function(postion) {
         *   var lat = position.coords.latitude;  // 纬度
	 *   var lng = position.coords.longitude; // 经度
         * }, function() {})
         * @param {Function} 获取成功时执行，被传入position参数
         * @param {Function} 获取失败时执行
         */
        position: function(getPositionSuccess, getPositionError) {
            navigator.geolocation.getCurrentPosition( getPositionSuccess , getPositionError );
        }
    };

    var plugin = {
        /**
         * 注册插件
         * @example 注册 `hello world`
         * QSCMobile.plugin.register('helloWorld', {
         *   name: "Hello World", // nice name， 用于显示
         *   author: "Someone",
         *   homepage: "http://example.com"
         * });
         * @param {String} 插件id，需要保证唯一性
         * @param {Object} 插件描述信息
         */
        register: function(pluginId, pluginInfo) {
        }
    };

    return {
        user: user,
        load: load,
        view: view,
        device: device,
        plugin: plugin
    };
})();
