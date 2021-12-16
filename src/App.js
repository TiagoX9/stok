import { useState } from 'react'
import { FaTwitter, FaDiscord, FaFileAlt, FaTree } from 'react-icons/fa';
import { Container, Row, Col, Image, Modal, Table } from 'react-bootstrap';
import './App.css';
import sammy from './image.png'
import pdf from './Sammy_Floofpaper.pdf'

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
 <Container fluid >
      <Row style={{marginTop: 40}} className="justify-content-md-center">
        <Col lg={3} md={3} xs={3} ></Col>
        <Col sm lg={3} md={3} xs={3} className='text-center'>
        <a href='https://twitter.com/Samoyed_ADA' target='_blank' rel="noreferrer"><FaTwitter color={'white'} size={60}/></a>
        </Col>
        <Col sm lg={3} md={3} xs={3} className='text-center'>
        <a href='https://discord.gg/vBsdfg8Z' target="_blank" rel="noreferrer"><FaDiscord color={'white'} size={60}/></a>
        </Col>
        <Col sm lg={3} md={3} xs={3}></Col>
      </Row>
      <Row style={{marginTop: 60}} className="justify-content-md-center">
        <Col></Col>
        <Col className='text-center'>
        <h1 className="text">$SAMMY</h1>
        <Image style={{marginRight: 10, marginTop: -40}} src={sammy}/>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col className='text-center'>
        <p style={{color: 'white', fontWeight: 'bold', fontSize: '3vw'}}>Policy ID:</p>
        </Col>
      </Row>
      <Row>
        <Col className='text-center'>
        <p style={{color: 'white', fontSize: '12px'}}>dd1ecaae570f4a90b8db10ce73c707389a6f122972f5eaba844f6957</p>
        </Col>
      </Row>
      <Row style={{marginTop: 10}}>
        <Col className='text-center'>
          <FaTree onClick={handleShow} color={'green'} size={'15vh'}/>
        <h1 id="tokenomics" className="tokenomics">SAMMY PARK</h1>
        </Col>
        <Col className='text-center'>
        <a href={pdf} target="_blank" rel="noreferrer"><FaFileAlt color={'gold'} size={'15vh'}/></a>
        <h1 id="tokenomics" className="tokenomics">FLOOF-PAPER</h1>
        </Col>
      </Row>
      <Row style={{height: '100px'}}>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="tokenomics" style={{color: 'black'}}>$Sammy Park</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
            <Row>
              <Col className='text-center' style={{fontWeight: 'bold'}}>BE SURE TO USE ONLY ONE OF THESE WALLETS!</Col>
            </Row>
            <Row style={{ marginTop: 20}}> 
              <Col style={{fontWeight: 'bold'}} className='text-center'>
                <a href='https://daedaluswallet.io/' target="_blank" rel='noreferrer'>https://daedaluswallet.io/</a>
              </Col>
            </Row>
            <Row> 
              <Col style={{fontWeight: 'bold'}} className='text-center'>
                <a href='https://ccwallet.io/' target="_blank" rel='noreferrer'>https://ccwallet.io/</a>
              </Col>
            </Row>
            <Row>
              <Col style={{fontWeight: 'bold'}} className='text-center'>
                <a href='https://namiwallet.io/' target="_blank" rel='noreferrer'>https://namiwallet.io/</a>
              </Col> 
            </Row>
            <Row>
              <Col style={{fontWeight: 'bold'}} className='text-center'>
              <a href='https://yoroi-wallet.com/#/' target="_blank" rel='noreferrer'>https://yoroi-wallet.com/#/</a>
              </Col> 
            </Row>
            <Row>
              <Col className='text-center' style={{fontWeight: 'bold', marginTop: 20}}>DO NOT SEND FROM AN EXCHANGE
              </Col>
            </Row>
            <Row>
              <Col className='text-center' style={{fontWeight: 'bold', marginTop: 20}}>Must send {'>='} 4 ADA per transaction 
              </Col>
            </Row>
            <Row>
              <Col className='text-center'>For those of you bad at math, that means at least 4 ADA!
              </Col>
            </Row>
            <Row>
              <Col className='text-center' style={{marginTop: 20}}>As long as you send at least 4 ADA you will be returned a random chance of: 
              </Col>
            </Row>
            <Table striped bordered hover size="sm">
            <tbody>
              <tr>
                <td className='text-center'>10%</td>
                <td className='text-center'>50,000,000 $SAMMY</td>
              </tr>
              <tr>
                <td className='text-center'>25%</td>
                <td className='text-center'>100,000,000 $SAMMY</td>
              </tr>
              <tr>
                <td className='text-center'>25%</td>
                <td className='text-center'>150,000,000 $SAMMY</td>
              </tr>
              <tr>
                <td className='text-center'>20%</td>
                <td className='text-center'>200,000,000 $SAMMY</td>
              </tr>
              <tr>
                <td className='text-center'>15%</td>
                <td className='text-center'>250,000,000 $SAMMY</td>
              </tr>
              <tr>
                <td className='text-center'>4%</td>
                <td className='text-center'>500,000,000 $SAMMY</td>
              </tr>
              <tr>
                <td className='text-center'>1%</td>
                <td className='text-center'>1,000,000,000 $SAMMY</td>
              </tr>
            </tbody>
            </Table>
            <Row>
              <Col className='text-center' style={{marginTop: 20}}>During the first epoch of launch, the top two $SAMMY returns will be doubled! 
              </Col>
            </Row>
            <Row>
              <Col className='text-center' style={{fontWeight: 'bold', marginTop: 20}}>Total Supply for Faucet: 100T $SAMMY
              </Col>
            </Row>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default App;
