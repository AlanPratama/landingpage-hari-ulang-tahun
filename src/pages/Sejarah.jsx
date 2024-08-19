import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Sejarah = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, 
      once: false,
    });
  }, []);

  
  return (
    <div className="px-10 pb-10 bg-center bg-cover bg-fixed" style={{ backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/016/074/881/non_2x/indonesian-map-illustration-vector.jpg)" }}>
      <div className="pt-24 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-300 before:to-transparent">

        <div data-aos="fade-left" className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fill-rule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>{" "}
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex flex-wrap items-center justify-between space-x-2 mb-1">
              <div className="text-md font-bold text-slate-900">
                Perlawanan Awal terhadap Portugis dan VOC
              </div>
              <time className="font-caveat font-medium text-indigo-500">
                1500-an - 1800-an
              </time>
            </div>
            <div className="text-slate-500">
              <img
                src="../../public/assets/perlawananVOC.png"
                alt="Perlawanan Awal terhadap Portugis dan VOC"
                className="w-full rounded-lg mb-3"
              />
              <b>1511</b>: Portugis mulai menguasai Malaka, yang menyebabkan
              perlawanan dari kerajaan-kerajaan di Nusantara seperti Kesultanan
              Aceh dan Demak.
              <br />
              <b>1602</b>: Didirikannya Vereenigde Oostindische Compagnie (VOC)
              oleh Belanda yang kemudian menjadi kekuatan kolonial utama di
              Nusantara. Berbagai perlawanan lokal muncul, termasuk dari Sultan
              Agung di Mataram dan Sultan Hasanuddin di Makassar.
            </div>
          </div>
        </div>

        <div data-aos="fade-right" className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fill-rule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>{" "}
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex flex-wrap items-center justify-between space-x-2 mb-1">
              <div className="text-md font-bold text-slate-900">
                Perang Aceh
              </div>
              <time className="font-caveat font-medium text-indigo-500">
                1873 - 1904
              </time>
            </div>
            <div className="text-slate-500">
              <img
                src="../../public/assets/perlawananAceh.png"
                alt="Perang Aceh (1873 - 1904)
"
                className="w-full rounded-lg mb-3"
              />
              Perang Aceh adalah salah satu perang terbesar dalam sejarah
              kolonial Belanda di Indonesia. Aceh melawan dengan gigih selama
              lebih dari tiga dekade hingga akhirnya jatuh ke tangan Belanda
              pada tahun 1904.
            </div>
          </div>
        </div>

        <div data-aos="fade-left" className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fill-rule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>{" "}
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex flex-wrap items-center justify-between space-x-2 mb-1">
              <div className="text-md font-bold text-slate-900">
                Perang Jawa
              </div>
              <time className="font-caveat font-medium text-indigo-500">
                1825 - 1830
              </time>
            </div>
            <div className="text-slate-500">
              <img
                src="../../public/assets/perlawananJawa.png"
                alt="Perang Jawa
"
                className="w-full rounded-lg mb-3"
              />
              Dipimpin oleh Pangeran Diponegoro, Perang Jawa merupakan
              perlawanan besar lainnya terhadap Belanda. Meski akhirnya kalah,
              perang ini menunjukkan semangat perlawanan yang kuat dari rakyat
              Jawa.
            </div>
          </div>
        </div>

        <div data-aos="fade-right" className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fill-rule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>{" "}
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex flex-wrap items-center justify-between space-x-2 mb-1">
              <div className="text-md font-bold text-slate-900">
                Perang Padri
              </div>
              <time className="font-caveat font-medium text-indigo-500">
                1821 - 1837
              </time>
            </div>
            <div className="text-slate-500">
              <img
                src="../../public/assets/perlawananPadri.png"
                alt="Perang Padri
"
                className="w-full rounded-lg mb-3"
              />
              Perang ini terjadi di Sumatra Barat antara kaum Padri yang
              dipimpin oleh Tuanku Imam Bonjol melawan Belanda. Meski pada
              akhirnya Padri kalah, perang ini memperlihatkan kekuatan
              perlawanan lokal.
            </div>
          </div>
        </div>

        <div data-aos="fade-left" className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fill-rule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>{" "}
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex flex-wrap items-center justify-between space-x-2 mb-1">
              <div className="text-md font-bold text-slate-900">
                Perang Bali dan Lombok
              </div>
              <time className="font-caveat font-medium text-indigo-500">
                1846 - 1908
              </time>
            </div>
            <div className="text-slate-500">
              <img
                src="../../public/assets/perlawananBaliLombok.png"
                alt="Perang Bali dan Lombok
"
                className="w-full rounded-lg mb-3"
              />
              Sejumlah perang terjadi di Bali dan Lombok dalam upaya Belanda
              untuk menguasai kedua pulau tersebut. Peperangan ini berakhir
              dengan jatuhnya kerajaan-kerajaan lokal dan dimulainya dominasi
              Belanda di wilayah ini.
            </div>
          </div>
        </div>

        <div data-aos="fade-right" className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fill-rule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>{" "}
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex flex-wrap items-center justify-between space-x-2 mb-1">
              <div className="text-md font-bold text-slate-900">
                Perang Banjar
              </div>
              <time className="font-caveat font-medium text-indigo-500">
                1859 - 1906
              </time>
            </div>
            <div className="text-slate-500">
              <img
                src="../../public/assets/perlawananBanjar.png"
                alt="Perang Banjar (1859 - 1906)

"
                className="w-full rounded-lg mb-3"
              />
              Perang ini terjadi di Kalimantan Selatan, di mana Kerajaan Banjar
              melawan Belanda. Perlawanan rakyat Banjar berlanjut selama
              bertahun-tahun hingga akhirnya dihentikan oleh Belanda.
            </div>
          </div>
        </div>

        <div data-aos="fade-left" className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fill-rule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>{" "}
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex flex-wrap items-center justify-between space-x-2 mb-1">
              <div className="text-md font-bold text-slate-900">
                Perang Kemerdekaan
              </div>
              <time className="font-caveat font-medium text-indigo-500">
                1945 - 1949
              </time>
            </div>
            <div className="text-slate-500">
              <img
                src="../../public/assets/perlawananKemerdekaan.png"
                alt="Perang Kemerdekaan (1945 - 1949)

"
                className="w-full rounded-lg mb-3"
              />
              <b>17 Agustus 1945</b>: Proklamasi Kemerdekaan Indonesia oleh
              Sukarno dan Hatta.
              <br />
              <b>1945 - 1949</b>: Perang kemerdekaan melawan upaya Belanda untuk
              kembali menjajah setelah kekalahan Jepang dalam Perang Dunia II.
              Peristiwa penting termasuk Pertempuran Surabaya (10 November
              1945), Agresi Militer Belanda I dan II, serta Diplomasi
              internasional yang melibatkan PBB.
              <br />
              <b>27 Desember 1949</b>: Belanda akhirnya mengakui kedaulatan
              Indonesia setelah Konferensi Meja Bundar di Den Haag.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
