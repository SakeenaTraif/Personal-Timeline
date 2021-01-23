import data from '../data';
import TimelineItem from './TimelineItem'
import '../styles.css';

const Container = () =>

        data.length > 0 && (
        <div className="timeline-container">
            {data.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

    export default Container;