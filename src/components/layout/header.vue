<template>
  <div class="header">
    <div class="left-side" @click.stop="getHomeEvent">
      <div class="system-title">
        環境監控系統
      </div>
      <Menubar @click.stop="menuClickEvent" :model="functionList" p-menuitem class="mr-5 menu-bar" style="--tw-text-opacity: 0.25" />
    </div>
    <div class="current-time">
      當前時間 {{ currentTime }}
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import dayjs from 'dayjs'
export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const userInfo = computed(() => ({
      id: store.state.user.id,
      name: store.state.user.name
    }));
    const functionList = ref([
      {
        label: '即時資料',
        items: [
          { label:'環境監控即時資料查詢' }
        ]
      },
      {
        label: '統計報表',
        items: [
          { label:'歷史資料' }
        ]
      },
      {
        label: '即時告警通知',
        items: [
          { label:'即時告警佈告欄' },
          { label:'告警通知設定' }
        ]
      }
    ]);
    const currentTime = ref('0000/00/00 00:00:00')
    const currentTimer = setInterval(() => {
      currentTime.value = dayjs().format('YYYY/MM/DD HH:mm:ss')
    }, 1000)

    const routeObj = router.options.routes.reduce((acc, route) => route.meta.title ? { ...acc, [route.meta.title]: route.name } : acc , {})

    function menuClickEvent(e) {
      if (e.target.innerText && routeObj[e.target.innerText]) router.push({ name: routeObj[e.target.innerText] });
    }

    function getHomeEvent () {
      router.push({ name: 'Home' })
    }

    return { userInfo, currentTime, functionList, getHomeEvent, menuClickEvent };
  },
};
</script>

<style lang="scss" scoped>
.header {
  @apply flex justify-between border-b items-center px-5;
  background-color: #0391B5;
  .system-title {
    @apply text-white font-bold text-3xl py-1 cursor-pointer mr-5;
  }

  .current-time {
    @apply text-white;
  }

  .left-side {
    @apply flex items-center flex-1 ;
  }

  .p-menubar {
    @apply p-0 bg-transparent border-0 text-white;
    
  }

  ::v-deep(.p-menubar-root-list) {
    @apply py-1;
  }
  ::v-deep(.p-menuitem) {
    .p-menuitem-text, .p-submenu-icon {
      color: #fff !important;
    }
    font-size: 21px;
    &:hover, &.p-menuitem-active {
      .p-menuitem-text, .p-submenu-icon {
        color: #000 !important;
      }
    }
  }
}


</style>

