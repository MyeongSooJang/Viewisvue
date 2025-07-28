<template>
  <div>
    <h3>레이아웃</h3>
    <header>
      <slot name="header">기본header</slot>
    </header>
    <section>
      <aside>
        <slot name="aside">aside메뉴</slot>
      </aside>
      <article>
        <slot name="article">article내용</slot>
      </article>
    </section>
    <footer>
      <slot name="footer">기본footer</slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "layoutComponent",
};
</script>

<style>
header {
  width: 100%;
  display: flex;
  height: 80px;
  background-color: lightcoral;
}
section {
  width: 100%;
  height: 500px;
  display: flex;
  background-color: lightgray;
}
section > aside {
  width: 25%;
  background-color: lightblue;
}
section > article {
  width: 75%;
  background-color: lightgreen;
}
footer {
  width: 100%;
  height: 80px;
  background-color: lightgoldenrodyellow;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
