<template>
    <div class="home">
        <video autoplay loop muted class="bg-video">
            <source src="../assets/videos/background.mp4" type="video/mp4">
        </video>
        <div class="content">
            <h1>Jakarta</h1>
            <p>I'm a <vueWriter style="display: inline;" :array="arrayKetikan" /></p>
            <a href="">Explore</a>
        </div>
        <div class="fixed-wrapper">
            <div class="fixed-block block-left">
                <ul class="list-unstyled language-list">
                    <li><a href="" class="single-language">ENG</a></li>
                    <li><a href="" class="single-language">IDN</a></li>
                </ul>
            </div>
            <div class="fixed-block block-right">
                <ul class="list-unstyled social-icons">
                    <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-github"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
    let arrayKetikan = ['Handsome', 'Tampan']
</script>

<style lang="scss">
    @import '../assets/scss/home.scss'
</style>