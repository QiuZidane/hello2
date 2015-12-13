cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/device-tests/testsa.js",
        "id": "device-testdemo.tests",              // 读取这个id
        "pluginId": "cordova-plugin-device-tests"   // 这个id暂时用不上
    },     
    {
        "file": "plugins/cordova-plugin-test-framework/www/tests.js",
        "id": "cordova-plugin-test-framework.cdvtests",
        "pluginId": "cordova-plugin-test-framework"
    },
    {
        "file": "plugins/cordova-plugin-test-framework/www/jasmine_helpers.js",
        "id": "cordova-plugin-test-framework.jasmine_helpers",
        "pluginId": "cordova-plugin-test-framework"
    },
    {
        "file": "plugins/cordova-plugin-test-framework/www/medic.js",
        "id": "cordova-plugin-test-framework.medic",
        "pluginId": "cordova-plugin-test-framework"
    },
    {
        "file": "plugins/cordova-plugin-test-framework/www/main.js",
        "id": "cordova-plugin-test-framework.main",
        "pluginId": "cordova-plugin-test-framework"
    },
    {
        "file": "plugins/cordova-plugin-device-motion/www/Acceleration.js",
        "id": "cordova-plugin-device-motion.Acceleration",
        "pluginId": "cordova-plugin-device-motion",
        "clobbers": [
            "Acceleration"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device-motion/www/accelerometer.js",
        "id": "cordova-plugin-device-motion.accelerometer",
        "pluginId": "cordova-plugin-device-motion",
        "clobbers": [
            "navigator.accelerometer"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device-motion-tests/tests.js",
        "id": "cordova-plugin-device-motion-tests.tests",
        "pluginId": "cordova-plugin-device-motion-tests"
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "pluginId": "cordova-plugin-whitelist",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});