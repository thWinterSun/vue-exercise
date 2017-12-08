<template lang="html">
    <div class="">
        <p>{{ $store.state.count }}</p>
        <p>
            <button type="button" name="button" @click="$store.commit('jia', {a:10})">+</button>
            <button type="button" name="button" @click="$store.commit('jian')">-</button>
            
        </p>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
