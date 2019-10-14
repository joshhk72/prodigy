import * as AnnotationAPIUtil from '../util/annotation_api_util';

export const RECEIVE_ANNOTATION = "RECEIVE_ANNOTATION";
export const REMOVE_ANNOTATION = "REMOVE_ANNOTATION";

export const receiveAnnotation = tempAnnotation => ({
  type: RECEIVE_ANNOTATION,
  tempAnnotation
});

export const removeAnnotation = id => ({
  type: REMOVE_ANNOTATION,
  id
});

export const createAnnotation = annotation => dispatch => {
  return AnnotationAPIUtil.createAnnotation(annotation)
    .then(newAnnotation => dispatch(receiveAnnotation(newAnnotation)))
};