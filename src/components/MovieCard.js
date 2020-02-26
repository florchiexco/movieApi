import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import opcional from '../img/default.gif'
import MovieService from "../service/movieService.js";

export default class MovieCard extends React.Component{


    render(){
        let url= "https://image.tmdb.org/t/p/w500";
        const {movie}= this.props;
        let imagen;
        if (movie.image) {
             imagen = url+movie.image
        }else{
            imagen = opcional
        }
        
        return (
            <>
                    <Row>
                        <Col sm-3="true" >
                            <Card style={{ width: '18rem', marginBottom: 15 }} className="bg-dark text-white">
                                <Card.Img src={movie.title_original ? url +movie.image : movie.poster_path} style={{width: '100%'}} alt="Card image" />
                                <Card.ImgOverlay>
                                <Card.Title style={{"color": "yellow"}}>{movie.title}</Card.Title>
                                <form onSubmit={this.props.addFavMovie(movie)}>
                                <input type="hidden" ref={this.idMovie} value={movie.id}/>
                                <Button variant="outline-warning" type="submit" id={movie.id} >★</Button>
                                </form>
                                </Card.ImgOverlay>
                                <Card.Footer className="text-muted" style={{textAlign:'center'}}>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
            </>
        )
    }
}