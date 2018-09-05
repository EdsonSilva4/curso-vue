<template>
<div class="hello">
  <div class="tabs">
    <ul>
      <li>
        <router-link to="/home"> Home</router-link>
      </li>
      <li>
        <router-link to="/categorias"> Categorias</router-link>
      </li>
      <li>
        <router-link to="/productos"> Productos</router-link>
      </li>
    </ul>

    </ul>
  </div>


</div>
</template>

<script>
export default {
  name: 'appHeader',
  data() {
    return {
      msg: 'Holaaaaaa'
    }
  }
}
</script>
