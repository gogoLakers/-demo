<template>
  <div>
    <h1>HeadMaster</h1>
    <Select :arr="arr" />
  </div>
</template>

<script>
export default {
  name: "HeadMaster",
  data() {
    return {
      arr: [
        { name: "school", msg: "学校" },
        { name: "money", msg: "财务" },
      ],
    };
  },
};
</script>
