import exp from "constants"
import Card from "."
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { H2 } from "../../styles/globalutils/headers";
import { MediaWidth } from "../../styles/constants";
import Rate from "../../styles/globalutils/rating/rating.component";

const CardWrapper = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: MediaWidth.desktopMax, min: MediaWidth.desktopMin },
          items: 8,
          slidesToSlide: 4,
        },
        tablet: {
          breakpoint: { max: MediaWidth.tabletMax, min: MediaWidth.desktopMin },
          items: 5,
          slidesToSlide: 2,
        },
        mobile: {
          breakpoint: { max: MediaWidth.phoneBig, min: MediaWidth.phoneSmall },
          items: 4,
          slidesToSlide: 2,
        },
        mobileSmall: {
          breakpoint: { max: MediaWidth.phoneSmall, min: 0 },
          items: 3,
          slidesToSlide: 1,
        }
      };


      const cards = [
        {
          title: 'Banana Jest',
          link: 'https://br.web.img3.acsta.net/pictures/20/03/04/09/02/4767346.jpg'
        },
        {
          title: 'De volta para o futuro',
          link: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/95/62/20122008.jpg'
        },
        {
          title: 'Avatar',
          link: 'https://pbs.twimg.com/media/FSUkmp7VEAAKeEK?format=jpg&name=4096x4096'
        },
        {
          title: 'Eu sou a lenda',
          link: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/o-filme-eu-sou-lenda-pode-ser-usado-nas-aulas-biologia-por-abordar-temas-como-doencas-virais-imunizacao-5bcf030bce2eb.jpg'
        },
        {
          title: 'O mentiroso',
          link: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/12/49/19872267.jpg'
        },
        {
          title: 'Medida provisória',
          link: 'https://s2.glbimg.com/EDMbHtySg9dR7GjvwRkeFDzIY8E=/https://wp-globofilmes.tsuru.glbimg.com/uploads/2020/05/MP-cartaz-P.jpg'
        },
        {
          title: 'Internet',
          link: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Internet_O_Filme.jpg/230px-Internet_O_Filme.jpg'
        },
        {
          title: 'A maldição da casa do lago',
          link: 'https://a-static.mlcdn.com.br/1500x1500/dvd-a-maldicao-da-casa-do-lago-filme-terror-canal-3/alojadediscos/239158/6cc1eb55693cec5bdb02f39906db6b56.jpg'
        },
        {
          title: 'Sonic 2',
          link: 'https://ingresso-a.akamaihd.net/prd/img/movie/sonic-2/fde04f56-1afb-4c71-9ff2-97dac723f8d8.jpg?v=20201127_1202'
        },
        {
          title: 'Titanic',
          link: 'https://images-na.ssl-images-amazon.com/images/I/71OZhB1BZXL.jpg'
        }
      ]

    return (
        <React.Fragment>
        <H2>Colocar Tipo de filme</H2>
        <Carousel 
                draggable={true}
                autoPlay={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
            >
       { cards.map((card)=>
            <Card title = {card.title} link={card.link}/>
            )
        }
            </Carousel>
            </React.Fragment>
    )
}

export default CardWrapper

