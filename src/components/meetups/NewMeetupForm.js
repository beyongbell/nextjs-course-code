import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm (props) {
    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = event.target.title.value;
        const enteredImage = event.target.image.value;
        const enteredAddress = event.target.address.value;
        const enteredDescription = event.target.description.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };

        props.onAddMeetup(meetupData);
    }

    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" required id='title' />
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Meetup Image</label>
                <input type="url" required id='image' />
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Address</label>
                <input type="text" required id='address' />
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Description</label>
                <textarea id="description" rows="5"></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
}

export default NewMeetupForm;