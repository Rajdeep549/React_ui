import 'bootstrap/dist/css/bootstrap.min.css'
import { BsFillCalendarCheckFill } from 'react-icons/bs'
import {  Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Search from './components/Search';
import AddAppointmnet from './components/AddAppointment';
import AppointmentInfo from './components/AppoinmentInfo';
import { useCallback, useEffect, useState } from 'react';


function App() {

  let [appoinmentList,setAppointmentList]=useState([]);
  let [query,setQuery]=useState("");
  let [sortBy,setsortBy]=useState('firstname');
  let [orderBy,setorderBy]=useState('asc');


  const filteredappoinment=appoinmentList.filter(
    item=>{
      // if(item.firstname==undefined) console.log("hello");
      return(
        item.firstname?.toLowerCase().includes(query.toLocaleLowerCase())||
        item.lastname?.toLowerCase().includes(query.toLocaleLowerCase())||
        item.aptnotes?.toLowerCase().includes(query.toLocaleLowerCase())
      
      )
    }
  ).sort((a,b)=>{
    let order=(orderBy==="asc")?1:-1;
    return(
      a[sortBy]?.toLowerCase() <b[sortBy]?.toLowerCase()?-1*order:1*order
    )
  })
 
  const fetchData=useCallback(()=>{
    fetch('./data.json')
    .then(response=>response.json())
    .then(data=>{
      setAppointmentList(data)
    })
  },[])

  useEffect(()=>{
    fetchData()
  },[fetchData])
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1 className='text-center fw-light mt-3'><BsFillCalendarCheckFill /> Appoinments</h1>
            
          </Col>
        </Row>
        <Row className='justify-content-center'>  
         <AddAppointmnet 
         onSendAppointment={myappointment=>setAppointmentList([...appoinmentList,myappointment])} 
         lastId={appoinmentList.reduce((max,item)=>Number(item.id)>max?Number(item.id):max,0)}/>
         </Row>
        <Row className='justify-content-center'>
          <Col md={4}>
            <Search 
            query={query}
             onQueryChange={myQuery=>setQuery(myQuery)}
             orderBy={orderBy}
              onOrderByChange={mysort => setorderBy(mysort)}
              sortBy={sortBy}
              onsortByChange={mysort => setsortBy(mysort)}
             />
          </Col>
        </Row >
        <Row className='justify-content-center'>
          <Col md='8'>
            <Card className='mb-3'>
              <Card.Header>Appoinments</Card.Header>
              <ListGroup variant='flush'>
                {filteredappoinment.map(appointment =>(
                  <AppointmentInfo key={appointment.id} appointment={appointment}
                  onDeleteAppointment={
                  appointmentId=>setAppointmentList(appoinmentList.filter(
                    appointment => appointment.id !== appointmentId
                  )) 
                 
                  }/>
                ))}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
