export function renderHeader(activeMenu = '') {
    return `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
    </style>

    <header class="bg-[#74A12E] text-white p-4 shadow-md sticky top-0 z-50 font-jakarta transition-all duration-300">
        <div class="max-w-6xl mx-auto flex justify-between items-center">
            <a href="index.html" class="text-xl font-extrabold flex items-center gap-2 hover:opacity-80 transition-opacity">
                <span class="tracking-tight">Arsip Desa Manik Maraja</span>
            </a>

            <nav class="hidden md:flex items-center space-x-8 text-sm font-medium">
                <a href="index.html" class="hover:text-[#e9f2df] transition-colors ${activeMenu === 'beranda' ? 'text-white font-bold border-b-2 border-white pb-1' : 'text-white/90'}">
                    Beranda
                </a>

                <div class="relative group">
                    <button class="flex items-center gap-1 hover:text-[#e9f2df] transition-colors focus:outline-none py-2 ${activeMenu === 'profil' ? 'text-white font-bold border-b-2 border-white pb-1' : 'text-white/90'}">
                        <span>Profil Desa</span>
                        <svg class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="absolute left-0 mt-1 w-52 bg-white text-gray-800 rounded-2xl shadow-xl py-3 hidden group-hover:block transition-all border border-gray-100">
                        <a href="sejarah.html" class="block px-5 py-2.5 hover:bg-[#f6f9f2] hover:text-[#74A12E] transition-colors font-semibold">Sejarah Desa</a>
                        <a href="visi-misi.html" class="block px-5 py-2.5 hover:bg-[#f6f9f2] hover:text-[#74A12E] transition-colors font-semibold">Visi dan Misi</a>
                        <a href="status-desa.html" class="block px-5 py-2.5 hover:bg-[#f6f9f2] hover:text-[#74A12E] transition-colors font-semibold">Status Desa</a>
                        <a href="tradisi-adat.html" class="block px-5 py-2.5 hover:bg-[#f6f9f2] hover:text-[#74A12E] transition-colors font-semibold">Tradisi Adat</a>
                    </div>
                </div>

                <a href="dusun-1.html" class="hover:text-[#e9f2df] transition-colors ${activeMenu === 'dusun1' ? 'text-white font-bold border-b-2 border-white pb-1' : 'text-white/90'}">
                    Dusun 1
                </a>

                <a href="peta.html" class="hover:text-[#e9f2df] transition-colors ${activeMenu === 'peta' ? 'text-white font-bold border-b-2 border-white pb-1' : 'text-white/90'}">
                    Peta
                </a>

                <a href="umkm.html" class="hover:text-[#e9f2df] transition-colors ${activeMenu === 'umkm' ? 'text-white font-bold border-b-2 border-white pb-1' : 'text-white/90'}">
                    UMKM Desa
                </a>

                <a href="galeri-kkn.html" class="hover:text-[#e9f2df] transition-colors ${activeMenu === 'kkn' ? 'text-white font-bold border-b-2 border-white pb-1' : 'text-white/90'}">
                    Galeri KKN
                </a>
            </nav>

            <button id="btn-menu-mobile" class="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>

        <div id="menu-mobile" class="hidden md:hidden mt-4 pt-4 border-t border-white/20 flex flex-col space-y-1">
            <a href="index.html" class="py-3 px-4 rounded-xl hover:bg-white/10 transition-colors font-medium">Beranda</a>
            <div class="pl-4 border-l-2 border-white/30 my-2 space-y-1 mx-2">
                <span class="text-[10px] text-white/70 font-extrabold block uppercase tracking-widest mb-2 mt-1">Profil Desa</span>
                <a href="sejarah.html" class="block py-2.5 px-3 rounded-lg hover:bg-white/10 text-sm font-medium transition-colors">Sejarah Desa</a>
                <a href="visi-misi.html" class="block py-2.5 px-3 rounded-lg hover:bg-white/10 text-sm font-medium transition-colors">Visi dan Misi</a>
                <a href="status-desa.html" class="block py-2.5 px-3 rounded-lg hover:bg-white/10 text-sm font-medium transition-colors">Status Desa</a>
                <a href="tradisi-adat.html" class="block py-2.5 px-3 rounded-lg hover:bg-white/10 text-sm font-medium transition-colors">Tradisi Adat</a>
            </div>
            <a href="dusun-1.html" class="py-3 px-4 rounded-xl hover:bg-white/10 transition-colors font-medium">Dusun 1</a>
            <a href="peta.html" class="py-3 px-4 rounded-xl hover:bg-white/10 transition-colors font-medium">Peta</a>
            <a href="umkm.html" class="py-3 px-4 rounded-xl hover:bg-white/10 transition-colors font-medium">UMKM Desa</a>
            <a href="galeri-kkn.html" class="py-3 px-4 rounded-xl hover:bg-white/10 transition-colors font-medium">Galeri KKN</a>
        </div>
    </header>
    `;
}

export function initHeaderEvents() {
    const btnMobile = document.getElementById('btn-menu-mobile');
    const menuMobile = document.getElementById('menu-mobile');

    if (btnMobile && menuMobile) {
        btnMobile.addEventListener('click', () => {
            menuMobile.classList.toggle('hidden');
        });
    }
}