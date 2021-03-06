import * as AnnotationAPIUtil from '../util/annotation_api_util';

export const RECEIVE_ANNOTATION = "RECEIVE_ANNOTATION";
export const REMOVE_ANNOTATION = "REMOVE_ANNOTATION";
export const CLEAR_ANNOTATIONS = "CLEAR_ANNOTATIONS";

export const receiveAnnotation = annotation => ({
  type: RECEIVE_ANNOTATION,
  annotation
});

export const removeAnnotation = id => ({
  type: REMOVE_ANNOTATION,
  id
});

export const clearAnnotations = () => ({
  type: CLEAR_ANNOTATIONS
});

export const deleteAnnotation = id => dispatch => {
  return AnnotationAPIUtil.deleteAnnotation(id)
   .then(annotation => dispatch(removeAnnotation(annotation.id)))
};

export const createAnnotation = annotation => dispatch => {
  return AnnotationAPIUtil.createAnnotation(annotation)
    .then(newAnnotation => dispatch(receiveAnnotation(newAnnotation)))
};

export const updateAnnotation = annotation => dispatch => {
  return AnnotationAPIUtil.updateAnnotation(annotation)
    .then(annotation => dispatch(receiveAnnotation(annotation)));
};