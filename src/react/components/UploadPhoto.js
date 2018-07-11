import React from 'react';
import {Form, Grid, Button, Icon} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {uploadPhoto} from "../../redux/actions/photo";

class UploadPhoto extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    handleSubmit(e) {
        e.preventDefault();
        const file = this.fileInput.current.files[0];
        if (this.props.uploadPhoto(file)) {
            this.fileInput.current.value = '';
        }
    }

    render() {
        return (
            <Grid.Row>
                <Grid.Column>
                    <h1>Upload Foto</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <label>Photo</label>
                            <input type="file" ref={this.fileInput} required/>
                        </Form.Field>
                        <Button type="submit">
                            <Icon name="send"/>
                            Send
                        </Button>
                    </Form>
                </Grid.Column>
                <br/>
            </Grid.Row>
        );
    }
}

const mapStateToProps = (state) => ({
    photos: state.photos
});

const mapDispatchToProps = (dispatch) => ({
    uploadPhoto: (photo) => dispatch(uploadPhoto(photo))
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadPhoto);
