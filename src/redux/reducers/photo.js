import {ADD_PHOTO, CLEAR_PHOTOS} from "../actions/photo";

const photos = (state = [], action) => {
    switch (action.type) {
        case ADD_PHOTO:
            return [
                ...state,
                action.params
            ];

        case CLEAR_PHOTOS:
            return [];

        default:
            return state;
    }
}

export default photos;
