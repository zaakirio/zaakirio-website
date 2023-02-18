<script>
import InfoColumn from "../components/InfoColumn.vue";
import DisplayColumn from "../components/DisplayColumn.vue";
export default {
  title: "Home",
  emits: ["hoverIn", "hoverOut"],
  components: {
    InfoColumn,
    DisplayColumn,
  },
};
</script>

<template>
  <div class="primary-grid">
    <DisplayColumn @hoverIn="$emit('hoverIn')" @hoverOut="$emit('hoverOut')" />
    <InfoColumn @hoverIn="$emit('hoverIn')" @hoverOut="$emit('hoverOut')" />
  </div>
</template>

<style>
.primary-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  width: 100%;
}

@media only screen and (max-width: 1070px) {
  .primary-grid {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
}

@media only screen and (max-width: 540px) {
  .primary-grid {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
}
</style>
