import {Container, Row, Col} from 'react-bootstrap';
import emailjs from '@emailjs/browser';

export default function contact(){
    const form = useRef();

    function sendEmail(e){
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_urkpyze', form.current, 'lZSHyMqWkQSUR96Fj')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        e.target.reset();
        
    };
    return(
        <Container className = "contactUs mt-12 pt-12 pl-12 h-screen flex flex-col sm:flex-row sm:items-begin font-serif bg-cream">
                <Row className = "mb-5 mt-3 sm:ml-12 sm:pl-12 mr-12 ">
                    <Col Lg = '8'>
                        <div className = "mt-12"> </div>
                        <h1 className = "bgH mb-10 text-3xl">
                            Contact Us
                        </h1>
                        <address> 
                            <strong className = "" > Email: sweetbatterbakesct@gmail.com</strong>
                            <br />
                            <br />
                            <p>
                                <strong> Instagram: @sweetbatterbakes </strong>
                                
                            </p>

                        </address>
                        <p className = "pt-3">
                            Please DM @sweetbatterbakes on Instagram to place an order!
                        </p>
                    </Col>
                </Row>
          

                <Row className =" pt-10 mt-10 w-full sm:items-center">
                    
                    <Col lg = "7" className = " align-items-center w-full ">
                        <form ref = {form} className = "contact__form w=100"  onSubmit={sendEmail}>
                            <Row>
                                <Col lg = '6' className = "form-group w-full">
                                    <input
                                        className = "form-control bg-blush text-red-900 border-hidden rounded-md sm:ml-12 w-5/6 sm:w-3/4"
                                        id = "name"
                                        name = "name"
                                        placeholder = "Name"
                                        type = "text"
                                    />
                                </Col>
                                <br />
            

                                <Col lg = '6' className = "form-group">
                                    <input
                                        className = "form-control bg-blush text-red-900 border-hidden rounded-md sm:ml-12 w-5/6 sm:w-3/4"
                                        id = "email"
                                        name = "email"
                                        placeholder = "Email"
                                        type = "enail"
                                    />
                                </Col>
                            
                            </Row>
                            <br/>
                            <textarea className = "form-control bg-blush text-red-900 border-hidden rounded-md sm:ml-12 w-5/6 sm:w-3/4" id= "message"
                                            name = "message"
                                            placeholder = "Message"
                                            rows = '5'
                            ></textarea>

                            <br />
                            <Row>
                                <Col lg = '12' className = "form-group"> 
                                    <button className = "btn1 ac_btn w-5/6 sm:w-3/4 sm:ml-12" type = "submit"> Send</button>
                                
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            

        </Container>
        
    )
}