<template>
  <div class="aside-menu">
    <ul>
      <li v-for="(v, i) in menu" :key="`${i}_${v}`">
        <div class="menu-content">
          <img
            :src="v.src === '' ? defaultImg : `/${v.src}`"
            width="30px"
            hegith="30px"
          />
          &nbsp;
          <h3>{{ v.title }}</h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import defaultImg from "@/assets/images/menu-content.jpg";
export default {
  name: "asideMenuComponent",
  props: {
    menu: {
      type: Object,
      default: [
        { title: "메뉴", src: "" },
        { title: "메뉴1", src: "" },
        { title: "메뉴2", src: "" },
      ],
      required: true,
    },
  },
  data() {
    return {
      defaultImg: defaultImg,
    };
  },
};
</script>

<style scoped>
.aside-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 500px;
}
.aside-menu > ul {
  list-style-type: none;
  padding: 0;
}
.aside-menu > ul > li {
  margin: 0;
  margin-bottom: 10%;
  text-align: center;
}
.menu-content {
  display: flex;
  align-items: center;
  justify-self: center;
}
.menu-content > img {
  border-radius: 50px;
}
</style>
