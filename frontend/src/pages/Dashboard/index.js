import React from 'react';

import { Container, ListStock, Stock } from './styles';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <Container>
      <ListStock>
        <Stock>
          <img
            src="https://a-static.mlcdn.com.br/1500x1500/smart-tv-4k-led-50-samsung-un50ru7100-wi-fi-bluetooth-hdr-3-hdmi-2-usb/magazineluiza/193425500/9f7e93e65a990888ddc472670b0455ae.jpg"
            alt="tv-top"
          />
          <div>
            <h5>
              DESCRÇÃO FICA AQUI DESCRÇÃO FICA AQUI DESCRÇÃO FICA AQUI DESCRÇÃO
              FICA AQUI DESCRÇÃO FICA AQUI DESCRÇÃO FICA AQUI DESCRÇÃO FICA AQUI
              DESCRÇÃO FICA AQUI
            </h5>
            <strong>1000 unidades</strong>
          </div>
          <Link to="/product">Negociar</Link>
        </Stock>
        <Stock>
          <img
            src="https://a-static.mlcdn.com.br/1500x1500/smart-tv-4k-led-50-samsung-un50ru7100-wi-fi-bluetooth-hdr-3-hdmi-2-usb/magazineluiza/193425500/9f7e93e65a990888ddc472670b0455ae.jpg"
            alt="tv-top"
          />
          <div>
            <h5>
              DESCRÇÃO FICA AQUI DESCRÇÃO FICA AQUI DESCRÇÃO FICA AQUI DESCRÇÃO
              FICA AQUI DESCRÇÃO FICA AQUI DESCRÇÃO FICA AQUI DESCRÇÃO FICA AQUI
              DESCRÇÃO FICA AQUI
            </h5>
            <strong>1000 unidades</strong>
          </div>
          <Link to="/product">Negociar</Link>
        </Stock>
        <Stock>
          <img
            src="https://a-static.mlcdn.com.br/1500x1500/smart-tv-4k-led-50-samsung-un50ru7100-wi-fi-bluetooth-hdr-3-hdmi-2-usb/magazineluiza/193425500/9f7e93e65a990888ddc472670b0455ae.jpg"
            alt="tv-top"
          />
          <div>
            <h5>
              DESCRÇÃO FICA AQUI DESCRÇÃO FICA AQUI DESCRÇÃO FICA AQUI DESCRÇÃO
              FICA AQUI DESCRÇÃO FICA AQUI DESCRÇÃO FICA AQUI DESCRÇÃO FICA AQUI
              DESCRÇÃO FICA AQUI
            </h5>
            <strong>1000 unidades</strong>
          </div>
          <Link to="/product">Negociar</Link>
        </Stock>
        <Stock>
          <img
            src="https://a-static.mlcdn.com.br/1500x1500/smart-tv-4k-led-50-samsung-un50ru7100-wi-fi-bluetooth-hdr-3-hdmi-2-usb/magazineluiza/193425500/9f7e93e65a990888ddc472670b0455ae.jpg"
            alt="tv-top"
          />
          <div>
            <h5>
              DESCRÇÃO FICA AQUI DESCRÇÃO FICA AQUI DESCRÇÃO FICA AQUI DESCRÇÃO
              FICA AQUI DESCRÇÃO FICA AQUI DESCRÇÃO FICA AQUI DESCRÇÃO FICA AQUI
              DESCRÇÃO FICA AQUI
            </h5>
            <strong>1000 unidades</strong>
          </div>
          <Link to="/product">Negociar</Link>
        </Stock>
        <Stock>
          <img
            src="https://a-static.mlcdn.com.br/1500x1500/smart-tv-4k-led-50-samsung-un50ru7100-wi-fi-bluetooth-hdr-3-hdmi-2-usb/magazineluiza/193425500/9f7e93e65a990888ddc472670b0455ae.jpg"
            alt="tv-top"
          />
          <div>
            <h5>
              DESCRÇÃO FICA AQUI DESCRÇÃO FICA AQUI DESCRÇÃO FICA AQUI DESCRÇÃO
              FICA AQUI DESCRÇÃO FICA AQUI DESCRÇÃO FICA AQUI DESCRÇÃO FICA AQUI
              DESCRÇÃO FICA AQUI
            </h5>
            <strong>1000 unidades</strong>
          </div>
          <Link to="/product">Negociar</Link>
        </Stock>
      </ListStock>
    </Container>
  );
}

export default Dashboard;
