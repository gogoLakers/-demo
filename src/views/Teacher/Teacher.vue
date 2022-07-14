<template>
  <div>
    <h1>Teacher</h1>
    <Select :arr="arr" />
  </div>
</template>

<script>
export default {
  name: "Teacher",
  data() {
    return {
      arr: [
        { name: "education", msg: "教学" },
        { name: "salary", msg: "工资" },
      ],
    };
  },
};
</script>

<style>
</style>