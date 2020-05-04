import React from 'react';

import {
  Container,
  Imgs,
  Header,
  Infos,
  ListProdutos,
  Produtos,
  OtherProducts,
} from './styles';
import { Button } from 'react-bootstrap';

function Product() {
  return (
    <Container>
      <Header>
        <h3>INFORMAÇÕES DO PRODUTO</h3>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/16/Marca.svg"
          alt="logo-marca"
        />
      </Header>
      <div className="product">
        <Imgs>
          <div>
            <img
              src="https://a-static.mlcdn.com.br/1500x1500/smart-tv-4k-led-50-samsung-un50ru7100-wi-fi-bluetooth-hdr-3-hdmi-2-usb/magazineluiza/193425500/9f7e93e65a990888ddc472670b0455ae.jpg"
              alt="img"
            />
            <img
              src="https://a-static.mlcdn.com.br/1500x1500/smart-tv-4k-led-50-samsung-un50ru7100-wi-fi-bluetooth-hdr-3-hdmi-2-usb/magazineluiza/193425500/9f7e93e65a990888ddc472670b0455ae.jpg"
              alt="img"
            />
            <img
              src="https://a-static.mlcdn.com.br/1500x1500/smart-tv-4k-led-50-samsung-un50ru7100-wi-fi-bluetooth-hdr-3-hdmi-2-usb/magazineluiza/193425500/9f7e93e65a990888ddc472670b0455ae.jpg"
              alt="img"
            />
          </div>
          <img
            src="https://a-static.mlcdn.com.br/1500x1500/smart-tv-4k-led-50-samsung-un50ru7100-wi-fi-bluetooth-hdr-3-hdmi-2-usb/magazineluiza/193425500/9f7e93e65a990888ddc472670b0455ae.jpg"
            alt="img"
          />
        </Imgs>
        <Infos>
          <p>
            Smart TV 4K LED 55” Samsung UN55RU7100GXZD - Wi-Fi Bluetooth HDR 3
            HDMI 2 USB
          </p>
          <span>EM ESTOQUE 4000 UNIDADES</span>
          <strong>$50000</strong>
          <h5>DESCRIÇÃO</h5>
          <p>
            A Smart TV LED Samsung UN55RU7100GXZD possui a mais alta tecnologia
            de brilho e contraste. Com o HDR Premium você vê os detalhes que
            antes estavam escondidos na escuridão ou no excesso de luminosidade
            da cena.
          </p>
          <Button>Entrar em contato</Button>
        </Infos>
      </div>
      <OtherProducts>
        <h4>PRODUTOS SIMILARES</h4>
        <ListProdutos>
          <Produtos>
            <img
              src="https://images-americanas.b2w.io/produtos/01/00/img/652182/4/652182410_1GG.jpg"
              alt="img"
            />
            <strong>TV 70 8K</strong>
            <span>$4777</span>
            <p>EM ESTOQUE 2000 UNIDADES</p>
          </Produtos>
          <Produtos>
            <img
              src="https://images-americanas.b2w.io/produtos/01/00/img/652182/4/652182410_1GG.jpg"
              alt="img"
            />
            <strong>TV 70 8K</strong>
            <span>$4777</span>
            <p>EM ESTOQUE 2000 UNIDADES</p>
          </Produtos>
          <Produtos>
            <img
              src="https://images-americanas.b2w.io/produtos/01/00/img/652182/4/652182410_1GG.jpg"
              alt="img"
            />
            <strong>TV 70 8K</strong>
            <span>$4777</span>
            <p>EM ESTOQUE 2000 UNIDADES</p>
          </Produtos>
          <Produtos>
            <img
              src="https://images-americanas.b2w.io/produtos/01/00/img/652182/4/652182410_1GG.jpg"
              alt="img"
            />
            <strong>TV 70 8K</strong>
            <span>$4777</span>
            <p>EM ESTOQUE 2000 UNIDADES</p>
          </Produtos>
          <Produtos>
            <img
              src="https://images-americanas.b2w.io/produtos/01/00/img/652182/4/652182410_1GG.jpg"
              alt="img"
            />
            <strong>TV 70 8K</strong>
            <span>$4777</span>
            <p>EM ESTOQUE 2000 UNIDADES</p>
          </Produtos>
          <Produtos>
            <img
              src="https://images-americanas.b2w.io/produtos/01/00/img/652182/4/652182410_1GG.jpg"
              alt="img"
            />
            <strong>TV 70 8K</strong>
            <span>$4777</span>
            <p>EM ESTOQUE 2000 UNIDADES</p>
          </Produtos>
        </ListProdutos>
      </OtherProducts>
    </Container>
  );
}

export default Product;
