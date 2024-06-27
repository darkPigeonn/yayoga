
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
        <section class="about">
            <div class="flex  mx-5 px-5 space-x-9">
                <img src="~/assets/images/13.png" alt="About Image">
                <div class="text">
                    <h1>1925 - Sekarang</h1>
                    <p>Yayasan Yohannes Gabriel berdiri sejak tahun 1925 dengan tujuan utama meningkatkan akses dan kualitas pendidikan untuk semua. Melalui program - programnya, yayasan telah memberikan kontribusi besar dalam menciptakan lingkungan belajar yang inklusif dan mempersiapkan generasi muda untuk masa depan yang cerah dan berdaya saing. </p>
                </div>
            </div>
        </section>

        <section class="vt">
            <div class="vt-youtube">

                <div class="icon-wrapper">
                    <div class="icon">
                        <img src="~/assets/images/iconplay.png" alt="Youtube Icon">
                    </div>
                </div>
            </div>
        </section>

        <section class="events">
            <div class="flex mx-5 px-5 space-x-9">
                <div class="calendar">
                    <h2 class="text-xl">Kalender Akademik</h2>
                    <div class="calendar-wrapper">
                       <calendar />
                    </div>
                </div>
                <div class="event">
                    <h1>Agenda : </h1>
                    <div class="listEvent flex flex-column items-center justify-between mb-5">
                        <div class="event-date national">
                            9 Mei
                        </div>
                        <div class="event-item">
                            Kenaikan Yesus Kristus
                        </div>
                    </div>
                    <div class="listEvent flex flex-column items-center justify-between mb-5">
                        <div class="event-date national">
                            9 Mei
                        </div>
                        <div class="event-item">
                            Kenaikan Yesus Kristus
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="news">
            <div class="flex mx-5 justify-center px-5 space-x-9">
                <img src="~/assets/images/38.png" alt="News Image">
                <img src="~/assets/images/39.png" alt="News Image">
                <img src="~/assets/images/40.png" alt="News Image">
            </div>
            <div class="action mt-8">
                <button class="px-5 py-2 text-white rounded-full flex space-x-5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 " viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>

                    Follow for more</button>
            </div>
        </section>

        <section class="footer">
            <div class="flex mx-5 px-5 space-x-5 mt-10">
                <div class="logo">
                    <img src="~/assets/images/logoyayasan.png" alt="Logo Image">
                </div>
                <div class="brand">
                    <span>Yayasan <br> Yohannes Gabriel</span>
                    <div class="motto">
                        Caritas Christi Urget Nos, Ut Omnes Unum Sint
                    </div>
                    <div class="address">
                        <div class="flex items-center">
                              <Icon name="uil:map-marker-alt" color="black" />
                            <p>Jalan M.H Thamrin No. 29-31, Kota Surabaya - 60264</p>
                        </div>
                        <div class="flex items-center">
                            <Icon name="uil:phone" color="white" />
                            <p>(031) 9953-5811</p>
                            <Icon name="uil:whatsapp" color="black" />
                            <p>+62 822-2822-9010</p>
                        </div>
                        <div class="flex items-center">
                            <Icon name="uil:envelope" mode="svg" fill="white" style="fill: white;" />
                            <p>sekretariat@yohannesgabriel.org</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

