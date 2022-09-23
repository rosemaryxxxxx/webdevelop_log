window.onload = function () {
    // 获取元素
    var login = document.querySelector('.tab-log')
    var log = document.querySelector('.log')

    var loginreg = document.querySelector('.reg')
    var rege = document.querySelector('.rege')

    loginreg.onclick = function () {

        rege.style.display = 'block'
        log.style.display='none'
    }
    login.onclick = function () {
        rege.style.display = 'none'
        log.style.display='block'
    }


    //正则表达式
    var regtel = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/; //手机号码
    var regnc = /^[a-zA-Z][a-zA-Z0-9]{4,16}$/;//昵称
    var regpwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{4,10}$/;//密码
    var regID = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;//身份证号码
    var regemail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;//邮箱

    var tel = document.querySelector('#tel');
    var nc = document.querySelector('#nc');
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');
    var ID = document.querySelector('#ID');
    var email = document.querySelector("#email")

    regexp(tel, regtel); // 手机号码
    regexp(nc, regnc); // 昵称
    regexp(pwd, regpwd); // 密码框
    regexp(ID,regID);//身份证
    regexp(email,regemail);//邮箱

    // 表单验证的函数
    function regexp(ele, reg) {
        ele.onblur = function() {
            if (reg.test(this.value)) {
                // console.log('正确的');
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
            } else {
                // console.log('不正确');
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请从新输入 ';
            }
        }
    };

    surepwd.onblur = function() {
        if (this.value == pwd.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> ';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 两次密码输入不一致';

        }
    }

}