<template>
  <NavBar/>
  <router-view/>
  <BottomBar/>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import NavBar from "@/views/NavBar.vue";
import BottomBar from "@/views/BottomBar.vue";

export default defineComponent({
  components: {
    NavBar,
    BottomBar
  },
  setup() {
    
    return {

    };
  },
});
</script>
<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video, input, textarea {
  margin: 0;
	padding: 0;
  box-sizing: border-box;
}
h1, h2, h3, h4, h5, h6, p, b, u, i, ul, li, input, a, button, textarea {
  font-family: 'Pretendard' !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font: inherit;
  line-height: 1.4em;
  /* font-size: 100%; */
}
:root{

}
#app {
  /* display: flex;
  align-items: center;
  justify-content: center; */
  width: 100%;
}

/* scroll */
.my-scroll::-webkit-scrollbar {
  width: 0.5vw;
  min-width: 6px;
}

.my-scroll::-webkit-scrollbar-track {
  background-color: unset;
  border-radius: var(--border-radius10);
}

.my-scroll::-webkit-scrollbar-thumb {
  border-radius: var(--border-radius10);
  background-clip: padding-box;
  border: 0.3vmin solid transparent;
  background-color: var(--gray-300);
}

.my-scroll.dark::-webkit-scrollbar-thumb {
  /* background-color: var(--gray-700); */
}
/* scroll */

/* font-size */
:root{
  --font12: 12px;
  --font13: 13px;
  --font14: 14px;
  --font15: 15px;
  --font16: 16px;
  --font17: 17px;
  --font18: 18px;
  --font20: 20px;
  --font22: 22px;
  --font25: 25px;
  --font30: 30px;
}

/* color */
:root{
  --point-color1: #164863;
  --point-color2: #427D9D;
  --point-color3: #9BBEC8;
  --point-color4: #DDF2FD;
  --point-color4-op: rgba(221, 242, 253, 0.4);
  --gray: #949494;
}
.container{
  margin: 0 auto;
  min-width: 1024px;
  width: 100%;
}

@media (min-width: 1024px){
  .container{
    max-width: 1024px;
  }
}
@media (min-width: 1536px){
  .container{
    max-width: 1536px;
  }
}
</style>
