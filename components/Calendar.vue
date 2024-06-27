<template>
    <div class="flex flex-col">
        <div class="text-xl text-left font-bold">{{ formatDate(today) }}</div>
        <div class="text-center bg-white shadow-md rounded-lg">
            <!-- Daftar Hari -->
            <div class="grid grid-cols-7 gap-2 mb-4 px-6">
                <div v-for="day in hari" :key="day" class="p-2 rounded font-bold">
                    <div :class="day === 'Mi' ? 'text-red-500' : ''">{{ day }}</div>
                </div>
            </div>
            <!-- Tanggal -->
            <div class="grid grid-cols-7 gap-2 mb-4 px-6">
                <div v-for="(tanggal, index) in kalender" :key="index" class="p-2">
                    <div v-if="tanggal">{{ tanggal }}</div>
                </div>
            </div>
            <!-- Bulan -->
            <div class="calendar-month">
                <div class="flex justify-center items-center text-xl font-bold space-x-2">
                    <button @click="prevMonth" class="focus:outline-none">
                        <svg class="w-4 h-4 bg-yellow-500 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                    <span>{{ bulanSekarang }}</span>
                    <button @click="nextMonth" class="focus:outline-none">
                        <svg class="w-4 h-4 bg-yellow-500 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hari: ["Mi", "Se", "Se", "Ra", "Ka", "Ju", "Sa"],
            bulan: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
            bulanSekarang: '',
            kalender: [],
            today: new Date(),
            tahunSekarang: new Date().getFullYear()
        };
    },
    mounted() {
        const tanggalSekarang = new Date();
        this.bulanSekarang = this.bulan[tanggalSekarang.getMonth()];
        this.generateKalender(tanggalSekarang.getMonth(), tanggalSekarang.getFullYear());
    },
    methods: {
        isDateToday(tanggal) {
            return tanggal === this.today.getDate();
        },
        formatDate(date) {
            return `${date.getDate()} ${this.bulan[date.getMonth()]} ${date.getFullYear()}`;
        },
        generateKalender(month, year) {
            this.kalender = [];

            const jumlahHari = new Date(year, month + 1, 0).getDate();
            const hariPertama = new Date(year, month, 1).getDay();

            for (let i = 0; i < jumlahHari; i++) {
                this.kalender.push(i + 1);
            }
        },
        prevMonth() {
            let month = this.bulan.indexOf(this.bulanSekarang) - 1;
            let year = this.tahunSekarang;

            if (month < 0) {
                month = 11;
                year--;
            }

            this.bulanSekarang = this.bulan[month];
            this.tahunSekarang = year;
            this.generateKalender(month, year);
        },
        nextMonth() {
            let month = this.bulan.indexOf(this.bulanSekarang) + 1;
            let year = this.tahunSekarang;

            if (month > 11) {
                month = 0;
                year++;
            }

            this.bulanSekarang = this.bulan[month];
            this.tahunSekarang = year;
            this.generateKalender(month, year);
        }
    }
};
</script>

<style scoped>
</style>
