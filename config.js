/**
 * 配置
 *
 * @author 792793182@qq.com 2016-01-15.
 */
var db = {
    host:'localhost',
    port:3306,
    user:'root',
    password:'root',
    database: 'db_order_dishes'
};

var alidayu = {
    AppKey: 'your app key',
    AppSecret: 'your app secret',
    partner_id: 'xinleju',
    product: "乐餐吧",
    sms_free_sign_name: 'xxxxxx',
    sms_template_code: 'SMS_xxxxxxxx',
    sms_template_code2: 'SMS_4yyyyyyy'
};

module.exports.db = db;
module.exports.alidayu = alidayu;


