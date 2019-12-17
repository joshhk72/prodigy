import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import searchReducer from './search_reducer';
import modalReducer from './modal_reducer';
import maxPageReducer from './max_page_reducer';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  search: searchReducer,
  modal: modalReducer,
  maxPage: maxPageReducer
});