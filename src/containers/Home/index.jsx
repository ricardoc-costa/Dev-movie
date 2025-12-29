import { useState, useEffect } from 'react'

import Button from '../../components/Button/index.jsx'
import api from '../../services/api'
import { Background, Info, Poster, Container, ContainerButtons } from './styles'

function Home() {
  const [movie, setMovie] = useState()

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results }
      } = await api.get('/movie/popular')

      setMovie(results[0])
    }

    getMovies()
  }, [])

  return (
    <>
      {movie && (
        <Background
          img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        >
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red={true}>Assista Agora</Button>
                <Button red={false}>Assista ao Trailer</Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img
                alt="cpa-do-filme"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Poster>
          </Container>
        </Background>
      )}
    </>
  )
}

export default Home
