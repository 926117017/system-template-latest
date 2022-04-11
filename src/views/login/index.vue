<template>
  <div class="layout">
    <div class="login">
      <div class="login-title">{{ title }}</div>
      <el-tabs v-model="activeName" :stretch="true">
        <el-tab-pane label="账号登录" name="User">
          <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            class="demo-ruleForm"
            size="large"
          >
            <el-form-item prop="username">
              <el-input v-model="ruleForm.username" placeholder="请输入用户名">
                <template #prefix>
                  <div style="display: flex;align-items: center">
                    <svg-icon icon="user"></svg-icon>
                  </div>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="ruleForm.password" placeholder="请输入密码" type="password">
                <template #prefix>
                  <div style="display: flex;align-items: center">
                    <svg-icon icon="password"></svg-icon>
                  </div>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="btn" type="primary">Create</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="Mobile">手机登录</el-tab-pane>
      </el-tabs>

    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const title = ref('系统登录')
const backgroundColor = ref('#cecece')
const ruleForm = reactive({ username: 'admin', password: 123456 })
// 所选的标签项
const activeName = ref('User')
</script>

<style lang="scss" scoped>

.iconaa {
  color: black;
}

// 标签页头
::v-deep .el-tabs__header {
  margin-bottom: 30px;
}

// 标签页头的下划线
::v-deep .el-tabs__nav-wrap::after {
  display: none;
}

// 选中的下划线盒子
::v-deep .el-tabs__active-bar {
  width: 40px !important;
  position: absolute;
  left: 50px;
  bottom: 0;
  height: 4px;
  border-radius: 2px;
}

.layout {
  width: 100vw;
  height: 100vh;
  background: v-bind(backgroundColor);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  .login {
    width: 400px;
    height: 430px;
    background: #FFFFFF;
    box-shadow: -15px 15px 50px rgba(0, 0, 0, .4);
    padding: 40px;
    box-sizing: border-box;
    border-radius: 10px;

    // 标题
    .login-title {
      padding: 20px;
      font-size: 26px;
      font-weight: bold;
      text-align: center;
      color: #409eff;
    }

    // 表单--item
    ::v-deep .el-form-item {
      margin-bottom: 25px;

      .el-input__inner{
        padding-left: 45px;
      }
    }

    // 按钮渐变色
    .btn {
      width: 100%;
      background: linear-gradient(90deg, rgba(25, 180, 241, 1) 0%, rgba(14, 115, 232, 1) 100%) !important;
    }
  }
}
</style>
