import React, { Component } from 'react'
import StackGrid, {transitions} from 'react-stack-grid'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import sizeMe from 'react-sizeme'

function Image({ id, image, contents }) {
    return (
        <Link style={{ textDecoration: 'none' }}
        to={{
            pathname: `/${id}`,
            state: {
                id: id,
                image: image,
                contents: contents
            }
        }}
        >
        
            <div>
                <h4 style={{fontSize: '24px', fontFamily: 'TMONBlack'}}>{contents}</h4>
                <img src={image} alt="test" />
            </div>
        </Link>
    )
}

Image.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    contents: PropTypes.string.isRequired
}

class Home extends Component {
    render(){
 
        return (
            <Link to={{
//                pathname: `/service/${id}`
            }}>
                <StackGrid columnWidth='25%'>
                    //ex : 각각의 item
                {Example.map(ex => 
                    <Image 
                    key={ex.image} 
                    image={ex.image} 
                    id={ex.id} contents={ex.contents} ></Image>    
                )}
            </StackGrid>

            </Link>
        )
    }
}

const Example = [
    {
        id: "1",
        image: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
        contents: "detection"
    },
    {
        id: "2",
        image: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
        contents: "segmentation"
    },
    {
        id: "3",
        image: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
        contents: "sod"
    },
    {
        id: "4",
        image: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
        contents: "gan"
    }
    
]

export default sizeMe()(Home)
