<template>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <router-link to="/" class="navbar-brand" >
                <img src="../assets/images/logo.png" alt="Logo" class="w-25">
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/resume" class="nav-link">Resume</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/portfolio" class="nav-link">Portfolio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/blog" class="nav-link">Blog</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="nav-link">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
    nav {
        background: transparent;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 23px 50px;
        z-index: 2;
        .nav-item:not(.last-child) .nav-link {
            margin-right: 32px;
        }
        .nav-link, .navbar-brand {
            color: #fff;
        }
        .active.exact-active-link.nav-link {
            color: #fff;
            font-weight: bold;
        }
    }
</style>