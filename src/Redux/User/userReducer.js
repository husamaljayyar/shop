import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_GET_PROFILE_START,
  USER_GET_PROFILE_SUCCESS,
  USER_GET_PROFILE_FAILED,
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_UPDATE_PROFILE_START,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAILED,
  ADD_REVIEW_START,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILED,
  ADD_REVIEW_RESET,
  USER_LOGOUT_SUCCESS,
} from "./userTypesConstants";

export const userReducer = (
  initialState = {
    user: {
      _id: "",
      name: "",
      email: "",
      token: "",
    },
    userProfile: {
      user: {},
    },
    addingReview: {
      seccess: false,
      isLoading: false,
      error: ""
    },
    success: false,
    isLoading: false,
    error: "",// in case existing error add here and next error view
  },
  action
) => {
  switch (action.type) {
    /** LOGIN Action */
    case USER_LOGIN_START:
      return {
        ...initialState,
        isLoading: true,
      };

    case USER_LOGIN_SUCCESS:
      return {
        user: action.payload,
        isLoading: false,
        success: true,
      };

    case USER_LOGIN_FAILED:
      return {
        ...initialState,
        error: action.payload,
        isLoading: false,
      };

    /** Register Action */
    case USER_REGISTER_START:
      return {
        ...initialState,
        isLoading: true,
      };

    case USER_REGISTER_SUCCESS:
      return {
        user: action.payload,
        isLoading: false,
        success: true,
      };

    case USER_REGISTER_FAILED:
      return {
        ...initialState,
        error: action.payload,
        isLoading: false,
      };

    /** Update profile Action */
    case USER_UPDATE_PROFILE_START:
      return {
        ...initialState,
        isLoading: true,
      };

    case USER_UPDATE_PROFILE_SUCCESS:
      return {
        user: action.payload,
        isLoading: false,
        success: true,
      };

    case USER_UPDATE_PROFILE_FAILED:
      return {
        ...initialState,
        error: action.payload,
        isLoading: false,
      };

    /** Get profile Action */
    case USER_GET_PROFILE_START:
      return {
        ...initialState,
        userProfile: {
          isLoading: true,
        },
      };

    case USER_GET_PROFILE_SUCCESS:
      return {
        ...initialState,
        userProfile: {
          user: action.payload,
          isLoading: false,
          success: true,
        },
      };

    case USER_GET_PROFILE_FAILED:
      return {
        ...initialState,

        userProfile: {
          error: action.payload,
          isLoading: false,
        },
      };
    
    /* Add Review */
    case ADD_REVIEW_START: 
    return {
      ...initialState, 
      addingReview: {
        isLoading: true
      }
    }
    case ADD_REVIEW_SUCCESS:
      return {
        ...initialState,
        addingReview: {
          isLoading: false,
          success: action.payload,

        }
      }
    case ADD_REVIEW_FAILED:
      return {
        ...initialState,
        addingReview: {
          error: action.payload,
          isLoading: false,
        },
      }
    case ADD_REVIEW_RESET:
      return {
        ...initialState,// valuse old
        addingReview: {  // new value
          seccess: "",
          error:  "",
          isLoading: false,

        },
      }

    /** Logout Action */
    case USER_LOGOUT_SUCCESS:
      return {
        user: {
          _id: "",
          name: "",
          email: "",
          token: "",
        },
      };

    default:
      return initialState;
  }
};
