import { ModalComp } from "../components/ModalComp"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Pahlawan = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  const heroes = [
    {
      "name": "Soekarno",
      "birth_date": "1901-06-06",
      "birth_place": "Blitar, Jawa Timur",
      "death_date": "1970-06-21",
      "photo": "http://2.bp.blogspot.com/-gORYiXVIfUQ/VFjElETE9xI/AAAAAAAAXN8/moVd57Ccc1k/s1600/Presiden-Soekarno-berwarna.png",
      "description": "Soekarno adalah proklamator kemerdekaan Indonesia dan presiden pertama Republik Indonesia. Ia memimpin perjuangan kemerdekaan dari penjajahan Belanda dan Jepang, dan dikenal dengan pidato 'Ganyang Malaysia' dan konsep 'Nasakom'."
    },
    {
      "name": "Mohammad Hatta",
      "birth_date": "1902-08-12",
      "birth_place": "Bukittinggi, Sumatra Barat",
      "death_date": "1980-03-14",
      "photo": "http://2.bp.blogspot.com/-gORYiXVIfUQ/VFjElETE9xI/AAAAAAAAXN8/moVd57Ccc1k/s1600/Presiden-Soekarno-berwarna.png",
      "description": "Mohammad Hatta, juga dikenal sebagai Bung Hatta, adalah proklamator kemerdekaan Indonesia dan wakil presiden pertama Republik Indonesia. Ia adalah seorang ekonom dan politisi yang memainkan peran penting dalam perjuangan kemerdekaan Indonesia."
    },
    {
      "name": "Jenderal Sudirman",
      "birth_date": "1916-01-24",
      "birth_place": "Purbalingga, Jawa Tengah",
      "death_date": "1950-01-29",
      "photo": "http://2.bp.blogspot.com/-gORYiXVIfUQ/VFjElETE9xI/AAAAAAAAXN8/moVd57Ccc1k/s1600/Presiden-Soekarno-berwarna.png",
      "description": "Jenderal Sudirman adalah panglima besar Tentara Nasional Indonesia yang dikenal karena kepemimpinannya dalam perang gerilya melawan Belanda setelah proklamasi kemerdekaan Indonesia. Ia tetap memimpin meski dalam kondisi sakit parah."
    },
    {
      "name": "R.A. Kartini",
      "birth_date": "1879-04-21",
      "birth_place": "Jepara, Jawa Tengah",
      "death_date": "1904-09-17",
      "photo": "http://2.bp.blogspot.com/-gORYiXVIfUQ/VFjElETE9xI/AAAAAAAAXN8/moVd57Ccc1k/s1600/Presiden-Soekarno-berwarna.png",
      "description": "Raden Ajeng Kartini adalah seorang pahlawan nasional Indonesia yang dikenal sebagai pelopor kebangkitan perempuan pribumi. Ia memperjuangkan hak-hak perempuan dalam bidang pendidikan dan kesetaraan gender."
    },
    {
      "name": "Ki Hajar Dewantara",
      "birth_date": "1889-05-02",
      "birth_place": "Yogyakarta, Yogyakarta",
      "death_date": "1959-04-26",
      "photo": "http://2.bp.blogspot.com/-gORYiXVIfUQ/VFjElETE9xI/AAAAAAAAXN8/moVd57Ccc1k/s1600/Presiden-Soekarno-berwarna.png",
      "description": "Ki Hajar Dewantara adalah tokoh pendidikan Indonesia dan pendiri Taman Siswa, sebuah lembaga pendidikan yang mempelopori pendidikan untuk rakyat pribumi. Ia juga dikenal dengan semboyan 'Ing Ngarso Sung Tulodo, Ing Madyo Mangun Karso, Tut Wuri Handayani'."
    },
    {
      "name": "Cut Nyak Dien",
      "birth_date": "1848-00-00",
      "birth_place": "Aceh",
      "death_date": "1908-11-06",
      "photo": "http://2.bp.blogspot.com/-gORYiXVIfUQ/VFjElETE9xI/AAAAAAAAXN8/moVd57Ccc1k/s1600/Presiden-Soekarno-berwarna.png",
      "description": "Cut Nyak Dien adalah pahlawan wanita dari Aceh yang berjuang melawan penjajah Belanda. Ia terkenal dengan keberanian dan kepemimpinannya dalam Perang Aceh."
    },
    {
      "name": "Pattimura",
      "birth_date": "1783-06-08",
      "birth_place": "Saparua, Maluku",
      "death_date": "1817-12-16",
      "photo": "http://2.bp.blogspot.com/-gORYiXVIfUQ/VFjElETE9xI/AAAAAAAAXN8/moVd57Ccc1k/s1600/Presiden-Soekarno-berwarna.png",
      "description": "Pattimura, atau Thomas Matulessy, adalah pahlawan nasional dari Maluku yang memimpin perlawanan terhadap penjajahan Belanda pada tahun 1817."
    },
    {
      "name": "Tuanku Imam Bonjol",
      "birth_date": "1772-00-00",
      "birth_place": "Bonjol, Sumatra Barat",
      "death_date": "1864-11-06",
      "photo": "http://2.bp.blogspot.com/-gORYiXVIfUQ/VFjElETE9xI/AAAAAAAAXN8/moVd57Ccc1k/s1600/Presiden-Soekarno-berwarna.png",
      "description": "Tuanku Imam Bonjol adalah pemimpin Perang Padri di Sumatra Barat yang berjuang melawan kolonialisme Belanda pada awal abad ke-19."
    },
    {
      "name": "Diponegoro",
      "birth_date": "1785-11-11",
      "birth_place": "Yogyakarta",
      "death_date": "1855-01-08",
      "photo": "http://2.bp.blogspot.com/-gORYiXVIfUQ/VFjElETE9xI/AAAAAAAAXN8/moVd57Ccc1k/s1600/Presiden-Soekarno-berwarna.png",
      "description": "Pangeran Diponegoro adalah pemimpin Perang Jawa (1825-1830) melawan penjajah Belanda, yang merupakan salah satu perlawanan terbesar dalam sejarah kolonial."
    },
    {
      "name": "Sultan Hasanuddin",
      "birth_date": "1631-01-12",
      "birth_place": "Gowa, Sulawesi Selatan",
      "death_date": "1670-06-12",
      "photo": "http://2.bp.blogspot.com/-gORYiXVIfUQ/VFjElETE9xI/AAAAAAAAXN8/moVd57Ccc1k/s1600/Presiden-Soekarno-berwarna.png",
      "description": "Sultan Hasanuddin adalah raja Gowa yang gigih melawan penjajah Belanda dalam perang Makassar pada abad ke-17."
    },
    {
      "name": "Raden Dewi Sartika",
      "birth_date": "1884-12-04",
      "birth_place": "Cicalengka, Jawa Barat",
      "death_date": "1947-09-11",
      "photo": "http://2.bp.blogspot.com/-gORYiXVIfUQ/VFjElETE9xI/AAAAAAAAXN8/moVd57Ccc1k/s1600/Presiden-Soekarno-berwarna.png",
      "description": "Raden Dewi Sartika adalah pelopor pendidikan bagi perempuan di Indonesia, khususnya di wilayah Sunda, dan mendirikan sekolah pertama untuk perempuan pada tahun 1904."
    },
    {
      "name": "Teuku Umar",
      "birth_date": "1854-00-00",
      "birth_place": "Meulaboh, Aceh",
      "death_date": "1899-02-11",
      "photo": "http://2.bp.blogspot.com/-gORYiXVIfUQ/VFjElETE9xI/AAAAAAAAXN8/moVd57Ccc1k/s1600/Presiden-Soekarno-berwarna.png",
      "description": "Teuku Umar adalah pahlawan nasional dari Aceh yang berjuang melawan Belanda dalam Perang Aceh. Ia dikenal dengan strategi gerilyanya yang licin."
    },
    {
      "name": "Cut Nyak Meutia",
      "birth_date": "1870-00-00",
      "birth_place": "Pirak, Aceh",
      "death_date": "1910-10-24",
      "photo": "http://2.bp.blogspot.com/-gORYiXVIfUQ/VFjElETE9xI/AAAAAAAAXN8/moVd57Ccc1k/s1600/Presiden-Soekarno-berwarna.png",
      "description": "Cut Nyak Meutia adalah pahlawan wanita dari Aceh yang turut berjuang dalam Perang Aceh melawan penjajahan Belanda."
    },
    {
      "name": "Raden Ajeng Kartini",
      "birth_date": "1879-04-21",
      "birth_place": "Jepara, Jawa Tengah",
      "death_date": "1904-09-17",
      "photo": "http://2.bp.blogspot.com/-gORYiXVIfUQ/VFjElETE9xI/AAAAAAAAXN8/moVd57Ccc1k/s1600/Presiden-Soekarno-berwarna.png",
      "description": "Raden Ajeng Kartini adalah tokoh emansipasi wanita Indonesia, yang memperjuangkan hak-hak perempuan dalam pendidikan dan kesetaraan gender."
    },
    {
      "name": "I Gusti Ngurah Rai",
      "birth_date": "1917-01-30",
      "birth_place": "Badung, Bali",
      "death_date": "1946-11-20",
      "photo": "http://2.bp.blogspot.com/-gORYiXVIfUQ/VFjElETE9xI/AAAAAAAAXN8/moVd57Ccc1k/s1600/Presiden-Soekarno-berwarna.png",
      "description": "I Gusti Ngurah Rai adalah pahlawan nasional dari Bali yang memimpin pertempuran Puputan Margarana melawan Belanda pada tahun 1946."
    },
    {
      "name": "Sultan Syarif Kasim II",
      "birth_date": "1893-11-01",
      "birth_place": "Siak, Riau",
      "death_date": "1968-04-23",
      "photo": "http://2.bp.blogspot.com/-gORYiXVIfUQ/VFjElETE9xI/AAAAAAAAXN8/moVd57Ccc1k/s1600/Presiden-Soekarno-berwarna.png",
      "description": "Sultan Syarif Kasim II adalah Sultan Siak yang menyerahkan kekayaannya untuk mendukung perjuangan kemerdekaan Indonesia."
    },
    {
      "name": "Tjoet Nja' Dhien",
      "birth_date": "1848-00-00",
      "birth_place": "Aceh",
      "death_date": "1908-11-06",
      "photo": "http://2.bp.blogspot.com/-gORYiXVIfUQ/VFjElETE9xI/AAAAAAAAXN8/moVd57Ccc1k/s1600/Presiden-Soekarno-berwarna.png",
      "description": "Cut Nyak Dhien adalah seorang pejuang dari Aceh yang gigih melawan penjajahan Belanda. Ia dikenal karena keberanian dan strategi perangnya."
    },
    {
      "name": "Ki Hadjar Dewantara",
      "birth_date": "1889-05-02",
      "birth_place": "Yogyakarta",
      "death_date": "1959-04-26",
      "photo": "http://2.bp.blogspot.com/-gORYiXVIfUQ/VFjElETE9xI/AAAAAAAAXN8/moVd57Ccc1k/s1600/Presiden-Soekarno-berwarna.png",
      "description": "Ki Hadjar Dewantara adalah tokoh pendidikan Indonesia dan pendiri Taman Siswa, yang memperjuangkan hak pendidikan bagi rakyat Indonesia."
    },
    {
      "name": "Raden Soedirman",
      "birth_date": "1916-01-24",
      "birth_place": "Purbalingga, Jawa Tengah",
      "death_date": "1950-01-29",
      "photo": "http://2.bp.blogspot.com/-gORYiXVIfUQ/VFjElETE9xI/AAAAAAAAXN8/moVd57Ccc1k/s1600/Presiden-Soekarno-berwarna.png",
      "description": "Jenderal Soedirman adalah Panglima Besar Tentara Nasional Indonesia yang memimpin perang gerilya melawan Belanda setelah Proklamasi Kemerdekaan."
    },
    {
      "name": "Sutomo (Bung Tomo)",
      "birth_date": "1920-10-03",
      "birth_place": "Surabaya, Jawa Timur",
      "death_date": "1981-10-07",
      "photo": "http://2.bp.blogspot.com/-gORYiXVIfUQ/VFjElETE9xI/AAAAAAAAXN8/moVd57Ccc1k/s1600/Presiden-Soekarno-berwarna.png",
      "description": "Bung Tomo adalah pahlawan nasional yang terkenal karena perannya dalam pertempuran 10 November 1945 di Surabaya, yang menjadi simbol perlawanan terhadap kolonialisme."
    },
    {
      "name": "Frans Kaisiepo",
      "birth_date": "1921-10-10",
      "birth_place": "Biak, Papua",
      "death_date": "1979-04-10",
      "photo": "http://2.bp.blogspot.com/-gORYiXVIfUQ/VFjElETE9xI/AAAAAAAAXN8/moVd57Ccc1k/s1600/Presiden-Soekarno-berwarna.png",
      "description": "Frans Kaisiepo adalah pahlawan nasional dari Papua yang berjuang untuk integrasi Papua ke dalam wilayah Indonesia."
    },
    {
      "name": "Andi Mappanyukki",
      "birth_date": "1885-00-00",
      "birth_place": "Bone, Sulawesi Selatan",
      "death_date": "1967-02-18",
      "photo": "http://2.bp.blogspot.com/-gORYiXVIfUQ/VFjElETE9xI/AAAAAAAAXN8/moVd57Ccc1k/s1600/Presiden-Soekarno-berwarna.png",
      "description": "Andi Mappanyukki adalah seorang raja dan pejuang dari Sulawesi Selatan yang berperan penting dalam perlawanan terhadap penjajahan Belanda."
    },
    {
      "name": "Dr. Tjipto Mangunkusumo",
      "birth_date": "1886-03-04",
      "birth_place": "Jepara, Jawa Tengah",
      "death_date": "1943-03-08",
      "photo": "http://2.bp.blogspot.com/-gORYiXVIfUQ/VFjElETE9xI/AAAAAAAAXN8/moVd57Ccc1k/s1600/Presiden-Soekarno-berwarna.png",
      "description": "Dr. Tjipto Mangunkusumo adalah tokoh pergerakan nasional dan salah satu pendiri Indische Partij, yang memperjuangkan kemerdekaan Indonesia."
    },
  ]

  return (
    <div className="pt-24 sm:pt-0 pb-10 px-4">
        <div className="flex flex-wrap justify-center items-center gap-0 sm:gap-4 h-screen pb-8 sm:pb-0">
          <div data-aos="fade-right" className="">
            <img src="https://i.pinimg.com/originals/c1/e4/4f/c1e44fe33f2a92f478e2542b9afa84f4.png" className="w-96" alt="" />
          </div>
          <div data-aos="fade-left" className="max-w-xl">
            <h1 className="text-2xl sm:text-3xl font-bold capitalize mb-2">"Bangsa yang besar adalah bangsa yang menghargai jasa pahlawannya."</h1>
            <p className="text-xl font-semibold">- Ir. Soekarno</p>
          </div>
        </div>

        <div data-aos="zoom-down" data-aos-offset="210"
 className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4">
          {heroes.map((hero, i) => {
            return <ModalComp key={i} hero={hero}/>
          })}
        </div>
    </div>
  )
}
