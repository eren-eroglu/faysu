import React, { useEffect, useState } from "react";
import gif from "../src/assets/logo.gif";
function About() {
  const [scrollDownVisible, setScrollDownVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY, innerHeight } = window;
      const threshold = innerHeight * 0.2; // Adjust the threshold as needed

      if (scrollY > threshold) {
        setScrollDownVisible(false);
      } else {
        setScrollDownVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {" "}
      <div className="container mx-auto">
        {" "}
        <div className="lg:hidden">
          <img src={gif} alt="Logo" />
          {scrollDownVisible && (
            <div className="scroll-down-text text-lg">Aşağı Kaydırın</div>
          )}
        </div>
        <h1 className="text-center text-4xl font-bold mb-6">HAKKIMIZDA</h1>
        <p className="text-center mt-4">
          Perakende yapı market sektöründe 25 yılı aşkın süredir güzel
          İzmir'imizde hizmet vermekteyiz.
        </p>
        <p className="text-center mt-4">
          Ülkemiz insanlarına daha fazla hizmet sunabilmek adına şirketimizi
          genişletip toptan su armatürleri ve duş sistemleri üzerine atılım
          başlattık.
        </p>
        <p className="text-center mt-4">
          Bu süreçte, <strong>Fatih Aral & Yalçın Eroğlu</strong> tarafından
          2023 yılında kurulan firmamız, müşterilerimize kaliteli ürünler
          sunarak ve müşteri memnuniyetini ön planda tutarak sektörde öne
          çıkmaktadır.
        </p>
        <p className="text-center mt-4">
          Bizimle birlikte olan ve bize destek olan tüm müşterilerimize teşekkür
          etmek istiyoruz. Sizlerin güveni ve desteği sayesinde 25 yıllık
          ticaretimizde başarılı bir şekilde ilerledik. Müşterilerimize karşı
          dürüstlük ve güven prensiplerimizden asla ödün vermedik ve bundan
          sonra da vermeyeceğiz.
        </p>
        <p className="text-center mt-4">
          Firmamız, sektördeki gelişmeleri yakından takip ederek, yenilikçi
          ürünleri müşterilerimize sunma konusunda kararlıdır. Müşteri odaklı
          hizmet anlayışımızı sürdürerek, sizlere en iyi alışveriş deneyimini
          yaşatmayı hedeflemekteyiz.
        </p>
        <p className="text-center mt-4">
          Gelecekte de müşterilerimize kaliteli ürünler ve rekabetçi fiyatlar
          sunmaya devam edeceğiz. Müşteri memnuniyetini en üst seviyede tutmayı
          ve güvenilir bir iş ortağı olmayı taahhüt ediyoruz.
        </p>{" "}
      </div>
     
    </div>
  );
}

export default About;
