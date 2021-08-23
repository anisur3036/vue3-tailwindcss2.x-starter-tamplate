<template>
  <div>
    <h2>{{ $store.state.count }}</h2>
    <button type="button" @click.prevent="$store.state.count++">
      Increment
    </button>
  </div>
</template>
