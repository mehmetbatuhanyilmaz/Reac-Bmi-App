import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";

function BMI() {
  return (
    <div className="mt-4">
      <Container>
        <Row>
          <Col className="descriptionBMI">
            <h2>Vücut Kitle İndeksi Nedir?</h2>
            <p>
              Vücut kitle indeksi, kişinin kilosunun ağırlığına oranla ölçülmesi
              olarak tanımlanabilir. Farklı bir deyişle kişinin kilogram
              cinsinden ağırlığının, metre cinsinden uzunluğunun karesine
              bölünmesiyle elde edilir. Çocuk, genç ve yetişkinlerde yağlanmaya
              bağlı olarak oluşan aşırı kilonun saptanması için yaygın olarak
              kullanılır. Vücut kitle indeksi çoğunlukla vücut yağ ölçümüyle
              paralellik gösterse de yağlılık oranı hakkında net bir sonuç
              vermez. Farklı bir deyişle vücut yağını direkt olarak ölçmez,
              bunun yerine tahmin oluşturmak için bir denklem kullanır. Kişinin
              vücudundaki ya ve kas miktarının ölçülüp değerlendirilmesi için
              ilave ölçümler yapılmalıdır. Dolayısıyla boy kilo indeksi, vücudun
              ne kadar yağlı olduğunun doğrudan bir ölçüsü olarak kabul edilmez.
              Vücut kitle indeksi, kişinin sağlıklı ya da sağlıksız bir kiloda
              olup olmadığını belirlemeye yardımcı bir araçtır. Yapılan
              hesaplama sonucunda kişinin vücut kitle indeksi yüksek çıkarsa bu,
              kişinin vücudunda çok fazla yağ olduğu anlamını taşıyabilir. Diğer
              bir ifadeyle yüksek BMI sonucu, kişide kalp hastalıkları, yüksek
              tansiyon ve diyabet gibi hastalıklara yakalanma riskinin de yüksek
              olduğunu ifade eder. Çok düşük BMI sonucu ise kişinin boyuna göre
              fazla zayıf olduğunu ifade eder. Bu aynı zamanda kişide kemik
              erimesi, bağışıklık sisteminin zayıf olması ve anemi gibi pek çok
              farklı hastalığın varlığının işareti olabilir. Bu yüzden ideal
              kilonun korunmasına yardımcı olmak için son derece kolay bir
              şekilde hesaplanabilen kilo boy indeksi, kişinin kilosunu kontrol
              etmesine ve daha önemlisi kilosuna bağlı olarak gelişebilecek
              sağlık risklerine karşı önlem almasına yardımcı olabilir.
            </p>
            
            <h1 className="descriptionBMI">SAĞLIKLI BİR YAŞAM BİZİM ELİMİZDE!</h1>
          </Col>
        </Row>
        

        
      </Container>
    </div>
  );
}

export default BMI;
