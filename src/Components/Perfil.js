import React from "react";
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import foto from "../assets/mulher.jpg"
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import Button from "./Button";

export default function Perfil() {

    return (
    <>
        <div id="imagem">
            <Container fluid>
                <Row className="d-flex justify-content-center align-items-center text-center" style={{height: "100vh"}}>
                    <Col>
                        <img src={foto} alt="foto de perfil" />
                        <div className="d-flex justify-content-center" style={{gap: "40px"}}>
                            <FaInstagram color="white" size="40px"/>
                            <FaWhatsapp color="white" size="40px"/>
                            <FaFacebook color="white" size="40px"/>
                        </div>
                    </Col>
                    <Col>
                        <h1 className="title">Seu Nome </h1>
                        <h3 className="subtitle">Função</h3>
                        <div className="botoes">
                            <Button title="Sobre Mim">Sobre Mim</Button>
                            <Button title="Meus Projetos">Meus Projetos</Button>
                            <Button title="Trabalhe Comigo">Trabalhe Comigo</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
    )
}
    