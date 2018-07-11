import {showLoading, hideLoading} from 'react-redux-loading-bar';
import axios from 'axios';
import swal from 'sweetalert2';

axios.defaults.baseURL = 'http://localhost:3333/api';

export const ADD_PHOTO = 'ADD_PHOTO';
export const CLEAR_PHOTOS = 'CLEAR_PHOTOS';

export const addPhoto = params => ({
    type: ADD_PHOTO,
    params
});

export const clearPhotos = () => ({type: CLEAR_PHOTOS});

export const fetchPhotos = () => async dispatch => {
    try {
        let photos = await axios.get('/photo').then(res => {
            dispatch(showLoading());
            return res;
        });
        photos = photos.data.data;
        dispatch(clearPhotos());
        setTimeout(() => {
            photos.forEach((photo) => {
                dispatch(addPhoto(photo));
            });
            dispatch(hideLoading());
        }, 1000);
    } catch (e) {
        dispatch(clearPhotos());
        console.error(e);
    }
}

export const uploadPhoto = (photo) => {
    let data = new FormData();
    data.append('photo', photo);

    return (dispatch) => {
        axios.post('/photo', data)
            .then(res => {
                swal({
                    title: 'Sukses',
                    type: 'success',
                    text: 'Photo berhasil diupload!'
                });
                dispatch(fetchPhotos());
            });
        return true;
    }
}

export const deletePhoto = (id) => {
    return dispatch => {
        swal({
            title: 'Konfirmasi',
            text: 'Apakah yakin ada akan menghapus',
            type: 'warning',
            showCancelButton: true,
        }).then((res) => {
            if (res.value) {
                axios.delete(`/photo/${id}`).then((response) => {
                    dispatch(fetchPhotos());
                });
                swal({
                    title: 'Sukses',
                    type: 'success',
                    text: 'Photo berhasil dihapus'
                });
            }
        });
    }
}
