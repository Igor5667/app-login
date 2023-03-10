import React from 'react';
import Card from '../Ui/Card'
import Button from '../Ui/Button'


function ErrorModal(props){
    
    
    return(
        <>
            <div>
                <Card>
                    <header>
                        <h2>{props.msg}</h2>
                    </header>
                    <div>
                        <p>{props.msg}</p>
                    </div>
                    <footer>
                        <Button></Button>
                    </footer>
                </Card>
            </div>
        </>
    )
}

export default ErrorModal;


