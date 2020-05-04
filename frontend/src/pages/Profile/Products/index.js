import React from 'react';

import { Container, ListStock, Stock } from './styles';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <Container>
      <div>
        <Link to="/add-stock">Adicionar estoque</Link>
      </div>
      <ListStock>
        <Stock>
          <img
            src="https://a-static.mlcdn.com.br/1500x1500/notebook-samsung-essentials-e30-intel-core-i3-4gb-1tb-156-full-hd-windows-10/magazineluiza/221225800/ea80e7edbd2ac183af3aa6a68118806d.jpg"
            alt="img"
            width={250}
          />
          <div>
            <p>Notebook DELL Inspirion</p>
            <span>
              1000 unity <strong>$5000</strong>
            </span>
          </div>
        </Stock>
        <Stock>
          <img
            src="https://a-static.mlcdn.com.br/1500x1500/notebook-samsung-essentials-e30-intel-core-i3-4gb-1tb-156-full-hd-windows-10/magazineluiza/221225800/ea80e7edbd2ac183af3aa6a68118806d.jpg"
            alt="img"
            width={250}
          />
          <div>
            <p>Notebook DELL Inspirion</p>
            <span>
              1000 unity <strong>$5000</strong>
            </span>
          </div>
        </Stock>
        <Stock>
          <img
            src="https://a-static.mlcdn.com.br/1500x1500/notebook-samsung-essentials-e30-intel-core-i3-4gb-1tb-156-full-hd-windows-10/magazineluiza/221225800/ea80e7edbd2ac183af3aa6a68118806d.jpg"
            alt="img"
            width={250}
          />
          <div>
            <p>Notebook DELL Inspirion</p>
            <span>
              1000 unity <strong>$5000</strong>
            </span>
          </div>
        </Stock>
        <Stock>
          <img
            src="https://a-static.mlcdn.com.br/1500x1500/notebook-samsung-essentials-e30-intel-core-i3-4gb-1tb-156-full-hd-windows-10/magazineluiza/221225800/ea80e7edbd2ac183af3aa6a68118806d.jpg"
            alt="img"
            width={250}
          />
          <div>
            <p>Notebook DELL Inspirion</p>
            <span>
              1000 unity <strong>$5000</strong>
            </span>
          </div>
        </Stock>
        <Stock>
          <img
            src="https://a-static.mlcdn.com.br/1500x1500/notebook-samsung-essentials-e30-intel-core-i3-4gb-1tb-156-full-hd-windows-10/magazineluiza/221225800/ea80e7edbd2ac183af3aa6a68118806d.jpg"
            alt="img"
            width={250}
          />
          <div>
            <p>Notebook DELL Inspirion</p>
            <span>
              1000 unity <strong>$5000</strong>
            </span>
          </div>
        </Stock>
        <Stock>
          <img
            src="https://a-static.mlcdn.com.br/1500x1500/notebook-samsung-essentials-e30-intel-core-i3-4gb-1tb-156-full-hd-windows-10/magazineluiza/221225800/ea80e7edbd2ac183af3aa6a68118806d.jpg"
            alt="img"
            width={250}
          />
          <div>
            <p>Notebook DELL Inspirion</p>
            <span>
              1000 unity <strong>$5000</strong>
            </span>
          </div>
        </Stock>
      </ListStock>
    </Container>
  );
}
