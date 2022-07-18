import contextExports from './context.js';

function Home() {
    return (
        <contextExports.CardBootstrap
            cardWidth='45%'
            bgcolor="info"
            txtcolor="white"
            header="Welcome To The Bank"
            fontSizeHeader="2"
            titleFontSize="1.5"
            headerBgColor="#F65058FF"
            headerDisplay='flex'
            headerJustifyContent='center'
            titleDisplay='flex'
            titleJustify='center'
            title="For all your banking needs"
            bodyAlign="center"
            img="bank.png"
            imgDisplay='flex'
            imgJustify='center'
            imgClass="img-fluid"
            alt="Responsive image" />
    )

}

export default Home;