<template>
  <section class="tw-bg-white kladovki">
    <div class="wrapper tw-py-48 tw-h-full">
      <h1
        class="tw-text-primary tw-text-[32px] tw-leading-[38.4px] tw-font-bold">
        Кладовые, Литер 1
      </h1>
      <div
        class="tw-grid tw-grid-rows-[1fr_auto] tw-overflow-hidden tw-h-full tw-relative"
        >
        <!-- v-if="kladovki.length > 0" -->
        <div
          class="tw-relative tw-mb-10 lg:tw-mb-48 tw-py-48 tw-px-25 lg:tw-mx-48 tw-overflow-hidden">
          <div
            class="tw-absolute tw-text-secondary tw-left-1/2 tw-top-0 -tw-translate-x-1/2">
            Двор
          </div>
          <div
            class="tw-absolute tw-text-secondary ver tw-left-0 tw-top-1/2 tw-rotate-180 -tw-translate-y-1/2"
            style="writing-mode: vertical-rl">
            ул. Султанова
          </div>
          <div
            class="tw-absolute tw-text-secondary tw-left-1/2 tw-bottom-0 -tw-translate-x-1/2">
            ул. Чернышевского
          </div>
          <div
            class="tw-absolute tw-text-secondary tw-right-0 tw-top-1/2 -tw-translate-y-1/2 tw-rotate-180"
            style="writing-mode: vertical-rl">
            ул. Гафури
          </div>
          <div class=" plan tw-relative tw-overflow-hidden tw-h-full" ref="plan" @mousedown="down" @mouseleave="leave" @mouseup="leave" @touchmove="move" @touchstart="down" @touchcancel="leave" @touchend="leave">
            <div ref="urovenEl">

              <svg
                viewBox="0 0 1057 602"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="tw-max-w-[1057px] tw-min-h-[35vh] tw-h-full tw-max-h-[50vh] tw-mx-auto">
                <rect width="1057" height="602" fill="url(#pattern0)" />
                <g
                  v-for="item in kladovki"
                  v-html="item.path"
                  :fill="statusList[item.status]"></g>
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1">
                    <use
                      xlink:href="#image0_329_10766"
                      transform="matrix(0.00060589 0 0 0.00106383 -0.00197971 0)" />
                  </pattern>
                  <image
                    id="image0_329_10766"
                    width="1657"
                    height="940"
                    xlink:href="@/assets/images/kladovki/kladovki.png" />
                </defs>
              </svg>
            </div>
          </div>
          <!-- <img
            class="tw-max-w-[1057px] tw-max-h-[50vh] tw-mx-auto"
            src="@/assets/images/kladovki/kladovki.png" /> -->
        </div>
        <div class=" tw-flex tw-justify-center lg:tw-grid tw-gap-16 lg:tw-absolute lg:tw-right-0 lg:tw-top-1/2 lg:tw-transform lg:-tw-translate-y-1/2">
          <button @click="zoomIn" class=" tw-grid tw-place-content-center tw-text-[#9BA5B0] tw-text-md tw-leading-[normal] tw-w-40 tw-h-40 tw-rounded-full tw-bg-[#F2F2F2]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z" fill="#9BA5B0"/>
            </svg>

          </button>
          <button @click="zoomOut" class=" tw-grid tw-place-content-center tw-text-[#9BA5B0] tw-text-md  tw-leading-[normal] tw-w-40 tw-h-40 tw-rounded-full tw-bg-[#F2F2F2]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12.998H5V10.998H19V12.998Z" fill="#9BA5B0"/>
            </svg>

          </button>
        </div>
        <div
          class="tw-flex tw-justify-center tw-flex-wrap tw-gap-16 lg:tw-gap-24">
          <div class="tw-flex tw-items-center tw-gap-10">
            <div class="tw-w-14 tw-h-14 tw-bg-[#151717] tw-rounded-full"></div>
            <div class="tw-text-secondary">кладовая продана</div>
          </div>
          <div class="tw-flex tw-items-center tw-gap-10">
            <div class="tw-w-14 tw-h-14 tw-bg-[#FFFFFF] tw-border-[#9BA5B0] tw-border tw-rounded-full"></div>
            <div class="tw-text-secondary">кладовая свободна</div>
          </div>
          <div class="tw-flex tw-items-center tw-gap-10">
            <div class="tw-w-14 tw-h-14 tw-bg-[#FF6B00] tw-rounded-full"></div>
            <div class="tw-text-secondary">кладовая забронирована</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import ky from "ky";
import { onMounted, ref } from "vue";
const kladovki = ref([]);
const statusList = {
  Свободен: "",
  Забронирован: "#FF6B00",
  Продан: "#151717",
};
const api = ky.create({ prefixUrl: "https://kladovki.aisrb.ru/api" });
const getKladovki = async () => {
  try {
    const res = await api("list.php?section=1").json();
    kladovki.value = res;
  } catch (e) {
    throw e;
  }
};

const coords = ref({
  left:0,
  top:0,
  xx:0,
  yy:0,
  x:0,
  y:0,
})
const size = ref(1)
const urovenEl = ref(null)
const plan = ref(null)
const down = (e)=>{
  e.preventDefault();
  if(/touch/i.test(e.type)){
    coords.value.xx = e.changedTouches[0].pageX
    coords.value.yy= e.changedTouches[0].pageY
    if(plan.value){
      plan.value.ontouchmove=(evt)=>move(evt)
    }
  }
  if(/mouse/i.test(e.type)){
    coords.value.xx = e.pageX
    coords.value.yy= e.pageY
    if(plan.value){
      plan.value.onmousemove=(evt)=>move(evt)
    }

  }
}
const leave = (e)=>{
  
  coords.value.left = coords.value.left + coords.value.x - coords.value.xx
  coords.value.top = coords.value.top + coords.value.y - coords.value.yy

  plan.value.onmouseleave = null
  plan.value.onmousemove = null
  plan.value.onmouseup = null

  plan.value.touchmove = null
  plan.value.touchcancel = null
  plan.value.touchend = null
}
const move=(e)=>{
  if(/touch/i.test(e.type)){
    coords.value.x = e.changedTouches[0].pageX
    coords.value.y = e.changedTouches[0].pageY
  }
  if(/mouse/i.test(e.type)){
    coords.value.x = e.pageX
    coords.value.y = e.pageY
  }
  
  
  urovenEl.value.style.transform = ` translateX(${ coords.value.left + coords.value.x - coords.value.xx}px) translateY(${ coords.value.top + coords.value.y - coords.value.yy}px)  scale(${size.value})`
}
const zoomIn = ()=>{
  if(size.value < 2){

    size.value += 0.5
    urovenEl.value.style.transform = ` ${urovenEl.value.style.transform.replace(/scale\((\d*|(\d*\.\d*))\)/gi,'')} scale(${size.value})`
  }
  
}
const zoomOut = ()=>{
  if(size.value > 0.5){
    size.value -= 0.5
    urovenEl.value.style.transform = ` ${urovenEl.value.style.transform.replace(/scale\((\d*|(\d*\.\d*))\)/gi,'')}  scale(${size.value})`
  }
  
}

onMounted(() => getKladovki());
// https://kladovki.aisrb.ru/api/list.php?section=1
</script>
<style lang="scss" scoped>
.kladovki {
  height: calc(100vh - 88px - 81px);
}
.plan::-webkit-scrollbar {
  display: none;
}
</style>
