import Carousel from 'react-bootstrap/Carousel';
import Headline from '../Headline/Headline';

function UncontrolledExample(props) {
    const { blogs } = props;
    return (
        <Carousel indicators={false} interval={3000} touch={true}>
            {blogs && blogs.map((blog, index) => {
                return <Carousel.Item>
                    <Headline blog={blog} />
                </Carousel.Item>
            })}
        </Carousel>
    );
}

export default UncontrolledExample;