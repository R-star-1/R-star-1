import Card from '../Card';
import Image1 from '../Images/image1.jpg'
import Image2 from '../Images/image2.jpg';
import Image3 from '../Images/Image3.jpg';
import Image4 from '../Images/Image4.jpg';

const CardCollections = () => {
    return (
        <div className='Container'>
            <Card image={Image1} title="squirrel Image" className="Card" paragraph="squirrel stock photos and images available or search for squirrel nuts or funny squirrel to find more great stock photos and pictures." />
            <Card image={Image2} title="nature image1 " className="Card" paragraph="Find Natural text stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection." />
            <Card image={Image3} title="nature image2" className="Card" paragraph="Your Nature Message stock images are ready. Download all free or royalty-free photos and images. " />
            <Card image={Image4} title="nature image3" className="Card" paragraph="It is always worth taking the scenic route." />
        </div>
    );
}
export default CardCollections;