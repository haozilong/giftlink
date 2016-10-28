/**
 * Created by haozilong on 16/9/27.
 * 提示框
 * 样式:showAlert.css
 * $obj.showAlert({text:"错误提示"})
 */
var $obj = {
    domBox: '<div class="showalert-back"><div class="showalert"><div class="showalert-content"><div class="showalert-text"></div><div class="showalert-button">确定</div></div></div></div>',
    showAlert: function (o) {
        var parem = {};
        if (typeof o == 'string') {
            parem = {
                text: o
            }
        } else {
            parem = o;
        }
        var $h = $($obj.domBox);
        $h.find('.showalert-text').append(parem.text);
        $('body').append($h);
        //$h.fadeIn();
        $h.find('.showalert-button').click(function(){
            $h.fadeOut(function () {
                $h.remove();
            });
        });
    }
};
module.exports = $obj;