<template>
  <div>
    <b-navbar
      fixed="bottom"
      type="dark"
      variant="green-400"
      class="border-0 py-3 bottom-nav"
    >
      <b-navbar-nav class="m-auto">
        <b-nav-item to="/" class="px-3"><IconsHome /></b-nav-item>
        <b-nav-item to="/notifications" class="px-3"><IconsBell /></b-nav-item>
        <b-nav-item class="px-3">
          <lazy-add-new-overlay> <IconsPlus /> </lazy-add-new-overlay
        ></b-nav-item>
        <b-nav-item to="/contacts" class="px-3"><IconsPhone /></b-nav-item>
        <b-nav-item to="/profile" class="px-3"><IconsUser /></b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<style scoped>
.navbar {
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}
svg {
  margin-top: -5px;
}
li {
  list-style-type: none;
}
a {
  color: rgba(0, 0, 0, 0.5);
}
</style>
