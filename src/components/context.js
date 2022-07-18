import React from 'react';
import Card from 'react-bootstrap/Card';

const UserContext = React.createContext(null);
const currentUserContext = React.createContext({name: '', email: '', password: '', balance: 0, index: 0, loginStatus: false});

function CardBootstrap(props) {
    function classes() {
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
        return 'card mb-3 ' + bg + txt;
    }
    return (
        <Card className={classes()} style={{maxWidth: props.cardWidth}}>
            <Card.Header className="card-header" style={{display: props.headerDisplay, justifyContent: props.headerJustifyContent, backgroundColor: props.headerBgColor, fontSize: props.fontSizeHeader + "em"}}>{props.header}</Card.Header>
            <Card.Body className="card-body" style={{textAlign: props.bodyContentAlign}}>
                <div className='bodyContainer' style={props.bodyContainerWidth ? {display:'flex', width: props.bodyContainerWidth, position: 'relative', margin: "0 auto"}: {}}>
                    {props.title && (<Card.Title className="card-title" style={{fontSize: props.titleFontSize + 'em', display: props.titleDisplay, justifyContent: props.titleJustify}}>{props.title}</Card.Title>)}
                    <br/>
                    {props.text && (<p className="card-text">{props.text}</p>)}
                    {props.body && (<div style={{justifyContent: props.bodyContentAlign, textAlign: props.bodyAlign}}>{props.body}</div>)}
                    <div style={{display: props.imgDisplay, justifyContent: props.imgJustify}}>
                        {props.img && (<img src={props.img} alt="" className={props.imgClass}></img>)}
                    </div>
                </div>
                    {props.status && (<div id='createStatus'>{props.status}</div>)}
            </Card.Body>
        </Card>
    );
}
const contextExports = {
    CardBootstrap,
    UserContext,
    currentUserContext
}
export default contextExports;
;