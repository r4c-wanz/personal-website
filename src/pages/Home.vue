<template>
    <div class="home">
        <video autoplay loop muted class="bg-video">
            <source src="../assets/videos/video.mp4" type="video/mp4">
        </video>
        <div class="content">
            <h1>Jakpus</h1>
            <p>I'm a <vueWriter style="display: inline;" :array="arrayKetikan" /></p>
            <a href="">Explore</a>
        </div>
    </div>
</template>

<script setup>
    let arrayKetikan = ['Handsome', 'Tampan']
</script>

<style lang="scss">
    @import '../assets/scss/home.scss'
</style>