import './CardsProps.css'

const Card = (props) => {
    return (
        <div className='cards-props'>
            
                <h2 className='title'> {props.nameHero}</h2>
                <div className='centerStyle'>
                    <h3>edad: {props.age}</h3>
                <h3>identidad secreta: {props.Identity}</h3>
                </div>
                
                <div className='endStyle'>
                    
                        {
                            props.powers.map(poder => {
                                
                                return <h4>{poder}</h4>
                            })
                        }
                    
                </div>
               
        </div>
    );
} 
  

export default Card;