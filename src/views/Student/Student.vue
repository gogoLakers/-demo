<template>
  <div>
    <h1>Student</h1>
    <Select :arr="arr"> </Select>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      arr: [
        { name: "grade", msg: "成绩" },
        { name: "credit", msg: "学分" },
      ],
    };
  },
};
</script>

<style>
</style>