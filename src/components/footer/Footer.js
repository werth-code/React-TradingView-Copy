import React, { useContext } from 'react'
import { Card } from 'react-bootstrap';
import { UserContext } from '../../App'


export default function Footer() {

  const footerArr = useContext(UserContext)   // This passes in our variable exported from App.j
  const cardTitles = footerArr.map( footer => {
 
    return (
        
        
            <Card class='col-md-3' style={{ border: 'none' }}>
              <Card.Body>
                <Card.Title>{footer.header}</Card.Title>
                {footer.values.map(ele => <Card.Text>{ele}</Card.Text>)}
              </Card.Body>
            </Card>
          
      
    )
  })

    return (
          <div class='row'>
            {cardTitles}
          </div>
    )
}
