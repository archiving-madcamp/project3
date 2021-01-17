import React, { Component } from 'react'
import StackGrid, {transitions, easings} from 'react-stack-grid'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from '../App.css'

const { scaleDown } = transitions;


function Image({ id, image, mood }) {
    return (
        <Link
        to={{
            pathname: `/service/${id}`,
            state: {
                id: id,
                image: image,
                mood: mood
            }
        }}
        >
        
            <div className={styles.pic}>
                <h2>testing:{id}</h2>
                <h4>mood:{mood}</h4>
                <img src={image} alt="test" />
            </div>
        </Link>
    )
}

Image.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    mood: PropTypes.string.isRequired
}

class Service extends Component {
    render(){
        return (
            <Link to={{
//                pathname: `/service/${id}`
            }}>
                <StackGrid columnWidth="25%">
                    //ex : 각각의 item
                {Example.map(ex => 
                    <Image 
                    key={ex.image} 
                    image={ex.image} 
                    id={ex.id} mood={ex.mood} ></Image>    
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
        mood: "happy"
    },
    {
        id: "2",
        image: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
        mood: "sad"
    },
    {
        id: "3",
        image: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
        mood: "soso"
    },
    {
        id: "4",
        image: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
        mood: "bad"
    }
    
    
]

export default Service