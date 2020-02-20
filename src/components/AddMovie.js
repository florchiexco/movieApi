import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class addMovie extends React.Component{
    render(){
        return(
            <>
                <h2 style={{"padding-top":70 ,"padding-left":200}}>Subir nueva película</h2>
                <Form style={{"padding-left":20}}>
                    <Form.Group>
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control type="text" placeholder="Título de la película" id="title"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Foto de la película</Form.Label>
                        <Form.Control type="text" placeholder="URL de la imagen" id="poster_path" />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Guardar
                    </Button>
                </Form>                
            </>
        )
    }
}