import React from 'react';
import {Card, Image, Icon, Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {clearPhotos, fetchPhotos, deletePhoto} from "../../redux/actions/photo";

class PhotoCard extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this, this.props.id);
    }

    handleDelete(id, e) {
        e.preventDefault();
        this.props.deletePhoto(id);
    }

    render() {
        return (
            <Card>
                <Image
                    src={`http://localhost:3333/photos/${this.props.filename}`}
                    style={{height: '200px'}}
                />
                <Card.Content>
                    <Card.Description>{this.props.filename}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button onClick={this.handleDelete} fluid color='red'>
                        <Icon name="trash"/>
                        Hapus
                    </Button>
                </Card.Content>
            </Card>
        );
    }
}

const mapStateToProps = (state) => ({
    photos: state.photos
});

const mapDispatchToProps = dispatch => {
    return {
        fetchPhotos: () => dispatch(fetchPhotos()),
        clearPhotos: () => dispatch(clearPhotos()),
        deletePhoto: (id) => dispatch(deletePhoto(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoCard);
