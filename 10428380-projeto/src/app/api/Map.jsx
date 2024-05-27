import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet'; // Importe leaflet
import styled from 'styled-components'; // Importe styled-components

// Defina os estilos usando styled-components
const StyledMapContainer = styled(MapContainer)`
  height: calc(100vh - 150.5px);
  width: 100%;

  @media screen and (min-width: 768px) {
    height: calc(100vh - 72.38px);
    width: 100%;
  }
`;

const StyledImage = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 8px;
  margin-bottom: 1rem;
  object-fit: cover;
`;

const StyledTitle = styled.h1`
  font-size: 1.2rem;
  font-family: 'Montserrat', sans-serif;
`;

const StyledText = styled.span`
  display: flex;
  line-height: 1.5em;
  font-family: 'Montserrat', sans-serif;
`;

// Defina o ícone personalizado para o marcador
const customIcon = new L.Icon({
  iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
  shadowSize: [50, 64],
  shadowAnchor: [4, 62]
});

export default function Map({ postos }) {
  return (
    <div>
      <h1 className='findacenter'>Encontre os Centros de Apoio a partir do Mapa:</h1>
      <StyledMapContainer
        center={[-23.5489, -46.6388]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Adicione o marcador para a localização fornecida */}
        <Marker position={[-23.53303, -46.62761]} icon={customIcon}>
          <Popup>
            <StyledTitle>Centro de Apoio</StyledTitle>
            <StyledText>Endereço: Rua Prates, 165 - Bom Retiro, São Paulo - SP, 01121-000</StyledText>
            {/* Adicione outras informações aqui, se necessário */}
          </Popup>
        </Marker>
        {/* Adicione outros marcadores aqui, se necessário */}
        {postos && postos.map((posto) => (
          <Marker key={posto.id} position={[posto.latitude, posto.longitude]}>
            <Popup>
              <StyledImage src={posto.imagem} alt={posto.nome} />
              <StyledTitle>{posto.nome}</StyledTitle>
              <em className="sobre">{posto.sobre}</em>
              <strong className="label">Endereço: </strong>
              <StyledText>{posto.local}</StyledText>
              <strong className="label">CEP: </strong>
              <StyledText>{posto.cep}</StyledText>
              <strong className="label">Telefone: </strong>
              <StyledText>{posto.tel}</StyledText>
              <strong className="label">Funcionamento: </strong>
              <StyledText>{posto.funcionamento}</StyledText>
            </Popup>
          </Marker>
        ))}
      </StyledMapContainer>
    </div>
  );
}
