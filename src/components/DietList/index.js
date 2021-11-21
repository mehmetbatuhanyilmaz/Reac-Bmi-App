import React from "react";
import "./style.css";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useCalculate } from "../../contexts/CalculateContext";

function DietList() {
  const { clickBtn, setClickBtn } = useCalculate();

  if (clickBtn === true) {
    setTimeout(() => {
      setClickBtn(false);
    }, 3000);

    return (
      <div className="gifFrame">
        <iframe
          className="gif"
          src="https://giphy.com/embed/wnYB3vx9t6PXiq1ubB"
          width="350px"
          height="200px"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    );
  } else if (clickBtn === false) {
    return (
      <Container>
        <Row>
          <Col>
            <div className="tableFrame">
              <div className="dayTitle">1.GÜN </div>
              <Table hover size="sm" className="tableList">
                <tbody>
                  <tr>
                    <td className="timeDay">
                      <span className=" d-inline bg-secondary rounded p-0.5">SABAH :</span>
                    </td>
                    <td colSpan="4" className="foodList">
                    <p>Güne Filtre Kahve ile başla
                      Bol bol su tüket. Protein olarak her gün 1 adet Haşlanmış Yumurta ve 1 dilim Beyaz Peynir yanında bol yeşillik ve 2 adt Tahıllı Ekmek.
                    </p>
                      
                    </td>
                  </tr>
                  <tr>
                    <td className="timeDay">
                      <span className=" d-inline bg-secondary rounded p-0.5">ARA :</span>
                    </td>
                    <td colSpan="4" className="foodList">
                      <p>1 Adet Meyve</p>
                    
                    </td>
                  </tr>
                  <tr>
                    <td className="timeDay">
                      <span className=" d-inline bg-secondary rounded p-0.5">ÖĞLE :</span>
                    </td>
                    <td colSpan="4" className="foodList">
                      <p>1 Kase Çorba</p>
                      <p>Izgara Et/Tavuk/Balık</p>
                      <p>Bol Salata</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="timeDay">
                      <span className=" d-inline bg-secondary rounded p-0.5">ARA :</span>
                    </td>
                    <td colSpan="4" className="foodList">
                      <p>5-6 Adet Çiğ Badem/Fındık/Ceviz</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="timeDay">
                      <span className=" d-inline bg-secondary rounded p-0.5">AKŞAM :</span>
                    </td>
                    <td colSpan="4" className="foodList">
                      <p>1 Tabak Sebze veya Kuru Bakliyat
                        1 kase Yoğurt Bol  Yeşilllik ve 2 adt Tahıllı Ekmek
                      </p>
                      
                    </td>
                  </tr>
                  <tr>
                    <td className="timeDay">
                      <span className=" d-inline bg-secondary rounded p-0.5">ARA :</span>
                    </td>
                    <td colSpan="4" className="foodList">
                      
                      <p>1 Bardak Süt veya Yoğurt</p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
          
        </Row>
      </Container>
    );
  } else {
    return <div></div>;
  }
}

export default DietList;
