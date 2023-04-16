<template>
  <div class="login">
    <section class="login-content">
      <h2>水肥一体化精准控制云平台</h2>
      <div class="login-content-formBox">
        <div class="main">
          <h3>用户登录</h3>
          <div class="main-form">
            <el-form :model="form">
              <el-form-item>
                <el-input v-model="form.email" placeholder="请输入注册邮箱">
                  <template #prefix>
                    <el-icon style="font-size: 24px"><User /></el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                  v-model="form.password"
                  show-password
                  placeholder="请输入密码"
                >
                  <template #prefix>
                    <el-icon style="font-size: 24px"><Lock /></el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <!-- <el-form-item style="margin-left: 70px">
                <el-checkbox
                  label="记住密码"
                  v-model="form.checked"
                ></el-checkbox>
              </el-form-item> -->
            </el-form>
            <div class="main-form-login">
              <el-button type="primary" @click="login">登录</el-button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { Lock, User } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { requestLoginInfo } from "@/request/requests.js";
import { ElNotification } from "element-plus";

const form = reactive({
  email: "",
  password: "",
  //   checked: false,
});
const router = useRouter();
const login = () => {
  // 游客登录
  if (form.email == 123 && form.password == 123) {
    // 弄一个假的token
    localStorage.setItem("login", "123");
    router.push(`/${form.email}/index`);
    ElMessage({
      type: "success",
      message: "登录成功",
      duration: 2000,
    });
  } else {
    requestLoginInfo(form).then((res) => {
      if (res.data.status == "登陆成功") {
        localStorage.setItem("login", email);
        router.push(`/${form.email}/index`);
      } else {
        ElMessage({
          type: "error",
          message: "登录失败",
          duration: 2000,
        });
        form.email = "";
        form.password = "";
      }
    });
  }
};
onMounted(() => {
  // 提示游客账号
  ElNotification({
    title: "提示",
    message: "游客体验账号————账号：123 ; 密码：123",
    position: "top-left",
  });
});
</script>
<style scoped lang="less">
.login {
  background-image: url("@/assets/background.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100vh;
  overflow: hidden;
  //   position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  // margin: 307px 197px 295px 0;

  &-content {
    // position: absolute;
    // right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 197px;

    h2 {
      font-size: 55px;
      font-weight: bold;
      color: #f5f6fa;
      text-shadow: 0px 5px 8px #3383ff;
      margin-bottom: 31px;
      font-family: "PingFang SC-Bold";
      padding: 0;
    }
    &-formBox {
      width: 540px;
      height: 490px;
      border-radius: 6px 6px 6px 6px;
      background-color: rgba(255, 255, 255, 0.15);
      display: flex;
      justify-content: center;
      align-items: center;
      .main {
        width: 500px;
        height: 454px;
        background-color: rgba(255, 255, 255, 0.15);
        border-radius: 6px 6px 6px 6px;

        // border: 1px solid #f5f6fa ;
        h3 {
          font-size: 30px;
          font-weight: 400;
          color: #ffffff;
          line-height: 45px;
          letter-spacing: 20px;
          margin: 5px 0 61px 0;
          text-align: center;
          font-family: "PingFang SC-Regular";
        }
        &-form {
          .el-input {
            width: 390px;
            height: 52px;
            margin: 0 48px 33px 62px;

            ::v-deep .el-input__wrapper {
              .el-input__inner {
                color: white;
              }
              background-color: transparent;
            }
          }
          ::v-deep .el-checkbox__label {
            font-family: "PingFang SC-Regular";
            font-weight: 400;
            color: #f5f6fa;
          }
          &-login {
            width: 330px;
            height: 64px;

            margin: 0 auto;
            display: flex;
            justify-content: center;
            ::v-deep .el-button {
              width: auto;
              height: auto;

              > span {
                font-size: 30px;
                font-family: "PingFang SC-Bold, PingFang SC";
                font-weight: bold;
                color: #ffffff;
                line-height: 45px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
