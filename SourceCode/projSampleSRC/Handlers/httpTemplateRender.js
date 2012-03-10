/**
 * Created by JetBrains WebStorm.
 * User: jbzhang
 * Date: 12-03-08
 * Time: 11:17 PM
 * To change this template use File | Settings | File Templates.
 */

var jade = require('jade');
var path = require('path').dirname(__dirname) + '/Templates/index.jade';
var str = require('fs').readFileSync(path, 'utf8');
var fn = jade.compile(str, {filename: path, pretty: true});

function indexPage(content){
    return fn(content);
}

exports.indexPage = indexPage;