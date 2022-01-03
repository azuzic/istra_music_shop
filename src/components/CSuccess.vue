<template>
    <div
    class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
    role="alert">
    <strong class="font-bold">{{ msg1 }}</strong>
    <span class="block sm:inline"
    >{{ msg2 }}</span
    >
    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg
        class="fill-current h-6 w-6 text-red-500"
        role="button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
    ></svg>
    </span>
</div>
</template>
<script>
export default {
  name: "CSuccess",
  props: {
    msg1: String,
    msg2: String,
  },
};
</script>