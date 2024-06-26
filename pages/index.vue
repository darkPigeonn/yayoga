
<template>
    <div>
        <div class="section-navbar">
            <div class="navbar-branding">
                <img class="logo" src="~/assets/images/logoyayasan.png" alt="Nuxt Logo">
                <span>Yayasan <br> Yohannes Gabriel</span>
            </div>
            <div class="navbar-menu">
                <ul>
                    <li>
                        <NuxtLink to="/" class="active">Beranda</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">Profil</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">Galeri</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">Artikel</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">Unit</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">PPDB</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="hero">
            <div class="hero-item">
                <img src="~/assets/images/hero.png" alt="Hero Image">
            </div>
        </div>
        <div class="greeting">
            <div class="left-side">
                <h1>Selamat Datang</h1>
                <h1>di Yayasan Yohannes Gabriel</h1>
                <p>Kami dengan tulus menyambut Anda di tempat di mana pendidikan dan pengembangan potensi menjadi prioritas utama. Melalui berbagai program dan inisiatif kami, kami bertekad untuk memberikan akses pendidikan berkualitas</p>
            </div>
            <div class="right-side">
                <img src="~/assets/images/8.png" alt="Greeting Image">
            </div>
        </div>
    </div>
</template>

