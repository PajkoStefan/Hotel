import React, {Component} from 'react';

import Aux from "../../hoc/Auxilliary";
import Button from '@material-ui/core/Button';

import './Gallery.css';

const images = [
    {
        original: 'http://lorempixel.com/1000/600/nature/1/'
    },
    {
        original: 'http://lorempixel.com/1000/600/nature/2/'
    },
    {
        original: 'http://lorempixel.com/1000/600/nature/3/'
    }
];


class Gallery extends Component {

    state = {
        imgIndex: 0
    };


    changeImgRight = () => {

        if (this.state.imgIndex === 0) {
            this.setState({
                imgIndex: 1,
                displayImg: images[this.state.imgIndex].original
            });
        } else if ((images.length - 1) === this.state.imgIndex) {
            this.setState({
                imgIndex: 0,
                displayImg: images[this.state.imgIndex].original
            });
        } else {
            this.setState(prevState => {
                return {
                    imgIndex: prevState.imgIndex + 1,
                    displayImg: images[this.state.imgIndex].original
                }
            });
        }

    };

    changeImgLeft = () => {

        if (this.state.imgIndex === 0) {
            this.setState({
                imgIndex: images.length - 1,
                displayImg: images[this.state.imgIndex].original
            });
        } else {
            this.setState(prevState => {
                return {
                    imgIndex: prevState.imgIndex - 1,
                    displayImg: images[this.state.imgIndex].original
                }
            });
        }
    };

    render() {
        let displayImg = [...images];

        const left = '<';
        const right = '>';


        return (

            <div className="hotel-gallery row">

                <div className="col">

                    <div className="image-gallery w-100 hotel-gallery-img-height position-relative fixed-top">

                        <img className="header-pic"
                             src={displayImg[this.state.imgIndex].original}

                             alt="hotel"
                             width="100%"
                             height="100%"
                        />

                        <div className={
                            // classes.root +
                            'd-flex'}>

                            <div className="position-absolute top-50 pos-left">

                                <Button onClick={this.changeImgLeft}
                                        variant="outlined" color="primary"
                                        className="bg-white-20 font-weight-bold text-20px">
                                    {left}
                                </Button>

                            </div>

                            <div className="position-absolute top-50 pos-right">

                                <Button onClick={this.changeImgRight}
                                        variant="outlined" color="primary"
                                        className='bg-white-20 font-weight-bold text-20px'>
                                    {right}
                                </Button>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );


    }

};

export default Gallery;
