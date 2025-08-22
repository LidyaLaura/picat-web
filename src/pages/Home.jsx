import { Box, Heading } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const catTopLeftImage = '/assets/light theme logo.png';
const catBottomRightImage = '/assets/light theme logo.png';

const PageStyles = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Jersey+20&display=swap');
      .page-container {
        position: relative; 
        background-color: #ffffff; 
        min-height: 100vh; 
        overflow: hidden; 
      }

      /* Style umum untuk kedua gambar kucing */
      .bg-cat {
        /* Kunci #1: Mengeluarkan gambar dari alur normal */
        position: absolute; 
        /* Kunci #2: Posisikan di layer 1 (di belakang konten) */
        z-index: 1; 
        width: 280px; 
        height: auto;
        pointer-events: none; 
      }

      .cat-top-left {
        top: -120px;  
        left: -90px; 
        width: 450px;  
        transform: rotate(-230deg);
      }

      .cat-bottom-right {
        bottom: -90px; 
        right: -120px; 
        width: 450px;
      
      }

      .header-wrapper, .content {
        position: relative; 
        z-index: 2; 
      }

      .content {
        display: flex;
        justify-content: center;
        flex-wrap: wrap; 
        gap: 20px;
        padding: 50px 20px; 
      }

      .card {
        width: 250px;
        height: 500px;
        background-color: rgba(255, 255, 255, 0.7); 
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 50px;
        color: #333; 
        font-family: 'Jersey 20', sans-serif; 
        // backdrop-filter: blur(5px); 
        box-shadow: 0 4px 15px rgba(0,0,0,0.05); 
    `}
  </style>
);



const MainPage = () => {

  function changePage(url){
    window.location = url;
  }

  return (
    <>
      <PageStyles />
      
      <div className="page-container">
        <img 
          src={catTopLeftImage}
          alt="Dekorasi kucing di kiri atas" 
          className="bg-cat cat-top-left" 
        />
        <img 
          src={catBottomRightImage}
          alt="Dekorasi kucing di kanan bawah" 
          className="bg-cat cat-bottom-right" 
        />

        <div className="header-wrapper">
          <Navbar />
        </div>
        
        <main className="content">
          <div className="card" onClick={() => changePage('Movie')} >Movies</div>
          <div className="card" onClick={() => changePage('Music')} >Music</div>
          <div className="card" onClick={() => changePage('Book')} >Books</div>
        </main>
      </div>
    </>
  );
};

export default MainPage;
