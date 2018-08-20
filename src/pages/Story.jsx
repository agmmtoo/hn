import { useParams } from 'react-router-dom';

export default function Post() {
    const { id } = useParams();
    return (
        <div>Post {id}</div>
    );
}