import { Text, Stack, Rating, Grid, Container, MediaQuery, Overlay, Title } from "@mantine/core";
import { TMDB_IMG_URL } from '../config';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IMovie } from '../types/movie';

interface ILatestMovieProps {
    movie: IMovie | null;
}

export default function LatestMovie(props: ILatestMovieProps) {
    return (
        <>
            <Grid>
                <Grid.Col span={1}></Grid.Col>
                <Grid.Col span="auto">
                    <Container fluid className='now-playing' style={{ padding: 0, margin: 0, height: '100%', width: '100%' }}>
                        {
                            props.movie?.backdrop_path && (
                                <LazyLoadImage
                                    alt='Latest Movie'
                                    style={{ marginRight: 'auto', marginLeft: 'auto', width: '100%' }}
                                    src={`${TMDB_IMG_URL}/w1280${props.movie.backdrop_path}`} />
                            )
                        }
                    </Container> 
                </Grid.Col>
            </Grid>
            <MediaQuery smallerThan="lg" styles={{ display: 'none' }}>
                <Overlay opacity={0} style={{ marginLeft: '7rem', marginBottom: '7rem' }}>
                    <Stack align="flex-start" justify="center" style={{ height: '100%', width: '50%' }}>
                        <Title order={2}>{props.movie?.original_title}</Title>
                        <Rating value={props.movie?.vote_average ? props.movie?.vote_average / 2 : 0} fractions={50} readOnly />
                        <Text ta="left" fz="lg">
                            {props.movie?.overview}
                        </Text>
                    </Stack>
                </Overlay>
            </MediaQuery>

            <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                <Stack mt={20} align="flex-start" justify="center" style={{ width: '100%' }}>
                    <Title order={2}>{props.movie?.original_title}</Title>
                    <Rating value={props.movie?.vote_average ? props.movie?.vote_average / 2 : 0} fractions={50} readOnly />
                    <Text ta="left" fz="lg">
                        {props.movie?.overview}
                    </Text>
                </Stack>
            </MediaQuery>
        </>
)
};