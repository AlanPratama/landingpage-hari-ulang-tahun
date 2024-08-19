import img from "../../public/assets/pesonaIndonesia.gif";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from "flowbite-react";
import { useEffect, useState } from 'react';

export const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  const quotesList = [
    {
      "name": "Soekarno",
      "photo": "https://i.pinimg.com/originals/c1/e4/4f/c1e44fe33f2a92f478e2542b9afa84f4.png",
      "quote": "Bangsa yang besar adalah bangsa yang menghormati jasa pahlawannya."
    },
    {
      "name": "Mohammad Hatta",
      "photo": "https://i.pinimg.com/originals/67/21/31/672131d0ec69d529b2c1eed6865d29c2.png",
      "quote": "Kemerdekaan hanyalah diperdapat dan dimiliki oleh bangsa yang jiwanya berkobar-kobar dengan tekad 'Merdeka, merdeka atau mati'."
    },
    {
      "name": "Jenderal Sudirman",
      "photo": "https://png.pngtree.com/png-clipart/20221107/ourlarge/pngtree-lieutenant-colonel-general-sudirman-indonesian-national-hero-png-image_6423599.png",
      "quote": "Tempat saya yang terbaik adalah di tengah-tengah anak buah. Saya akan meneruskan perjuangan."
    },
    {
      "name": "R.A. Kartini",
      "photo": "https://cdn.pixabay.com/photo/2021/04/27/15/38/kartini-6211820_1280.png",
      "quote": "Habis gelap terbitlah terang."
    },
    {
      "name": "Ki Hajar Dewantara",
      "photo": "https://png.pngtree.com/png-clipart/20230607/ourmid/pngtree-ki-beat-the-council-png-image_7122444.png",
      "quote": "Ing ngarsa sung tuladha, ing madya mangun karsa, tut wuri handayani."
    },
    {
      "name": "Cut Nyak Dien",
      "photo": "http://2.bp.blogspot.com/-MPFXgEorI9c/UQqXBqCAftI/AAAAAAAAARs/Lssn2M_XlYY/s1600/cut-nyak-dhien.jpg",
      "quote": "Jika perempuan-perempuan menjadi pengecut, maka negara ini tidak akan merdeka."
    },
    {
      "name": "Pattimura",
      "photo": "https://png.pngtree.com/png-clipart/20221107/ourmid/pngtree-image-illustration-patimura-indonesian-national-hero-png-image_6427514.png",
      "quote": "Bersatu kita teguh, bercerai kita runtuh."
    },
    {
      "name": "Tuanku Imam Bonjol",
      "photo": "https://wisatabukittinggi.com/wp-content/uploads/2023/08/Desain-tanpa-judul-5.jpg",
      "quote": "Lebih baik mati berkalang tanah daripada hidup dijajah."
    },
    {
      "name": "Diponegoro",
      "photo": "https://i0.wp.com/inipasti.com/wp-content/uploads/2017/01/PicsArt_01-09-09.21.06.jpg?fit=1200%2C1082&ssl=1",
      "quote": "Penyakit kita sekarang ialah kepercayaan kepada kekuatan sendiri telah lenyap."
    },
    {
      "name": "Sultan Hasanuddin",
      "photo": "https://img.freepik.com/premium-vector/vector-sultan-hasanuddin-hero_839454-56.jpg?w=2000",
      "quote": "Kita lebih suka hancur lebur daripada dijajah."
    },
    {
      "name": "Raden Dewi Sartika",
      "photo": "http://2.bp.blogspot.com/-Agk5iq_jEGk/Uvpht_EnbiI/AAAAAAAAAIY/Ba0FqTKP0Vs/s1600/Dewi-Sartika.jpg",
      "quote": "Hidup dan mati ada di tangan Allah. Berjuanglah karena benar."
    },
    {
      "name": "Teuku Umar",
      "photo": "http://fc02.deviantart.net/fs70/f/2010/083/f/0/Tauku_Umar_by_ngupi.jpg",
      "quote": "Kita tunjukkan kepada dunia bahwa kita adalah orang-orang yang berani."
    },
    {
      "name": "I Gusti Ngurah Rai",
      "photo": "https://tse4.mm.bing.net/th?id=OIP.FnK7rZF3IJhMuH9EoKqwZwHaHS&pid=Api&P=0&h=220",
      "quote": "Merdeka atau mati!"
    },
    {
      "name": "Frans Kaisiepo",
      "photo": "https://akcdn.detik.net.id/community/media/visual/2021/11/10/frans-kaisiepo-sosok-pahlawan-nasional-asal-papua-1_43.jpeg?w=250&q=",
      "quote": "Kita berjuang bukan untuk popularitas, tapi untuk kejayaan bangsa."
    },
    {
      "name": "Sultan Syarif Kasim II",
      "photo": "https://1.bp.blogspot.com/-m1RzEMTphJQ/XPyybU99mRI/AAAAAAAAJ3c/n51-G5GgQAEHd6ts8WbOviPfX-MuC-M2QCLcBGAs/s1600/Sultan-Syarif-Kasim-II.jpg",
      "quote": "Berikan seluruh hidupmu untuk kemerdekaan bangsa."
    },
    {
      "name": "Tjoet Nja' Dhien",
      "photo": "https://tse1.mm.bing.net/th?id=OIP.89HhQwqBZ359CKjFCVDqRAAAAA&pid=Api&P=0&h=220",
      "quote": "Lebih baik diasingkan daripada menyerah kepada penjajah."
    },
    {
      "name": "Sutomo (Bung Tomo)",
      "photo": "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/11/04/2390346711.jpg",
      "quote": "Selama banteng-banteng Indonesia masih mempunyai darah merah, yang dapat membikin secarik kain putih menjadi merah dan putih, maka selama itu tidak akan kita mau menyerah kepada siapapun juga."
    },
    {
      "name": "Cut Nyak Meutia",
      "photo": "https://2.bp.blogspot.com/-iGAIXA104co/Vmj8m-BunkI/AAAAAAAAA5w/Wja9oDsNag4/s1600/Cut%2BMutia.jpg",
      "quote": "Tak ada yang lebih besar daripada cinta kepada tanah air."
    },
    {
      "name": "Raden Soedirman",
      "photo": "https://3.bp.blogspot.com/--2p4C88cac8/WBdJabvLlfI/AAAAAAAAA3Y/4IfFTVW6pWIckiTlziGwePGTDU1sUGI4wCLcB/s1600/jenderal%2Bsoedirman.jpg",
      "quote": "Hidup yang tidak berjuang adalah mati yang tidak dikubur."
    },
    {
      "name": "Dr. Tjipto Mangunkusumo",
      "photo": "https://ceknricek.com/photo/plugin/article/2019/1552020154_1-org.jpg",
      "quote": "Pergerakan kita tidak boleh berhenti di tengah jalan."
    }
  ]


  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesList.length)
    return quotesList[randomIndex]
  }

  const handleGenerateQuote = () => {
    setQuotes(getRandomQuote)    
  }
  
  const [quotes, setQuotes] = useState(getRandomQuote)

  useEffect(() => {
    setQuotes(getRandomQuote());
  }, []);

  
  return (
    <>
      <div
        className="-z-10 flex flex-col justify-center items-center h-screen bg-fixed bg-contain lg:bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="z-30 text-center flex flex-col justify-center items-center gap-3">
          <h1 className="text-5xl md:text-8xl font-semibold text-white text-center uppercase">
            unity <br />
            in diversity
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-white">
            Indonesian Idependence Day
          </h2>
        </div>
        <div className="bg-black h-screen w-full opacity-60 absolute top-0 z-20"></div>
      </div>


      {quotes && (
        <div className="py-16 px-6 flex flex-wrap justify-center items-center gap-2 sm:gap-12 h-screen pb-8 sm:pb-0">
        <div data-aos="fade-right" className="w-1/3">
          <img src={quotes.photo} className="w-96 rounded-md shadow-xl border border-gray-200" alt={quotes.name} />
        </div>

        <div data-aos="fade-left" className="max-w-xl w-2/3">
          <h1 className="text-2xl sm:text-3xl font-bold capitalize mb-2">"{quotes.quote}"</h1>
          <p className="text-xl font-semibold">- {quotes.name}</p>

          <button onClick={handleGenerateQuote} type="button" class="mt-4 text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Generate Quote</button>
        </div>
      </div>
      )}
    </>
  );
};
