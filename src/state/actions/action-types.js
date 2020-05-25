/* eslint-disable sort-keys */
const ActionTypes = {
  ADD_COMPANION_WINDOW: 'mirador/ADD_COMPANION_WINDOW',
  UPDATE_COMPANION_WINDOW: 'mirador/UPDATE_COMPANION_WINDOW',
  REMOVE_COMPANION_WINDOW: 'mirador/REMOVE_COMPANION_WINDOW',
  TOGGLE_TOC_NODE: 'mirador/TOGGLE_TOC_NODE',
  UPDATE_WINDOW: 'mirador/UPDATE_WINDOW',
  HIGHLIGHT_ANNOTATION: 'mirador/HIGHLIGHT_ANNOTATION',
  REQUEST_ANNOTATION: 'mirador/REQUEST_ANNOTATION',
  RECEIVE_ANNOTATION: 'mirador/RECEIVE_ANNOTATION',
  RECEIVE_ANNOTATION_FAILURE: 'mirador/RECEIVE_ANNOTATION_FAILURE',
  DESELECT_ANNOTATION: 'mirador/DESELECT_ANNOTATION',
  SELECT_ANNOTATION: 'mirador/SELECT_ANNOTATION',
  TOGGLE_ANNOTATION_DISPLAY: 'mirador/TOGGLE_ANNOTATION_DISPLAY',

  FOCUS_WINDOW: 'mirador/FOCUS_WINDOW',
  SET_WORKSPACE_FULLSCREEN: 'mirador/SET_WORKSPACE_FULLSCREEN',
  SET_WORKSPACE_VIEWPORT_POSITION: 'mirador/SET_WORKSPACE_VIEWPORT_POSITION',
  TOGGLE_WORKSPACE_EXPOSE_MODE: 'mirador/TOGGLE_WORKSPACE_EXPOSE_MODE',
  ADD_MANIFEST: 'mirador/ADD_MANIFEST',
  ADD_WINDOW: 'mirador/ADD_WINDOW',
  ADD_ERROR: 'mirador/ADD_ERROR',
  IMPORT_CONFIG: 'mirador/IMPORT_CONFIG',
  IMPORT_MIRADOR_STATE: 'mirador/IMPORT_MIRADOR_STATE',
  SET_CANVAS: 'mirador/SET_CANVAS',
  MAXIMIZE_WINDOW: 'mirador/MAXIMIZE_WINDOW',
  MINIMIZE_WINDOW: 'mirador/MINIMIZE_WINDOW',
  UPDATE_WINDOW_POSITION: 'mirador/UPDATE_WINDOW_POSITION',
  SET_WINDOW_SIZE: 'mirador/SET_WINDOW_SIZE',
  REMOVE_WINDOW: 'mirador/REMOVE_WINDOW',
  PICK_WINDOWING_SYSTEM: 'mirador/PICK_WINDOWING_SYSTEM',
  REQUEST_MANIFEST: 'mirador/REQUEST_MANIFEST',
  RECEIVE_MANIFEST: 'mirador/RECEIVE_MANIFEST',
  RECEIVE_MANIFEST_FAILURE: 'mirador/RECEIVE_MANIFEST_FAILURE',
  REMOVE_ERROR: 'mirador/REMOVE_ERROR',
  SET_CONFIG: 'mirador/SET_CONFIG',
  UPDATE_WORKSPACE: 'mirador/UPDATE_WORKSPACE',
  SET_WINDOW_THUMBNAIL_POSITION: 'mirador/SET_WINDOW_THUMBNAIL_POSITION',
  SET_WINDOW_VIEW_TYPE: 'mirador/SET_WINDOW_VIEW_TYPE',
  SET_WORKSPACE_ADD_VISIBILITY: 'mirador/SET_WORKSPACE_ADD_VISIBILITY',
  TOGGLE_WINDOW_SIDE_BAR: 'mirador/TOGGLE_WINDOW_SIDE_BAR',
  TOGGLE_DRAGGING: 'mirador/TOGGLE_DRAGGING',
  SET_WINDOW_SIDE_BAR_PANEL: 'mirador/SET_WINDOW_SIDE_BAR_PANEL',
  TOGGLE_ZOOM_CONTROLS: 'mirador/TOGGLE_ZOOM_CONTROLS',
  UPDATE_CONFIG: 'mirador/UPDATE_CONFIG',
  REMOVE_MANIFEST: 'mirador/REMOVE_MANIFEST',
  REQUEST_INFO_RESPONSE: 'mirador/REQUEST_INFO_RESPONSE',
  RECEIVE_INFO_RESPONSE: 'mirador/RECEIVE_INFO_RESPONSE',
  RECEIVE_DEGRADED_INFO_RESPONSE: 'mirador/RECEIVE_DEGRADED_INFO_RESPONSE',
  RECEIVE_INFO_RESPONSE_FAILURE: 'mirador/RECEIVE_INFO_RESPONSE_FAILURE',
  REMOVE_INFO_RESPONSE: 'mirador/REMOVE_INFO_RESPONSE',
  UPDATE_WORKSPACE_MOSAIC_LAYOUT: 'mirador/UPDATE_WORKSPACE_MOSAIC_LAYOUT',
  UPDATE_VIEWPORT: 'mirador/UPDATE_VIEWPORT',
  UPDATE_ELASTIC_WINDOW_LAYOUT: 'mirador/UPDATE_ELASTIC_WINDOW_LAYOUT',

  ADD_AUTHENTICATION_REQUEST: 'mirador/ADD_AUTHENTICATION_REQUEST',
  RESOLVE_AUTHENTICATION_REQUEST: 'mirador/RESOLVE_AUTHENTICATION_REQUEST',
  REQUEST_ACCESS_TOKEN: 'mirador/REQUEST_ACCESS_TOKEN',
  RECEIVE_ACCESS_TOKEN: 'mirador/RECEIVE_ACCESS_TOKEN',
  RECEIVE_ACCESS_TOKEN_FAILURE: 'mirador/RECEIVE_ACCESS_TOKEN_FAILURE',
  RESET_AUTHENTICATION_STATE: 'mirador/RESET_AUTHENTICATION_STATE',
  CLEAR_ACCESS_TOKEN_QUEUE: 'mirador/CLEAR_ACCESS_TOKEN_QUEUE',

  REQUEST_SEARCH: 'mirador/REQUEST_SEARCH',
  RECEIVE_SEARCH: 'mirador/RECEIVE_SEARCH',
  RECEIVE_SEARCH_FAILURE: 'mirador/RECEIVE_SEARCH_FAILURE',
  REMOVE_SEARCH: 'mirador/REMOVE_SEARCH',

  SELECT_CONTENT_SEARCH_ANNOTATION: 'mirador/SELECT_CONTENT_SEARCH_ANNOTATION',
  SELECT_CONTENT_SEARCH_ANNOTATIONS: 'mirador/SELECT_CONTENT_SEARCH_ANNOTATIONS',

  UPDATE_LAYERS: 'mirador/UPDATE_LAYERS',
  ADD_RESOURCE: 'mirador/ADD_RESOURCE',
  REMOVE_RESOURCE: 'mirador/REMOVE_RESOURCE',
};

export default ActionTypes;
