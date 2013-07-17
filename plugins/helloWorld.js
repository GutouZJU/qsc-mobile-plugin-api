// 插件示例
var QSCMobile;
QSCMobile.plugin.helloWorld = {
    /**
     * 插件初始化时调用的方法
     */
    construtor: function() {
        // 做一些初始化的事情，比如从localStroage中拉取数据
    },
    /**
     * 下拉刷新时调用的方法，更新数据，重绘section和card
     */
    refresh: function() {
        /**
         * 获取数据
         */
        var fecthData = function(callback) {};
        /**
         * 更新数据
         */
        var updateData = function(callback) {};
        fecthData(function() {
            updateData(function() {
                QSCMobile.view.redraw('helloWorld', 'card');
                QSCMobile.view.redraw('helloWorld', 'section');
            });
        });
    },
    /**
     * QSCMobile.view.redraw('helloWorld', 'section') 将会根据这里的返回结果重绘section
     * @return {String} 用于填充单独页面的HTML
     */
    section: function() {
    },
    /**
     * QSCMobile.view.redraw('helloWorld', 'card') 将会根据这里的返回结果重绘card
     * @return {String} 用于填充首屏card的HTML
     */
    card: function() {
    }
}
QSCMobile.plugin.register('helloWorld', {
    name: "Hello World" // nice name， 用于显示
});