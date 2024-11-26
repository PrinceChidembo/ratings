import React, { useState } from "react";
import { Button, Modal, Table, Container } from "react-bootstrap";

const PlayerList = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const playerData = [
    { name: "TAPIWA JELE", club: "NKUST", rating: 2029 },
    { name: "KUDAKWASHE SIBANDA", club: "NUST", rating: 2001 },
    { name: "CASTRO SIBANDA", club: "NUST", rating: 1989 },
    { name: "PRINCE CHIDEMBO", club: "NUST", rating: 1950 },
    { name: "PHAKAMANI SITHOLE", club: "NKUST", rating: 1901 },
    { name: "LIBERTY MOYO", club: "TITANS", rating: 1885 },
    { name: "BENSON CHINODYANAMA", club: "ZRP BYO", rating: 1881 },
    { name: "TARCISIO CHIKANDI", club: "ZRP", rating: 1875 },
    { name: "BLESSING MOYO", club: "NKUST", rating: 1874 },
    { name: "SIFISO NCUBE", club: "ZRP", rating: 1874 },
    { name: "MLUNGISI MAFU", club: "BCC", rating: 1862 },
    { name: "SPENCER MASANGO", club: "HRE", rating: 1838 },
    { name: "IRVIN MACHENGEDZERO", club: "NUST", rating: 1835 },
    { name: "JUNIOR NDLOVU", club: "NUST", rating: 1832 },
    { name: "PRIDE NGULUBE", club: "NUST", rating: 1806 },
    { name: "THABANG MOYO", club: "BCC", rating: 1804 },
    { name: "DONALD MBONDO", club: "NKUST", rating: 1803 },
    { name: "RONALD CHIMANZI", club: "NUST", rating: 1785 },
    { name: "TAWANDA NYAMUKUNDA", club: "BYO POLY", rating: 1781 },
    { name: "DION MOYO", club: "BYO", rating: 1778 },
    { name: "RUSSEL DZETE", club: "BCC", rating: 1777 },
    { name: "DENNIS MASHUKUDU", club: "BCC", rating: 1773 },
    { name: "NOMALUNGELO MATHE", club: "BCC", rating: 1773 },
    { name: "RONALD MOYO", club: "BYO", rating: 1769 },
    { name: "ESHWARD MUDHUMO", club: "NUST", rating: 1765 },
    { name: "VALENTINE NKHOMA", club: "NKUST", rating: 1761 },
    { name: "NIGEL MABIZA", club: "NUST", rating: 1755 },
    { name: "FARAI JANYURE", club: "ZRP", rating: 1754 },
    { name: "MZINGAYE HADEBE", club: "NKUST", rating: 1754 },
    { name: "MAXWELL MASARE", club: "ZRP", rating: 1753 },
    { name: "MOSES MHONDIWA", club: "BCC", rating: 1752 },
    { name: "SPENCER MOYO", club: "FILABUSI", rating: 1751 },
    { name: "KNOWLEDGE NDLOVU", club: "BCC", rating: 1749 },
    { name: "KELVIN MOYO", club: "HILLSIDE", rating: 1749 },
    { name: "KNOWLEDGE SAMBOKO", club: "MPOPOMA", rating: 1746 },
    { name: "KHUMBULANI CHIRWA", club: "NKUST", rating: 1745 },
    { name: "VICTOR SIBANDA", club: "BYO", rating: 1743 },
    { name: "CLARENCE NDLOVU", club: "BCC", rating: 1741 },
    { name: "ALMS MACHENGEDZO", club: "MPOPOMA", rating: 1741 },
    { name: "MATHAMELA MBUSO NDLOVU", club: "NUST", rating: 1738 },
    { name: "NTOKOZO MANGENA", club: "BCC", rating: 1737 },
    { name: "ANDILE BHEBHE", club: "NUST", rating: 1737 },
    { name: "TONY SIANYENZU", club: "BYO", rating: 1735 },
    { name: "NKOSILATHI KHUMALO", club: "TITANS", rating: 1734 },
    { name: "RICKY MALABA", club: "BCC", rating: 1724 },
    { name: "LLOYD MUPUNGA", club: "NKUST", rating: 1724 },
    { name: "WILLARD SAMAMBWA", club: "NKETA", rating: 1721 },
    { name: "MBONGENI NDLOVU", club: "NKUST", rating: 1712 },
    { name: "DALITHEMBA NDLOVU", club: "TITANS", rating: 1708 },
    { name: "EMMANUEL MABOREKE", club: "BYO", rating: 1708 },
    // Add remaining players up to 500 as needed
  ];

  return (
    <Container className="py-3">
      <h2 className="text-center mb-4">
        Bulawayo Chess Association - Player Ratings
      </h2>
      <Button variant="primary" onClick={handleShowModal} className="mb-3">
        View Player List
      </Button>

      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Player Ratings (Top 500)</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: "60vh", overflowY: "auto" }}>
          <Table striped bordered hover responsive className="text-center">
            <thead className="table-dark">
              <tr>
                <th>Ranking</th>
                <th>Name</th>
                <th>Club</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {playerData.slice(0, 500).map((player, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{player.name}</td>
                  <td>{player.club}</td>
                  <td>{player.rating}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default PlayerList;
