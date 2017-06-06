<template>
  <div class="login-view">
    <h1>
      <a href="javascript:history.go(-1);">取消</a>登录豆瓣
    </h1>
    <form action="">
      <div class="form-user">
        <label>
          <strong>账号</strong>
          <input
            v-model="user"
            type="text"
            name="user"
            placeholder="邮箱 / 手机号 / 用户名">
        </label>
      </div>
      <div class="form-pwd">
        <label>
          <strong>请输入密码</strong>
          <template v-if="passType === 'password'">
            <input
              v-model="password"
              type="password"
              name="password"
              placeholder="密码">
          </template>
          <template v-if="passType === 'text'">
            <input
              v-model="password"
              name="password"
              type="text"
              placeholder="密码">
          </template>
          <span class="showpwd" :class="{show: isShow}" @click="showpwd()"></span>
        </label>
      </div>
      <div class="">
        <input type="text" class="submit" value="登录">
      </div>
    </form>
    <div class="footer">
      <div class="more-login">使用其他方式登录 &amp; 找回密码</div>
      <div class="btns">
        <a href="#">注册豆瓣账号</a>
        <a href="#">下载豆瓣App</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login-view',
    data () {
      return {
        isShow: 0,
        passType: 'password',
        user: '',
        password: ''
      }
    },
    methods: {
      showpwd () {
        this.isShow = this.isShow ? 0 : 1
        this.isShow ? this.passType = 'text' : this.passType = 'password'
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .login-view {
    h1 {
      height: 4.5rem;
      margin: 0 0 1rem 0;
      padding: 0 1.8rem;
      line-height: 4.5rem;
      background: #fff;
      border-bottom: 0.1rem solid #eee;
      text-align: center;
      font-size: 1.8rem;
      font-weight: bold;

      a {
        position: absolute;
        left: 1.8rem;
        top: 0;
        color: #42bd56;
        font-size: 1.5rem;
        font-weight: normal;
      }
    }

    form {
      padding: 2rem 1.5rem;

      strong {
        font-size: 1.5rem;
        color: #222;
        display: none;
        margin-bottom: 0.5rem;
      }

      input[type="text"], input[type="password"] {
        display: inline-block;
        width: 100%;
        height: 4.4rem;
        padding: 0 0.8rem;
        box-sizing: border-box;
        font-size: 1.5rem;
        background: #fff;
        border: 0.1rem solid #ccc;
        border-top-left-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
        outline: 0;
      }

      .form-pwd {
        position: relative;

        input {
          border-top: 0;
        }

        .showpwd {
          position: absolute;
          right: 0.2rem;
          top: 0;
          display: block;
          height: 100%;
          width: 3.2rem;
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAABHBJREFUWAntmEloFEEUhpOZzJBoFCeT/WCMnvRg3IgSPLjhyRWiKAp6EImQRHMQRFFBXFExLrij6CGIcYsePehBg0tAhKi4I5hJQlzDKDFhEr/XpIbOTPd0d4wbdEHxqt7733t/v66uqpmkJLe5FXAr4FbArcDfrEDyryTv6enxNjc3FyFLkpOTS4g1knEQGWSejvxC/9jbn6Cr93q99dnZ2S/R9av1i3Bra2tRd3f3KvoysgacZob4W/pZv99/NhgMvnfi74gw1ZxGBXfTJztJYoaFdARbXUpKyga7VbdFmIqOikQieyG60Cz5r+gh3oX/kbS0tG2BQECWkWmzJNzU1LSUgKcgO9g0ygAZyPOOUKX5+fkNZiE9ZgYI+lgCh7DX/AmywoM8BfQ7oVBotRkvwwrjlALZS8j5Zo4m+kdU6TJ+jR6PR15tNmNZ76XIAhMfQzVxNlPp7bHGOMIE9vKENQAXx4ITzENsV2W5ubk3jDDElLe1BrkHe6oRxkjHQ6/Py8vbp7fFEYbsMQKX6UGJxlTimc/nm5mVldWcCCc2SBcT+yZ9qBVW2SG9EtLn1LwPYQKWsrfWKqOVhGw7lZ2Qk5PzWmF7Sc2GVCH2Rux12N8oe0tLy1x2nOtqbiWJ8Y2CTKQgzwUbJUxlh5PkMbphVkGUnWCbWGc7ZY6vBzLVyHJ6NC6Y75jXgTul/Nh5ZOnMUXMb8hH+U4jVqd8lDuLohGwkPT39hEoG2SreToWerNiYD0IcpyBTFZbER9TYphyPf5VgtUqQbDKv6Z5NZw1G0vvy1DKBlNwpviDl/mDYwN8CP0OM4Pzgw0ifIdhY+ZmDpVCrMGR3GGPMtSR7p6ychGMSke3FTQKj5ZNXy7hF+duUgY6OjvX6JWHTzxDWY6iNV9rFxXv2ajTCbB0bTREmBqoUPQjYBZ4xD5tAlboBjEaY6voZ5yqDTfkpNTV1r0aYfe4BAa7ZdFSwSe3t7XL3TcJXbl1blSFWYu9Gt0XpWb/TIe1k/YrrnoyMjK/6JbEWpRynthoJveFwOHrA8NDVvKnDkOvz2pnLtlbGB3dHBca3XI1tStnWqgUb3S9lwpMP2MFBuBF0uVPUcWS/Zaw1dqR5fOR1am4leWA5OCZwcLwQbB/ComC/O0oF1sjYTiOgHM2zCBiywsv2yV4tR/MQK6yy88AreHvno3M1UBJjBeOLam4lST66s7PzIWTmmmHB+ChEJZW97ZCsXH6iZCV+XIVFSVC5XtYiF8jcQZPr5RXwjUj5HuR6WYxchBzuII58yPaulyooCXxUbb8ct0r3h+QPyFbykZ00ymdYYT0Q0ksgfZoH+Ld/IinSfOEXuCIW8dRXlW6gJbG76Ae4K4yjsg2J4ltWWO/Mup5GtXeh0y49elt/xpD8PT/zY8lw2RkLcfkjZTm2QKzdag5R2ZfPyB8pmZmZTVZ4vd1RhfWOMmZde9va2sayXZUwlr+qRiGN/qr6gO0pROWvqrv8afJK/N3mVsCtgFsBtwL/XwV+As2W8ubaOJDiAAAAAElFTkSuQmCC);
          background-repeat: no-repeat;
          background-position: center center;
          background-size: 2.2rem;
          z-index: 3;
        }

        .showpwd.show {
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAABHBJREFUWAntmEloFEEUhpOZzJBoFCeT/WCMnvRg3IgSPLjhyRWiKAp6EImQRHMQRFFBXFExLrij6CGIcYsePehBg0tAhKi4I5hJQlzDKDFhEr/XpIbOTPd0d4wbdEHxqt7733t/v66uqpmkJLe5FXAr4FbArcDfrEDyryTv6enxNjc3FyFLkpOTS4g1knEQGWSejvxC/9jbn6Cr93q99dnZ2S/R9av1i3Bra2tRd3f3KvoysgacZob4W/pZv99/NhgMvnfi74gw1ZxGBXfTJztJYoaFdARbXUpKyga7VbdFmIqOikQieyG60Cz5r+gh3oX/kbS0tG2BQECWkWmzJNzU1LSUgKcgO9g0ygAZyPOOUKX5+fkNZiE9ZgYI+lgCh7DX/AmywoM8BfQ7oVBotRkvwwrjlALZS8j5Zo4m+kdU6TJ+jR6PR15tNmNZ76XIAhMfQzVxNlPp7bHGOMIE9vKENQAXx4ITzENsV2W5ubk3jDDElLe1BrkHe6oRxkjHQ6/Py8vbp7fFEYbsMQKX6UGJxlTimc/nm5mVldWcCCc2SBcT+yZ9qBVW2SG9EtLn1LwPYQKWsrfWKqOVhGw7lZ2Qk5PzWmF7Sc2GVCH2Rux12N8oe0tLy1x2nOtqbiWJ8Y2CTKQgzwUbJUxlh5PkMbphVkGUnWCbWGc7ZY6vBzLVyHJ6NC6Y75jXgTul/Nh5ZOnMUXMb8hH+U4jVqd8lDuLohGwkPT39hEoG2SreToWerNiYD0IcpyBTFZbER9TYphyPf5VgtUqQbDKv6Z5NZw1G0vvy1DKBlNwpviDl/mDYwN8CP0OM4Pzgw0ifIdhY+ZmDpVCrMGR3GGPMtSR7p6ychGMSke3FTQKj5ZNXy7hF+duUgY6OjvX6JWHTzxDWY6iNV9rFxXv2ajTCbB0bTREmBqoUPQjYBZ4xD5tAlboBjEaY6voZ5yqDTfkpNTV1r0aYfe4BAa7ZdFSwSe3t7XL3TcJXbl1blSFWYu9Gt0XpWb/TIe1k/YrrnoyMjK/6JbEWpRynthoJveFwOHrA8NDVvKnDkOvz2pnLtlbGB3dHBca3XI1tStnWqgUb3S9lwpMP2MFBuBF0uVPUcWS/Zaw1dqR5fOR1am4leWA5OCZwcLwQbB/ComC/O0oF1sjYTiOgHM2zCBiywsv2yV4tR/MQK6yy88AreHvno3M1UBJjBeOLam4lST66s7PzIWTmmmHB+ChEJZW97ZCsXH6iZCV+XIVFSVC5XtYiF8jcQZPr5RXwjUj5HuR6WYxchBzuII58yPaulyooCXxUbb8ct0r3h+QPyFbykZ00ymdYYT0Q0ksgfZoH+Ld/IinSfOEXuCIW8dRXlW6gJbG76Ae4K4yjsg2J4ltWWO/Mup5GtXeh0y49elt/xpD8PT/zY8lw2RkLcfkjZTm2QKzdag5R2ZfPyB8pmZmZTVZ4vd1RhfWOMmZde9va2sayXZUwlr+qRiGN/qr6gO0pROWvqrv8afJK/N3mVsCtgFsBtwL/XwV+As2W8ubaOJDiAAAAAElFTkSuQmCC);
        }
      }

      .submit {
        cursor: pointer;
        width: 100%;
        padding: 1.2rem 2.6rem;
        margin-top: 1rem;
        font-size: 1.7rem;
        text-align: center;
        color: #fff;
        background: #17AA52;
        border-radius: 0.3rem;
      }
    }

    .footer {
      .more-login {
        font-size: 1.5rem;
        color: #aaa;
        text-align: center;
      }

      .btns {
        margin-top: 40px;
        text-align: center;
        font-size: 15px;

        a {
          color: #42bd56;
          margin-right: 1.5rem;
        }
      }
    }
  }
</style>
