import { RiDeleteBin6Line } from 'react-icons/ri';
import { ListGroupItem, ListGroup, Button } from "react-bootstrap";

const AppointmentInfo=({appointment,onDeleteAppointment})=>{
    return(
        <>
            <ListGroup.Item>
                <p><small>Date: </small>{appointment.aptDate}</p>
                <p><strong>First Name: </strong>{appointment.firstname}</p>
                <p><strong>Last Name: </strong>{appointment.lastname}</p>
                <p><strong>Notes: </strong>{appointment.aptnotes}</p>
                <Button variant="danger" onClick={()=>onDeleteAppointment(appointment.id)}><RiDeleteBin6Line className='mb-1'/> Delete</Button>
            </ListGroup.Item>
        </>
    )
}

export default AppointmentInfo;