import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Importe o CSS do Leaflet

export default function MapPage({ centrosDeAjuda }) {
  return (
    <div>
      <h1 className='findacenter'>Encontre Centros de Ajuda contra o Alcoolismo e Substâncias Tóxicas:</h1>
      <div style={{ height: '500px', width: '100%' }}>
        <MapContainer
          center={[-23.5489, -46.6388]}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {centrosDeAjuda && centrosDeAjuda.map((centro) => (
            <Marker key={centro.id} position={[centro.latitude, centro.longitude]}>
              <Popup>
                <h1>{centro.nome}</h1>
                <p><strong>Endereço: </strong>{centro.endereco}</p>
                <p><strong>Telefone: </strong>{centro.telefone}</p>
                <p><strong>Horário de Funcionamento: </strong>{centro.funcionamento}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
