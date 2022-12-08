import { Button, Card, Col, Form, FormLabel, Row } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"
import { useState } from "react";


const AddAppointmnet = ({lastId,onSendAppointment}) => {

    const clearData={
        firstname:'',
        lastname:'',
        aptDate:'',
        aptTime:'',
        aptnotes:'',
    }

    let [toggleForm,settoggleForm]=useState(false);
    let [FormData,setFormData]=useState(clearData);

    function formDataPublish(){
            const AppoinmentInfo={
                id:lastId+1,
                firstname: FormData.firstname,
                lastname:FormData.lastname,
                aptDate:FormData.aptDate+' '+FormData.aptTime,
                aptnotes:FormData.aptnotes
            }
            onSendAppointment(AppoinmentInfo);
            setFormData(clearData);
            settoggleForm(!toggleForm);

    }

    return (
        <>
            <Col md="8">
                <Card className="mb-3">
                    <Card.Header> Add Appointmnet
                        <Button size="sm" className="small float-end" onClick={()=>{settoggleForm(!toggleForm)}}>+</Button>
                    </Card.Header>
                   {toggleForm &&
                        <Card.Body>

                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col}>
                                        <FormLabel>First Name:</FormLabel>
                                        <Form.Control type="text" placeholder="First Name" id='firstname'
                                        onChange={(event)=>setFormData({...FormData, firstname:event.target.value})}/>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <FormLabel>Last Name:</FormLabel>
                                        <Form.Control type="text" placeholder="Last Name" id='lastname'
                                            onChange={(event) => setFormData({ ...FormData, lastname: event.target.value })} />
                                         
                                    </Form.Group>
                                </Row>

                                <Form.Group as={Col} className="mb-3">
                                    <FormLabel>Appintment Date</FormLabel>
                                    <Form.Control type="Date" id='aptDate'
                                        onChange={(event) => setFormData({ ...FormData, aptDate: event.target.value })} />
                                </Form.Group>

                                <Form.Group as={Col} className="mb-3">
                                    <FormLabel>Appintment Time</FormLabel>
                                    <Form.Control type="time" id='aptTime'
                                        onChange={(event) => setFormData({ ...FormData, aptTime: event.target.value })} />
                                </Form.Group>

                                <Form.Group as={Col} className="mb-3">
                                    <FormLabel>comments</FormLabel>
                                    <Form.Control as="textarea" placeholder="comments" id='aptnotes'
                                        onChange={(event) => setFormData({ ...FormData, aptnotes: event.target.value })} />
                                </Form.Group>
                                <Button variant="primary" onClick={formDataPublish}>Submit</Button>
                            </Form>
                        </Card.Body>
                   }
                </Card>

            </Col>
        </>
    )
}

export default AddAppointmnet;