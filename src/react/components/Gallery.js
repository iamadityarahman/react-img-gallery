import React from 'react';
import {connect} from 'react-redux';
import {Grid, Card} from 'semantic-ui-react';
import {clearPhotos, fetchPhotos} from '../../redux/actions/photo';
import PhotoCard from './PhotoCard';

class Gallery extends React.Component {
    componentDidMount() {
        this.props.fetchPhotos();
    }

    render() {
        return (
            <div>
                <Grid.Row>
                    <Grid.Column>
                        <Card.Group itemsPerRow={4}>
                            {
                                this.props.photos.map((val, i) => (
                                    <PhotoCard
                                        key={i}
                                        id={val._id}
                                        filename={val.fileName}
                                    />
                                ))
                            }
                        </Card.Group>
                    </Grid.Column>
                </Grid.Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    photos: state.photos
});

const mapDispatchToProps = dispatch => {
    return {
        fetchPhotos: () => dispatch(fetchPhotos()),
        clearPhotos: () => dispatch(clearPhotos())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery, PhotoCard);
