<template>
  <div class="home">
    <dv-loading class="loading-text" v-if="!visible">loading</dv-loading>
    <dv-container v-if="visible" :options="{width: 3840, height: 2160}">
      <div>123</div>
    </dv-container>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
// @ is an alias to /src

export default {
  name: 'Home',
  setup() {
    const visible = ref(false)
    onMounted(() => {
      setTimeout(() => {
        visible.value = true
      }, 2000)
    })

    return {
      visible,
    }
  },
}
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgb(29, 29, 29);
  color: #fff;
  font-size: 48px;

  #imooc-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .header {
      width: 100%;
      height: 167px;
      background: yellow;
    }

    .separator {
      width: 100%;
      height: 10px;
      background: rgb(92, 88, 89);
    }

    .center {
      flex: 1;
      display: flex;
      width: 100%;

      .left {
        flex: 0 0 860px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 860px;
        height: 100%;
        padding-bottom: 20px;
        box-sizing: border-box;

        .left1 {
          height: 300px;
          background: grey;
        }

        .left2 {
          height: 320px;
          background: grey;
        }

        .left3 {
          height: 280px;
          background: grey;
        }

        .left4 {
          height: 230px;
          background: grey;
        }

        .left5 {
          height: 360px;
          background: grey;
        }

        .left6 {
          height: 360px;
          background: grey;
        }
      }

      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-left: 10px;

        .right-top1 {
          width: 100%;
          height: 206px;
          background: grey;
        }

        .right-top2 {
          width: 100%;
          height: 48px;
          background: grey;
          margin: 10px 0;
        }

        .right-bottom {
          flex: 1;
          display: flex;
          padding-bottom: 20px;

          .right-left {
            flex: 0 0 1917px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 1917px;

            .right-left1 {
              height: 999px;
              background: grey;
            }

            .right-left2 {
              height: 80px;
              background: grey;
            }

            .right-left3 {
              height: 350px;
              background: grey;
            }

            .right-left4 {
              height: 220px;
              background: grey;
            }
          }

          .right-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 10px;
            margin-right: 20px;

            .right-right1 {
              width: 100%;
              height: 999px;
              background: grey;
            }

            .right-right2 {
              flex: 1;
              width: 100%;
              margin-top: 20px;
              background: grey;
            }
          }
        }
      }
    }
  }
}

.loading-text {
  font-size: 20px;
  margin-top: 10px;
}
</style>
