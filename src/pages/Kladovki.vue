<template>
  <section class="tw-bg-white kladovki">
    <div class="wrapper tw-py-48 tw-h-full">
      <h1
        class="tw-text-primary tw-text-[32px] tw-leading-[38.4px] tw-font-bold">
        Кладовые, Литер 1
      </h1>
      <div
        class="tw-grid tw-grid-rows-[1fr_auto] tw-overflow-hidden tw-h-full"
        v-if="kladovki.length > 0">
        <div
          class="tw-relative tw-mb-10 lg:tw-mb-48 tw-py-48 tw-px-25 lg:tw-px-0 tw-overflow-hidden">
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
          <div class="tw-relative tw-overflow-scroll tw-h-full">
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
              <!-- 0AB81B -->
              <!-- D7D7D7 -->
              <!-- FF6B00 -->
              <!-- <rect
                opacity="0.5"
                x="351.483"
                y="7.04468"
                width="91.2197"
                height="74.9298"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="350.845"
                y="127.445"
                width="36.3603"
                height="60.8404"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="350.845"
                y="192.768"
                width="36.3603"
                height="64.683"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="391.033"
                y="127.445"
                width="56.1352"
                height="60.8404"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="391.033"
                y="192.768"
                width="56.1352"
                height="64.683"
                fill="#D7D7D7" />
              <rect
                opacity="0.5"
                x="451.633"
                y="127.445"
                width="72.7206"
                height="60.8404"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="451.633"
                y="192.768"
                width="72.7206"
                height="64.683"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="572.834"
                y="202.374"
                width="81.0133"
                height="47.3915"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="704.241"
                y="202.374"
                width="96.9608"
                height="53.1553"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="572.834"
                y="254.249"
                width="81.0133"
                height="40.9872"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="704.241"
                y="258.732"
                width="96.9608"
                height="51.8745"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="239.85"
                y="384.255"
                width="47.2046"
                height="78.1319"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="239.85"
                y="512.34"
                width="49.7562"
                height="78.7723"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="293.434"
                y="512.34"
                width="54.2215"
                height="78.7723"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="352.121"
                y="512.34"
                width="56.1352"
                height="78.7723"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="412.721"
                y="512.34"
                width="56.7731"
                height="78.7723"
                fill="#0AB81B" />
              <path
                opacity="0.5"
                d="M473.96 512.34H535.836V540.199H531.324V591.113H473.96V512.34Z"
                fill="#D7D7D7" />
              <path
                opacity="0.5"
                d="M603.453 512.34H667.243V535.716H662.778V591.113H603.453V512.34Z"
                fill="#D7D7D7" />
              <path
                opacity="0.5"
                d="M731.671 512.34H791.634V535.716H787.168V591.113H731.671V512.34Z"
                fill="#0AB81B" />
              <path
                opacity="0.5"
                d="M846.493 512.34H898.163V535.716H893.698V591.113H846.493V512.34Z"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="540.301"
                y="512.34"
                width="58.6868"
                height="78.7723"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="671.708"
                y="512.34"
                width="56.1352"
                height="78.7723"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="795.461"
                y="512.34"
                width="47.2046"
                height="78.7723"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="901.99"
                y="512.34"
                width="44.653"
                height="78.7723"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="950.471"
                y="512.34"
                width="47.2046"
                height="78.7723"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="290.882"
                y="384.255"
                width="47.8425"
                height="78.1319"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="342.552"
                y="384.255"
                width="46.5667"
                height="78.1319"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="392.946"
                y="384.255"
                width="47.2046"
                height="78.1319"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="443.978"
                y="384.255"
                width="47.2046"
                height="78.1319"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="495.01"
                y="384.255"
                width="47.8425"
                height="78.1319"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="546.68"
                y="384.255"
                width="47.2046"
                height="78.1319"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="597.712"
                y="384.255"
                width="56.7731"
                height="78.1319"
                fill="#FF6B00" />
              <rect
                opacity="0.5"
                x="703.604"
                y="359.919"
                width="73.3585"
                height="50.5936"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="704.241"
                y="414.355"
                width="73.3585"
                height="47.3915"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="782.065"
                y="359.919"
                width="68.8932"
                height="50.5936"
                fill="#FF6B00" />
              <rect
                opacity="0.5"
                x="782.065"
                y="414.355"
                width="68.8932"
                height="47.3915"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="856.062"
                y="359.919"
                width="72.7206"
                height="50.5936"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="856.062"
                y="414.355"
                width="72.7206"
                height="48.0319"
                fill="#0AB81B" />
              <path
                opacity="0.5"
                d="M933.247 462.387H1016.17L933.247 362.481V462.387Z"
                fill="#0AB81B" />
              <path
                opacity="0.5"
                d="M704.241 199.172H796.737L704.241 89.0192V199.172Z"
                fill="#0AB81B" />
              <path
                opacity="0.5"
                d="M805.03 210.7V310.606H857.975V306.764H885.405L805.03 210.7Z"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="447.168"
                y="7.04468"
                width="60.6005"
                height="74.9298"
                fill="#0AB81B" />
              <rect
                opacity="0.5"
                x="512.234"
                y="7.04468"
                width="56.7731"
                height="74.9298"
                fill="#0AB81B" /> -->
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
          <!-- <img
            class="tw-max-w-[1057px] tw-max-h-[50vh] tw-mx-auto"
            src="@/assets/images/kladovki/kladovki.png" /> -->
        </div>
        <div
          class="tw-flex tw-justify-center tw-flex-wrap tw-gap-16 lg:tw-gap-24">
          <div class="tw-flex tw-items-center tw-gap-10">
            <div class="tw-w-14 tw-h-14 tw-bg-[#D7D7D7] tw-rounded-full"></div>
            <div class="tw-text-secondary">кладовая продана</div>
          </div>
          <div class="tw-flex tw-items-center tw-gap-10">
            <div class="tw-w-14 tw-h-14 tw-bg-[#0AB81B] tw-rounded-full"></div>
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
  Свободен: "#0AB81B",
  Забронирован: "#FF6B00",
  Продан: "#D7D7D7",
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
onMounted(() => getKladovki());
// https://kladovki.aisrb.ru/api/list.php?section=1
</script>
<style lang="scss" scoped>
.kladovki {
  height: calc(100vh - 88px - 81px);
}
</style>
