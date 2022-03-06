<script setup></script>

<script setup>
import userAuth from "../composable/useAuth";
const { isAuthenticated, user } = userAuth();
</script>

<template>
  <div
    class="
      flex flex-col
      items-center
      justify-center
      space-y-16
      min-h-screen-nonav
    "
  >
    <h2
      v-if="!isAuthenticated"
      class="
        text-6xl
        tracking-tighter
        font-bold
        text-yellow-700
        font-mono
        text-center
      "
    >
      <h2>Welcome</h2>
      <br />
      <img src="../assets/welcome.png" alt="Hello" />
    </h2>
    <h2
      v-else
      class="
        text-6xl
        tracking-tighter
        font-bold
        text-yellow-700
        font-mono
        text-center
      "
    >
      <h2>
        <p>Welcome {{ user }}...</p>
      </h2>
      <br />
      <img src="../assets/welcome.png" alt="Hello" />
    </h2>
  </div>
</template> 