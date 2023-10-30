<template>
  <section class="tw-bg-white ">
    <div class="wrapper tw-py-12 lg:tw-py-48 tw-h-full">
      <div class=" tw-grid tw-gap-24 tw-mb-24  lg:tw-flex lg:tw-justify-between lg:tw-items-center"> 
        <h1
          class="tw-text-primary tw-text-[32px] tw-leading-[38.4px] tw-font-bold">
          Паркинг
        </h1>
        <div class="tw-flex tw-gap-12">
          <button  class=" tw-w-full tw-text-sm tw-font-medium tw-py-12 tw-px-10 lg:tw-py-6 " :class="uroven === 1 ? 'tw-bg-[#58AA46]': 'tw-bg-[#D7D7D7]'" @click="chooseUroven(1)">
            Уровень 1
          </button>
          <button  class=" tw-w-full tw-text-sm tw-font-medium tw-py-12 tw-px-10 lg:tw-py-6 " :class="uroven === 2 ? 'tw-bg-[#58AA46]': 'tw-bg-[#D7D7D7]'" @click="chooseUroven(2)">
            Уровень 2
          </button>
        </div>
      </div>
      


      <div
        class="tw-grid tw-grid-rows-[1fr_auto] tw-overflow-hidden tw-gap-6 tw-relative "
        v-if="parkings.length > 0"
        >
        <div
          class="tw-relative tw-mb-10 lg:tw-mb-48 tw-py-48 tw-px-25 lg:tw-px-0 tw-overflow-hidden tw-h-full tw-max-h-[50vh] lg:tw-max-h-[55vh]">
          <div
            class="tw-absolute tw-text-secondary tw-left-1/2 tw-top-0 -tw-translate-x-1/2">
            Двор
          </div>
          
          <div
            class="tw-absolute tw-text-secondary tw-left-1/2 tw-bottom-0 -tw-translate-x-1/2">
            ул. Кремлёвская
            
          </div>
          
          <div class="tw-relative lg:tw-h-full tw-overflow-hidden plan  lg:tw-mx-40" ref="plan" @mousedown="down" @mouseleave="leave" @mouseup="leave" @touchmove="move" @touchstart="down" @touchcancel="leave" @touchend="leave">
            <div ref="urovenEl" >

              <svg    v-if="uroven === 1" viewBox="0 0 1521 698" class="tw-max-w-[1057px] tw-min-h-[35vh] tw-h-full tw-max-h-[50vh] tw-mx-auto" xmlns="http://www.w3.org/2000/svg">
                <g>
    
                  <g
                    :ref="setItemRef"
                    v-for="item in [...parkings].filter(el=>el.name.split('-')[0] == uroven)"
                    v-html="item.path"
                    :fill="statusList[item.status]"></g>
                    
                  <image  href="@/assets/images/parking/parking1.png" height="698" width="1521"  />
                </g>
                  
                </svg>
                <svg v-if="uroven === 2" class="tw-max-w-[1057px] tw-min-h-[35vh] tw-h-full tw-max-h-[50vh] tw-mx-auto" viewBox="0 0 1522 698" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g
                    :ref="setItemRef"
                    v-for="item in [...parkings].filter(el=>el.name.split('-')[0] == uroven)"
                    v-html="item.path"
                    :fill="statusList[item.status]"></g>
                    
                  <image  href="@/assets/images/parking/parking2.png" height="698" width="1522"  />
                </svg>
            </div>


            
            



          </div>
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
            <div class="tw-w-14 tw-h-14 tw-bg-[#676767] tw-rounded-full"></div>
            <div class="tw-text-secondary">парковка продана</div>
          </div>
          <div class="tw-flex tw-items-center tw-gap-10">
            <div class="tw-w-14 tw-h-14 tw-bg-[#FFF] tw-border tw-border-[#DFDFDF] tw-rounded-full"></div>
            <div class="tw-text-secondary">парковка свободна</div>
          </div>
          <div class="tw-flex tw-items-center tw-gap-10">
            <div class="tw-w-14 tw-h-14 tw-bg-[#3D80E4] tw-rounded-full"></div>
            <div class="tw-text-secondary">парковка забронирована</div>
          </div>
        </div>
      </div>
      <!-- <div v-else>
        Загрузка
        </div> -->
    </div>
  </section>
</template>
<script setup>
import ky from "ky";
import { onMounted, ref, onBeforeUpdate , onUpdated, computed} from "vue";
const parkings = ref([]);
const parkingsPos = ref([])
const uroven = ref(1)
let itemRefs = []
const setItemRef = el=>{
  if(el){
    itemRefs.push(el)
    // console.log(el.childNodes[0].getAttribute('x'));
    // console.log(el.childNodes[0].getAttribute('y'));
    // console.log(el.childNodes[0].getBoundingClientRect());
  }
}
const isMove = ref(false)
const coords = ref({
  left:0,
  top:0,
  xx:0,
  yy:0,
  x:0,
  y:0,
})
const size = ref(1)
const statusList = {
  Свободен: "#ffffff",
  Забронирован: "#3D80E4",
  Продан: "#676767",
};
const api = ky.create({ prefixUrl: "https://kladovki.aisrb.ru/api" });
const getParkings = async () => {
  try {
    const res = await api("list.php?section=3").json();
    // console.log(res);
    
    parkings.value = res;
  } catch (e) {
    throw e;
  }
};
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
const chooseUroven = (id)=>{
  urovenEl.value.style.transform = '';
  size.value = 1;
  coords.value = {
    left:0,
    top:0,
    xx:0,
    yy:0,
    x:0,
    y:0
  }
  uroven.value = id

}
onBeforeUpdate(() => {
      itemRefs = []
    })
onUpdated(() => {
  // [...itemRefs].forEach(el=>(console.log(el),console.log(el.getBoundingClientRect())));
  // console.log(itemRefs.forEach(el=>el.childNodes[0]))
})
onMounted(() => getParkings());
// https://kladovki.aisrb.ru/api/list.php?section=1
</script>
<style lang="scss" scoped>
// .plan::-webkit-scrollbar {
//   display: none;
// }

</style>
