import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Trending = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(`${ process.env.REACT_APP_BASE_URL }/trending/movie/week`, {
      params: { 
        language: 'en-US',
        page: 1,
      },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
      }
    }).then((response) => {
      console.log(response.data)
      setMovies(response.data.results.slice(0, 12));
    })
    .catch((error) => {
      console.error(error);
    });
  }, [])

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const day = dateObj.getDate(); 
    const month = dateObj.toLocaleString('en-GB', { month: 'short' });
    const year = dateObj.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <>
      <Container>
        <br />
        <h1 id='trending' className='text-white'>TRENDING MOVIES</h1>
        <br />
        <Row>
          { movies.map((result, index) => {
            return (
              <Col md={4} key={index}>
                <Card className='movieImage'>
                  <Image src={`${ process.env.REACT_APP_IMG_URL }/${result.poster_path}`} alt={ result.original_title } className='images'/>
                  <div className='bg-dark'>
                    <div className='m-2 p-2 text-white'>
                      <div className='icon-container'>
                        <Image 
                          className='icon' 
                          src={require('../assets/icons/star.svg').default} 
                          alt='Star Icon'
                        />
                        <Card.Text className='text-left'>{ result.vote_average.toFixed(1) }</Card.Text>
                      </div>
                      <Card.Title className='text-center'>{ result.title }</Card.Title>
                      <button className='watchlist-button'>+ Add to Watchlist</button>

                      <Card.Text className='text-left'>
                        Release Date: { formatDate(result.release_date) }
                      </Card.Text>
                    </div>
                  </div>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default Trending;